import { Component, OnInit } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Router } from '@angular/router';


@Component({
  selector: 'app-buspublish',
  templateUrl: './buspublish.component.html',
  styleUrls: ['./buspublish.component.css']
})
export class BuspublishComponent implements OnInit {

  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
  this.getBuses();
  }
  busdata:any
getBuses(){
           this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=bus&type=getBus&serviceNo=&busNo=&busType=&busDepot=&deviceId=')
        .subscribe((data) => {
        console.log (data.json());
          this.busdata = data.json();
          for(let i = 0;i<this.busdata.length;i++){
              this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=playList&id='+this.busdata[i].playListId)
              .subscribe((data) => {
                console.log (data.json());
                let r = data.json();
                this.busdata[i]['playListName']=r['pFileName'];
                console.log(this.busdata);
              });
          }
        });
      }
      alldepot:any;
getbusDepot(){
     this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=depot&type=getBusDepot&depotName=')
        .subscribe((data) => {
       console.log (data.json());
          this.alldepot = data.json();

        });
}
playlist:any;
getplaylist(){
  this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=playList&fileName=')
        .subscribe((data) => {
        console.log (data.json());
          this.playlist = data.json();
        });
}
  goPlayList(){
  this.router.navigate(['playlist-files']);
}
buses(){
  this.router.navigate(['buses']);
}
busDepos(){
  this.router.navigate(['busdepos']);
}
playCon(){
  this.router.navigate(['playinghoursconnfig']);
}
logout(){
  this.router.navigate(['loginform']);
}
   p: number = 1;

   uploadData(buses){
    console.log(buses.deviceId);
      let headers = new Headers();
  let options = new RequestOptions({ headers: headers });
  this.http.post(`http://kernel.iviscloud.net:8182/ivis-kernel-server/announcement.jsp?submit=yes&action=syncPlayList&deviceId="`+buses.deviceId,options)
            .map(res => res.json())
            .subscribe(
                (data) => {console.log('success')
                error => console.log(error)
    
   });
}
}
