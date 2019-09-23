import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  authors: Object;
  newAuthor: any = { name: "" }
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getTasksFromService();

  }

  getTasksFromService() {
    // this._httpService.getTasks();
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("Got our authors!", data);
      this.authors = data;

    });
  }

  onButtonDelete(id): void {
    let observabledelete = this._httpService.deletePets(id);
    observabledelete.subscribe(deletedata => {
      console.log("Got our Id to delete!", deletedata);
      this.getTasksFromService();
    })
  }
}


