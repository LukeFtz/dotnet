using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EShop.Api.Model.Base
{
	public class BaseEntity
	{
		[Key]
		[Column("id")]
		public long Id { get; set; }

		public BaseEntity()
		{

		}
	}
}

