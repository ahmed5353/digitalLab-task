import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from './language-switcher.component';

@Component({
  selector: 'app-nav-actions',
  imports: [LanguageSwitcherComponent],
  styleUrl: './navbar.component.scss',
  template: ` <div class="d-flex gap-3 align-items-center">
    <button class="btn rounded-circle bg-white">
      <i class="bi bi-person-arms-up"></i>
    </button>
    <app-language-switcher></app-language-switcher>
    <button
      type="button"
      class="get-started-btn py-2 px-4 rounded-pill fw-semibold"
    >
      Get started
    </button>
  </div>`,
})
export class NavActionsComponent {}
