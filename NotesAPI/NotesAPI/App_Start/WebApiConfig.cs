using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NotesAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            GlobalConfiguration.Configuration.Formatters
                   .JsonFormatter.SerializerSettings.Re‌​ferenceLoopHandling
                   = ReferenceLoopHandling.Ignore;
            //https://www.codeschool.com/discuss/t/how-to-solve-no-access-control-allow-origin-header-is-present-on-the-requested-resource-origin-null-is-therefore-not-allowed-access-in-angular-js/28989/3
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Root",
                routeTemplate: "",   // indicates the root URL
                defaults: new { controller = "Note", action = "GetNotes" }   // the controller action to handle this URL
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "{controller}/{action}/{Id}",
                defaults: new { controller = "Note", action = "GetNote", Id = RouteParameter.Optional}
            );

          
        }
    }
}
