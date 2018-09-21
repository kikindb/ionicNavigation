import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {
  mutant:any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mutant = this.navParams.get("mutant");
  }

  goBack(){
    this.navCtrl.pop();
  }

  goRoot(){
    this.navCtrl.popToRoot();
  }

}