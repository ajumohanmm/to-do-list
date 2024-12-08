import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-child',
  templateUrl: './to-do-child.component.html',
  styleUrls: ['./to-do-child.component.css']
})
export class ToDoChildComponent implements OnInit {

  @Input() toDoItem: {name: string, completed: boolean} | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
