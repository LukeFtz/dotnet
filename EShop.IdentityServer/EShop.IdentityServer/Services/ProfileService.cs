using System;
using System.Security.Claims;
using Duende.IdentityServer.Extensions;
using Duende.IdentityServer.Models;
using Duende.IdentityServer.Services;
using EShop.IdentityServer.Model;
using IdentityModel;
using Microsoft.AspNetCore.Identity;

namespace EShop.IdentityServer.Services
{
	public class ProfileService : IProfileService
	{
        private readonly UserManager<ApplicationUser> _userManger;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IUserClaimsPrincipalFactory<ApplicationUser> _userClaimsPrincipalFactory;

        public ProfileService(
            UserManager<ApplicationUser> userManger,
            RoleManager<IdentityRole> roleManager,
            IUserClaimsPrincipalFactory<ApplicationUser> userClaimsPrincipalFactory)
        {
            _userManger = userManger ?? throw new ArgumentNullException(nameof(userManger));
            _roleManager = roleManager ?? throw new ArgumentNullException(nameof(roleManager));
            _userClaimsPrincipalFactory = userClaimsPrincipalFactory ?? throw new ArgumentNullException(nameof(userClaimsPrincipalFactory));
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            string id = context.Subject.GetSubjectId();
            ApplicationUser user = await _userManger.FindByIdAsync(id);
            ClaimsPrincipal userClaims = await _userClaimsPrincipalFactory.CreateAsync(user);

            List<Claim> claims = userClaims.Claims.ToList();
            claims.Add(new Claim(JwtClaimTypes.FamilyName, user.LastName));
            claims.Add(new Claim(JwtClaimTypes.GivenName, user.FirstName));

            if (_userManger.SupportsUserRole)
            {
                IList<string> roles = await _userManger.GetRolesAsync(user);
                foreach (string role in roles)
                {
                    claims.Add(new Claim(JwtClaimTypes.Role, role));
                    if (_roleManager.SupportsRoleClaims)
                    {
                        IdentityRole identityRole = await _roleManager.FindByNameAsync(role);
                        if (identityRole != null)
                        {
                            claims.AddRange(
                                await _roleManager.GetClaimsAsync(identityRole
                                ));
                        }
                    }
                }

            }


            context.IssuedClaims = claims;
        }

        public async Task IsActiveAsync(IsActiveContext context)
        {
            string id = context.Subject.GetSubjectId();
            ApplicationUser user = await _userManger.FindByIdAsync(id);
            context.IsActive = user != null;

        }
    }
}

