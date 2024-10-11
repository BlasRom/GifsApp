import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-ist.component.html',
  styleUrl: './card-ist.component.css'
})
export class CardIstComponent {

  @Input()
  public gifs: Gif[]=[];

}
