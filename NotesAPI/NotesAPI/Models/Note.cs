using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NotesAPI.Models
{
    public class Note
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Title { get; set; }
        public string Content { get; set; }
        public List<ToDo> ToDoItems { get; set; }
        public Boolean IsTodo { get; set; }
        public NoteType NoteType { get; set; }
        public DateTime CreateDate { get; set; }
        public Boolean Hide { get; set; }
        public string Color { get; set; }
    }

    public enum NoteType
    {
        Basic = 0, 
        TodoList = 1
    }

    //http://www.c-sharpcorner.com/UploadFile/fc9f65/Asp-Net-web-api-with-entity-framework-6-code-first-technique/
}