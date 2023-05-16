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

    [HttpGet("Sqrt/{number}")]
    public IActionResult Squa(string number)
    {
        if (isNumeric(number))
        {
            var finalValue = Math.Sqrt(Convert.ToSingle(Double.Parse(number)));
            return Ok(finalValue.ToString());
        }

        return BadRequest("Invalid Input");
    }

    [HttpGet("aver/{firstNumber}/{secondNumber}")]
    public IActionResult Aver(string firstNumber, string secondNumber)
    {
        if (isNumeric(firstNumber) && isNumeric(secondNumber))
        {
            var finalValue = (convertToDecimal(firstNumber) + convertToDecimal(secondNumber))/2;
            return Ok(finalValue.ToString());
        }

        return BadRequest("Invalid Input");
    }

    //[HttpGet("aver/{number:string[]}/")]
    //public IActionResult Aver(string[] numbers)
    //{
    //    if (checkArray(numbers))
    //    {
    //        decimal[] finalArray = (decimal[])numbers.Select(x => convertToDecimal(x));
    //        var finalValue = finalArray.Sum() / finalArray.Length;
    //        return Ok(finalValue.ToString());
    //    }

    //    return BadRequest("Invalid Input");
    //}

    [HttpGet("div/{firstNumber}/{secondNumber}")]
    public IActionResult Div(string firstNumber, string secondNumber)
    {
        if (isNumeric(firstNumber) && isNumeric(secondNumber))
        {
            var finalValue = convertToDecimal(firstNumber) / convertToDecimal(secondNumber);
            return Ok(finalValue.ToString());
        }

        return BadRequest("Invalid Input");
    }

    [HttpGet("mult/{firstNumber}/{secondNumber}")]
    public IActionResult Mult(string firstNumber, string secondNumber)
    {
        if (isNumeric(firstNumber) && isNumeric(secondNumber))
        {
            var finalValue = convertToDecimal(firstNumber) * convertToDecimal(secondNumber);
            return Ok(finalValue.ToString());
        }

        return BadRequest("Invalid Input");
    }

    [HttpGet("sub/{firstNumber}/{secondNumber}")]
    public IActionResult Sub(string firstNumber, string secondNumber)
    {
        if (isNumeric(firstNumber) && isNumeric(secondNumber))
        {
            var finalValue = convertToDecimal(firstNumber) - convertToDecimal(secondNumber);
            return Ok(finalValue.ToString());
        }

        return BadRequest("Invalid Input");
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

    private bool checkArray(string[] strNumber)
    {
        var invalidArray = strNumber.First(x => !isNumeric(x));

        if (invalidArray != "")
        {
            return false;
        }
        return true;
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
