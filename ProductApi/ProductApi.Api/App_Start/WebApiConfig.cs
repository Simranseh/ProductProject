using ProductApi.Core.Repositories;
using ProductApi.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Unity;
using Unity.Lifetime;

namespace ProductApi.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {    
            // Web API configuration and services
           // var container = new UnityContainer();
           // container.RegisterType<IProductRepository, ProductRepository>(new HierarchicalLifetimeManager());
            //config.DependencyResolver = new UnityResolver(container);
            // Web API routes 
            config.MapHttpAttributeRoutes();
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
