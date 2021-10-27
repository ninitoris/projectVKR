import { NgClass } from '@angular/common';
import { literalMap } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit {

  searchCat = "";
  
   linksArray: {link: string, num?: number}[]= [
    {
      link: 'https://sun9-64.userapi.com/impg/b3TTqXCvXLoqFVW5WRfww4O7Qt2AHR4YTWJ7Yg/DSW1TXwhrNU.jpg?size=750x745&quality=96&sign=a608096f8a60f13b2cfd0a46b4d40f97&type=album', 
      num: 7111
    },
    {
      link: 'https://sun9-36.userapi.com/impg/5qo2A4hgUpcmWFcrAwNsLWgW22IvaT1T4Hhllg/5fEtMOaRsEM.jpg?size=184x184&quality=96&sign=5341d01b180a560b45fd96b1215a1de8&type=album',
      num: 7112

    },
    {
      link: 'https://sun9-44.userapi.com/impg/7hO3xyt2Zfh_yVblpK_KOqLi_wlXIc-yyi-A2g/-5Nl7XbbX0I.jpg?size=650x650&quality=96&sign=f2c03839e2266428cebd1feacedd2288&type=album',
      num: 7123

    },
    {
      link: 'https://sun9-69.userapi.com/impg/zOJxF-NJKZ-1WXFQ00jkCL_oXxEXV0aw4-DHpg/iMtwwlT1Anc.jpg?size=600x600&quality=96&sign=ec4829d2d2b76b7356a598cecb3b3a69&type=album',
      num: 7134

    },
    {
      link: 'https://sun9-65.userapi.com/impf/c840136/v840136864/52194/bsqMw3ZKb9Q.jpg?size=1080x1033&quality=96&sign=d6172497aa553b8f893238d58a7d17f3&type=album',
      num: 7145

    },
    {
      link: 'https://sun9-77.userapi.com/impg/6S2K1AXkEORnXOZWVY4XyfxQW2nefZrGflvVjA/zztDbUVcjIg.jpg?size=400x400&quality=96&sign=0b94146be6f3d07b35554fd5e7ba3523&type=album',
      num: 7146

    },
    {
      link: 'https://sun9-77.userapi.com/impf/nr37s3O5cRcvjeXOCPPLxdV12h4mUdcK96c_sQ/k1zNj3WDp6A.jpg?size=322x400&quality=96&sign=515b79ee1f215dd18e44cbd5ee0e3b3d&type=album',
      num: 7211

    },
    {
      link: 'https://sun9-9.userapi.com/impg/0Cv7264da_A7zjTJ_S5lXX1RYF1sC9_t0thHFw/f5W3o68XAVU.jpg?size=411x506&quality=96&sign=1e23c3f46207ae8342c9a8f74705b166&type=album',
      
      num: 7212

    },
    {
      link: 'https://sun9-15.userapi.com/impg/BUiy5vGqSbGXBvElBPbOutJsQNRfdvikQBds7A/QXKQxCfx_O4.jpg?size=1440x1920&quality=96&sign=37f676bd1f8dc0a895a7ffa9f48ff6e2&type=album',
      num: 7221

    },
    {
      link: 'https://sun9-64.userapi.com/impg/b3TTqXCvXLoqFVW5WRfww4O7Qt2AHR4YTWJ7Yg/DSW1TXwhrNU.jpg?size=750x745&quality=96&sign=a608096f8a60f13b2cfd0a46b4d40f97&type=album', 
      num: 7111
    },
    {
      link: 'https://sun9-36.userapi.com/impg/5qo2A4hgUpcmWFcrAwNsLWgW22IvaT1T4Hhllg/5fEtMOaRsEM.jpg?size=184x184&quality=96&sign=5341d01b180a560b45fd96b1215a1de8&type=album',
      num: 7112

    },
    {
      link: 'https://sun9-44.userapi.com/impg/7hO3xyt2Zfh_yVblpK_KOqLi_wlXIc-yyi-A2g/-5Nl7XbbX0I.jpg?size=650x650&quality=96&sign=f2c03839e2266428cebd1feacedd2288&type=album',
      num: 7123

    },
    {
      link: 'https://sun9-69.userapi.com/impg/zOJxF-NJKZ-1WXFQ00jkCL_oXxEXV0aw4-DHpg/iMtwwlT1Anc.jpg?size=600x600&quality=96&sign=ec4829d2d2b76b7356a598cecb3b3a69&type=album',
      num: 7134

    },
    {
      link: 'https://sun9-9.userapi.com/impg/0Cv7264da_A7zjTJ_S5lXX1RYF1sC9_t0thHFw/f5W3o68XAVU.jpg?size=411x506&quality=96&sign=1e23c3f46207ae8342c9a8f74705b166&type=album',
      num: 7145

    },
    {
      link: 'https://sun9-77.userapi.com/impg/6S2K1AXkEORnXOZWVY4XyfxQW2nefZrGflvVjA/zztDbUVcjIg.jpg?size=400x400&quality=96&sign=0b94146be6f3d07b35554fd5e7ba3523&type=album',
      num: 7146

    },
    {
      link: 'https://sun9-77.userapi.com/impf/nr37s3O5cRcvjeXOCPPLxdV12h4mUdcK96c_sQ/k1zNj3WDp6A.jpg?size=322x400&quality=96&sign=515b79ee1f215dd18e44cbd5ee0e3b3d&type=album',
      num: 7211

    },
    {
      link: 'https://sun9-65.userapi.com/impf/c840136/v840136864/52194/bsqMw3ZKb9Q.jpg?size=1080x1033&quality=96&sign=d6172497aa553b8f893238d58a7d17f3&type=album',
      num: 7212

    },
    {
      link: 'https://sun9-15.userapi.com/impg/BUiy5vGqSbGXBvElBPbOutJsQNRfdvikQBds7A/QXKQxCfx_O4.jpg?size=1440x1920&quality=96&sign=37f676bd1f8dc0a895a7ffa9f48ff6e2&type=album',
      num: 7221

    }
  ];
  constructor() { 
  }

  

  ngOnInit(): void {
  }
}