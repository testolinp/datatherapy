import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'publish-component',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  publishContent : any = [
    {
      title: "What is the best denominator with which to measure antibiotic consumption?",
      description: "<p><strong>Authors:</strong> Curcio, D; Fernández, F<br><strong>Journal:</strong> Clin Microbiol Infect. 2006 Aug;12(8):701-4. <br><strong>Year:</strong> 2006</p>"
    },
    {
      title: "What is the best denominator with which to measure antibiotic consumption?",
      description: "<p><strong>Authors:</strong> Curcio, D; Fernández, F<br><strong>Journal:</strong> Clin Microbiol Infect. 2006 Aug;12(8):701-4. <br><strong>Year:</strong> 2006</p>"
    },
    {
      title: "What is the best denominator with which to measure antibiotic consumption?",
      description: "<p><strong>Authors:</strong> Curcio, D; Fernández, F<br><strong>Journal:</strong> Clin Microbiol Infect. 2006 Aug;12(8):701-4. <br><strong>Year:</strong> 2006</p>"
    }
  ]

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
