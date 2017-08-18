"use strict";
exports.NOTES = [
    { Id: 1, Title: "Note 1", Content: "First Note Content", ToDoItems: null, IsTodo: false, NoteType: "Note", CreateDate: new Date(), Hide: true, Color: "list-group-item-success" },
    { Id: 2, Title: "Note 2", Content: "Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n ", ToDoItems: null, IsTodo: false, NoteType: "Note", CreateDate: new Date(), Hide: true, Color: "list-group-item-success" },
    { Id: 3, Title: "Note 3", Content: "Third Note Content", ToDoItems: null, IsTodo: false, NoteType: "Note", CreateDate: new Date(), Hide: true, Color: "list-group-item-success" },
    { Id: 4, Title: "Note 4", Content: "Fourth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        ToDoItems: null, IsTodo: false, NoteType: "Note", CreateDate: new Date(), Hide: true, Color: "list-group-item-success" },
    { Id: 5, Title: "Note 5", Content: "Fifth Note Content Third Line \nThird Line \nThird Line \nThird Line \nThird Line",
        ToDoItems: null, IsTodo: false, NoteType: "Note", CreateDate: new Date(), Hide: true, Color: "list-group-item-success" },
    { Id: 5, Title: "Note 5", Content: "Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        ToDoItems: null, IsTodo: false, NoteType: "Note", CreateDate: new Date(), Hide: true, Color: "list-group-item-warning" },
    { Id: 5, Title: "Note 5", Content: "Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        ToDoItems: null, IsTodo: false, NoteType: "Note", CreateDate: new Date(), Hide: true, Color: "list-group-item-info" },
    { Id: 10, Title: "Shopping List", Content: null,
        ToDoItems: [{ TodoId: 1, TaskName: "Milk", Complete: false, MouseOver: false },
            { TodoId: 2, TaskName: "Bread", Complete: false, MouseOver: false },
            { TodoId: 3, TaskName: "Bananas", Complete: true, MouseOver: false },
            { TodoId: 4, TaskName: "Fruits", Complete: false, MouseOver: false },
            { TodoId: 5, TaskName: "Veggies", Complete: false, MouseOver: false },
            { TodoId: 6, TaskName: "Yogurt", Complete: false, MouseOver: false }
        ], IsTodo: true, NoteType: "ToDoItems", CreateDate: new Date(), Hide: true, Color: "list-group-item-info" }
];
//# sourceMappingURL=mock-notes.js.map