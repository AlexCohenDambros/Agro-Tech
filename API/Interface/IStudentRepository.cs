using API.Repository;

namespace API.Interface
{
    public interface IStudentRepository
    {
         Task<IEnumerable<DTOStudent>> GetAllStudent();
    }
}