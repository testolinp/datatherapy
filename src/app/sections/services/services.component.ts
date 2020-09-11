import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HomepageService } from '../../homepage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesViewComponent implements OnInit {

  serviceHeader: any;
  servicesList: any = [];

  constructor( private titleService : Title, private homepageService : HomepageService) {
    this.titleService.setTitle("Datatherapy | Servicios");
  }

  ngOnInit() {
    this.homepageService.getServicePage()
    .subscribe((data) => {
      this.serviceHeader = data[0];
    }),
    (error) => {
      console.log(error)
    }

    if(window.location.pathname.replace('/servicios/', '') == 'evidencia-del-mundo-real') {
      this.homepageService.getServiceEvidence()
      .subscribe((data) => {
        this.servicesList = data;
      }),
      (error) => {
        console.log(error)
      }
    }

    if(window.location.pathname.replace('/servicios/', '') == 'revisiones-sistematicas-y-meta-analisis') {
      this.homepageService.getServiceRevision()
      .subscribe((data) => {
        this.servicesList = data;
      }),
      (error) => {
        console.log(error)
      }
    }

    if(window.location.pathname.replace('/servicios/', '') == 'redaccion-medica') {
      this.homepageService.getServiceRedaction()
      .subscribe((data) => {
        this.servicesList = data;
      }),
      (error) => {
        console.log(error)
      }
    }
  }

}
