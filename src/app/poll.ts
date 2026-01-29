import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Polly } from './poll.models';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  private baseUrl = 'http://localhost:8080/api/polls'

  constructor(private http: HttpClient){}

  createPoll(poll: Polly): Observable<Polly>{
    return this.http.post<Polly>(this.baseUrl, poll);
  }

  getPolls(): Observable<Polly[]>{
    return this.http.get<Polly[]>(this.baseUrl);
  }

  vote(pollId: number, optionIndex: number): Observable<void>{
    const url = `${this.baseUrl}/vote`;
    return this.http.post<void>(url, {pollId, optionIndex});
  }

}

