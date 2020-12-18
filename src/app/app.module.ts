import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { UserDataService } from './services/user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './services/company.service';
import { JobPositionService } from './services/job-position.service';
import { CostCenterService } from './services/cost-center.service';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserDataService,
    CompanyService,
    JobPositionService,
    CostCenterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
