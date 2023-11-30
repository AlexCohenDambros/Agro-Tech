using Microsoft.Data.SqlClient;
using Dapper;
using API.Interface;

namespace API.Repository
{
    public class StudentRepository: IStudentRepository
    {
        private readonly IConfiguration _configuration;
        public StudentRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<IEnumerable<DTOStudent>> GetAllStudent(){
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryAsync<DTOStudent>("SELECT * FROM dbo.TABLE_STUDENT");
            return result;
        }
    }
}