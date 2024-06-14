import { Component, inject, OnInit } from '@angular/core';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { UserHistoryService } from './services/user-history.service';
import { UserHistory } from './interfaces/user-history.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [UserHistoryComponent,
    TaskCardComponent,
    CommonModule
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  // private userHistoryService = inject(UserHistoryService);
  userHistories: UserHistory[]= []

  constructor( private userHistoryService :UserHistoryService){}
  ngOnInit(): void {
    this.getUserHistories()
  }

  getUserHistories(){
    console.log('hola')
      this.userHistories = this.userHistoryService.getAll();
      console.log(this.userHistories)
  }

  addNew(){
    const newUserHistory: UserHistory ={
      title:'Editar...',
      _id: this.getLastId(),
      order: this.getLastOrder()
    }
    this.userHistoryService.addNew(newUserHistory);
    this.getUserHistories();
    console.log(this.userHistories)
  }

  getLastId(){
    return this.userHistoryService.getLastId();
  }

  getLastOrder(){
    return this.userHistoryService.getLastOrder();
  }
}
