import { Component } from '@angular/core';
import {APICharacter} from './interfaces/character.interface';
import {RickandmortyService} from './rickandmorty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Rick & Morty';
  characters: APICharacter[] = [];

  constructor(private rickandmortyService: RickandmortyService) { }

  getCharacters(): void {
    //subscribe es un metodo de la clase Observable que nos permite recibir los datos
    this.rickandmortyService.getCharacters().subscribe((data: APICharacter[])=>{
      this.characters = data;
    });
  }

}
