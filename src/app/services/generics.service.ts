import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '@seniorsistemas/senior-platform-data';

@Injectable({
  providedIn: 'root'
})
export class GenericsService {

  constructor(private http: HttpClient) { }

  public getGenerics(): Promise<any[]> {

    let baseUrl: string = 'https://api.senior.com.br/hcm/payroll/entities/person';
    baseUrl = 'https://api.senior.com.br/hcm/payroll/entities/historicalleave';
    baseUrl = 'https://api.senior.com.br/hcm/payroll/entities/historicalWorkshift';

    return user.getToken()
      .then((accessToken: any) => {
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + accessToken.access_token)
   
        let params = new HttpParams()
          .set('size', '1000')

        //return this.http.get(baseUrl).toPromise()
        //return this.http.get(baseUrl, {'headers': headers}).toPromise()  
        return this.http.get(baseUrl, {'headers': headers, 'params': params}).toPromise()
          .then((res: any) => {
            console.log(res)
            return res.contents
          })
          .catch(err => {
            alert("Erro na tentativa de buscar dados do usuário: ")
            console.error("Erro na tentativa de buscar dados do usuário: ", err)
          });
      })
      .catch(err => {
        alert("Erro na tentativa de buscar dados do token: ")
        //console.error("Erro na tentativa de buscar dados do usuário: ", err)
      })
  }
}