import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpaceXApiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spaceXApi: SpaceXApiService) {}

  ngOnInit() {
    this.loadMissions();
  }

  loadMissions() {
    this.spaceXApi.getMissions().subscribe((data) => {
      this.missions = data;
    });
  }
}
