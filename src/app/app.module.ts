import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { SnapModule } from 'snap';
import { SnapLightboxService } from 'snap';
import { ArFormBuilderModule } from 'form-builder';

import { AppComponent }        from './app.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NewRequestComponent } from './new-request/new-request.component';
import { EnterPartsComponent } from './new-request/enter-parts.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SnapModule,
        ArFormBuilderModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        NewRequestComponent,
        EnterPartsComponent
    ],
    providers: [
        SnapLightboxService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
