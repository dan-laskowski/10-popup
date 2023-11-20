import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import {
  state,
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      opacity: 1,
      display: 'flex',
      visibility: 'visible',
    })
  ),
  state('close', style({ opacity: 0, display: 'none', visibility: 'hidden' })),
  transition('open => close', [animate('0.2s ease-out')]),
  transition('close => open', [animate('0.2s ease-in')]),
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PopupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut],
})
export class AppComponent {
  title = '10-popup';

  isOpen: boolean = true;

  onOpenModal() {
    this.isOpen = true;
  }

  onCloseModal() {
    this.isOpen = false;
  }
}
