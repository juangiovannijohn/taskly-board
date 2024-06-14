import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

const tasks: Task[] = [
  {
    title: 'Primera Task de Título de ejemplo',
    content: 'Contenido de la primera tarea para el Título de ejemplo',
    idUserHistory: '0',
    order: 0
  },
  {
    title: 'Segunda Task de Título de ejemplo',
    content: 'Contenido de la segunda tarea para el Título de ejemplo',
    idUserHistory: '0',
    order: 1
  },
  {
    title: 'Tercera Task de Título de ejemplo',
    content: 'Contenido de la tercera tarea para el Título de ejemplo',
    idUserHistory: '0',
    order: 2
  },
  {
    title: 'Primera Task de Primer ejemplo de título',
    content: 'Contenido de la primera tarea para el Primer ejemplo de título',
    idUserHistory: '1',
    order: 0
  },
  {
    title: 'Segunda Task de Primer ejemplo de título',
    content: 'Contenido de la segunda tarea para el Primer ejemplo de título',
    idUserHistory: '1',
    order: 1
  },
  {
    title: 'Tercera Task de Primer ejemplo de título',
    content: 'Contenido de la tercera tarea para el Primer ejemplo de título',
    idUserHistory: '1',
    order: 2
  },
  {
    title: 'Primera Task de Segundo ejemplo de título',
    content: 'Contenido de la primera tarea para el Segundo ejemplo de título',
    idUserHistory: '2',
    order: 0
  },
  {
    title: 'Segunda Task de Segundo ejemplo de título',
    content: 'Contenido de la segunda tarea para el Segundo ejemplo de título',
    idUserHistory: '2',
    order: 1
  },
  {
    title: 'Tercera Task de Segundo ejemplo de título',
    content: 'Contenido de la tercera tarea para el Segundo ejemplo de títuloas aksdaskj sakdjask asdkja k sakdjas kas dkasj kasdj ',
    idUserHistory: '2',
    order: 2
  }
];


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAllById(id:string){
    return tasks.filter(item=> item.idUserHistory == id)
  }

  addNew(task:Task){
    return tasks.push(task)
  }

}
