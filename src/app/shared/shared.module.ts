import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PostComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PostComponent,
    ProfileCardComponent
  ]
})
export class SharedModule { }
