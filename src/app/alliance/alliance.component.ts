import { Component, OnInit, Input } from '@angular/core';
import { Alliance, Bonus } from '@app/alliances/state';

@Component({
  selector: 'ul-alliance',
  templateUrl: './alliance.component.html',
  styleUrls: ['./alliance.component.scss']
})
export class AllianceComponent implements OnInit {
  @Input() alliance: Alliance;

  constructor() { }

  ngOnInit() {
  }

  get activeBonus(): Bonus | null {
    const bonuses = this.alliance.bonuses.filter(bonus => bonus.amountRequired <= this.alliance.active);

    return bonuses.length ? bonuses[bonuses.length - 1] : null;
  }
}
