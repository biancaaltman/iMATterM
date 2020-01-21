import { Component, OnInit } from '@angular/core';
// import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-create',
  templateUrl: './create-chat.page.html',
  styleUrls: ['./create-chat.page.scss'],
})
export class CreateChatPage implements OnInit {

 /* ref = firebase.database().ref('infos/');
  // infoForm: FormGroup;

  constructor(private route: ActivatedRoute,
              public router: Router,
              private formBuilder: FormBuilder) {
//    this.infoForm = this.formBuilder.group({
//      'info_title' : [null, Validators.required],//
    //'info_description' : [null, Validators.required]
    //});
  }*/

  ngOnInit() {
  }
/*
  // saveInfo() {
  //   let newInfo = firebase.database().ref('infos/').push();
  //   newInfo.set(this.infoForm.value);
//    this.router.navigate(['/detail/'+ newInfo.key]);
//  }*/

}
