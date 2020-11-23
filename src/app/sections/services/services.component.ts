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
    }),
      (error) => {
        console.log(error);
      };

    if (
      window.location.pathname.replace("/servicios/", "") ==
      "evidencia-del-mundo-real" || window.location.pathname.replace("/services/", "") ==
      "evidence-from-the-real-world"
    ) {
      this.homepageService.getServiceEvidence("en").subscribe((data) => {
        this.servicesList = data;
      }),
        (error) => {
          console.log(error);
        };
    }

    if (
      window.location.pathname.replace("/servicios/", "") ==
      "revisiones-sistematicas-y-meta-analisis" || window.location.pathname.replace("/services/", "") ==
      "systematic-reviews-and-meta-analysis"
    ) {
      this.homepageService.getServiceRevision("en").subscribe((data) => {
        this.servicesList = data;
      }),
        (error) => {
          console.log(error);
        };
    }

    if (
      window.location.pathname.replace("/servicios/", "") == "redaccion-medica" || window.location.pathname.replace("/services/", "") ==
      "medical-writing"
    ) {
      this.homepageService.getServiceRedaction("en").subscribe((data) => {
        this.servicesList = data;
      }),
        (error) => {
          console.log(error);
        };
    }
  }
}
