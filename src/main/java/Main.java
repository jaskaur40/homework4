import beans.Person;
import utils.StorageManager;
import utils.PersonCreator;

/**
 * Created by jaspreet.kaur on 5/23/18.
 */
public class Main {
    double numberOfPersonsToCreate = 10000d;
    StorageManager storageManager = new StorageManager();

    public static void main(String[] args) {
        Main m=new Main();
        m.generateFakeData();
    }

    public void generateFakeData() {
        PersonCreator personCreator = PersonCreator.getInstance();
        System.out.println("Data loading in memory: Started");
        for (int i = 0; i < numberOfPersonsToCreate; i++) {
            Person person = personCreator.createPerson();
            storageManager.addPerson(person);
            storageManager.addEmployeeToDepartment(person);
        }
        System.out.println("Data loading in memory: Finished");
        PrinterManager printerManager = PrinterManager.getInstance();
        System.out.println("Create queries for person: Starting");
        printerManager.printPersons(storageManager.getPersonsList(),"person_data_ten_thousand.json");
        System.out.println("Create queries for person: Finished");
        System.out.println("Create queries for department: Starting");
        printerManager.printDepartment(storageManager.getDepartmentEmployeeMapping(),"department_mapping_ten_thousand.json");
        System.out.println("Create queries for department: Finished");
    }
}
