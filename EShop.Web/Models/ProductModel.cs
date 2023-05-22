using System;
namespace EShop.Web.Models
{
	public class ProductModel
	{
        public long ID { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string CategoryName { get; set; }
        public string ImageUrl { get; set; }
	}
}

