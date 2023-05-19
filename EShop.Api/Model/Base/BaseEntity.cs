using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EShop.Api.Model.Base
{
	public class BaseEntity
	{
		[Key]
		[Column("id")]
		public long ID { get; set; }

		public BaseEntity()
		{

		}
	}
}

