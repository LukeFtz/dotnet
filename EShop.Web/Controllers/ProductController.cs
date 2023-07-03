using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShop.Web.Models;
using EShop.Web.Services.IServices;
using EShop.Web.Utils;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EShop.Web.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductService _productservice;

        public ProductController(IProductService productservice)
        {
            _productservice = productservice ?? throw new ArgumentNullException(nameof(productservice));
        }

        [Authorize]
        public async Task<IActionResult> ProductIndex()
        {
            var token = await HttpContext.GetTokenAsync("access_token");
            var products = await _productservice.FindAllProducts(token);
            return View(products);
        }

        public async Task<IActionResult> ProductCreate()
        {
            return View();
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> ProductCreate(ProductModel model)
        {
            if (ModelState.IsValid)
            {
                var token = await HttpContext.GetTokenAsync("access_token");
                var response = await _productservice.CreateProduct(model, token);
                if (response != null) return RedirectToAction(nameof(ProductIndex));
            }
            return View(model);
        }

        public async Task<IActionResult> ProductUpdate(long id)
        {
            var token = await HttpContext.GetTokenAsync("access_token");
            var response = await _productservice.FindProductById(id, token);
            if (response != null) return View(response);
            return NotFound();
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> ProductUpdate(ProductModel model)
        {
            if (ModelState.IsValid)
            {
                var token = await HttpContext.GetTokenAsync("access_token");
                var response = await _productservice.UpdateProduct(model, token);
                if (response != null) return RedirectToAction(nameof(ProductIndex));
            }
            return View(model);
        }

        [Authorize]
        public async Task<IActionResult> ProductDelete(long id)
        {
            var token = await HttpContext.GetTokenAsync("access_token");
            var response = await _productservice.FindProductById(id, token);
            if (response != null) return View(response);
            return NotFound();
        }

        [HttpPost]
        [Authorize(Roles = Role.ADMIN)]
        public async Task<IActionResult> ProductDelete(ProductModel model)
        {
            var token = await HttpContext.GetTokenAsync("access_token");
            var response = await _productservice.DeleteProduct(model.ID, token);
            if (response) return RedirectToAction(nameof(ProductIndex));
            return View(model);
        }
    }
}

