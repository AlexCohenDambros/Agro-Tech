using API.Repository;

namespace API.Interface
{
    public interface IDisciplineRepository
    {

         Task<IEnumerable<DTODiscipline>> GetAllDiscipline();
         Task<DTODiscipline> GetDisciplineById(int idDiscipline);
    }
}