using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]

    public class ItemController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            try{
               return Ok("teste");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
            
        }
    }
}