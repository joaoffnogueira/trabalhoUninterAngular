import { Component } from '@angular/core';

import { aluno } from './arquivo';//importa o arquivo.ts que possui os dados dos alunos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabalho';
  lista_alunos = aluno;//atribui os dados a uma variável disponível para os outros componentes
}