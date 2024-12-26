import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dropdown">
      <button
        class="btn btn-secondary rounded-pill d-flex gap-1 align-items-center bg-white text-dark fw-semibold border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="bi bi-globe"></i>
        <span style="font-size: 14px;">{{ currentLang }}</span>
        <i class="bi bi-chevron-down"></i>
      </button>
      <ul class="dropdown-menu">
        <li *ngFor="let lang of languages">
          <a
            class="dropdown-item"
            [class.active]="lang === currentLang"
            (click)="switchLanguage(lang)"
            href="javascript:void(0)"
          >
            {{ lang }}
          </a>
        </li>
      </ul>
    </div>
  `,
})
export class LanguageSwitcherComponent {
  currentLang = 'EN';
  languages = ['EN', 'AR'];

  switchLanguage(lang: string) {
    this.currentLang = lang;
    // Implement language switching logic here
  }
}
