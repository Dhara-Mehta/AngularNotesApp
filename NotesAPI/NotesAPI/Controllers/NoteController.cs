﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using NotesAPI.Models;

namespace NotesAPI.Controllers
{
    public class NoteController : ApiController
    {
        private NoteContext db = new NoteContext();

        // GET: api/Note
        public IQueryable<Note> GetNotes()
        {
            return db.Notes.Include(x => x.ToDoItems);
        }
        
        // GET: api/Note/5
        [ResponseType(typeof(Note))]
        public async Task<IHttpActionResult> GetNote(int id)
        {
            //Note note = await db.Notes.FindAsync(id);
            Note note = await db.Notes.Include(x => x.ToDoItems).SingleOrDefaultAsync(x => x.Id == id);
            
            if (note == null)
            {
                return NotFound();
            }
            
            return Ok(note);
        }

        // PUT: api/Note/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNote(int id, Note note)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != note.Id)
            {
                return BadRequest();
            }
            note.Hide = true;
            db.Entry(note).State = EntityState.Modified;
            
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Note
        [ResponseType(typeof(Note))]
        public async Task<IHttpActionResult> PostNote(Note note)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            note.Hide = true;
            db.Notes.Add(note);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = note.Id }, note);
        }

        // DELETE: api/Note/5
        [ResponseType(typeof(Note))]
        public async Task<IHttpActionResult> DeleteNote(int id)
        {
            Note note = await db.Notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }

            db.Notes.Remove(note);
            await db.SaveChangesAsync();

            return Ok(note);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NoteExists(int id)
        {
            return db.Notes.Count(e => e.Id == id) > 0;
        }
    }
}