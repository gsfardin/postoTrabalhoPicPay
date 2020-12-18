import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { UserData } from '../entities/userdata.model';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.model';
import { JobPositionService } from '../services/job-position.service';
import { CostCenterService } from '../services/cost-center.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public urlImagem: string;
  public userData: UserData = new UserData();

  public companies: Company[];
  public jobPositions: any[];
  public costCenters: any[];

  constructor(
    public userDataService: UserDataService,
    public companyService: CompanyService,
    public jobPositionService: JobPositionService,
    public costCenterService: CostCenterService) { }

  ngOnInit(): void {

    // Carrega a url da imagem dos botões do template
    this.urlImagem = '../assets/search.svg';

    // Carrega os dados do usuário logado no sistema
    this.userDataService.getUserData()
      .then((userData: UserData) => {
        this.userData = userData
      })

    // Carrega os dados das empresas
    this.companyService.getCompany()
      .then((companies: Company[]) => {
        this.companies = companies
      })

    this.jobPositionService.getJobPosition()
      .then((jobPositions: any[]) => {
        this.jobPositions = jobPositions;
      })

    this.costCenterService.getJobPosition()
      .then((costCenters: any[]) => {
        this.costCenters = costCenters;
      })
  }
}
