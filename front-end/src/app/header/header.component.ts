import { Component, OnInit, OnChanges } from '@angular/core';
import { _User } from 'src/models/user.model';
import {AuthService} from './../../services/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user:_User;
  constructor(private authService:AuthService) {
    authService.userSelected$.subscribe(user=>{
      this.user=user
      this.isConnected();
    });
   }
  public isUserConnected:boolean;
  ngOnInit(): void {
   this.isConnected();
  }

  ngOnChanges(){
  }
  isConnected(){
    this.isUserConnected=this.authService.isConnected();
  }

}
