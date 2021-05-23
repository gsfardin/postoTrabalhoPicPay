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
import { DepartmentService } from './services/department.service';
import { HistoricalEmploymentRelationshipService } from './services/hitstorical-employment-relationship';
import { GenericsService } from './services/generics.service';
import { PersonActiveService } from './services/person-active.service';

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
    CostCenterService,
    DepartmentService,
    HistoricalEmploymentRelationshipService,
    PersonActiveService,
    GenericsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
