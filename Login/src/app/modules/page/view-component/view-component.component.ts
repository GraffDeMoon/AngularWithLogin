import { Component } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.sass']
})
export class ViewComponentComponent {

  login = false;

  Authorization() {
    this.login = !this.login;
  }
}
