namespace CoProcessWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class scrummaster : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ScrumMasters",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        title = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ScrumMasters");
        }
    }
}
