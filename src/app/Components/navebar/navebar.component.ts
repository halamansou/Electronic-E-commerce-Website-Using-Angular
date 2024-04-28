import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navebar',
  standalone: true,
  imports:[ RouterLink, RouterLinkActive],
  templateUrl: './navebar.component.html',
  styleUrl: './navebar.component.css'
})
export class NavebarComponent {

}
