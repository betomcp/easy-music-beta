import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile', loadChildren: () => import("../profile/profile.module").then(m => m.ProfileModule) },
  { path: 'home', loadChildren: () => import("../home/home.module").then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
