import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-stuff',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './stuff.component.html',
  styleUrl: './stuff.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: StuffComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: StuffComponent
    }
  ],
})
export class StuffComponent implements ControlValueAccessor, Validator {

  rangeValue = 0;

  onChange: (value: number) => void = () => { };
  onTouched: () => void = () => { };

  writeValue(value: number): void {
    this.rangeValue = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  handleClick(value: number) {
    this.rangeValue = value;
    this.onChange(value);
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value < 2) {
      return {
        invalidRange: {
          min: 2,
          actual: control.value,
        }
      }
    }
    return null;
  }

}
