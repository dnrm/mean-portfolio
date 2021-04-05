import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: Array<Project>;
  public url: string;

  constructor(
    private _http: ProjectService
  ) {
    this.url = environment.API;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._http.getProjects().subscribe(
      response => {
        if (response.projects) {
          this.projects = response.projects;
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
