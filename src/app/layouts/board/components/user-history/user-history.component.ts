import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { UserHistory } from '../../interfaces/user-history.interface';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-user-history',
  standalone: true,
  imports: [
    TaskCardComponent
  ],
  templateUrl: './user-history.component.html',
  styleUrl: './user-history.component.css'
})
export class UserHistoryComponent implements OnInit {
  @Input()data:UserHistory= {
    title:'',
    _id: '',
    order: 0
  }
tasks: Task[] | undefined =[];

private taskService = inject(TaskService)
  ngOnInit(): void {
     this.getTasks(this.data._id)
  }
  getTasks(id:string){
    this.tasks = this.taskService.getAllById(id)
  }

  addNew(){
    const newTask: Task ={
      title:'Editar titulo',
      content: 'Agrega contenido aquí',
      idUserHistory: this.data._id,
      order: this.data.order +1
    }
    this.taskService.addNew(newTask);
    this.getTasks(this.data._id);
    console.log(this.tasks)
  }
}
