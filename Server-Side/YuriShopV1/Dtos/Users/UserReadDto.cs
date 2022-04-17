namespace YuriShopV1.Dtos.Users
{
    public class UserReadDto
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string DataOfBirth { get; set; }
        public bool isAdmin { get; set; }
    }
}
