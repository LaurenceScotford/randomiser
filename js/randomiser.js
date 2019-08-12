// Randomiser
$(document).ready(function() 
{
    $("#randroll").click(function (){rollNum();})
	rollNum();
});

function rollNum()
{
	rMin = parseInt($("#randmin").val());
	rMax = parseInt($("#randmax").val());
	if (isNaN(rMin) || isNaN(rMax))
	{
		$("#randout").html("Min and Max must both be whole numbers!");
	}
	else if (rMin >= rMax)
	{
		$("#randout").html("Min must be less than Max!");
	}
	else
	{
		$("#randroll").attr('disabled', 'disabled');
		rRange = rMax + 1 - rMin
		showSequence(rMin, rMax, rRange, 10);
	}
};

function showSequence(rMin, rMax, rRange, rCount)
{
	rOut = rMin + Math.floor(Math.random() * rRange);
	$("#randout").html(rOut);
	rCount--;
	if (rCount > 0)
	{
		//alert(rCount);
		setTimeout(function (){showSequence(rMin, rMax, rRange, rCount);}, 100);
	}
	else
	{
		$("#randroll").removeAttr('disabled');
	}
}
