import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
  ],
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        </li>
        <li>
          <a routerLink="/edit" routerLinkActive="active">Edit</a>
        </li>
      </ul>
    </nav>
  `,
  styles: `
    .active::before {
      content: '👉 ';
    }
  `
})
export class SideBarComponent {

}
