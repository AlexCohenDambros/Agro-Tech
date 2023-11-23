namespace API.Models
{
    public class ItemFarm
    {
        public ItemFarm() { }

        public ItemFarm(int itemId, int farmId)
        {
            this.ItemId = itemId;
            this.FarmId = farmId;

        }
        public int ItemId { get; set; }
        public int FarmId { get; set; }
        public Item Item { get; set; }
        public Farm Farm { get; set; }

    }
}