"use strict";
exports.NOTES = [
    { id: 1, title: "Note 1", content: "First Note Content", todo: null, isTodo: false, type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 2, title: "Note 2", content: "Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n ", todo: null, isTodo: false, type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 3, title: "Note 3", content: "Third Note Content", todo: null, isTodo: false, type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 4, title: "Note 4", content: "Fourth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        todo: null, isTodo: false, type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 5, title: "Note 5", content: "Fifth Note Content Third Line \nThird Line \nThird Line \nThird Line \nThird Line",
        todo: null, isTodo: false, type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 5, title: "Note 5", content: "Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        todo: null, isTodo: false, type: "Note", date: new Date(), hide: true, color: "list-group-item-warning" },
    { id: 5, title: "Note 5", content: "Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        todo: null, isTodo: false, type: "Note", date: new Date(), hide: true, color: "list-group-item-info" },
    { id: 10, title: "Shopping List", content: null,
        todo: [{ TodoId: 1, TaskName: "Milk", Complete: false },
            { TodoId: 2, TaskName: "Bread", Complete: false, MouseOver: false },
            { TodoId: 3, TaskName: "Bananas", Complete: true, MouseOver: false },
            { TodoId: 4, TaskName: "Fruits", Complete: false, MouseOver: false },
            { TodoId: 5, TaskName: "Veggies", Complete: false, MouseOver: false },
            { TodoId: 6, TaskName: "Yogurt", Complete: false, MouseOver: false }
        ], isTodo: true, type: "Todo", date: new Date(), hide: true, color: "list-group-item-info" }
];
//# sourceMappingURL=mock-notes.js.map