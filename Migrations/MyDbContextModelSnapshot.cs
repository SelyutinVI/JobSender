﻿// <auto-generated />
using System;
using System.Collections.Generic;
using JobSender.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace JobSender.Migrations
{
    [DbContext(typeof(MyDbContext))]
    partial class MyDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("JobSender.Models.Message", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Body")
                        .HasColumnType("text");

                    b.Property<string>("Subject")
                        .HasColumnType("text");

                    b.Property<List<string>>("To")
                        .HasColumnType("text[]");

                    b.HasKey("ID");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("JobSender.Models.MyJob", b =>
                {
                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.Property<string>("Cron")
                        .HasColumnType("text");

                    b.Property<string>("CronDesc")
                        .HasColumnType("text");

                    b.Property<int?>("MessageID")
                        .HasColumnType("integer");

                    b.Property<string>("ObjectJson")
                        .HasColumnType("text");

                    b.Property<string>("ObjectType")
                        .HasColumnType("text");

                    b.HasKey("Title");

                    b.HasIndex("MessageID");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("JobSender.Models.MyJob", b =>
                {
                    b.HasOne("JobSender.Models.Message", "Message")
                        .WithMany()
                        .HasForeignKey("MessageID");

                    b.Navigation("Message");
                });
#pragma warning restore 612, 618
        }
    }
}
