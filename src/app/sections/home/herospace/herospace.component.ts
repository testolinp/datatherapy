import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'herospace-component',
  templateUrl: './herospace.component.html',
  styleUrls: ['./herospace.component.scss']
})
export class HerospaceComponent implements OnInit {

  @Input() title : string;
  @Input() shortcode : string;
  @Input() description : string;

  constructor() { }

  ngOnInit() {
  }

}
