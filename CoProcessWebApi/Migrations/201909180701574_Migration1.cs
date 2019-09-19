namespace CoProcessWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Migration1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ArchitectResponsibilities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        title = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.DevTeams",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        title = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Links",
                c => new
                    {
                        LinkId = c.Int(nullable: false, identity: true),
                        LinkName = c.String(),
                    })
                .PrimaryKey(t => t.LinkId);
            
            CreateTable(
                "dbo.Managers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        title = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.People",
                c => new
                    {
                        PeopleId = c.Int(nullable: false, identity: true),
                        PeopleName = c.String(),
                        LinkId = c.Int(nullable: false),
                        RoleId = c.Int(nullable: false),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.PeopleId);
            
            CreateTable(
                "dbo.Processes",
                c => new
                    {
                        ProcessId = c.Int(nullable: false, identity: true),
                        ProcessName = c.String(),
                        LinkId = c.Int(nullable: false),
                        RoleId = c.Int(nullable: false),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.ProcessId);
            
            CreateTable(
                "dbo.ProductOwnerResponsibilities",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        title = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.QAs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        title = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Roles",
                c => new
                    {
                        RoleId = c.Int(nullable: false, identity: true),
                        RoleName = c.String(),
                    })
                .PrimaryKey(t => t.RoleId);
            
            CreateTable(
                "dbo.Tools",
                c => new
                    {
                        ToolId = c.Int(nullable: false, identity: true),
                        ToolName = c.String(),
                        LinkId = c.Int(nullable: false),
                        RoleId = c.Int(nullable: false),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.ToolId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Tools");
            DropTable("dbo.Roles");
            DropTable("dbo.QAs");
            DropTable("dbo.ProductOwnerResponsibilities");
            DropTable("dbo.Processes");
            DropTable("dbo.People");
            DropTable("dbo.Managers");
            DropTable("dbo.Links");
            DropTable("dbo.DevTeams");
            DropTable("dbo.ArchitectResponsibilities");
        }
    }
}
