import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '@seniorsistemas/senior-platform-data';

@Injectable({
  providedIn: 'root'
})
export class HistoricalEmploymentRelationshipService {

  constructor(private http: HttpClient) { }

  public getHistorical(): Promise<any[]> {

    let baseUrl: string = 'https://api.senior.com.br/hcm/payroll/entities/historicalEmploymentRelationship';

    return user.getToken()
      .then((accessToken: any) => {
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Authorization', accessToken.access_token)
   
        let params = new HttpParams()
          .set('size', '1000')

        return this.http.get(baseUrl, {'headers': headers, 'params': params}).toPromise()
        //return this.http.get(baseUrl, {'headers': headers}).toPromise()
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

  public getHistoricalId(id: string): Promise<any[]> {

    let baseUrl: string = 'https://api.senior.com.br/hcm/payroll/entities/historicalEmploymentRelationship/';

    return user.getToken()
      .then((accessToken: any) => {
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Authorization', accessToken.access_token)
   
        let params = new HttpParams()
          .set('id', id)
          .set('code', '1')

        //return this.http.get(baseUrl, {'headers': headers, 'params': params}).toPromise()
        return this.http.get(baseUrl, {'headers': headers}).toPromise()
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