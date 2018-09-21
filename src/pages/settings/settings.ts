import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from "../index.pages";
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  person:any[]=[
    {
      name: 'Enrique',
      age: 24
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  activateMainTab(){
    this.navCtrl.parent.select(0);
  }

  showModal(){
    let modal = this.modalCtrl.create(ModalPage,{'person':this.person});
    modal.present();
    modal.onDidDismiss(parameters=>{
      if(parameters){
        console.log("Data obtained from Modal:");
        console.log(parameters);
      }
    });
  }

}
