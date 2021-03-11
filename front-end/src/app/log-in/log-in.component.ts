import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service'
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userForm: FormGroup;
  constructor(private authService:AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { 
    this.userForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  connect(){
    const formValue = this.userForm.value;
    const user = {
      username:formValue['username'],
      password:formValue['password']
    }
    console.log(user)
    this.authService.connect(user);
    this.router.navigate(['/home']);
  }

}
