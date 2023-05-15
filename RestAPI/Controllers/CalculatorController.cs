using Microsoft.AspNetCore.Mvc;
using RestAPI.Interfaces;

namespace RestAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class CalculatorController : ControllerBase, ICalculatorInterface
{

    private readonly ILogger<CalculatorController> _logger;

    public CalculatorController(ILogger<CalculatorController> logger)
    {
        _logger = logger;
    }

    public IActionResult Aver()
    {
        throw new NotImplementedException();
    }

    public IActionResult Div()
    {
        throw new NotImplementedException();
    }

    public IActionResult Mult()
    {
        throw new NotImplementedException();
    }

    public IActionResult Squa()
    {
        throw new NotImplementedException();
    }

    public IActionResult Sub()
    {
        throw new NotImplementedException();
    }

    [HttpGet("sum/{firstNumber}/{secondNumber}")]
    public IActionResult Sum(string firstNumber, string secondNumber)
    {
        if(isNumeric(firstNumber) && isNumeric(secondNumber))
        {
            var finalValue = convertToDecimal(firstNumber) + convertToDecimal(secondNumber);
            return Ok(finalValue.ToString()); 
        }

        return BadRequest("Invalid Input");
    }

    private bool isNumeric(string strNumber)
    {
        double number;
        bool isNumber = Double.TryParse(
            strNumber,
            System.Globalization.NumberStyles.Any,
            System.Globalization.NumberFormatInfo.InvariantInfo,
            out number);
        return isNumber;

    }

    private decimal convertToDecimal(string strNumber)
    {
        decimal decimalValue;
        if (Decimal.TryParse(strNumber, out decimalValue))
        {
            return decimalValue;
        }
        return 0;
    }
}
