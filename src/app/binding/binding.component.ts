import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { DynComponent } from './dyn/dyn.component';

@Component({
  selector: 'app-binding',
  imports: [ChildComponent, FormsModule, DynComponent, JsonPipe],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  count = signal(0);
  post = httpResource({
    url: `http://localhost:3000/posts/${this.count()}`,
    method: 'GET',
  });

  setCount() {
    this.count.set(this.count() + 1);
  }
  parentFlag = signal(true);
  changeFlag() {
    this.parentFlag.set(!this.parentFlag());
  }
}
