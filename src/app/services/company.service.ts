import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../entities/company.model';
import { user } from '@seniorsistemas/senior-platform-data'

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  public getCompany(): Promise<Company[]> {

    let baseUrl: string = 'https://api.senior.com.br/hcm/organization_register/entities/company';

    let username: string;

    return user.getToken()
      .then((accessToken: any) => {
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Authorization', accessToken.access_token)

        return this.http.get(baseUrl, { 'headers': headers }).toPromise()
          .then((res: any) => {
            return res.contents
          })
          .catch(err => {
            alert("Erro na tentativa de buscar dados do usuário: ")
            //console.error("Erro na tentativa de buscar dados do usuário: ", err)
          });
      })
      .catch(err => {
        alert("Erro na tentativa de buscar dados do token: ")
        //console.error("Erro na tentativa de buscar dados do usuário: ", err)
      })
  }
}
