import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NbaService} from '../nba.service';
import {Game, Team} from '../data.models';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css']
})
export class GameResultsComponent {

  team?: Team;
  games$?: Observable<Game[]>;
  day$: Observable<number>;

  constructor(private activatedRoute: ActivatedRoute, private nbaService: NbaService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.team = this.nbaService.getTrackedTeams().find(team => team.abbreviation === paramMap.get("teamAbbr"));
      if (this.team) {
        let day = Number(paramMap.get("day"));
        this.games$ = this.nbaService.getLastResults(this.team, day);
        this.day$ = of(day);
      }
    })
  }

}
