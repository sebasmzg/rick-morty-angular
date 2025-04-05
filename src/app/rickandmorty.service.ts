import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { APICharacter } from './interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class RickandmortyService {

  private readonly baseUrl : string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters() :Observable<APICharacter[]>{
    return this.http.get<{results : APICharacter[]}>(this.baseUrl).pipe(
      //en el pipe tratamos la respuesta de la api
      map((response)=> response.results)
    );
  }
}
