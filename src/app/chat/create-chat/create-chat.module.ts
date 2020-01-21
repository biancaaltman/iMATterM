import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateChatPageRoutingModule } from './create-chat-routing.module';

import { CreateChatPage } from './create-chat.page';

const routes: Routes = [
  {
    path: '',
    component: CreateChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateChatPage]
})
export class CreateChatPageModule {}
