import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroDetailComponent,
        HeroesComponent
    ],
    exports: [],
    providers: []
})
export class HeroModule {}
