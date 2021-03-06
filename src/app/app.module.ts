import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { IntialSlicerPipe } from './pipes/intial-slicer.pipe';
import { CompetitionLeagueComponent } from './components/competitions/competition-league/competition-league.component';
import { BackgroundSetDirective } from './directives/background-set.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { AppRoutingModule } from './app.routing';
import { ScoreClassDirective } from './directives/score-class.directive';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompetitionsComponent,
    IntialSlicerPipe,
    CompetitionLeagueComponent,
    BackgroundSetDirective,
    LoaderComponent,
    ScoreClassDirective,
    LeagueTableComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatBottomSheetModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [BottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
