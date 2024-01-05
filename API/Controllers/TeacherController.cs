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

        [HttpGet("/get-all-teacher")]
        public async Task<IActionResult> GetAllTeacherAsync()
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

        [HttpGet("/get-teacher-byid")]
        public async Task<IActionResult> GetTeacherById([FromQuery] int idTeacher)
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

        [HttpGet("by-discipline")]
        public async Task<IActionResult> GetTeacherDisciplineById([FromQuery] int idTeacher)
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

        [HttpPost("/add-new-teacher")]
        public IActionResult AddTeacher([FromBody] DTOTeacher teacherDTO)
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

        [HttpPut("/update-teacher")]
        public async Task<IActionResult> PutTeacher([FromBody] DTOTeacher teacherDTO)
        {

            try
            {
                var student = await repository.GetTeacherById(teacherDTO.idTeacher);

                if (student == null) return NotFound();

                repository.PutTeacher(teacherDTO);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpDelete("/delete-teacher")]
        public async Task<IActionResult> DeleteTeacher([FromQuery] int idTeacher)
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