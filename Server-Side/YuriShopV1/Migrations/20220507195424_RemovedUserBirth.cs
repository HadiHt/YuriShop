using Microsoft.EntityFrameworkCore.Migrations;

namespace YuriShopV1.Migrations
{
    public partial class RemovedUserBirth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataOfBirth",
                table: "User");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DataOfBirth",
                table: "User",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
