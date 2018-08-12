import { Routes, RouterModule } from '@angular/router'
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionLeagueComponent } from './components/competitions/competition-league/competition-league.component';
import { NgModule } from '@angular/core';

const appRoute: Routes = [
    {
        path: '',
        component: CompetitionsComponent,
    },
    {
        path:  ':id/matches',
        component: CompetitionLeagueComponent
     }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}

