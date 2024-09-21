import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonInputPasswordToggle
} from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
interface LoginForm {
  email: FormControl<string>;
  password?: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrl: 'login.page.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonInput,
    IonInputPasswordToggle,
    IonButton,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
    TranslocoModule
  ]
})
export class LoginPage {
  errorMessage = '';
  isLoading = false;
  loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(80)]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(8), Validators.maxLength(80)]
    })
  });

  onLogin() {
    if (this.loginForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    const { email, password } = this.loginForm.value;
    console.log('Login attempt', { email, password });
    this.isLoading = false;
  }

  getErrorMessage() {
    if (this.loginForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.controls.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
}
