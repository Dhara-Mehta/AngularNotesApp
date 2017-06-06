namespace NotesAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Notes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        Content = c.String(),
                        IsTodo = c.Boolean(nullable: false),
                        NoteType = c.Int(nullable: false),
                        CreateDate = c.DateTime(nullable: false),
                        Hide = c.Boolean(nullable: false),
                        Color = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ToDoes",
                c => new
                    {
                        TodoId = c.Int(nullable: false, identity: true),
                        TaskName = c.String(),
                        Complete = c.Boolean(nullable: false),
                        MouseOver = c.Boolean(nullable: false),
                        Note_Id = c.Int(),
                    })
                .PrimaryKey(t => t.TodoId)
                .ForeignKey("dbo.Notes", t => t.Note_Id)
                .Index(t => t.Note_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ToDoes", "Note_Id", "dbo.Notes");
            DropIndex("dbo.ToDoes", new[] { "Note_Id" });
            DropTable("dbo.ToDoes");
            DropTable("dbo.Notes");
        }
    }
}
