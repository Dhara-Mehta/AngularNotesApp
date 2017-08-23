import {ToDo } from './Todo';

export class Note{
  Id: number;
  Title: string;
  Content:string;
  ToDoItems: ToDo[];
  IsTodo: boolean;
  NoteType: string;
  CreateDate: Date;
  Hide: boolean;
  Color: string;
}