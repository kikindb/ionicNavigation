import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  person: any = {};

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.person = this.navParams.get('person');
    console.log(this.person);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeWithParamaters(){
    let data = {
      name: "Jesus",
      age: 18,
      coords:{
        lat: 10,
        lng: -10
      }
    };

    this.viewCtrl.dismiss(data);
  }

  closeWithOutParamaters(){
    this.viewCtrl.dismiss();
  }

}
