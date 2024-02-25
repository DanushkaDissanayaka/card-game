using Base.Model.Common;
using Base.Model.Common.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    public class BaseController:Controller
    {
        protected ActionResult ISE(Exception e)
        {

            // TODO: Impliemt error loggin

            return StatusCode(StatusCodes.Status500InternalServerError, new ResponseError<Exception>
            {
                Message = e.Message,
                e = null
            });
        }
    }
}
