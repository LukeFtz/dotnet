using System;
using EShop.Web.Models;

namespace EShop.Web.Services.IServices
{
	public interface IProductService
	{
		Task<IEnumerable<ProductModel>> FindAllProducts();
        Task<ProductModel> FindProductById(long id);
        Task<ProductModel> CreateProduct(ProductModel product);
        Task<ProductModel> UpdateProduct(ProductModel product);
        Task<bool> DeleteProduct(long id);
    }
}

