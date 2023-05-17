using System;
using RestAPI.Services.Implementations;

namespace RestAPI.Model
{
	public class Person
    {
		public long id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }
        public string gender { get; set; }

        public Person()
		{
		}
    }
}

