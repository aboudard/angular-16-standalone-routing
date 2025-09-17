import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  flag = model<boolean>();
  changeChildFlag() {
    this.flag.set(!this.flag());
  }
}
