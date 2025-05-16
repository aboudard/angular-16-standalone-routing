import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubComponent } from './sub/sub.component';

@Component({
    selector: 'app-mark',
    imports: [SubComponent],
    templateUrl: './mark.component.html',
    styleUrl: './mark.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkComponent {

  aquaticCreatures = ['shark', 'dolphin', 'octopus'];

  addAquaticCreature(newAquaticCreature: string) {
    this.aquaticCreatures = [ ...this.aquaticCreatures, newAquaticCreature ];
  }

}
