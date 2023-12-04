using API.Interface;
using Dapper;
using Microsoft.Data.SqlClient;

namespace API.Repository
{
    public class DisciplineRepository: IDisciplineRepository
    {
        private readonly IConfiguration _configuration;
        public DisciplineRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

         public async Task<IEnumerable<DTODiscipline>> GetAllDiscipline(){
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryAsync<DTODiscipline>("SELECT * FROM dbo.TABLE_DISCIPLINE");
            return result;
        }
        public async Task<DTODiscipline> GetDisciplineById(int idDiscipline){
            using var connection = new SqlConnection(_configuration.GetConnectionString("SqlConnection"));
            var result = await connection.QueryFirstAsync<DTODiscipline>("SELECT * FROM dbo.TABLE_DISCIPLINE WHERE idDiscipline = @id", param: new {id = idDiscipline});
            return result;
        }
    }
   
}