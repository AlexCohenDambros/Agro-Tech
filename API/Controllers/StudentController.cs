using API.Interface;
using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]

    public class StudentController : ControllerBase
    {

        private IStudentRepository repository;
        public StudentController(StudentRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await repository.GetAllStudent());
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet("{idStudent}")]
        public async Task<IActionResult> GetStudentById(int idStudent)
        {
            try
            {
                return Ok(await repository.GetStudentById(idStudent));
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }
    }
}