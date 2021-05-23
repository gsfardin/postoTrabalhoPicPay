import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '@seniorsistemas/senior-platform-data';

@Injectable({
  providedIn: 'root'
})
export class PersonActiveService {

  constructor(private http: HttpClient) { }

  public getPersonActive(): Promise<any[]> {

    let baseUrl: string = 'https://hcm-api.senior.com.br/frontend-api/employee/person-active-employees';

    return user.getToken()
      .then((accessToken: any) => {
        let headers = new HttpHeaders()
          .set('Authorization', 'Bearer ' + accessToken.access_token)

        return this.http.get(baseUrl, {'headers': headers}).toPromise()
          .then((res: any) => {
            console.log(res)
            return res.contents
          })
          .catch(err => {
            //alert("Erro na tentativa de buscar dados do usuário: ")
            console.error("Erro na tentativa de buscar dados do usuário: ", err)
          });
      })
      .catch(err => {
        alert("Erro na tentativa de buscar dados do token: ")
        //console.error("Erro na tentativa de buscar dados do usuário: ", err)
      })
  }
}