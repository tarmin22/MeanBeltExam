import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/new', component: NewComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'pets/:id/edit', component: EditComponent },
  { path: 'pets/:id', component: ShowComponent },
  // redirect to /pets if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// old routes
// { path: 'index', component: IndexComponent },
// { path: 'pets', component: PetsComponent },
// { path: 'pets/new', component: NewComponent },
// // use a colon and parameter name to include a parameter in the url
// { path: 'pets/:id/edit', component: EditComponent },
// { path: 'pets/:id', component: ShowComponent },
// // redirect to /pets if there is nothing in the url
// { path: '', pathMatch: 'full', redirectTo: '/pets' },
// // the ** will catch anything that did not match any of the above routes
// { path: '**', component: NotFoundComponent }


// New routes
// { path: 'index', component: IndexComponent },
// { path: 'pets', component: PetsComponent },
// // {
// //   path: 'pets', component: PetsComponent, children: [,
// //     { path: 'pets/new', component: NewComponent },
// //     // use a colon and parameter name to include a parameter in the url
// //     { path: 'pets/:id/edit', component: EditComponent },
// //     { path: 'pets/:id', component: ShowComponent }]

// // },
// // redirect to /pets if there is nothing in the url
// { path: '', pathMatch: 'full', redirectTo: '/pets' },
// // the ** will catch anything that did not match any of the above routes
// { path: '**', component: NotFoundComponent }


//working route
// const routes: Routes = [
//   { path: 'index', component: IndexComponent },
//   { path: 'pets', component: PetsComponent },
//   { path: 'new', component: NewComponent },
//   // use a colon and parameter name to include a parameter in the url
//   { path: 'edit/:id', component: EditComponent },
//   { path: 'show/:id', component: ShowComponent },
//   // redirect to /pets if there is nothing in the url
//   { path: '', pathMatch: 'full', redirectTo: '/pets' },
//   // the ** will catch anything that did not match any of the above routes
//   { path: '**', component: NotFoundComponent }
// ];