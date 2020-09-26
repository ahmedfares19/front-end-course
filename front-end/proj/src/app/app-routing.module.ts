import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { MohammedComponent } from './mohammed/mohammed.component';
import { Details2Component } from './details2/details2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'test', component: TestCompComponent },
  { path: 'mohammed', component: MohammedComponent },
  { path: 'details2', component: Details2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
