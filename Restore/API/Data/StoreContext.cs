using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class StoreContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; }
}
