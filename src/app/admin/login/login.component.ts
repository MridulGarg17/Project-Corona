import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  hide = true;

  ngOnInit(): void {
  }


  
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  onSubmit(){
    if(this.loginForm.get('username').value=='admin'){
      if(this.loginForm.get('password').value=='admin'){
        localStorage.setItem('login','true');
      }
    }
    console.log(localStorage.getItem('login'));
  }


}
