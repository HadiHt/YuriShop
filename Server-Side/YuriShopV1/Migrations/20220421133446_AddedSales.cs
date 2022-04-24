using Microsoft.EntityFrameworkCore.Migrations;

namespace YuriShopV1.Migrations
{
    public partial class AddedSales : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Sale",
                table: "Product",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sale",
                table: "Product");
        }
    }
}
