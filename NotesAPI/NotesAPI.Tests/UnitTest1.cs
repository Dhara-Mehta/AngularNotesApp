using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NotesAPI.Controllers;

namespace NotesAPI.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            NoteController nctrl = new NoteController();
            nctrl.PutNote()
        }
    }
}
