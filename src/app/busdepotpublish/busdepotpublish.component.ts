import { Component, OnInit } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Router } from '@angular/router';

@Component({
  selector: 'app-busdepotpublish',
  templateUrl: './busdepotpublish.component.html',
  styleUrls: ['./busdepotpublish.component.css']
})
export class BusdepotpublishComponent implements OnInit {
store:any;
  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
  	this. getBusDepos();
  }

    getBusDepos(){
           this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=depot&type=getBusDepot&depotName=')
        .subscribe((data) => {
        console.log (data.json());
          this.store = data.json();
          for(let i = 0;i<this.store.length;i++){
              this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=playList&id='+this.store[i].playListId)
              .subscribe((data) => {
                console.log (data.json());
                let r = data.json();
                this.store[i]['playListName']=r['pFileName'];
                console.log(this.store);
              });
          }
        });
  }
  playlist:any;
    getPlaylist(){
      this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=playList&fileName=')
        .subscribe((data) => {
        console.log (data.json());
          this.playlist = data.json();
        });

  }

logout(){
  this.router.navigate(['loginform']);
}
   p: number = 1;
   uploadDepotdata(stres){
    console.log(stres.id);
      let headers = new Headers();
  let options = new RequestOptions({ headers: headers });
  this.http.post(`http://10.0.1.142:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=publish&id`+stres.id,options)
            .map(res => res.json())
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
   }
}
