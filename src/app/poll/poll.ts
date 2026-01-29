import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll';
import { Polly } from '../poll.models';

@Component({
  selector: 'app-poll',
  imports: [],
  templateUrl: './poll.html',
  styleUrl: './poll.css',
})
export class Poll implements OnInit{

  polls: Polly[] = [];


  //contructor
  constructor(private pollService: PollService){
    
  }


  ngOnInit(): void {
    this.loadPolls();
  }

  //va obtener todas nuestras encuentas del backend
  loadPolls(){
      this.pollService.getPolls().subscribe({
        next: (data) => {
          this.polls = data;
        },
        error: (error) => {
          console.error("Error fetching polls: ", error)
        }
      });
  }

}
