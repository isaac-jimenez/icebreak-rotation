import { Component } from '@angular/core';

interface Participant {
  id: number;
  name: string;
  tablesVisited: number[];
  interactions: number[];
}

interface Moderator {
  id: number;
  name: string;
  topic: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
}) export class AppComponent  {
  participantArray: Participant[] = [];
  moderatorArray: Moderator[] = [];
  groups: number;
  round: number;

  constructor() {
    this.groups = 0;
    this.round = 0;
  }

  public addModerator(): void {
    const arrayLength = this.moderatorArray.length ? this.moderatorArray.length : 0;
    const id = arrayLength === 0 ? 0 : this.moderatorArray[arrayLength - 1].id + 1;
    this.moderatorArray.push({
      id: id,
      name: null,
      topic: null
    });
  }

  public addParticipant(): void {
    const arrayLength = this.participantArray.length ? this.participantArray.length : 0;
    const id = arrayLength === 0 ? 0 : this.participantArray[arrayLength - 1].id + 1;
    this.participantArray.push({
      id: id,
      name: null,
      interactions: [],
      tablesVisited: []
    });
  }

  public removeModerator(modIndex: number): void {
    this.moderatorArray.splice(modIndex, 1);
  }

  public removeParticipant(participantIndex: number): void {
    this.participantArray.splice(participantIndex, 1);
  }

  public nextRound(): void {
    console.log(this.moderatorArray);
    console.log(this.participantArray);
    const modLength = this.moderatorArray.length;
    const halfLength = (this.participantArray.length / 2);
    this.groups = (halfLength <= modLength) ? halfLength : modLength;

    if (this.participantArray)
    if ((this.participantArray.length % this.moderatorArray.length) === 0) {}
    if(this.round === 0) {
      
    }
    this.round++;
  }
}
