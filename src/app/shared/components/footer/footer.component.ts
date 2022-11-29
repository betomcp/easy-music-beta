import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'em-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isProfile: boolean = false;
  isHome: boolean = false;
  isMatch: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    let url = this.router.url;

    if(url == "/"){
      url = "/home"
    }



    switch(url){
      case "/home":
        this.isHome = true;
        break;
      case "/profile":
        this.isProfile = true;
        break;
      case "easymatch/":
        this.isMatch = true;
    }
  }

  goToProfile(){
    this.router.navigate(['/profile']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
