using API.Repository;

namespace API.Interface
{
    public interface IStudentRepository
    {
         Task<IEnumerable<DTOStudent>> GetAllStudent();
         Task<DTOStudent> GetStudentById(int idStudent);
    }
}