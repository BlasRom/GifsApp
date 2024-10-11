import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from '../gifs/pages/home/home-page.component';
import { GifsModule } from '../gifs/gifs.module';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule, GifsModule
  ],
  exports:[SidebarComponent, HomePageComponent
  ]
})
export class SharedModule { }
