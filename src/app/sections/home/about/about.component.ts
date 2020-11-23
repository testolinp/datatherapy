import { Component, OnInit, Input } from "@angular/core";
import { HomepageService } from "../../../homepage.service";

@Component({
  selector: "about-component",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() values;
  @Input() knows;
  @Input() lang: string;

  aboutSlider: Object = {
    dots: true,
    infinite: false,
    autoplay: true,
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

  constructor(protected homepageService: HomepageService) { }

  ngOnInit() {
    this.homepageService.getValues(this.lang).subscribe(
      (data) => {
        this.values = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.homepageService.getKnows(this.lang).subscribe(
      (data) => {
        this.knows = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
