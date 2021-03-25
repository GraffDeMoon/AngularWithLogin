import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent {

  @Output() asSuccessfulAuthorization = new EventEmitter();

  logOut() {
    this.asSuccessfulAuthorization.emit();
  }
}
