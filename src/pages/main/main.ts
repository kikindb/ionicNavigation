import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Page2Page, Page3Page } from "../index.pages";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public page2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
    this.page2 = Page2Page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  navigatePage(){
    this.navCtrl.push(Page2Page);
  }

  showMenu(){
    this.menuCtrl.toggle();
  }

}
