using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace YuriShopV1.Migrations
{
    public partial class UpdatedMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateOfPurchase",
                table: "Order");

            migrationBuilder.RenameColumn(
                name: "DataOfBirth",
                table: "User",
                newName: "Username");

            migrationBuilder.AddColumn<int>(
                name: "PhoneNumber",
                table: "User",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PhoneNumber",
                table: "Shop",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "TimeCreated",
                table: "Order",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "User");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Shop");

            migrationBuilder.DropColumn(
                name: "TimeCreated",
                table: "Order");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "User",
                newName: "DataOfBirth");

            migrationBuilder.AddColumn<string>(
                name: "DateOfPurchase",
                table: "Order",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
