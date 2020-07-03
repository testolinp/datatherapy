import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'team-component',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teamContent : any = [
    {
      title: "¨La correcta generación y procesamiento de los datos y la comunicación ágil y estratégica de la evidencia científica real, nos brindan un mayor conocimiento para la toma de decisiones acertadas.¨",
      name: "EZEQUIEL LABARTHE",
      rol: "DATATHERAPY GENERAL MANAGER",
      email: "elabarthe@trydatatherapy.com"
    },
    {
      title: "¨La correcta generación y procesamiento de los datos y la comunicación ágil y estratégica de la evidencia científica real, nos brindan un mayor conocimiento para la toma de decisiones acertadas.¨",
      name: "EZEQUIEL LABARTHE",
      rol: "DATATHERAPY GENERAL MANAGER",
      email: "elabarthe@trydatatherapy.com"
    },
    {
      title: "¨La correcta generación y procesamiento de los datos y la comunicación ágil y estratégica de la evidencia científica real, nos brindan un mayor conocimiento para la toma de decisiones acertadas.¨",
      name: "EZEQUIEL LABARTHE",
      rol: "DATATHERAPY GENERAL MANAGER",
      email: "elabarthe@trydatatherapy.com"
    }
  ]

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
