using API.Repository;

namespace API.Interface
{
    public interface IStudentRepository
    {
        Task<IEnumerable<DTOStudent>> GetAllStudent();
        Task<DTOStudent> GetStudentById(string idStudent);

        Task<DTODiscipline> GetDisciplineById(string idDiscipline);

        void AddStudent(DTOStudent student);

        void PutStudent(DTOStudent student);

        void DeleteStudent(string idStudent);
    }
}