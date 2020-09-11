import { Component, OnInit, Input } from '@angular/core';
import { HomepageService } from '../../../homepage.service';

@Component({
  selector: 'team-component',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() title : string;
  @Input() description : string;

  team: any = [];

  constructor( protected homepageService : HomepageService ) { }

  ngOnInit() {
    this.homepageService.getMembers()
    .subscribe(
      (data) => {
        this.team = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  teamSlider : Object = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      },
    ]
  };

}
