import { Component, input } from '@angular/core';

@Component({
  selector: 'app-test-input',
  imports: [],
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.scss'
})
export class TestInputComponent {
  readonly data = input<string>('');
}
