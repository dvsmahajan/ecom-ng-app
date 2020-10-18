import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'user-profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) 
      },
      {
        path: 'sellers',
        loadChildren: ()=> import('./sellers/sellers.module').then(m=>m.SellersModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
