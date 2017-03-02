import {ToDo } from './Todo';

export class Note{
  id: number;
  title: string;
  content:string;
  todo: ToDo[];
  isTodo: boolean;
  type: string;
  date: Date;
  hide: boolean;
  color: string;
}