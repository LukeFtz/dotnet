using System;
using AutoMapper;
using EShop.Api.Data.ValueObjects;
using EShop.Api.Model;

namespace EShop.Api.Config
{
	public class MappingConfig
	{
		public static MapperConfiguration RegisterMaps()
		{
			var mappingConfig = new MapperConfiguration(config =>
			{
				config.CreateMap<ProductVO, Product>();
				config.CreateMap<Product, ProductVO>();
			});
			return mappingConfig;
		}
	}
}

