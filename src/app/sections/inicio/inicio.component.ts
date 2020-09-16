import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { HomepageService } from "../../homepage.service";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
})
export class InicioComponent implements OnInit {
  homepage: any = [];

  constructor(
    private titleService: Title,
    protected homepageService: HomepageService
  ) {
    this.titleService.setTitle("Datatherapy");
  }

  ngOnInit() {
    this.homepageService.getHomepage("es").subscribe(
      (data) => {
        this.homepage = data[0].acf;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
