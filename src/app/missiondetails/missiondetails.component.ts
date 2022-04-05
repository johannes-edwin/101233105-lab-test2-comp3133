import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { SpaceXApiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissionDetailsComponent implements OnInit {
  missions: Mission[] = [];

  index = this.activatedRoute.snapshot.params['index'];

  constructor(
    private spaceXApi: SpaceXApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadMissions();
  }

  loadMissions() {
    this.spaceXApi.getMissions().subscribe((data) => {
      this.missions = data;
    });
  }
}
