import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isMobile : boolean = false;

  ngOnInit() {

    if(screen.width <= 480) {     
      this.isMobile = true;
    }
  }

  goto(id :string)
  {
    // console.log(id)
    // console.log(document.getElementById(id));
    document.getElementById(id).scrollIntoView({ behavior: "smooth",block: "start"});
    this.closeNav()
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
