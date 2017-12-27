import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router } from '@angular/router';

@Component({
  selector: 'app-playauditlist',
  templateUrl: './playauditlist.component.html',
  styleUrls: ['./playauditlist.component.css']
})
export class PlayauditlistComponent implements OnInit {

  constructor(private http:Http,private router:Router) {  }
alldepot:any;

  ngOnInit() {
         this.http.get('http://eventstore4.iviscloud.net:8080/ivis-event-store/BusAuditServlet?action=PlayedList&busNo=&depotName=&fileName=&serviceNo=&fromTime=&toTime=')
        .subscribe(data => {
       console.log (data.json());
          this.alldepot = data.json();

        });
  }

   p: number = 1;

    date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: true,
        format: 'medium',
        defaultOpen: true
    }
date1:any;
date2:any;
    dateTime(){

      console.log(this.date1);
      console.log(this.date2);
    }
}
