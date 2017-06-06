using System;
using System.Collections.Generic;
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
    }
}