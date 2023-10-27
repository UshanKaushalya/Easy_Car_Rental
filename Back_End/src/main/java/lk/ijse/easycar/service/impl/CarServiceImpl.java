package lk.ijse.easycar.service.impl;

import lk.ijse.easycar.dto.CarDTO;
import lk.ijse.easycar.entity.Car;
import lk.ijse.easycar.repo.CarRepo;
import lk.ijse.easycar.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo carRepo;
    @Autowired
    ModelMapper mapper;

    @Override
    public void addCar(CarDTO carDTO) {
        Car car = mapper.map(carDTO, Car.class);
        carRepo.save(car);
    }

    @Override
    public List<CarDTO> loadAllCar() {
        List<Car> cars = carRepo.findAll();
        return mapper.map(cars, new TypeToken<List<CarDTO>>() {
        }.getType());
    }
}
