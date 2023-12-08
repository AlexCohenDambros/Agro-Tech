using API.Repository;
namespace API.Interface
{
    public interface ITeacherRepository
    {
        Task<IEnumerable<DTOTeacher>> GetAllTeacherAsync();
        Task<DTOTeacher> GetTeacherById(int idTeacher);

        Task<DTODiscipline> GetTeacherDisciplineById(int idTeacher);

        void AddTeacher(DTOTeacher teacher);

        void PutTeacher(DTOTeacher teacher);

        void DeleteTeacher(int idTeacher);
    }
}