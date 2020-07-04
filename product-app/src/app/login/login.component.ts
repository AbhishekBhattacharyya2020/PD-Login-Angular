import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
password:string;
errorCred:string;

  constructor(private router: Router, private authservice: AuthServiceService) { }

  ngOnInit(): void {
  }

  loginUser()
  {
	if(this.authservice.login(this.userName, this.password))
	{
this.router.navigate(['home']);}
else{
                this.errorCred = "Wrong username/password!";
            }

}

}
