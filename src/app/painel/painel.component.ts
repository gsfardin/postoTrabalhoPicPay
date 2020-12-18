import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { UserData } from '../shared/userData.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public urlImagem: string;
  public userData: UserData = new UserData();

  constructor(public userDataService: UserDataService) { }

  ngOnInit(): void {

    // Carrega a url da imagem dos botões do template
    this.urlImagem = '../assets/lupa.png';

    // Carrega os dados do usuário logado no sistema
    this.userDataService.getUserData()
      .then((userData: UserData) => {
        this.userData = userData
      })
  }
}
