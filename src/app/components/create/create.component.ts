import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;
  public savedProject;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
    ) {
    this.title = "Create project";
    this.project = new Project('', '', '', '', new Date().getFullYear(), '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        console.log(response);
        if (response.project) {
          this._uploadService.makeFileRequest(environment.API + '/upload-image/' + response.project._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              this.status = 'success';
              this.savedProject = result.project;
              form.reset();
            });
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
