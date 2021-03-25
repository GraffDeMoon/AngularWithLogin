import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './page/view-component/view-component.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewComponentComponent, 
    AuthorizationComponent, 
    PortfolioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthorizationComponent,
    PortfolioComponent,
    ViewComponentComponent
  ]
})
export class ModulesModule { }
