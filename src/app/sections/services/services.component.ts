import { Component, OnInit, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { HomepageService } from "../../homepage.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesViewComponent implements OnInit {
  serviceHeader: any;
  servicesList: any = [];

  @Input() lang: string;

  constructor(
    private titleService: Title,
    private homepageService: HomepageService
  ) {
    this.titleService.setTitle("Datatherapy | Services");
  }

  ngOnInit() {
    this.homepageService.getServicePage("en").subscribe((data) => {
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
      this.homepageService.getServiceEvidence().subscribe((data) => {
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
      this.homepageService.getServiceRevision().subscribe((data) => {
        this.servicesList = data;
      }),
        (error) => {
          console.log(error);
        };
    }

    if (
      window.location.pathname.replace("/servicios/", "") == "redaccion-medica"
    ) {
      this.homepageService.getServiceRedaction().subscribe((data) => {
        this.servicesList = data;
      }),
        (error) => {
          console.log(error);
        };
    }
  }
}
