//using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using Microsoft.AspNetCore.Identity;
using EShop.IdentityServer.Model;
using EShop.IdentityServer.Configuration;
using EShop.IdentityServer.Initializer;
using Microsoft.EntityFrameworkCore;
using EShop.IdentityServer.Model.Context;
using EShop.IdentityServer.Services;
using Duende.IdentityServer.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


var connection = builder.Configuration["MySQLConnection:MySQLConnectionString"];

builder.Services.AddDbContext<MySQLContext>(options => options.UseMySql
    (
        connection,
        new MySqlServerVersion(new Version(8, 0, 33))
    ));

builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<MySQLContext>()
    .AddDefaultTokenProviders();

var _builder = builder.Services.AddIdentityServer(options =>
{
    options.Events.RaiseErrorEvents = true;
    options.Events.RaiseFailureEvents = true;
    options.Events.RaiseInformationEvents = true;
    options.Events.RaiseSuccessEvents = true;
    options.EmitStaticAudienceClaim = true;
}).AddInMemoryIdentityResources(
        ApplicationConfiguration.IdentityResources)
  .AddInMemoryApiScopes(ApplicationConfiguration.ApiScopes)
  .AddInMemoryClients(ApplicationConfiguration.Clients)
  .AddAspNetIdentity<ApplicationUser>();

builder.Services.AddScoped<IDbInitializer, DbInitializer>();

builder.Services.AddScoped<IProfileService, ProfileService>();

_builder.AddDeveloperSigningCredential();

var app = builder.Build();

var initializer = app.Services.CreateScope().ServiceProvider.GetService<IDbInitializer>();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseIdentityServer();
app.UseAuthorization();

initializer.Initialize();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();