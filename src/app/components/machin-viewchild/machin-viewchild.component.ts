import { Component } from '@angular/core';

@Component({
  selector: 'app-machin-viewchild',
  imports: [],
  templateUrl: './machin-viewchild.component.html',
  styleUrl: './machin-viewchild.component.scss'
})
export class MachinViewchildComponent {
  getMachin(): string {
    return 'machin';
  }
}
