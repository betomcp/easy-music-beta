import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PostComponent
  ]
})
export class SharedModule { }
