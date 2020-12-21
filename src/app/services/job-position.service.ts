import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '@seniorsistemas/senior-platform-data';

@Injectable({
  providedIn: 'root'
})
export class JobPositionService {

  constructor(private http: HttpClient) { }

  public getJobPosition(): Promise<any[]> {

    let baseUrl: string = 'https://api.senior.com.br/hcm/organization_register/entities/jobPosition';


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
}