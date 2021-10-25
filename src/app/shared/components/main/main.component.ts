import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  constructor() { 
  }

  ngOnInit(): void {
    let i:number;
    for (i = 0; i< 10; i++){
      addDiv(i);

    }
  }
}


function addDiv(i: number): void {
  var mainDiv = document.getElementById("main-gallery-view");
  let newDiv = document.createElement("div");
  newDiv.innerHTML = "id: "+i.toString();
  newDiv.id = i.toString();

  // newDiv.classList.add("gallery-child");
  // newDiv.classList.add("col-2");
  newDiv.classList.add("themed-grid-col");    //НЕ РАБОТАЕТ
  newDiv.className = "themed-grid-col";       //НЕ РАБОТАЕТ
/* 

*/
  //newDiv.style.border = "6px solid black";    //РАБОТАЕТ
  //newDiv.style.backgroundColor = "#aaaaaa";   //РАБОТАЕТ

  newDiv.style.minHeight = "10em";
  newDiv.style.minWidth = "10em";
  newDiv.style.textAlign = "center";
  newDiv.style.margin = "auto";
  

  /* 
  
  */
  mainDiv?.appendChild(newDiv);
  //as HTMLCollectionOf<HTMLElement>;
  
}