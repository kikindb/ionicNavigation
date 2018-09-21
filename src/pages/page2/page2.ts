import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page3Page } from "../index.pages";
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  mutants:any[]=[
    {
      name:"Magneto",
      power:"Magnetism"
    },
    {
      name:"Wolverine",
      power:"Health Recovery"
    },
    {
      name:"Professor X",
      power:"Magnetism"
    },
    {
      name:"Gambit",
      power:"Telekinesis"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  goToPage3(mutant:any){
    console.log(mutant);
    this.navCtrl.push(Page3Page,{'mutant':mutant});
  }

}
