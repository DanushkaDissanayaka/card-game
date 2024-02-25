import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { MainComponent } from './components/main/main.component';
import { CardComponent } from './components/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { GameOverComponent } from './components/game-over/game-over.component';


@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    GameOverComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
