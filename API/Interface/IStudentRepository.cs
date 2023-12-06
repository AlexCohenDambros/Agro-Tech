using API.Repository;

namespace API.Interface
{
    public interface IStudentRepository
    {
        Task<IEnumerable<DTOStudent>> GetAllStudent();
        Task<DTOStudent> GetStudentById(int idStudent);

        Task<DTODiscipline> GetDisciplineById(int idDiscipline);

        void AddStudent(DTOStudent student);

        void PutStudent(DTOStudent student);

        void DeleteStudent(int idStudent);
    }
}