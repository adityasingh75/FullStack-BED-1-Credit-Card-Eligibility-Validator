<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
<title>CreditCard-Home Page</title>
</head>

<body align="center" style="background-color: #88b04b">

	<h1>Check for Credit Card Eligibility</h1>

	<form action="checkEligibility" method="post">

		<label>Enter PAN Number: </label> <input type="text" name="panNo"
			required pattern="[a-zA-Z0-9]{10}"
			title="10 character alpha numeric" /><br>
		<br> <button type="submit" id="submit">Check</button>

	</form>

</body>

</html>
