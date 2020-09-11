import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "hd-component",
  templateUrl: "./hd.component.html",
  styleUrls: ["./hd.component.scss"],
})
export class HdComponent implements OnInit {
  @Input() lang: string;
  showMenu: boolean = false;

  closeMenu() {
    this.showMenu = false;
  }

  constructor() {}

  ngOnInit() {}
}
