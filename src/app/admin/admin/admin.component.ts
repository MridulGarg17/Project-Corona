import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {INews} from '../../interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router : Router) { }


  newsArray : INews[]=[]

  News : INews ={
    title:'',
    description:''
  }


  newsForm = new FormGroup({
    newsTitle: new FormControl('',[Validators.required]),
    newsDescription: new FormControl('',[Validators.required, Validators.minLength(5)]),
  });

 
  ngOnInit() {
    this.newsArray = JSON.parse(localStorage.getItem('news'));
    
  }


  
  onSubmit(){
    console.log(this.newsForm)
    this.News.title = this.newsForm.get('newsTitle').value;
    this.News.description = this.newsForm.get('newsDescription').value;
    console.log(this.News);
    console.log(this.newsArray);
    this.newsArray.push(this.News);
    //console.log(this.newsArray);
    localStorage.setItem('news',JSON.stringify(this.newsArray));
    this.newsForm.reset();
    this.newsForm.markAsUntouched();
    console.log("local"+ localStorage.getItem('news'));
   
  }

  logout(){
    localStorage.setItem('login','false');
    this.router.navigate(['login']);

  }


 
  


  


}
