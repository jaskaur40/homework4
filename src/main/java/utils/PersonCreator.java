package utils;

import beans.Person;
import com.github.javafaker.Faker;

import java.util.Random;
import java.util.concurrent.TimeUnit;

/**
 * Created by jaspreet.kaur on 5/23/18.
 */
public class PersonCreator {
    Faker faker;
    public String[] departments = {"Engineering", "Sales", "Marketing", "Operations", "Customer Support", "Product Management"};
    public String[] designation = {"Manager", "Head", "Director"};

    private static PersonCreator ourInstance = new PersonCreator();

    public static PersonCreator getInstance() {
        return ourInstance;
    }

    private PersonCreator() {
        faker = new Faker();
    }

    public Person createPerson() {
        Person p = new Person();
        p.setName(faker.name().name());
        p.setAddress(faker.address().fullAddress());
        p.setPhone(faker.phoneNumber().phoneNumber());
        p.setSSN(faker.idNumber().ssnValid());
        p.setDateOfBirth(faker.date().birthday());
        p.setDateOfHire(faker.date().past(1000, TimeUnit.DAYS));
        p.setEmail(faker.internet().emailAddress());
        String department = chooseRandom(departments);
        p.setDepartment(department);
        p.setDesignation(department + "" + chooseRandom(designation));
        double salary = Double.parseDouble(faker.commerce().price(100000d, 500000d));
        p.setSalary(salary);
        return p;
    }

    public String chooseRandom(String[] array) {
        int rnd = new Random().nextInt(array.length);
        return array[rnd];
    }



}
