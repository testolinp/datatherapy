import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesViewComponent implements OnInit {

  constructor( private titleService : Title) {
    this.titleService.setTitle("Datatherapy | Servicios");
  }

  ngOnInit() {
  }

}
