import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatPage {

  // ref = firebase.database().ref('messages/');
  chatMessages = [];
  infoForm: FormGroup;

  constructor(private route: ActivatedRoute, public router: Router,
              public alertController: AlertController, private formBuilder: FormBuilder) {
    this.infoForm = this.formBuilder.group({
      message: [null, Validators.required]
    }); } }

    /* firebase.database().ref('messages/').on('value', resp => {
      this.chatMessages = [];
      this.chatMessages = snapshotToArray(resp);
    });
  }

  edit(key) {
    this.router.navigate(['/edit/'+ key]);
  }

  saveInfo() {
    let newInfo = firebase.database().ref('messages/').push();
    newInfo.set(this.infoForm.value);
    // this.router.navigate(['/detail/' + newInfo.key]);
  }

  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this info?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('messages/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
*/
