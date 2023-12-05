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

        [HttpGet("ByDiscipline/{idDiscipline}")]
        public async Task<IActionResult> GetByDisciplinaId(int idDiscipline)
        {
            try
            {
                return Ok(await repository.GetByDisciplinaId(idDiscipline));
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostStudent(DTOStudent studentDTO)
        {
            try
            {
                return Ok(await repository.PostStudent(studentDTO));
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPut]
        public async Task<IActionResult> PutStudent(int idStudent, DTOStudent studentDTO)
        {

            try
            {
                var student = await repository.GetStudentById(idStudent);

                if (student == null) return NotFound();

                return Ok(await repository.PutStudent(studentDTO));
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteStudent(int idStudent)
        {

            try
            {
                var student = await repository.GetStudentById(idStudent);

                if (student == null) return NotFound();

                return Ok(await repository.DeleteStudent(idStudent));
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }


    }
}