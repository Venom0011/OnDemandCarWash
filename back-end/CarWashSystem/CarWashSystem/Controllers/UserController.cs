using CarWashSystem.Data;
using CarWashSystem.DTO;
using CarWashSystem.Interfaces;
using CarWashSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarWashSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUser userrepository;

        public UserController(IUser userrepository)
        {
            this.userrepository = userrepository;
        }

        //Get all user
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser([FromQuery] string? fiteredQuery, [FromQuery] string? sortBy, [FromQuery] bool? isAscending, [FromQuery] int pageNumber = 1, int pageSize = 1000)
        {
            var users = await userrepository.GetUsers(fiteredQuery, sortBy, isAscending ?? true, pageNumber, pageSize);

            var userdto = new List<Userdto>();
            foreach (var user in users)
            {

                userdto.Add(new Userdto()
                {
                    Id = user.Id,
                    FullName = user.FullName,
                    Email = user.Email,
                    Address = user.Address,
                    Role = user.Role
                });
            }

            return Ok(userdto);
        }

        //Get User by Id
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<User>>> GetUserById(int id)
        {


            var user = await userrepository.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            var userdto = new Userdto()
            {
                Id = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                Address = user.Address,
                Role = user.Role
            };

            return Ok(userdto);
        }

        //Add User
        [HttpPost]
        public async Task<ActionResult<IEnumerable<User>>> PostUser(CreateUserdto createuser)
        {

            var user = new User() {
                FullName = createuser.FullName,
                Email = createuser.Email,
                Address = createuser.Address,
                Role = createuser.Role
            };
            user = await userrepository.CreateUser(user);
            return Ok();
        }

        //Update User


        //Delete User
        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteUser(int id)
        {

            var user = await userrepository.DeleteUser(id);
            if (user == null)
            {
                return BadRequest("User Not Found");
            }
            // no asyn method for remove so no await for remove

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUser(int id,UserUpdatedto userdto)
        {
            var user = new User()
            {
                FullName=userdto.FullName,
                Email=userdto.Email,
                Address=userdto.Address
                
            };

             user = await userrepository.UpdateUser(id, user);
            if (user == null)
            {
                return BadRequest("User Not Found");
            }
            return Ok();
        }
    }
}
