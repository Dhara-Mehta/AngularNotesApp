namespace NotesAPI.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<NotesAPI.Models.NoteContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(NotesAPI.Models.NoteContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var TodoList = new List<Models.ToDo>();
            TodoList.Add(new Models.ToDo { TodoId = 1, TaskName = "Milk", Complete = false, MouseOver = false });
            TodoList.Add(new Models.ToDo { TodoId = 2, TaskName = "Bread", Complete = false, MouseOver = false });
            TodoList.Add(new Models.ToDo { TodoId = 3, TaskName = "Bananas", Complete = true, MouseOver = false });
            TodoList.Add(new Models.ToDo { TodoId = 4, TaskName = "Fruits", Complete = false, MouseOver = false });
            TodoList.Add(new Models.ToDo { TodoId = 5, TaskName = "Veggies", Complete = false, MouseOver = false });
            TodoList.Add(new Models.ToDo { TodoId = 6, TaskName = "Yogurt", Complete = false, MouseOver = false });


            context.Notes.AddOrUpdate(new Models.Note { Id = 1, Title = "Note 1", Content = "First Note Content", ToDoItems = null, IsTodo = false, NoteType = Models.NoteType.Basic, CreateDate = DateTime.Now, Hide = true, Color = "list-group-item-success" },
            new Models.Note
            {
                Id = 10,
                Title = "Shopping List",
                Content = null,
                ToDoItems = TodoList,
                IsTodo = true,
                NoteType = Models.NoteType.TodoList,
                CreateDate = DateTime.Now,
                Hide = true,
                Color = "list-group-item-info"
            });

        }
    }
}
