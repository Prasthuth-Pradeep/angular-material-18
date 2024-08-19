import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatAnchor, MatFabButton, MatFabAnchor, MatMiniFabButton, MatMiniFabAnchor, MatIconButton, MatIconAnchor } from '@angular/material/button';
import {MatCheckbox} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    MatFabButton,
    MatFabAnchor,
    MatMiniFabButton,
    MatMiniFabAnchor,
    MatIconButton,
    MatIconAnchor,
    MatIcon,
    MatTooltip,
    MatCheckbox,
    FormsModule,
    MatDividerModule
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  isDisabled = false;
  clickCounter = 0;
  toggleDisable = false;
  tooltipText = 'This is a button tooltip!';
  disabledInteractive = false;
}
