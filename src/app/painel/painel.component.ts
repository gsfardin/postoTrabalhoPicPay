import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { UserData } from '../entities/userdata.model';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.model';
import { JobPositionService } from '../services/job-position.service';
import { CostCenterService } from '../services/cost-center.service';
import { DepartmentService } from '../services/department.service';
import { HistoricalEmploymentRelationshipService } from '../services/hitstorical-employment-relationship';
import { GenericsService } from '../services/generics.service';
import { formatDate } from '@angular/common';
import { PersonActiveService } from '../services/person-active.service';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnChanges {

  public urlImagem: string;
  public newChartPosition: string = '';

  public userData: UserData = new UserData();
  public companies: Company[];
  public jobPositions: any[];
  public costCenters: any[];
  public departments: any[];
  public historicalEmploymentRelationships: any[];
  public generics: any[];

  constructor(
    public userDataService: UserDataService,
    public companyService: CompanyService,
    public jobPositionService: JobPositionService,
    public costCenterService: CostCenterService,
    public departmentService: DepartmentService,
    public historicalEmploymentRelationshipService: HistoricalEmploymentRelationshipService,
    public personActiveService: PersonActiveService,
    public genericsService: GenericsService) { }

  ngOnInit(): void {

    // Carrega a url da imagem dos botões do template
    this.urlImagem = '../assets/search.svg';

    // Carrega os dados do usuário logado no sistema
    this.userDataService.getUserData()
      .then((userData: UserData) => {
        this.userData = userData
      })

    // Generic rest api... Test  
    this.personActiveService.getPersonActive()
      .then((generic: any[]) => {
        this.generics = generic;
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
      //this.historicalEmploymentRelationshipService.getHistorical()
      .then((historicalEmploymentRelationship: any[]) => {
        this.historicalEmploymentRelationships = historicalEmploymentRelationship;

        // Sort array by code
        //this.historicalEmploymentRelationships.sort((a, b) => a.employmentRelationship.code - b.employmentRelationship.code)

        // Filter employee
        //this.historicalEmploymentRelationships.filter((a) =>  a.employmentRelationship.code = 10)
        //console.log(this.historicalEmploymentRelationships)
      })

    // Generic rest api... Test  
    this.genericsService.getGenerics()
      .then((generic: any[]) => {
        this.generics = generic;
      })
    
    
  }

  ngOnChanges(): void {
    this.newChartPosition = 'Novo posto de trabalho';
  }
}
