import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlobalLayoutComponent} from "./core/layouts/global-layout/global-layout.component";

const routes: Routes = [
  {
    path: '',
    component: GlobalLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tools/sign-language-to-text'
      },
      {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
