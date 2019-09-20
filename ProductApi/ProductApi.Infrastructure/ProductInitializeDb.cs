using ProductApi.Core.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Infrastructure
{
    public class ProductInitializeDb : DropCreateDatabaseIfModelChanges<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(new Product
            {
                ProductID = "1",
                Color = "Black",
                Details = "This is a yummy chocolate",
                ExpiryDate = DateTime.Now,
                ImageUrl = "abc.jpg",
                inStock = true,
                Price = 400,
                Quantity = 50,
                Rating = 5,
                Title = "Chocolate"
            });
            context.Products.Add(new Product
            {
                ProductID = "2",
                Color = "White",
                Details = "This is the tastiest milk",
                ExpiryDate = DateTime.Now,
                ImageUrl = "xyz.jpg",
                inStock = true,
                Price = 400,
                Quantity = 30,
                Rating = 4,
                Title = "Milk"
            });
        }
    }
}
