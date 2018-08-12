import { Injectable } from '@angular/core';
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

    baseUrl = 'http://api.football-data.org/v2/'
    
    getCompetitions(){
        return this.http.get<CompetitionsModel>(`${this.baseUrl}competitions/`, httpOptions);
    }

    getMatches(){
        return this.http.get<any>(`${this.baseUrl}competitions/${2021}/matches`, httpOptions);
    }

    getLeagueTable(){
        return this.http.get<any>(`${this.baseUrl}competitions/${2021}/standings`, httpOptions);
    }

}