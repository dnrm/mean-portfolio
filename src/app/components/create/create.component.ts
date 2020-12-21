import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;

  constructor(private _projectService: ProjectService) {
    this.title = "Create project";
    this.project = new Project('', '', '', '', new Date().getFullYear(), '', '');

    // Fields in Project type
    // public _id: string,
    // public name: string,
    // public description: string,
    // public category: string,
    // public year: number,
    // public langs: string,
    // public image: string,
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(this.project);
  }

}
