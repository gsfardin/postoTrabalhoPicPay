import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { UserData } from '../entities/userdata.model';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.model';
import { JobPositionService } from '../services/job-position.service';
import { CostCenterService } from '../services/cost-center.service';
import { DepartmentService } from '../services/department.service';
import { HistoricalEmploymentRelationship, HistoricalEmploymentRelationshipService } from '../services/hitstorical-employment-relationship';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnChanges {

  public urlImagem: string;
  public userData: UserData = new UserData();
  public newChartPosition: string = '';

  public companies: Company[];
  public jobPositions: any[];
  public costCenters: any[];
  public departments: any[];
  public historicalEmploymentRelationships: any[];

  constructor(
    public userDataService: UserDataService,
    public companyService: CompanyService,
    public jobPositionService: JobPositionService,
    public costCenterService: CostCenterService,
    public departmentService: DepartmentService,
    public historicalEmploymentRelationshipService: HistoricalEmploymentRelationshipService) { }

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

        // Sort array by code
        this.companies.sort((a, b) => a.code - b.code)
      })

    this.jobPositionService.getJobPosition()
      .then((jobPositions: any[]) => {
        this.jobPositions = jobPositions;

        // Sort array by code
        this.jobPositions.sort((a, b) => a.code - b.code)
      })

    this.costCenterService.getCostCenter()
      .then((costCenters: any[]) => {
        this.costCenters = costCenters;

        // Sort array by code
        this.costCenters.sort((a, b) => a.code - b.code)
      })

    this.departmentService.getDepartment()
      .then((department: any[]) => {
        this.departments = department;

        // Sort array by code
        this.departments.sort((a, b) => a.code - b.code)
      })

      // TESTE PARA BUSCAR O HISTORICO DO COLABORADOR...
      this.historicalEmploymentRelationshipService.getHistorical()
      .then((historicalEmploymentRelationship: any[]) => {
        this.historicalEmploymentRelationships = historicalEmploymentRelationship;

        // Sort array by code
        this.historicalEmploymentRelationships.sort((a, b) => a.code - b.code)
        console.log(this.historicalEmploymentRelationships)
      })  
  }

  ngOnChanges(): void {
    this.newChartPosition = 'Novo posto de trabalho';
  }
}
