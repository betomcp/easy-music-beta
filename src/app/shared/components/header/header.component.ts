import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'em-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

}
