import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 
  ngOnInit(): void {
    let jquery = document.createElement('script');
    let bootstrap  = document.createElement("script");
    let owlCarousel = document.createElement("script");
    let noUiSlider = document.createElement("script");
    let photoswipe = document.createElement("script");
    let photoswipeDefult = document.createElement("script");
    let select2 = document.createElement("script");
    let number = document.createElement("script");
    let mainTheme  = document.createElement("script");
    

    jquery.setAttribute("src","/assets/js/jquery.min.js");
    bootstrap.setAttribute("src","/assets/js/bootstrap.bundle.min.js");
    owlCarousel.setAttribute("src","/assets/js/owl.carousel.min.js");
    noUiSlider.setAttribute("src","/assets/js/nouislider.min.js") ;
    photoswipe.setAttribute("src","/assets/js/photoswipe.min.js") ; 
    photoswipeDefult.setAttribute("src","/assets/js/photoswipe-ui-default.min.js");
    select2.setAttribute("src","/assets/js/select2.min.js") ;
    number.setAttribute("src","/assets/js/number.js") ;
    mainTheme.setAttribute("src","/assets/js/main.theme.js");

    document.head.appendChild(jquery);
    document.head.appendChild(bootstrap);
    document.head.appendChild(owlCarousel);
    document.head.appendChild(noUiSlider);
    document.head.appendChild(photoswipe);
    document.head.appendChild(photoswipeDefult);
    document.head.appendChild(select2);
    document.head.appendChild(number);
    document.head.appendChild(mainTheme);

    
  }
  
}
