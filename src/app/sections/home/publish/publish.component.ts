import { Component, OnInit, Input } from '@angular/core';

import { HomepageService } from '../../../homepage.service';

@Component({
  selector: 'publish-component',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  @Input() title : string;
  @Input() description : string;

  publishings : any = [];
  _publishing : any = [];

  constructor( protected homepageService : HomepageService) { }

  ngOnInit() {
    this.homepageService.getPublishings()
    .subscribe(
      (data) => {
        this._publishing = data;
        this.publishings = this._publishing.filter((publish) => publish.acf.highlight);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  publishSlider : Object = {
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: "unslick"
      },
      {
        breakpoint: 1024,
        settings: "unslick"
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

}
