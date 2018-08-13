import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CompetitionsModel } from "./competitions.model";

const httpOptions = {
    headers: new HttpHeaders({
        'X-Auth-Token': '3fb60964f74a45cc9adad90f825f738c'
    })
};

@Injectable()

export class CompetitionsService{
    constructor(public http: HttpClient){
    }

    baseUrl = 'http://api.football-data.org/v2/';

    competitionData;

    
    getCompetitions(){
        return this.http.get<CompetitionsModel>(`${this.baseUrl}competitions/`, httpOptions);
    }

    getMatches(compId){
        return this.http.get<any>(`${this.baseUrl}competitions/${compId}/matches`, httpOptions);
    }

    getLeagueTable(compId){
        return this.http.get<any>(`${this.baseUrl}competitions/${compId}/standings`, httpOptions);
    }

 }