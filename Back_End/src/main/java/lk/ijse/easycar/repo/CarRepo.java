package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car, String> {
}
