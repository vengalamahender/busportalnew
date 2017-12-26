import { Component, OnInit } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Router } from '@angular/router';
@Component({
  selector: 'app-busdepos',
  templateUrl: './busdepos.component.html',
  styleUrls: ['./busdepos.component.css']
})
export class BusdeposComponent implements OnInit {
store:any;
playlist:any;

  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    this.getBusDepos();
 
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

  getPlaylist(){
      this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=playList&fileName=')
        .subscribe((data) => {
        console.log (data.json());
          this.playlist = data.json();
        });

  }
busname:any;
address:any;
selectedValue:any;
/*  addBusDepot(){
let aom ={
  depotName:this.busname,
  depotAddress:this.address,
  playListId:this.selectedValue.id
  }
  console.log(aom);
  let adddata = encodeURIComponent(JSON.stringify(aom));
          return this.http.post('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=depot&type=createBusDepot&data='+adddata)
        .subscribe((data) => {

        });
this.router.navigate(['busdepos']);
  }*/


logout(){
  this.router.navigate(['loginform']);
}
   p: number = 1;
deleteBusdepot(stres){
  console.log(stres.id);
    let headers = new Headers();
  let options = new RequestOptions({ headers: headers });
  this.http.post(`http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=delete&type=file&id=`+stres.id,options)
            .map(res => res.json())
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            ) 
}

editdata:any;
editBusdepot(stres){

  console.log(stres);
this.editdata=stres;

}

}
