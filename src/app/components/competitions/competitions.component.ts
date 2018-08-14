import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CompetitionsService } from './competitions.service';
import { LoaderService } from '../../services/loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css'],
  providers: []
})
export class CompetitionsComponent implements OnInit {

  competitions;
  error: {
    error: any,
    message: string,
  }

  constructor(public competitionsService: CompetitionsService, 
              private loaderService: LoaderService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public bottomSheet: MatBottomSheet) { 
  
  }
  
  freeId = ['2021', '2013', '2016', '2001', '2018', '2015', '2002', '2019', '2003', '2017', '2014', '2000'];


  ngOnInit() {
    this.getCompetitions();
  }


  getCompetitions(){
    this.loaderService.loaderValue.emit(true);
    this.competitionsService.getCompetitions().subscribe(
      (data) => {
        //TODO: SEE THE LOADER CSS
        this.loaderService.loaderValue.emit(false);
        let compArray = [...data.competitions];        
        this.competitions = compArray; 
        let freeComp = this.competitions.filter((data)=>{
          for (let i = 0; i < this.freeId.length; i++) {
            const element = this.freeId[i];
            if(data.id == element){
              return data;
            }
          }  
        })     
        this.competitions = freeComp;
      },
      (error)=>{
        this.error = error.error;
        console.log(error);
      }
    )
  }

  openLeague(competitionId){
    this.router.navigate(['', `${competitionId}`, 'matches'], {
      relativeTo: this.activatedRoute
    });
  }

  openLeagueTable(competitionId){
    let dataObj = {
      id: competitionId,
      type: 'table'
    }
    this.bottomSheet.open(BottomSheetComponent, {
      data: dataObj
    })
  }
}
