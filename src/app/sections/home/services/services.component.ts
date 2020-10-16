import { Component, OnInit, Input } from "@angular/core";

import { HomepageService } from "../../../homepage.service";

@Component({
  selector: "services-component",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() lang: string;

  services: any = [];

  constructor(protected homepageService: HomepageService) { }

  ngOnInit() {
    this.homepageService.getServices(this.lang).subscribe(
      (data) => {
        this.services = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  serviceSlider: Object = {
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: "unslick",
      },
      {
        breakpoint: 1024,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
}
