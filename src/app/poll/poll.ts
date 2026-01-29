import { Component } from '@angular/core';
import { PollService } from '../poll';

@Component({
  selector: 'app-poll',
  imports: [],
  templateUrl: './poll.html',
  styleUrl: './poll.css',
})
export class Poll {

  //contructor
  constructor(private pollService: PollService){
    
  }

  //va obtener todas nuestras encuentas del backend
  loadPolls(){
      this.pollService.getPoll
  }

}
