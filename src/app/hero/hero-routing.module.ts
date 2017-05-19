import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: HeroesComponent },
    { path: ':id', component: HeroDetailComponent }
  ])],
  exports: [RouterModule]
})
export class HeroRoutingModule {}