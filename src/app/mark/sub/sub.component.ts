import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnChanges,
  SimpleChanges,
  input,
  effect,
  Input,
  OnInit
} from '@angular/core';

@Component({
    selector: 'app-sub',
    imports: [],
    templateUrl: './sub.component.html',
    styleUrl: './sub.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubComponent implements OnInit {

  @Input()
  test!: string;

  readonly list = input.required<string[]>();
  cd = inject(ChangeDetectorRef);

  refreshList(): void {
    this.cd.detectChanges();
  }

  constructor() {
    console.log('test', this.test);
    effect(() => {
      console.log(`The current list is: ${this.list()}`);
    });
  }

  ngOnInit(): void {
    console.log('test init', this.list());
  }

}
