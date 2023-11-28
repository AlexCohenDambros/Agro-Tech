namespace API.Models
{
    public class ItemTeacher
    {
        public ItemTeacher() { }

        public ItemTeacher(int itemId, int teacherId)
        {
            this.ItemId = itemId;
            this.TeacherId = teacherId;

        }
        public int ItemId { get; set; }
        public int TeacherId { get; set; }
        public Item Item { get; set; }
        public Teacher Teacher { get; set; }

    }
}