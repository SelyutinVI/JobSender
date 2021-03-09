using Microsoft.EntityFrameworkCore.Migrations;

namespace JobSender.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Title = table.Column<string>(type: "text", nullable: false),
                    Cron = table.Column<string>(type: "text", nullable: true),
                    CronDesc = table.Column<string>(type: "text", nullable: true),
                    ObjectJson = table.Column<string>(type: "text", nullable: true),
                    ObjectType = table.Column<string>(type: "text", nullable: true),
                    Status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Title);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Jobs");
        }
    }
}
