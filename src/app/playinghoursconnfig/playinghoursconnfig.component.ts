import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-playinghoursconnfig',
  templateUrl: './playinghoursconnfig.component.html',
  styleUrls: ['./playinghoursconnfig.component.css']
})
export class PlayinghoursconnfigComponent implements OnInit {
	item=false;
  constructor(private router:Router) { }

  ngOnInit() {
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


}
