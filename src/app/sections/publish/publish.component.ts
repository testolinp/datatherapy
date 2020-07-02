import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { PublishService } from './publish.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishViewComponent implements OnInit {

  publishedNotes : any = [];
  publishedHeader : Object = {};
  errorMessage = '';

  constructor( private publishService : PublishService, private titleService:Title) {
    this.titleService.setTitle("Datatherapy | Publicaciones");
  }

  ngOnInit(): void {
    this.publishService.getHeader().subscribe({
      next: header => {
        this.publishedHeader = header;
      },
      error: err => this.errorMessage = err
    })

    this.publishService.getPublish().subscribe({
      next: publish => {
        this.publishedNotes = publish;
      },
      error: err => this.errorMessage = err
    })
  }

}
