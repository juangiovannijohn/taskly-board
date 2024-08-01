import { inject, Injectable } from '@angular/core';
import { UserHistory } from '../interfaces/user-history.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../enviroments/environment';
import { Observable } from 'rxjs';



const userHistories: UserHistory[]  = [
  {
    title: 'Primer título de ejemplo',
    _id: '0',
    order: 0
  },
  // Ejemplos adicionales
  {
    title: 'Segundo ejemplo de título',
    _id: '1',
    order: 1
  },
  {
    title: 'Tercer ejemplo de título',
    _id: '2',
    order: 2
  } 
]


@Injectable({
  providedIn: 'root'
})
export class UserHistoryService {
private http = inject(HttpClient)
private url = environment.apiUrl
  constructor() { }

  getAll():UserHistory[]{
    return userHistories.sort((a,b)=> a.order - b.order);
  }

  getOne(_id:string): Observable<{ message: string; view: any[] }> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('token', token ? token : '');
    return this.http.get<{ message: string; view: any[] }>(`${this.url}views/user-board/${_id}`,{ headers })
  }

  addNew(userHistory: UserHistory){
    return userHistories.push(userHistory)
  }

  getLastId(){
    // Encuentra el id con el mayor valor en el array
    let maxId = userHistories.reduce((max, userHistory) => {
      const currentId = parseInt(userHistory._id);
      return currentId > max ? currentId : max;
    }, 0);

    // Suma 1 al id de mayor valor
    const newId = maxId + 1;

    console.log({newId})

    return newId.toString()
  }

  getLastOrder(){
        // Encuentra el id con el mayor valor en el array
        let maxId = userHistories.reduce((max, userHistory) => {
          const currentId = userHistory.order;
          return currentId > max ? currentId : max;
        }, 0);
    
        // Suma 1 al id de mayor valor
        const newOrder = maxId + 1;
    
        console.log({newOrder})
    
        return newOrder
  }
}
