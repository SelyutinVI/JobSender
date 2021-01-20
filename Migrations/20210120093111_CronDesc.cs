using Microsoft.EntityFrameworkCore.Migrations;

namespace JobSender.Migrations
{
    public partial class CronDesc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CronDesc",
                table: "Jobs",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CronDesc",
                table: "Jobs");
        }
    }
}
