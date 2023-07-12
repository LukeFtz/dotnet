using System;
using Duende.IdentityServer;
using Duende.IdentityServer.Models;

namespace EShop.IdentityServer.Configuration
{
	public static class ApplicationConfiguration
	{
        public const string ADMIN = "ADMIN";
        public const string CLIENT = "CLIENT";

        public static IEnumerable<IdentityResource> IdentityResources =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile(),
            };

        public static IEnumerable<ApiScope> ApiScopes =>
            new List<ApiScope>
            {
                new ApiScope("EShop", "EShop Server"),
                new ApiScope(name: "read", "Read data."),
                new ApiScope(name: "write", "Write data."),
                new ApiScope(name: "delete", "Delete data."),
            };

        public static IEnumerable<Client> Clients =>
            new List<Client>
            {
                // machine to machine client (from quickstart 1)
                new Client
                {
                    ClientId = "client",
                    ClientSecrets = { new Secret("key_to_encript".Sha256()) },

                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    // scopes that client has access to
                    AllowedScopes = { "read", "write", "profile"}
                },
                // interactive ASP.NET Core Web App
                new Client
                {
                    ClientId = "EShop_Web",
                    ClientSecrets = { new Secret("key_to_encript".Sha256()) },

                    AllowedGrantTypes = GrantTypes.Code,
            
                    // where to redirect to after login
                    RedirectUris = { "https://localhost:4430/signin-oidc" },

                    // where to redirect to after logout
                    PostLogoutRedirectUris = { "https://localhost:4430/signout-callback-oidc" },

                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        "EShop",
                        "read",
                        "write"
                    }
                },
                new Client
                {
                    ClientId = "EShop_Web_React",
                    ClientSecrets = { new Secret("key_to_encript".Sha256()) },

                    AllowedGrantTypes = GrantTypes.Code,

                    //AllowAccessTokensViaBrowser =true,
                    //AllowOfflineAccess = true,

                    // where to redirect to after login
                    //RedirectUris = { "https://localhost:4430/signin-oidc" },
                    // where to redirect to after logout
                    //PostLogoutRedirectUris = { "https://localhost:4430/signout-callback-oidc" },

                    RedirectUris = { "https://localhost:3050/api/auth/signin", "http://localhost:3000/api/auth/signin" },
                    PostLogoutRedirectUris = { "https://localhost:3050/signout-callback-oidc" },
                    AllowedCorsOrigins= { "https://localhost:3050" },

                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        "EShop",
                        "read",
                        "write"
                    }
                }
            };
    }
}

