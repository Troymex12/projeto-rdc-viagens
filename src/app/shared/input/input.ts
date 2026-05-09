import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'rdc-input',
  standalone: true,
  imports: [IconComponent, FormsModule],
  template: `
    <div class="input-wrap">
      @if (label) { <label class="input-label">{{ label }}</label> }
      <div class="input-inner" [class.focused]="focused" [class.has-error]="error">
        @if (leadingIcon) {
          <rdc-icon class="input-icon" [name]="leadingIcon" [size]="18" [color]="iconColor" />
        }
        <input
          [type]="type"
          [placeholder]="placeholder"
          [value]="value"
          [class.has-icon]="!!leadingIcon"
          (input)="onInput($event)"
          (focus)="focused = true"
          (blur)="focused = false"
        />
      </div>
      @if (hint && !error) { <span class="input-hint">{{ hint }}</span> }
      @if (error) { <span class="input-error">{{ error }}</span> }
    </div>
  `,
  styles: [`
    .input-wrap {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .input-label {
      font-size: 13px;
      font-weight: 500;
      color: #1A1A1A;
    }
    .input-inner {
      position: relative;
      display: flex;
      align-items: center;
    }
    .input-icon {
      position: absolute;
      left: 14px;
      pointer-events: none;
    }
    input {
      padding: 12px 14px;
      border: 1.5px solid #3B82F6;
      border-radius: 12px;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      color: #1A1A1A;
      background: #fff;
      outline: none;
      width: 100%;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    input.has-icon { padding-left: 42px; }
    .input-inner.focused input {
      border-color: #1E40AF;
      box-shadow: 0 0 15px rgba(30, 64, 175, 0.18);
    }
    .input-inner.has-error input { border-color: #EF4444; }
    .input-hint { font-size: 12px; color: #6B7280; }
    .input-error { font-size: 12px; color: #EF4444; }
  `],
})
export class InputComponent {
  @Input() label = '';
  @Input() hint = '';
  @Input() error = '';
  @Input() leadingIcon = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() iconColor = '#3B82F6';
  @Output() valueChange = new EventEmitter<string>();

  focused = false;

  onInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
