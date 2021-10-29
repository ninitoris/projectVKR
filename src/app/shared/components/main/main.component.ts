import { NgClass } from '@angular/common';
import { literalMap } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit {

  searchCat = '';
  
  changeSearchCat(strFromChild: string){
    this.searchCat = strFromChild;
    console.log('searchCat is now '+ this.searchCat)
  }
  
   emptylink = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';
   elArray: {link: string, num?: number}[]= [
    {
      link: 'https://sun9-40.userapi.com/impg/3SJFoXQEwppC63xZtCgZzIHnG9xY1Y8oNi_Ntg/SMHsHYRA4fE.jpg?size=375x328&quality=96&sign=ff4d6c4e616dc7c795cef614dfbe5d28&type=album',
      num: 711111
    },
    {
      link: 'https://sun9-50.userapi.com/impg/BgwVoWQx9ih2UFC_xn8E37lAeR38QzzLhuQFPw/-slKNarEE90.jpg?size=581x548&quality=96&sign=bd062ea2c8e5b7bc8651ffd9077900b7&type=album',
      num: 711121
    },
    {
      link: 'https://sun9-75.userapi.com/impg/4oGY7PTWtZqEAJcqlT8-J5hTswiih24LBjHcJA/-pXoksX7Joc.jpg?size=586x633&quality=96&sign=4cb37f090ea934ecf9e6604b34b1d4d6&type=album',
      num: 721112
    },
    {
      link: this.emptylink,
      num: 722111
    },
    {
      link: this.emptylink,
      num: 722112
    },
    {
      link: this.emptylink,
      num: 721114
    }
    
  ];



  treeclass: {parent?: number, classNum: number, caption: string}[]= [
    {
      parent: 0,
      classNum: 71,
    caption: "71xxxx - Детали - тела вращения типа колец, дисков, шкивов, блоков, стержней, втулок, стаканов, колонок, валов, осей, штоков, шпинделей и др."
    },
    {
      parent: 0,
      classNum: 72,
    caption: "72xxxx - Детали - тела вращения с элементами зубчатого зацепления; трубы, шланги, проволочки, разрезные, сектора, сегменты; изогнутые из листов, полос и лент; аэрогидродинамические; корпусные, опорные; емкостные; подшипников"
    },
    {
      parent: 0,
      classNum: 73,
    caption: "73..."
    },
    {
      parent: 0,
      classNum: 74,
    caption: "74..."
    },
    {
      parent: 0,
      classNum: 75,
    caption: "75..."
    },
    {
      parent: 71,
      classNum: 711,
      caption: "711xxx - С L до 0,5 D вкл. с нар. поверхностью цилиндрической"
    },
    {
      parent: 71,
      classNum: 712,
      caption: "712xxx - С L до 0,5 D вкл. с нар. поверхностью конической, криволин., комбинир."
    },
    {
      parent: 71,
      classNum: 713,
      caption: "713.."
    },
    {
      parent: 71,
      classNum: 714,
      caption: "714.."
    },
    {
      parent: 71,
      classNum: 715,
      caption: "715.."
    },
    {
      parent: 71,
      classNum: 716,
      caption: "716.."
    },
    {
      parent: 711,
      classNum: 7111,
      caption: "7111xx - Без закр. уступов, гладкой, без наружн. резьбы"
    },
    {
      parent: 711,
      classNum: 7112,
      caption: "7112xx - Без закр. уступов, гладкой, с наружн. резьбой"
    },
    {
      parent: 711,
      classNum: 7113,
      caption: "7113xx - Без закр. уступов, ступенчатой односторонней, без нар. резьбы"
    },
    {
      parent: 711,
      classNum: 7114,
      caption: "7114xx - "
    },
    {
      parent: 711,
      classNum: 7115,
      caption: "7115xx - "
    },
    {
      parent: 711,
      classNum: 7116,
      caption: "7116xx - "
    },
    {
      parent: 711,
      classNum: 7117,
      caption: "7117xx - "
    },
    {
      parent: 7111,
      classNum: 71111,
      caption: "71111x - Без центр. отв."
    },
    {
      parent: 7111,
      classNum: 71112,
      caption: "71112x - С центр. глухим отв. с одной или двух сторон, без резьбы"
    },
    {
      parent: 7111,
      classNum: 71113,
      caption: "71113x - С центр. глухим отв. с одной или двух сторон, с резьбой"
    },
    {
      parent: 7111,
      classNum: 71114,
      caption: "71114x - С центр. сквоз. отв., круг. в сеч., цилиндр. без резьбы, гладким"
    },
    {
      parent: 7111,
      classNum: 71115,
      caption: "71115x - С центр. сквоз. отв., круг. в сеч., цилиндр. без резьбы, ступенчатым"
    },
    {
      parent: 7111,
      classNum: 71116,
      caption: "71116x - С центр. сквоз. отв., круг. в сеч., цилиндр. с резьбой"
    },
    {
      parent: 7111,
      classNum: 71117,
      caption: "71117x - С центр. сквоз. отв., круг. в сеч., конич., криволин., комбинир."
    },
    {
      parent: 7111,
      classNum: 71119,
      caption: "71119x - С центр. сквозным отв., некруг. в сеч."
    },
    {
      parent: 71111,
      classNum: 711111,
      caption: "711111 - Без кольц. пазов на торцах, без пазов и/или шлицев на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711112,
      caption: "711112 - Без кольц. пазов на торцах, без пазов и/или шлицев на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711113,
      caption: "711113 - Без кольц. пазов на торцах, с пазами и/или шлицами на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711114,
      caption: "711114 - Без кольц. пазов на торцах, с пазами и/или шлицами на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711115,
      caption: "711115 - С кольц. пазами на торцах, без пазов и шлицев на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711116,
      caption: "711116 - С кольц. пазами на торцах, без пазов и шлицев на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711117,
      caption: "711117 - С кольц. пазами на торцах, с пазами и/или шлицами на нар. пов., без отв. вне оси дет."
    },
    {
      parent: 71111,
      classNum: 711118,
      caption: "711118 - С кольц. пазами на торцах, с пазами и/или шлицами на нар. пов., с отв. вне оси дет."
    },
    {
      parent: 72,
      classNum: 721,
      caption: "721xxx - С элементами зубч. зацепления цилиндрические"
    },
    {
      parent: 721,
      classNum: 7211,
      caption: "7211xx - Одновенцовые с нар. прямыми зубьями с модулем до 1,0 мм вкл., с эвольвентными зубьями"
    },
    {
      parent: 7211,
      classNum: 72111,
      caption: "72111x - Колеса зубч. с нар. осн. базой (трибы) с консольным зубчатым венцом"
    },
    {
      parent: 72111,
      classNum: 721112,
      caption: "721112 - С модулем до 0,3 мм вкл."
    },
    {
      parent: 72111,
      classNum: 721114,
      caption: "721114 - С модулем св.0,3 до 0,5 мм вкл."
    }
  ]

  currentParent = 0;
  treeElClick(classNum: number){
   //console.log('trying to  ' + classNum.toString());
    this.searchCat = classNum.toString();
    this.currentParent = classNum;
    this.updateSearchArray(this.searchCat)
  }

  substrArray: {}[] = []

  onSearchChange(event: any) {  
    
    //console.log(event.target.value);
    let newVal = event.target.value;
    if (newVal === "" || newVal.length == 1){
      this.currentParent = 0;
      
    }else{
      this.currentParent = newVal;
      this.updateSearchArray(this.searchCat)
    }
    
  }

  updateSearchArray(searchCat: string){
    this.substrArray = []
    if (this.searchCat.length >= 2){
      let substr = ""
        for(let i = 2; i <= this.searchCat.length; i++){
          substr = this.searchCat.substring(0,i)
          this.substrArray.push(substr)
        }
    }
   console.log(this.substrArray)
  }

  constructor() { 
  }

  

  ngOnInit(): void {
  }
}