using System;
using RestAPI.Model;

namespace RestAPI.Services.Implementations
{
	public class PersonServiceImplementation:IPersonServices
	{
        private volatile int count;

		public PersonServiceImplementation()
		{
		}

        public Person Create(Person person)
        {
            return person;
        }

        public void Delete(long id)
        {
        }

        public List<Person> FindAll()
        {
            List<Person> persons = new List<Person>();
            for(int i=0; i<10;i++)
            {
                Person person = createPerson(i);
                persons.Add(person);
            }
            return persons;
        }

        public Person FindByID(long id)
        {
            return new Person
            {
                id = IncrementAndGet(),
                firstName = "Luke",
                lastName = "Fitzpatrick",
                address = "Some Where",
                gender = "Male"
            };
        }

        public Person Update(Person person)
        {
            return person;
        }

        private Person createPerson(int i)
        {
            return new Person
            {
                id = IncrementAndGet(),
                firstName = "Name "+i,
                lastName = "Last Name "+ i,
                address = "Some Where "+ i,
                gender = "Male"
            };
        }

        private long IncrementAndGet()
        {
            return Interlocked.Increment(ref count);
        }
    }
}

