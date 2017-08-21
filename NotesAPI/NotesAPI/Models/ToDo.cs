using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NotesAPI.Models
{
    
    public class ToDo
    {
        public int TodoId { get; set; }
        public string TaskName { get; set; }
        public Boolean Complete { get; set; }
        public Boolean MouseOver { get; set; }
        public virtual int Note_Id { get; set; }
        [ForeignKey("Note_Id")]
        public virtual Note Note { get; set; }
    }
}