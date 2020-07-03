import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutContent : any = [
    {
      title: "Profesionalismo",
      description: "Seriedad y transparencia en la aplicación del método científico para el análisis de datos cumpliendo con los tiempos y metas comprometidas."
    },
    {
      title: "Profesionalismo",
      description: "Seriedad y transparencia en la aplicación del método científico para el análisis de datos cumpliendo con los tiempos y metas comprometidas."
    },
    {
      title: "Servicios de Redacción Médica",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "Profesionalismo",
      description: "Seriedad y transparencia en la aplicación del método científico para el análisis de datos cumpliendo con los tiempos y metas comprometidas."
    }
  ]

  aboutSlider : Object = {
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

  constructor() { }

  ngOnInit() {
  }
}
