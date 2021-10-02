import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isMobile : boolean = false;
  showAllProjects : boolean = false;

  ngOnInit() {

    if(screen.width <= 480) {     
      this.isMobile = true;
    }
  }

  goto(id :string)
  {
    console.log(id)
    console.log(document.getElementById(id));
    document.getElementById(id).scrollIntoView({ behavior: "smooth",block: "start"});
  }

  gototop()
  {
    document.getElementById("introduction").scrollIntoView({ behavior: "smooth",block: "center"});
  }

}
