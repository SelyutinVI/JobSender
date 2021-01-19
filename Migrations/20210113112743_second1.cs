using Microsoft.EntityFrameworkCore.Migrations;

namespace JobSender.Migrations
{
    public partial class second1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Key",
                table: "Jobs");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Key",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
