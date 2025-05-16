import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StuffComponent } from './stuff/stuff.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [FormsModule, StuffComponent, JsonPipe],
})
export class HomeComponent {
  model = {
    name: null, range: 4
  }
  onSubmit(formData: any) {
    console.log('Etat model', this.model);
    console.log('Form data', formData.value);
  }
}
