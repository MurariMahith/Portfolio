import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isMobile : boolean = false;

  resumeURL = "https://firebasestorage.googleapis.com/v0/b/mahith-portfolio.appspot.com/o/Mahith_Murari_Resume_apr18.pdf?alt=media&token=4875186c-5309-49e9-8133-ae99e100ad2a";

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
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
