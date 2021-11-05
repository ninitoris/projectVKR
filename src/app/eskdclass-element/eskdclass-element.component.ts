import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eskdclass-element',
  templateUrl: './eskdclass-element.component.html',
  styleUrls: ['./eskdclass-element.component.css']
})
export class ESKDClassElementComponent implements OnInit {

  @Input() eskdclass!: {link: string, num: number, tags?: string }
  
  constructor() { }

  ngOnInit(): void {
  }

  openClassView(){
    
  }

}
