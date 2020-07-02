import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toogle-service-component',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss']
})
export class ToogleComponent implements OnInit {

  public showContent : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toogle() {
    this.showContent = !this.showContent;
  }

}
