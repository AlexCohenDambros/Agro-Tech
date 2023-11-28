namespace API.Models
{
    public class Teacher
    {
        public Teacher() { }
        public Teacher(int id, string name, string street, string district, string city, string zip_code, string date)
        {
            this.id = id;
            this.name = name;
            this.street = street;
            this.district = district;
            this.city = city;
            this.zip_code = zip_code;
            this.date = date;

        }
        public int id { get; set; }
        public string name { get; set; }
        public string street { get; set; }
        public string district { get; set; }
        public string city { get; set; }
        public string zip_code { get; set; }
        public string date { get; set; }
    }
}