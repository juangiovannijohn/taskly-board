import { Component, Input, input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent implements OnInit{
@Input()data:Task =  {
  title: ' ',
  content: ' ',
  idUserHistory: ' ',
  order: 0
}

ngOnInit(): void {

}
}
