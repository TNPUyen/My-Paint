import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BoardComponent } from './components/board/board.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    BoardComponent,
    HomeNavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
