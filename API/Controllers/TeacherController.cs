using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class TeacherController : ControllerBase
    {

        [HttpGet]

        public IActionResult Get()
        {
            try
            {
                return Ok("teste2");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }

        }
    }
}