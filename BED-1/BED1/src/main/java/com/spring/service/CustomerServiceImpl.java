package com.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dao.CustomerDAO;
import com.spring.entity.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerDAO customerDAO;
	
	public void setCustomerDAO(CustomerDAO customerDAO) {
		this.customerDAO = customerDAO;
	}

	public double getCreditScore(String panNo) {
		Customer customer=customerDAO.getCustomer(panNo);
		//System.out.println("Hi");
		if(customer==null) {
			return 0;
		}
		return customer.getCreditScore();
	}
	
}
