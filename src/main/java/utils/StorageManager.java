package utils;

import beans.Person;
import com.github.javafaker.Faker;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by jaspreet.kaur on 5/23/18.
 */
public class StorageManager {

    Map<String, ArrayList<String>> departmentEmployeeMapping = new HashMap<String, ArrayList<String>>();
    ArrayList<Person> personsList = new ArrayList<Person>();

    Faker faker;

    public StorageManager() {
        faker = new Faker();
        // Add list of department
        for (String departmentName : PersonCreator.getInstance().departments) {
            departmentEmployeeMapping.put(departmentName, new ArrayList<String>());
        }
    }


    public void addEmployeeToDepartment(Person person) {
        String department = person.getDepartment();
        ArrayList<String> employee = departmentEmployeeMapping.get(department);
        employee.add(person.getName());
    }

    public Map<String, ArrayList<String>> getDepartmentEmployeeMapping() {
        return departmentEmployeeMapping;
    }

    public ArrayList<Person> getPersonsList() {
        return personsList;
    }
    public void addPerson(Person p){
        personsList.add(p);
    }


}
