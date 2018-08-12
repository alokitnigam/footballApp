import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionsService } from '../competitions.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-competition-league',
  templateUrl: './competition-league.component.html',
  styleUrls: ['./competition-league.component.css']
})
export class CompetitionLeagueComponent implements OnInit {

  matches;
  leagueTable = [];
  
  displayedColumns: string[] = ['position', 'teamLogo','team', 'played', 'won','lost', 'draw', 'pointes'];

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private competitionService: CompetitionsService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.getMatches();
    this.getLeagueTable();
  }

  getMatches(){
    this.loaderService.loaderValue.emit(true);
    this.competitionService.getMatches().subscribe(
      (data)=>{
        this.loaderService.loaderValue.emit(false);
        this.matches = data;
        console.log(data);
      }
    )
  }

  getLeagueTable(){
    this.loaderService.loaderValue.emit(true);
    this.competitionService.getLeagueTable().subscribe(
      (data)=>{
        this.loaderService.loaderValue.emit(false);
        let dataArray = data;
        for (let i = 0; i < data.standings.length; i++) {
          const element = data.standings[i]['type'];
          if(element === "TOTAL"){
            this.leagueTable = data.standings[i].table;
          }
        }
        console.log('main data', this.leagueTable);
      }
    )
  }

}
