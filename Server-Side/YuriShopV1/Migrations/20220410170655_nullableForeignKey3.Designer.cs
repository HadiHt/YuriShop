﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using YuriShopV1.Data;

namespace YuriShopV1.Migrations
{
    [DbContext(typeof(YuriShopContext))]
    [Migration("20220410170655_nullableForeignKey3")]
    partial class nullableForeignKey3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("YuriShopV1.Models.Address", b =>
                {
                    b.Property<string>("Area")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Building")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Details")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ShopRefId")
                        .HasColumnType("int");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("UserRefId")
                        .HasColumnType("int");

                    b.HasIndex("ShopRefId");

                    b.HasIndex("UserRefId");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("YuriShopV1.Models.Card", b =>
                {
                    b.Property<string>("Brand")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CVV")
                        .HasColumnType("int");

                    b.Property<int>("CardNumber")
                        .HasColumnType("int");

                    b.Property<string>("ExpirationDate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ShopRefId")
                        .HasColumnType("int");

                    b.Property<int?>("UserRefId")
                        .HasColumnType("int");

                    b.HasIndex("ShopRefId");

                    b.HasIndex("UserRefId");

                    b.ToTable("Card");
                });

            modelBuilder.Entity("YuriShopV1.Models.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("ProductRefId")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserRefId")
                        .HasColumnType("int");

                    b.HasKey("OrderId");

                    b.HasIndex("ProductRefId");

                    b.HasIndex("UserRefId");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("YuriShopV1.Models.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Color")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int>("ShopRefId")
                        .HasColumnType("int");

                    b.Property<string>("Size")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProductId");

                    b.HasIndex("ShopRefId");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("YuriShopV1.Models.Shop", b =>
                {
                    b.Property<int>("ShopId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ShopId");

                    b.ToTable("Shop");
                });

            modelBuilder.Entity("YuriShopV1.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("DataOfBirth")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isAdmin")
                        .HasColumnType("bit");

                    b.HasKey("UserId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("YuriShopV1.Models.WishList", b =>
                {
                    b.Property<int>("ProductRefId")
                        .HasColumnType("int");

                    b.Property<int>("UserRefId")
                        .HasColumnType("int");

                    b.HasIndex("ProductRefId");

                    b.HasIndex("UserRefId");

                    b.ToTable("WishList");
                });

            modelBuilder.Entity("YuriShopV1.Models.Address", b =>
                {
                    b.HasOne("YuriShopV1.Models.Shop", "Shop")
                        .WithMany()
                        .HasForeignKey("ShopRefId");

                    b.HasOne("YuriShopV1.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserRefId");

                    b.Navigation("Shop");

                    b.Navigation("User");
                });

            modelBuilder.Entity("YuriShopV1.Models.Card", b =>
                {
                    b.HasOne("YuriShopV1.Models.Shop", "Shop")
                        .WithMany()
                        .HasForeignKey("ShopRefId");

                    b.HasOne("YuriShopV1.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserRefId");

                    b.Navigation("Shop");

                    b.Navigation("User");
                });

            modelBuilder.Entity("YuriShopV1.Models.Order", b =>
                {
                    b.HasOne("YuriShopV1.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductRefId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("YuriShopV1.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserRefId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("User");
                });

            modelBuilder.Entity("YuriShopV1.Models.Product", b =>
                {
                    b.HasOne("YuriShopV1.Models.Shop", "Shop")
                        .WithMany()
                        .HasForeignKey("ShopRefId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Shop");
                });

            modelBuilder.Entity("YuriShopV1.Models.WishList", b =>
                {
                    b.HasOne("YuriShopV1.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductRefId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("YuriShopV1.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserRefId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}
