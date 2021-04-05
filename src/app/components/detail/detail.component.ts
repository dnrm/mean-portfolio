import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;
  public confirm: boolean;

  constructor(
    private _title: Title,
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = environment.API;
    this.confirm = false;
  }

  ngOnInit(): void {
    this._title.setTitle('dannermm')
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProject(id)
    })
    this._title.setTitle(`${this.project.name} | dannermm`)
  }

  getProject(id) {
    return this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(error);
      }
    )
  }

  setConfirm(confirm: boolean) {
    this.confirm = confirm;
  }

  deleteProject(id) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        if (response.project) {
          this._router.navigate(['/projects']);
        }
      },
      error => console.log(error)
    )
  }

}
