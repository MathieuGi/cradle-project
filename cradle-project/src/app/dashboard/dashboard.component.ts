import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from '../shared/users-service/users.service';
import { ActivatedRoute, Params} from '@angular/router'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  userId: any;

  private currentUser

  constructor(private uService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.uService.fetchOne(params['id'])).subscribe((user) => {
      this.currentUser = user;
    });
    
  }

}
