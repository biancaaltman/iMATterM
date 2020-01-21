import { Component, OnInit } from '@angular/core';
import { AuthServiceProvider } from '../../services/user/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;
  public loading: any;
  constructor(
      private authService: AuthServiceProvider,
      private loadingCtrl: LoadingController,
      private alertCtrl: AlertController,
      private formBuilder: FormBuilder,
      private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
      username: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(21)]),
      ],
      expectedMonth: [
        '',
        Validators.compose([Validators.required, Validators.pattern('^(0?[1-9]|1[012])$')]),
      ],
      weeksPregnant: [
        '',
        Validators.compose([Validators.required, Validators.pattern('^0*([0-9]|[1-3][0-9]|40)$')]),
      ],
      location: [
        '',
        Validators.compose([Validators.nullValidator]),
      ],
      bio: [
        '',
        Validators.compose([Validators.nullValidator, Validators.maxLength(300)]),
      ],
    });
  }

  ngOnInit() {}

  async signupUser(signupForm: FormGroup): Promise<void> {
    if (!signupForm.valid) {
      console.log(
          'Need to complete the form, current value: ', signupForm.value
      );
    } else {
      const email: string = signupForm.value.email;
      const password: string = signupForm.value.password;
      const username: string = signupForm.value.username;
      const expectedMonth: string = signupForm.value.expectedMonth;
      const weeksPregnant: number = signupForm.value.weeksPregnant;
      const location: string = signupForm.value.location;
      const bio: string = signupForm.value.bio;

      this.authService.signupUser(email, password, username, expectedMonth,  location, weeksPregnant, bio).then(
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
          }
      );
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
    }
  }
}
