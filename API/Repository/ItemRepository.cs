namespace API.Repository
{
    public class ItemRepository
    {
        private readonly IConfiguration configuration;
        public ItemRepository(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
    }
}