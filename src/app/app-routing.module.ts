import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'learningCenter',
    loadChildren: () => import('./learningCenter/tab4.module').then(m => m.Tab4PageModule)
  },
  {
    path: 'create-chat',
    loadChildren: () => import('./chat/create-chat/create-chat.module').then( m => m.CreateChatPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./chat/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./handleUserPages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./handleUserPages/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./handleUserPages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./handleUserPages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./handleUserPages/signup/signup.module').then( m => m.SignupPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
