﻿using Microsoft.EntityFrameworkCore;
using JobSender.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSender.Data
{
    public class MyDbContext : DbContext
    {
        public DbSet<MyJob> Jobs{ get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(@"Host=localhost;Port=5432;Database=EmailSender;Username=postgres;Password=123456789");
        }
    }
}
