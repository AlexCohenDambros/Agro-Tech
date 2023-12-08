using Microsoft.Data.SqlClient;
using Dapper;
using API.Interface;

namespace API.Repository
{
    public class TeacherRepository : ITeacherRepository
    {
        private readonly IConfiguration _configuration;
        public TeacherRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<IEnumerable<DTOTeacher>> GetAllTeacherAsync()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryAsync<DTOTeacher>("SELECT * FROM dbo.TABLE_TEACHER");
            return result;
        }

        public async Task<DTOTeacher> GetTeacherById(int idTeacher)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryFirstAsync<DTOTeacher>("SELECT * FROM dbo.TABLE_TEACHER WHERE idTeacher = @id", param: new { id = idTeacher });
            return result;
        }

        public async Task<DTODiscipline> GetTeacherDisciplineById(int idTeacher)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryFirstAsync<DTODiscipline>("SELECT * FROM dbo.TABLE_DISCIPLINE WHERE idTeacher = @id", param: new { id = idTeacher });
            return result;
        }

        public async void AddTeacher(DTOTeacher teacher)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            await connection.ExecuteScalarAsync("INSERT INTO dbo.TABLE_TEACHER (nameTeacher) VALUES(@name)", param: new { name = teacher.nameTeacher });
        }

        public async void PutTeacher(DTOTeacher teacher)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            await connection.ExecuteScalarAsync("UPDATE dbo.TABLE_TEACHER SET nameTeacher = @name WHERE idTeacher = @id", param: new { id = teacher.idTeacher, name = teacher.nameTeacher });

        }

        public async void DeleteTeacher(int idTeacher)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            await connection.ExecuteScalarAsync("DELETE FROM dbo.TABLE_TEACHER WHERE idTeacher = @id", param: new { id = idTeacher });
        }
    }
}