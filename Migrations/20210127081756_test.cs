using Microsoft.EntityFrameworkCore.Migrations;

namespace JobSender.Migrations
{
    public partial class test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ObjectType",
                table: "Jobs",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ObjectType",
                table: "Jobs");
        }
    }
}
