package br.com.alura.srtch.easycharge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.alura.srtch.easycharge.modelo.Cliente;
import br.com.alura.srtch.easycharge.repository.ClienteRepository;


@Controller

public class HomeController {

	
	@Autowired
	private ClienteRepository clienterepository;
	
	@GetMapping("/home")
	public String home(Model model) {
		List<Cliente> clientes = clienterepository.findAll();
		model.addAttribute("clientes", clientes);
		return "home"; 
	}
		
	 @GetMapping("/home")
	
	@RequestMapping(value={"", "/", "welcome","home"})
		//@ResponseBody
	public String home() {
		return "home";
	
	}
	
	
	@GetMapping("/hello2")
	public String hello () {
		return "hello";
	
	}
	
	@ExceptionHandler(IllegalArgumentException.class)
	public String onError() {
		return "redirect:/home";
	}
	
	 @ResponseStatus(value=HttpStatus.NOT_FOUND, reason="No such Order")  // 404
	 public String onError2() {
			return "redirect:/home";
		
	 }
	

}
