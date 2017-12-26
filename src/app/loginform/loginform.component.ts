import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingPageModule } from 'angular-loading-page';  
import { CircleModule } from 'angular-loading-page'; 
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
/*login(){
		this.router.navigate(['audiofiles']);
}
*/
loginUser(e){
	e.preventDefault();
	console.log(e);
 /* console.log(this.adminuser);*/
	var username = e.target.elements[0].value;
	var password = e.target.elements[1].value;
console.log(username,password);
if(username=='admin' && password == 'admin'){
this.router.navigate(['audiofiles']);
return false;
	}

}
}