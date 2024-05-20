import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <app-side-bar></app-side-bar>
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'routerlinkactive-testing';
}
