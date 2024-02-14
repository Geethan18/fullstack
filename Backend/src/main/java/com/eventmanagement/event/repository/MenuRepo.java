package com.eventmanagement.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.event.models.Menu;

public interface MenuRepo extends JpaRepository<Menu, String>{

}
