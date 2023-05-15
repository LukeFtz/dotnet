using System;
using Microsoft.AspNetCore.Mvc;

namespace RestAPI.Interfaces
{
	public interface ICalculatorInterface
	{
        IActionResult Sum(string firstNumber, string secondNumber);
        IActionResult Sub();
        IActionResult Mult();
        IActionResult Div();
        IActionResult Aver();
        IActionResult Squa();
    }
}