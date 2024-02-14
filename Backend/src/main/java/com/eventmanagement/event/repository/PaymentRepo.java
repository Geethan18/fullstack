package com.eventmanagement.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.event.models.Payments;

public interface PaymentRepo extends JpaRepository<Payments,String>{

}
