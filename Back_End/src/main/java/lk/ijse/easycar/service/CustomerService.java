package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.CustomerDTO;
import lk.ijse.easycar.dto.CustomerIdGenerateDTO;
import lk.ijse.easycar.dto.CustomerImageDTO;

import java.util.List;

public interface CustomerService {

    void addCustomer(CustomerDTO customerDTO);

    List<CustomerDTO> loadAllCustomer();

    void addCustomer(CustomerImageDTO customerImageDTO);

    public CustomerIdGenerateDTO customerIdGenerate();

    CustomerDTO getCusByUsername(String username);

}
