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
  resumeURL = "https://firebasestorage.googleapis.com/v0/b/mahith-portfolio.appspot.com/o/Mahith_Murari_Resume_apr18.pdf?alt=media&token=4875186c-5309-49e9-8133-ae99e100ad2a";

  introText1 = "Welcome to my portfolio! My name is Murari Mahith, and I'm a software developer with a passion for combining my skills with my interests. I am currently pursuing a Master's degree in Computer Science at the University of Florida, Gainesville, USA. I hold an Integrated M.Tech degree in Software Engineering from VIT University, Vellore, and previously worked at Powerschool group LLC as an Associate Software Engineer - 2 from August 2020 to July 2022. Currently, I am an upcoming summer intern at Infotech Inc, Gainesville, in the AASHTOWare product division.";

  introText2 = "I specialize in designing and developing complex backends and well-designed frontends that are both aesthetically pleasing and highly functional. In addition to my work in the software industry, I also enjoy combining my interests and skillset to build great products. One of my most successful projects is Suggesto, a movie-recommending social media application (PWA) that has received over 1600 downloads on the Google Play Store. Please take a look at my projects and experience to learn more about my skills and interests. Thank you for visiting my portfolio.";

  UFtext = "I am currently enrolled in the Master of Science in Computer Science program at the University of Florida in Gainesville, Florida. Expected to graduate in May 2024. Open for co-op roles in Fall'23 and Spring'24.";

  PStext = "I began my journey at Powerschool as an Engineering intern in August 2020 and later continued as a full-time employee from June 2021 to July 2022. During this period, I was involved in the development of the Enrollment product of Powerschool, utilizing a tech stack that included Angular, Asp.Net MVC, WebApi, GitLab, Sourcetree, and Sql server, among others.";

  VITtext = "I am a graduate of Vellore Institute of Technology, also known as VIT University, located in Vellore, India. I completed an Integrated M.Tech program in Software Engineering with a CGPA of 8.58. I am deeply grateful for the valuable education and experiences I gained during my time at VIT, as well as the opportunities to work alongside exceptional professors and colleagues.";

  suggestoText = "Suggesto is a movie-recommending social media application developed using Angular, Bootstrap and Firebase. With a vast database of hand-picked movie suggestions, Suggesto offers personalized content based on user preferences like language and genre. It also features wish-listing, incognito mode, and the ability to connect with friends and family to see their watched list and wishlist. Additionally, Suggesto includes a random movie picker, custom movie lists, and a leaderboard among users. The application allows users to redirect to the movie platform where they can watch the movie without wasting time searching.";

  risealoneytText = "This website serves as a support platform for the popular Youtuber RiseAloneYt. The website is developed using Angular framework and integrated with YoutubeAPI to retrieve the channel and video details. The website is also linked with Firebase for database management, user authentication, and hosting. With a sleek and user-friendly interface, the website provides easy navigation to the Youtuber's channel, video uploads, and social media handles. The website is aimed at providing an interactive experience to the viewers and keeping them updated with the latest content from RiseAloneYt.";

  sgphotographiText = "I designed and launched a web-based platform for photographers to showcase their portfolios and connect with potential clients. This platform provides a valuable tool for artistic expression and networking. I streamlined the photo upload process, allowing for interactive posts. Furthermore, I improved the platform's functionality by integrating a keyword-based image search leveraging the Unsplash API.";

  powerplayText = "As part of Hackathon at PowerSchool, I designed and deployed an event management web application to improve the tracking and organization of social events. The implementation of this application resulted in a 50% reduction of workload for the HR department. I received recognition for designing this project, which was later proposed to be integrated into the company's real-time application. The integration would enhance tracking and notification capabilities for various events and activities in schools.";

  ngOnInit() {

    document.getElementById("scroll").style.maxHeight = window.screen.availHeight+"px";
    document.getElementById("introduction").style.maxHeight = window.screen.availHeight+"px";
    //introduction

    // console.log(window.screen.availHeight)
    // console.log(window.screen.height)

    if(screen.width <= 480) {     
      this.isMobile = true;      
    }
  }

  goto(id :string)
  {
    // console.log(id)
    // console.log(document.getElementById(id));
    document.getElementById(id).scrollIntoView({ behavior: "smooth",block: "start"});
  }

  gototop()
  {
    document.getElementById("introduction").scrollIntoView({ behavior: "smooth",block: "center"});
  }

}
