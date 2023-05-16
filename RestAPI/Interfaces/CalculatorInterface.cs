using System;
using Microsoft.AspNetCore.Mvc;

namespace RestAPI.Interfaces
{
	public interface ICalculatorInterface
	{
        IActionResult Sum(string firstNumber, string secondNumber);
        IActionResult Sub(string firstNumber, string secondNumber);
        IActionResult Mult(string firstNumber, string secondNumber);
        IActionResult Div(string firstNumber, string secondNumber);
        IActionResult Aver(string firstNumber, string secondNumber);
        IActionResult Squa(string number);
    }
}