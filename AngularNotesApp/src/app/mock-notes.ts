import { Note } from './models/Note';

export const NOTES : Note[] = [
  {id: 1, title: "Note 1", content: "First Note Content", type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 2, title: "Note 2", content: "Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n ", type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 3, title: "Note 3", content: "Third Note Content", type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 4, title: "Note 4", content: `Fourth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line`, 
  type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 5, title: "Note 5", content: `Fifth Note Content Third Line \nThird Line \nThird Line \nThird Line \nThird Line`, 
  type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 5, title: "Note 5", content: `Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line`, 
  type: "Note", date: new Date(), hide: true, color:"list-group-item-warning"},
  {id: 5, title: "Note 5", content: `Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line`, 
  type: "Note", date: new Date(), hide: true, color:"list-group-item-info" }
];