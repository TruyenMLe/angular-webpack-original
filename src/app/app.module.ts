import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HeroService }         from './hero.service';
import { AppComponent }        from './app.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
