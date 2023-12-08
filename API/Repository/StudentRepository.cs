using Microsoft.Data.SqlClient;
using Dapper;
using API.Interface;

namespace API.Repository
{
    public class StudentRepository : IStudentRepository
    {
        private readonly IConfiguration _configuration;
        public StudentRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<IEnumerable<DTOStudent>> GetAllStudent()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryAsync<DTOStudent>("SELECT * FROM dbo.TABLE_STUDENT");
            return result;
        }

        public async Task<DTOStudent> GetStudentById(int idStudent)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryFirstAsync<DTOStudent>("SELECT * FROM dbo.TABLE_STUDENT WHERE idStudent = @id", param: new { id = idStudent });
            return result;
        }

        public async Task<DTODiscipline> GetDisciplineById(int idDiscipline)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryFirstAsync<DTODiscipline>("SELECT * FROM dbo.TABLE_DISCIPLINE WHERE idDiscipline = @id", param: new { id = idDiscipline });
            return result;
        }

        public async void AddStudent(DTOStudent student)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            await connection.ExecuteScalarAsync("INSERT INTO dbo.TABLE_STUDENT (nameStudent, lastName, enrollment, date_enrollment) VALUES(@name, @lastname, @enrollment, @date_enrollment)", param: new { name = student.nameStudent, lastname = student.lastName, enrollment = student.enrollment, date_enrollment = student.date_enrollment });
        }

        public async void PutStudent(DTOStudent student)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            await connection.ExecuteScalarAsync("UPDATE dbo.TABLE_STUDENT SET nameStudent = @name, lastName = @lastname, enrollment = @enrollment, date_enrollment, @date_enrollment WHERE idStudent = @id", param: new { id = student.idStudent, name = student.nameStudent, lastname = student.lastName, enrollment = student.enrollment, date_enrollment = student.date_enrollment });

        }

        public async void DeleteStudent(int idStudent)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            await connection.ExecuteScalarAsync("DELETE FROM dbo.TABLE_STUDENT WHERE idStudent = @id", param: new { id = idStudent });
        }


    }
}