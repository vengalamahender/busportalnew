import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router } from '@angular/router';

@Component({
  selector: 'app-playauditsummery',
  templateUrl: './playauditsummery.component.html',
  styleUrls: ['./playauditsummery.component.css']
})
export class PlayauditsummeryComponent implements OnInit {

  constructor(private http:Http,private router:Router) { }
alldepot:any;
  ngOnInit() {
       this.http.get('http://eventstore4.iviscloud.net:8080/ivis-event-store/BusAuditServlet?action=playAudit&busNo=&depotName=&fileName=&serviceNo=&fromTime=&toTime=')
        .subscribe((data) => {
       console.log (data.json());
          this.alldepot = data.json();

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

}
