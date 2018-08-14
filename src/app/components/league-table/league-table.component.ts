import { Component, OnInit, Input } from '@angular/core';
import { CompetitionsService } from '../competitions/competitions.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'teamLogo','team', 'played', 'won','lost', 'draw', 'pointes'];
  leagueTable: any;
  error: {
    error: any,
    message: string,
  };
  @Input('compID') compID;

  constructor(private competitionService: CompetitionsService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.getLeagueTable();
  }

  getLeagueTable(){
    this.loaderService.loaderValue.emit(true);
    this.competitionService.getLeagueTable(this.compID).subscribe(
      (data)=>{
        this.loaderService.loaderValue.emit(false);
        let dataArray = data;
        for (let i = 0; i < data.standings.length; i++) {
          const element = data.standings[i]['type'];
          if(element === "TOTAL"){
            this.leagueTable = data.standings[i].table;
          }
        }
        let leagueTableObj = {
          leagueTableData: this.leagueTable,
          compId: data.competition.id
        }
      },
      (error)=>{
        // this.error = error.r;
        this.loaderService.loaderValue.emit(false);
        console.log('Ye error hai bhai', error.error);
        this.error = error.error;
      }
    )
  }

}
