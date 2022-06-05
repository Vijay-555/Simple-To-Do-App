import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../modules/Todo'; 


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
  todos: Todo[];
  inputTodo:string="";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
       {
         content:'First Todo',
         completed:false
       },
       {
         content:'Second Todo',
         completed:true
       }
    ]
  }

  toggleDone(id:number){ 
    this.todos.map((value,index)=>{
      if(index== id) value.completed = !value.completed;
      return value;
    })
  } 

  delete(id:number){
   this.todos= this.todos.filter((value,index)=> index !== id);
  }

  addToDo(){
    if (this.inputTodo != "")  {
    this.todos.push(
      {
        content:this.inputTodo,
        completed:false
      }
    )
  } 
    this.inputTodo="";
  }

}
