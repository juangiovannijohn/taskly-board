import { Injectable } from '@angular/core';
import { UserHistory } from '../interfaces/user-history.interface';



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
  },
  {
    title: 'Cuarto ejemplo de título',
    _id: '3',
    order: 3
  },
  {
    title: 'Quinto ejemplo de título',
    _id: '4',
    order: 4
  },
  {
    title: '',
    _id: '5',
    order: 5
  }
]


@Injectable({
  providedIn: 'root'
})
export class UserHistoryService {

  constructor() { }

  getAll():UserHistory[]{
    return userHistories.sort((a,b)=> a.order - b.order);
  }

  getOne(_id:string){
    return userHistories.find(item => item._id === _id)
  }
}
