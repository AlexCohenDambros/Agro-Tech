using API.Interface;
using API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class TeacherController : ControllerBase
    {

        private ITeacherRepository repository;
        public TeacherController(TeacherRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await repository.GetAllTeacherAsync());
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet("{idTeacher}")]
        public async Task<IActionResult> GetTeacherById(int idTeacher)
        {
            try
            {
                return Ok(await repository.GetTeacherById(idTeacher));
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpGet("ByDiscipline/{idDiscipline}")]
        public async Task<IActionResult> GetTeacherDisciplineById(int idTeacher)
        {
            try
            {
                return Ok(await repository.GetTeacherDisciplineById(idTeacher));
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult AddTeacher(DTOTeacher teacherDTO)
        {
            try
            {
                repository.AddTeacher(teacherDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPut]
        public async Task<IActionResult> PutTeacher(int idTeacher, DTOTeacher teacherDTO)
        {

            try
            {
                var student = await repository.GetTeacherById(idTeacher);

                if (student == null) return NotFound();

                repository.PutTeacher(teacherDTO);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTeacher(int idTeacher)
        {
            try
            {
                var student = await repository.GetTeacherById(idTeacher);

                if (student == null) return NotFound();

                repository.DeleteTeacher(idTeacher);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}