import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TeamStatsComponent} from './team-stats/team-stats.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GameResultsComponent} from './game-results/game-results.component';
import {GameStatsComponent} from './game-stats/game-stats.component';
import {ModalContainerComponent} from './modal-container/modal-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamStatsComponent,
    GameResultsComponent,
    GameStatsComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
