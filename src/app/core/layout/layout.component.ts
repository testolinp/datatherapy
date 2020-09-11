import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  @Input() lang: string;

  constructor() {}

  ngOnInit() {}
}
