import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {Http} from '@angular/http';
import {  RequestOptions } from '@angular/http';
import {Headers} from '@angular/http';
import { Bus } from '../busdata';
@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
busdata:any;
alldepot:any;
playlist:any;
  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    this.getBuses();

  }

getBuses(){
          this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=bus&type=getBus&serviceNo=&busNo=&busType=&busDepot=&deviceId=')
        .subscribe((data) => {
        console.log (data.json());
          this.busdata = data.json();
          console.log(this.busdata);
          for(let i = 0;i<this.busdata.length;i++){
              this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=playList&id='+this.busdata[i].playListId)
              .subscribe((data) => {
                console.log (data.json());
                let r = data.json();
                this.busdata[i]['playListName']=r['pFileName'];
                
              });
          }
            for(let i = 0;i<this.busdata.length;i++){
              this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=depot&type=getBusDepot&id='+this.busdata[i].busDepotId)
              .subscribe((data) => {
                console.log (data.json());
                let r = data.json();
                this.busdata[i]['busDepotName']=r['depotName'];
                
              });
          }

        });
      }

getbusDepot(){
     this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=depot&type=getBusDepot&depotName=')
        .subscribe((data) => {
       console.log (data.json());
          this.alldepot = data.json();

        });
}
getplaylist(){
  this.http.get('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=playList&fileName=')
        .subscribe((data) => {
        console.log (data.json());
          this.playlist = data.json();
        });
}

name:String;
serviceNo:String;
depotName:String;
busType:String;
deviceId:String;
Hours:String;
selectedValue:String;
playlistname:any;
pFileName:any;

AddBus(){
      let newbus = {
        busNo:this.name,
        serviceNo:this.serviceNo,
        depotName:this.depotName,
        busType:this.busType,
        deviceId:this.deviceId,
        pFileName:this.playlistname.pFileName,
        playHoursId:this.Hours
      }
      console.log(newbus);
      let addbus = encodeURIComponent(JSON.stringify(newbus));
    let h = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: h });
                return this.http.post('http://eventstore4.iviscloud.net:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=bus&type=createBus',{'data':addbus}, options)
              .subscribe((data) => {
                console.log (data.json());
              });
      }

logout(){
  this.router.navigate(['loginform']);
}
editbus:any;
busno:any;
editBus(buses){
  console.log(buses);
  this.busno = buses;
 
}
deleteBus(buses){

  console.log(buses.id)
let headers = new Headers();
  let options = new RequestOptions({ headers: headers });
this.http.post('http://10.0.1.142:8080/ivis-bus-broadcasting/FileUploadHandlerServlet?action=delete&type=bus&id='+buses.id, options)
              .subscribe((data) => {
                console.log (data.json());
              });

}


}
