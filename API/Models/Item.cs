namespace API.Models
{
    public class Item
    {
        public Item() { }
        public Item(int id, string name, int qtd, int price, string date)
        {
            this.id = id;
            this.name = name;
            this.qtd = qtd;
            this.price = price;
            this.date = date;

        }
        public int id { get; set; }
        public string name { get; set; }
        public int qtd { get; set; }
        public int price { get; set; }
        public string date { get; set; }
    }
}