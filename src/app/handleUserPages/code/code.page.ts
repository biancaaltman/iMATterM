import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';
import {AuthServiceProvider} from '../../services/user/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  public codeForm: FormGroup;
  public loading: HTMLIonLoadingElement;

  constructor(
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
      private authService: AuthServiceProvider,
      private router: Router,
      private formBuilder: FormBuilder
  ) {
    this.codeForm = this.formBuilder.group({
      code: ['',
        Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
  }

  async goToSignup(codeForm: FormGroup): Promise<void> {
    if (!codeForm.valid) {
      console.log('Form is not valid yet, current value:', codeForm.value);
    } else {
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();

      const code = codeForm.value.code;

      this.authService.validateCode(code).then(
          () => {
            this.loading.dismiss().then(() => {
              this.router.navigateByUrl('home');
            });
          },
          error => {
            this.loading.dismiss().then(async () => {
              const alert = await this.alertCtrl.create({
                message: error.message,
                buttons: [{ text: 'Ok', role: 'cancel' }],
              });
              await alert.present();
            });
          });
    }
  }
}
