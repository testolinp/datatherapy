import { Component, Input, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { HomepageService } from "../../homepage.service";

@Component({
  selector: "app-servicios",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.scss"],
})
export class ServiciosComponent implements OnInit {
  serviceHeader: any;
  servicesList: any = [];

  @Input() lang: string;

  constructor(
    private titleService: Title,
    private homepageService: HomepageService
  ) {
    this.titleService.setTitle("Datatherapy | Servicios");
  }

  ngOnInit() {
    this.homepageService.getServicePage("es").subscribe((data) => {
      this.serviceHeader = data[0];
      console.log('this.serviceHeader', this.serviceHeader)
    }),
      (error) => {
        console.log(error);
      };

    if (
      window.location.pathname.replace("/servicios/", "") ==
      "evidencia-del-mundo-real"
    ) {
      this.homepageService.getServiceEvidence("es").subscribe((data) => {
        this.servicesList = data;
      }),
        (error) => {
          console.log(error);
        };
    }

    if (
      window.location.pathname.replace("/servicios/", "") ==
      "revisiones-sistematicas-y-meta-analisis"
    ) {
      this.homepageService.getServiceRevision("es").subscribe((data) => {
        this.servicesList = data;
      }),
        (error) => {
          console.log(error);
        };
    }

    if (
      window.location.pathname.replace("/servicios/", "") == "redaccion-medica"
    ) {
      this.homepageService.getServiceRedaction("es").subscribe((data) => {
        this.servicesList = data;
      }),
        (error) => {
          console.log(error);
        };
    }
  }
}
