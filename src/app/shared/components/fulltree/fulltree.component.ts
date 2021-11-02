import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulltree',
  templateUrl: './fulltree.component.html',
  styleUrls: ['./fulltree.component.css']
})
export class FulltreeComponent implements OnInit {


  @Input() treeclassel!: {parent: number, classNum: number, caption: string}

  constructor() { }

  ngOnInit(): void {
  }

}