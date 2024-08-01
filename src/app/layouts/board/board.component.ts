import { Component, inject, OnInit } from '@angular/core';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { UserHistoryService } from './services/user-history.service';
import { UserHistory } from './interfaces/user-history.interface';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../navbar/services/navbar.service';
import { ActivatedRoute, Router } from '@angular/router';


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
  route = inject(ActivatedRoute)
  boardId:string = ''
  userHistories: any[]= []
  navbarService = inject(NavbarService)

  constructor( private userHistoryService :UserHistoryService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.boardId = param.get('id') || '0000';
    })
    console.log('ID del boardd', this.boardId)
    this.getViewFromBoardId(this.boardId)
  }

  getViewFromBoardId(boardId:string){
    this.userHistoryService.getOne(boardId).subscribe((data: {message:string, view:any[]}) =>{
      console.log('vista a mostrarrrr',data.view)
      this.userHistories = data.view
    })
  }

  addNew(){
    const newUserHistory: UserHistory ={
      title:'Editar...',
      _id: this.getLastId(),
      order: this.getLastOrder()
    }
    this.userHistoryService.addNew(newUserHistory);
    this.getViewFromBoardId(this.boardId);
    console.log(this.userHistories)
  }

  getLastId(){
    return this.userHistoryService.getLastId();
  }

  getLastOrder(){
    return this.userHistoryService.getLastOrder();
  }
}
