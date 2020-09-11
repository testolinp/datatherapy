import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ft-component",
  templateUrl: "./ft.component.html",
  styleUrls: ["./ft.component.scss"],
})
export class FtComponent implements OnInit {
  @Input() lang: string;

  constructor() {}

  ngOnInit() {}
}
