namespace CoProcessWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedmodel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "Description", c => c.String());
            AddColumn("dbo.Processes", "Description", c => c.String());
            AddColumn("dbo.Tools", "Description", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Tools", "Description");
            DropColumn("dbo.Processes", "Description");
            DropColumn("dbo.People", "Description");
        }
    }
}
