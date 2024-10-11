import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interface';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifsList: Gif[]=[];

  private _tagshistory: string[]=[];
  private apiKey:string='pgnKY6fEIl80DjOjryw10HOFyXuDvFD3';
  private serviceUrl:string='https://api.giphy.com/v1/gifs';
  constructor(private http:HttpClient) {

    this.loadLocalStorge();
    console.log('Gifs Services Ready');
  }


  get tagsHistory(){
    return [...this._tagshistory];
  }

  private organizedHistory(tag:string){
    tag= tag.toLowerCase();

    if(this._tagshistory.includes(tag)){
      this._tagshistory=this._tagshistory.filter((oldTag)=>oldTag!== tag);
    }
    this._tagshistory.unshift(tag);
    this._tagshistory =this._tagshistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify( this._tagshistory));
  }

  private loadLocalStorge():void{
    if(!localStorage.getItem('history'))return;
    this._tagshistory=JSON.parse(localStorage.getItem('history')!);

    if(this._tagshistory.length ===0 )return;
    this.searchTag(this._tagshistory[0]);
  }

  searchTag(tag: string):void {
    if(tag.length===0) return;
    this.organizedHistory(tag);
    const params= new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10' )
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe(resp=>{
      this.gifsList=resp.data;
     //console.log({gifs: this.gifsList});
    });
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=pgnKY6fEIl80DjOjryw10HOFyXuDvFD3&q=Valorant&limit=10')
    // .then(resp=>resp.json())
    // .then(data=>console.log(data));
  }
}
