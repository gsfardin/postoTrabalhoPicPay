import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '@seniorsistemas/senior-platform-data';
import { UserData } from '../shared/userData.model';

@Injectable()
export class UserDataService {

  constructor(private http: HttpClient) { }

  public getUserData(): Promise<UserData> {

    let baseUrl: string = 'https://api.senior.com.br/platform/user/queries/getUser';

    let username: string;

    return user.getToken()
      .then((accessToken: any) => {
        let headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + accessToken.access_token)

        return this.http.post(baseUrl, { 'username': username }, { 'headers': headers }).toPromise()
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