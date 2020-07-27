package com.spring.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.spring.service.CustomerService;

@Controller
public class CustomerController {
	
	@Autowired
	CustomerService customerService;

	@RequestMapping(value="/checkEligibility",method=RequestMethod.POST)
	public String validate(HttpServletRequest req, Model model) {
		String panNo=req.getParameter("panNo");
		panNo=panNo.toUpperCase();
		//System.out.println(panNo);
		double creditScore=customerService.getCreditScore(panNo);
		if(creditScore==0) {
			return "Invalid";
		}
		if(creditScore>=5.0) {
			return "Eligible";
		}
		return "NotEligible";
	}
}
