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
        public StudentController (StudentRepository repository){
            this.repository = repository;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
           return Ok(await repository.GetAllStudent());
        }
    }
}