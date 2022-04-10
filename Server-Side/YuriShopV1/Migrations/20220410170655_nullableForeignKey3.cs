using Microsoft.EntityFrameworkCore.Migrations;

namespace YuriShopV1.Migrations
{
    public partial class nullableForeignKey3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_Shop_ShopRefId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_Address_User_UserRefId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_Card_Shop_ShopRefId",
                table: "Card");

            migrationBuilder.DropForeignKey(
                name: "FK_Card_User_UserRefId",
                table: "Card");

            migrationBuilder.AlterColumn<int>(
                name: "UserRefId",
                table: "Card",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ShopRefId",
                table: "Card",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UserRefId",
                table: "Address",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ShopRefId",
                table: "Address",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Shop_ShopRefId",
                table: "Address",
                column: "ShopRefId",
                principalTable: "Shop",
                principalColumn: "ShopId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Address_User_UserRefId",
                table: "Address",
                column: "UserRefId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Card_Shop_ShopRefId",
                table: "Card",
                column: "ShopRefId",
                principalTable: "Shop",
                principalColumn: "ShopId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Card_User_UserRefId",
                table: "Card",
                column: "UserRefId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Address_Shop_ShopRefId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_Address_User_UserRefId",
                table: "Address");

            migrationBuilder.DropForeignKey(
                name: "FK_Card_Shop_ShopRefId",
                table: "Card");

            migrationBuilder.DropForeignKey(
                name: "FK_Card_User_UserRefId",
                table: "Card");

            migrationBuilder.AlterColumn<int>(
                name: "UserRefId",
                table: "Card",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ShopRefId",
                table: "Card",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserRefId",
                table: "Address",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ShopRefId",
                table: "Address",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Address_Shop_ShopRefId",
                table: "Address",
                column: "ShopRefId",
                principalTable: "Shop",
                principalColumn: "ShopId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Address_User_UserRefId",
                table: "Address",
                column: "UserRefId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Card_Shop_ShopRefId",
                table: "Card",
                column: "ShopRefId",
                principalTable: "Shop",
                principalColumn: "ShopId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Card_User_UserRefId",
                table: "Card",
                column: "UserRefId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
