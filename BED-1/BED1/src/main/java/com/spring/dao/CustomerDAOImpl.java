package com.spring.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.spring.entity.Customer;
import com.spring.dao.CustomerDAO;

@Repository
public class CustomerDAOImpl implements CustomerDAO{

	@Autowired
	HibernateTemplate hibernateTemplate;

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	public Customer getCustomer(String panNo) {
		
		Customer customer=hibernateTemplate.get(Customer.class, panNo);
		return customer;
	}

}
