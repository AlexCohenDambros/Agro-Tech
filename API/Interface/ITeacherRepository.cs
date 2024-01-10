using API.Repository;

namespace API.Interface
{
    public interface ITeacherRepository
    {
        Task<IEnumerable<DTOTeacher>> GetAllTeacherAsync();
        Task<DTOTeacher> GetTeacherById(string idTeacher);

        Task<DTODiscipline> GetTeacherDisciplineById(string idTeacher);

        void AddTeacher(DTOTeacher teacher);

        void PutTeacher(DTOTeacher teacher);

        void DeleteTeacher(string idTeacher);
    }
}