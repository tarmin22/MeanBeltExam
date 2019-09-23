import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { CompilePipeMetadata } from '@angular/compiler';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPet: any = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "", like: 0 }
  newError: string;
  showError: boolean;
  errors: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("This is the submit data from new.component", this.newPet)
    let observablepost = this._httpService.addPets(this.newPet);
    observablepost.subscribe((data: any) => {
      console.log("Got our out postdata!", data);
      // console.log("This is the post data from app.components for newTask", this.newPet);

      if (data.err) {
        console.log("this was an error", data);
        this.errors = data.errors;
      }
      else {
        this._router.navigate(['/']);
        // this.newPet = {
        //   name: ""
        // }
      }
    });
  }

}
