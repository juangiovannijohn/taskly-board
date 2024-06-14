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
