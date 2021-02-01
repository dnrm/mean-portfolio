import { Component, OnInit } from '@angular/core';

import { UploadService } from '../../services/upload.service';
import { ProjectService } from "../../services/project.service";
import { Project } from "../../models/project";
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public savedProject;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
    this.title = "Edit Project";
    this.project = new Project('', '', '', '', new Date().getFullYear(), '', '');
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProject(id)
    })
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

  onSubmit(form) {
    console.log(this.filesToUpload);
    this._projectService.updateProject(this.project).subscribe(
      response => {
        console.log(response);
        if (response.project) {
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.status = 'success';
                this.savedProject = result.project;
              });
          } else {
            this.status = 'success';
            this.savedProject = response.project;
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
