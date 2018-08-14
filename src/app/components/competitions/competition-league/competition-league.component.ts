import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  error: {
    error: any,
    message: string,
  };
  @ViewChild('scoring') scoring : ElementRef;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private competitionService: CompetitionsService,
              private loaderService: LoaderService,
              public bottomSheet: MatBottomSheet) { }

  ngOnInit() {    
    this.competitionId = this.activatedRoute.snapshot.params['id'];   
    this.getMatches();
  }

  getMatches(){
    this.loaderService.loaderValue.emit(true);    
    this.competitionService.getMatches(this.competitionId).subscribe(
      (data)=>{
        this.loaderService.loaderValue.emit(false);
        this.matches = data;
        console.log(data);
      },
      (error)=>{
        this.error = error.error;
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

  seeMatches(){
   this.scoring.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}
