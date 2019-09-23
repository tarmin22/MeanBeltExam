import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  petInfo: any = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "", like: 0 }

  updatePet: any = { name: "", kind: "", description: "", skill1: "", skill2: "", skill3: "", like: 0 }

  editError: string;
  showeditError: boolean;
  errors: any;
  showLike: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getTasksFromServiceById(params['id'])
    });
  }

  getTasksFromServiceById(id) {
    // this._httpService.getTasks();
    // console.log("This is from getTasksFromServiceById", id)
    let observableID = this._httpService.getPetsByID(id);
    observableID.subscribe((onedata: any) => {
      console.log("Got our one tasks!", onedata);
      this.petInfo = onedata;
      this.updatePet = onedata;
      console.log("updatePet data", this.updatePet);
      // this.updateAuthor = onedata;

    });
  }

  onButtonDelete(id): void {
    let observabledelete = this._httpService.deletePets(id);
    observabledelete.subscribe(deletedata => {
      console.log("Got our Id to delete!", deletedata);
      this._router.navigate(['/']);

    })
  }


  onButtonLike(id) {

    this.updatePet.like += 1;
    this.showLike = false;
    console.log("Got our Id to delete!", this.updatePet);
    let observableput = this._httpService.updatePets(id, this.updatePet);
    observableput.subscribe((data: any) => {
      // // console.log("Got our out postdata!", puttdata);
      // console.log("This is the post data from app.components for updateTask", this.updateTask)
      if (data['err']) {
        console.log("this was an error", data);
        this.errors = data['errors'];
      }
      // else {
      //   this._router.navigate(['/pets/' + id]);
      //   this.updatePet = { name: "", king: "", description: "", skill1: "", skill2: "", skill3: "" }
      // }


    });
  }

}
