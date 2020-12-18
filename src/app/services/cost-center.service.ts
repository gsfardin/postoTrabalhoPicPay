import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '@seniorsistemas/senior-platform-data';

@Injectable({
  providedIn: 'root'
})
export class CostCenterService {

  constructor(private http: HttpClient) { }

  public getJobPosition(): Promise<any[]> {

    let baseUrl: string = 'https://api.senior.com.br/hcm/organization_register/entities/costcenter';


    return user.getToken()
      .then((accessToken: any) => {
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Authorization', accessToken.access_token)

        let params = new HttpParams()
          .set('offset', '1')
          .set('size', '10')

        return this.http.get(baseUrl, {'headers': headers, 'params': params}).toPromise()
        //return this.http.get(baseUrl, {'headers': headers}).toPromise()
          .then((res: any) => {
            return res
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