import { Component, ElementRef, HostListener, input, output, signal } from '@angular/core';

export interface MultiSelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-multi-select-filter',
  standalone: true,
  templateUrl: './multi-select-filter.html',
  styleUrl: './multi-select-filter.sass',
})
export class MultiSelectFilter {
  readonly id = input.required<string>();
  readonly options = input.required<MultiSelectOption[]>();
  readonly selected = input<string[]>([]);
  readonly label = input.required<string>();
  readonly placeholder = input.required<string>();
  readonly selectionChange = output<string[]>();
  readonly isOpen = signal(false);

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  selectedLabel(): string {
    const selectedValues = new Set(this.selected());
    const labels = this.options()
      .filter(option => selectedValues.has(option.value))
      .map(option => option.label);

    return labels.length ? labels.join(', ') : this.placeholder();
  }

  toggleOption(value: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const current = this.selected();
    const next = checked
      ? [...new Set([...current, value])]
      : current.filter(selectedValue => selectedValue !== value);

    this.selectionChange.emit(next);
  }

  onFocusOut(event: FocusEvent): void {
    const nextTarget = event.relatedTarget as Node | null;
    if (!nextTarget || !this.elementRef.nativeElement.contains(nextTarget)) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.isOpen.set(false);
  }
}
