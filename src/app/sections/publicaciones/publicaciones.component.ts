import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { PublishService } from "../publish/publish.service";

@Component({
  selector: "app-publicaciones",
  templateUrl: "./publicaciones.component.html",
  styleUrls: ["./publicaciones.component.scss"],
})
export class PublicacionesComponent implements OnInit {
  publishedNotes: any = [];
  publishedHeader: Object = {};
  errorMessage = "";

  constructor(
    private publishService: PublishService,
    private titleService: Title
  ) {
    this.titleService.setTitle("Datatherapy | Publicaciones");
  }

  ngOnInit(): void {
    this.publishService.getHeader("es").subscribe({
      next: (header) => {
        this.publishedHeader = header;
      },
      error: (err) => (this.errorMessage = err),
    });

    this.publishService.getPublish().subscribe({
      next: (publish) => {
        this.publishedNotes = publish;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
