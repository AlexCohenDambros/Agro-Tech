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

        [HttpGet("get-all-student")]
        public async Task<IActionResult> GetAllStudent()
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

        [HttpGet("get-student-byid")]
        public async Task<IActionResult> GetStudentById([FromQuery] string idStudent)
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

        [HttpGet("student-discipline")]
        public async Task<IActionResult> GetDisciplineById([FromQuery] string idStudent)
        {
            try
            {
                return Ok(await repository.GetDisciplineById(idStudent));
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost("add-student")]
        public IActionResult AddStudent([FromBody] DTOStudent studentDTO)
        {
            try
            {
                repository.AddStudent(studentDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPut("update-student")]
        public async Task<IActionResult> PutStudent([FromBody] DTOStudent studentDTO)
        {

            try
            {
                var student = await repository.GetStudentById(studentDTO.idStudent);

                if (student == null) return NotFound();

                repository.PutStudent(studentDTO);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpDelete("delete-student")]
        public async Task<IActionResult> DeleteStudent([FromQuery] string idStudent)
        {
            try
            {
                var student = await repository.GetStudentById(idStudent);

                if (student == null) return NotFound();

                repository.DeleteStudent(idStudent);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}