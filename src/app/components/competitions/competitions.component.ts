import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from './competitions.service';
import { CompetitionsModel } from './competitions.model';
import * as _ from 'lodash';
import { LoaderService } from '../../services/loader.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css'],
  providers: []
})
export class CompetitionsComponent implements OnInit {

  constructor(public competitionsService: CompetitionsService, 
              private loaderService: LoaderService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
  
  }

  competitions;
  
  freeId = ['2021','2055', '2013', '2016', '2001', '2018', '2015', '2002', '2019', '2003', '2017', '2014', '2000']


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
      }
    )
  }

  openLeague(competitionId){
    this.router.navigate(['', `${competitionId}`, 'matches'], {
      relativeTo: this.activatedRoute
    });
  }
}
