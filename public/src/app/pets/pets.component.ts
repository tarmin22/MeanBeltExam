import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Object;
  // newAuthor: any = { name: "" }
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
      console.log("Got our Pets!", data);
      this.pets = data;

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
