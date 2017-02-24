import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http'
import {Router} from '@angular/router'
import {UsersService} from '../shared/users-service/users.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


  private user: any;
  constructor(private uService: UsersService, private router: Router) {}

  signIn(username: string){
    this.uService.getUserByGitName(username).subscribe((user: any) => {
      this.user = user;
      if(this.user !== null){
        this.router.navigate(['/dashboard', this.user._id]);
      }
    });
  }

  
  
}
