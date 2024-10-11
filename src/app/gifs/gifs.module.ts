import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from './components/search-box/search-box-component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardIstComponent } from './components/card-ist/card-ist.component';



@NgModule({
  declarations: [HomePageComponent, SearchboxComponent, CardIstComponent],
  imports: [
    CommonModule
  ],
  exports:[HomePageComponent]
})
export class GifsModule { }
