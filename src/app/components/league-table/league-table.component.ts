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
  @Input('compID') compID;

  constructor(private competitionService: CompetitionsService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    let localLeagueTable = JSON.parse(localStorage.getItem('leagueTable'));
    console.log('localLeagueTable', localLeagueTable);
    if(localLeagueTable){
      if(localLeagueTable.compId == this.compID){
        this.leagueTable = localLeagueTable.leagueTableData;
      }else{
        this.getLeagueTable();
      }
    }else{
      this.getLeagueTable();
    }
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

        localStorage.setItem('leagueTable', JSON.stringify(leagueTableObj))
      }
    )
  }

}
