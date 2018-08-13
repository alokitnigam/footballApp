import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionsService } from '../competitions.service';
import { LoaderService } from '../../../services/loader.service';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from '../../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-competition-league',
  templateUrl: './competition-league.component.html',
  styleUrls: ['./competition-league.component.css']
})
export class CompetitionLeagueComponent implements OnInit {

  matches;
  competitionId;
  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private competitionService: CompetitionsService,
              private loaderService: LoaderService,
              public bottomSheet: MatBottomSheet) { }

  ngOnInit() {    
    this.competitionId = this.activatedRoute.snapshot.params['id'];   
    let localCompetitionData = JSON.parse(localStorage.getItem('matchData')); 
    if(localCompetitionData){
      if(localCompetitionData.competition.id == this.competitionId){
        this.matches = localCompetitionData;
      }else{
        this.getMatches();
      }
    }else{
      this.getMatches();
    }
  }

  getMatches(){
    this.loaderService.loaderValue.emit(true);    
    this.competitionService.getMatches(this.competitionId).subscribe(
      (data)=>{
        this.loaderService.loaderValue.emit(false);
        localStorage.setItem('matchData', JSON.stringify(data));
        this.matches = data;
        console.log(data);
      }
    )
  }

  seeMatchDetail(data){
    let matchDetail = {
      data: data,
      type: 'matchDetail'
    };
    this.bottomSheet.open(BottomSheetComponent, {
      data: matchDetail
    });
  }
}
