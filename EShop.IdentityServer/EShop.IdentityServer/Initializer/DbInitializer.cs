using System;
using System.Security.Claims;
using EShop.IdentityServer.Configuration;
using EShop.IdentityServer.Initializer;
using EShop.IdentityServer.Model;
using EShop.IdentityServer.Model.Context;
using IdentityModel;
using Microsoft.AspNetCore.Identity;

namespace EShop.IdentityServer.Initializer
{
    public class DbInitializer : IDbInitializer
    {
        private readonly MySQLContext _context;
        private readonly UserManager<ApplicationUser> _user;
        private readonly RoleManager<IdentityRole> _role;

        public DbInitializer(MySQLContext context,
            UserManager<ApplicationUser> user,
            RoleManager<IdentityRole> role)
        {
            _context = context;
            _user = user;
            _role = role;
        }

        public void Initialize()
        {
            if (_role.FindByNameAsync(ApplicationConfiguration.ADMIN).Result != null) return;
            _role.CreateAsync(new IdentityRole(ApplicationConfiguration.ADMIN))
                .GetAwaiter().GetResult();
            _role.CreateAsync(new IdentityRole(ApplicationConfiguration.CLIENT))
                .GetAwaiter().GetResult();

            ApplicationUser admin = new ApplicationUser()
            {
                UserName="Luke-admin",
                FirstName = "Luke",
                LastName = "Admin",
                PhoneNumber = "+55 (61) 99999999",
                Email = "admin@exemple.com",
                EmailConfirmed = true,
            };
            _user.CreateAsync(admin, "Admin123$").GetAwaiter().GetResult();
            _user.AddToRoleAsync(admin, ApplicationConfiguration.ADMIN).GetAwaiter().GetResult();

            var userClaims = _user.AddClaimsAsync(admin, new Claim[]
            {
                new Claim(JwtClaimTypes.Name,$"{admin.FirstName} {admin.LastName}"),
                new Claim(JwtClaimTypes.GivenName,admin.FirstName),
                new Claim(JwtClaimTypes.FamilyName,admin.LastName),
                new Claim(JwtClaimTypes.Role, ApplicationConfiguration.ADMIN)
            }).Result;

            ApplicationUser client = new ApplicationUser()
            {
                UserName = "Luke-client",
                FirstName = "Luke",
                LastName = "Client",
                PhoneNumber = "+55 (61) 99999999",
                Email = "client@exemple.com",
                EmailConfirmed = true,
            };
            _user.CreateAsync(client, "Admin123$").GetAwaiter().GetResult();
            _user.AddToRoleAsync(client, ApplicationConfiguration.CLIENT).GetAwaiter().GetResult();

            var clientClaims = _user.AddClaimsAsync(client, new Claim[]
            {
                new Claim(JwtClaimTypes.Name,$"{client.FirstName} {client.LastName}"),
                new Claim(JwtClaimTypes.GivenName,client.FirstName),
                new Claim(JwtClaimTypes.FamilyName,client.LastName),
                new Claim(JwtClaimTypes.Role, ApplicationConfiguration.CLIENT)
            }).Result;
        }
    }
}

