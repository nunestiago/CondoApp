import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, IonicModule.forRoot(), LoginPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.loginForm.value).toEqual({ email: '', password: '' });
  });

  it('should validate email', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBeFalsy();
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('should validate password length', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('short');
    expect(passwordControl?.valid).toBeFalsy();
    passwordControl?.setValue('validpassword');
    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should call onLogin when form is valid', () => {
    spyOn(component, 'onLogin');
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'password123',
    });
    component.onLogin();
    expect(component.onLogin).toHaveBeenCalled();
  });

  it('should not call onLogin when form is invalid', () => {
    spyOn(component, 'onLogin');
    component.loginForm.setValue({ email: 'invalid-email', password: 'short' });
    component.onLogin();
    expect(component.onLogin).not.toHaveBeenCalled();
  });
});
