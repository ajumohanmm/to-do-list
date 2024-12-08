import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-parent',
  templateUrl: './to-do-parent.component.html',
  styleUrls: ['./to-do-parent.component.css']
})
export class ToDoParentComponent implements OnInit {

  toDoList: {name: string, completed: boolean}[] = [
    {name: "Go To Shopping", completed: false},
    {name: "Pay Bills", completed: false},
    {name: "Check Email", completed: false}
  ];

  newToDoItem: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.toDoList.push({name: this.newToDoItem, completed: false});
    this.newToDoItem = "";
  }

}
