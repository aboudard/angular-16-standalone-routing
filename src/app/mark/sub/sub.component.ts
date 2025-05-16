import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-sub',
  standalone: true,
  imports: [],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubComponent implements OnChanges {
  @Input()
  list!: string[];
  cd = inject(ChangeDetectorRef);

  refreshList(): void {
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

}
