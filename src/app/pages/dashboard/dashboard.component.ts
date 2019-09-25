import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/user/user.service';
import { User, Project } from 'src/app/common/user/user';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  userPicture: SafeUrl;
  projects: Array<Project>;

  constructor(private userService: UserService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getUser();
    this.getProjects();
  }

  async getUser() {
    await this.userService.getUser()
      .subscribe((response) => {
        this.user = response;
        this.userPicture = this.sanitizer.bypassSecurityTrustUrl(response.picture);
      }, (err) => {
        console.error(err);
      });
  }


  async getProjects() {
    await this.userService.getProjects()
      .subscribe((response) => {
        this.projects = response;
      }, (err) => {
        console.error(err);
      });
  }

}
