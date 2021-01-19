using Microsoft.EntityFrameworkCore;
using JobSender.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSender.Data
{
    public class MyDbContext : DbContext
    {
        public DbSet<Message> Messages { get; set; }
        public DbSet<MyJob> Jobs{ get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Test;Trusted_Connection=True;");
        }
    }
}
