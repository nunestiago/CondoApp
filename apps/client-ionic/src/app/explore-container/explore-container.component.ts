import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrl: 'explore-container.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
