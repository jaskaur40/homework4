import beans.Person;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Map;

/**
 * Created by jaspreet.kaur on 5/23/18.
 */
public class PrinterManager {
    private static PrinterManager ourInstance = new PrinterManager();

    public static PrinterManager getInstance() {
        return ourInstance;
    }

    private PrinterManager() {
    }


    public void printDepartment(Map<String, ArrayList<String>> departmentEmployeeMapping, String fileName) {
        FileWriter fileWriter = null;
        try {
            fileWriter = new FileWriter(fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
        PrintWriter printWriter = new PrintWriter(fileWriter);

        for (Map.Entry<String, ArrayList<String>> entry : departmentEmployeeMapping.entrySet()) {
            String nameOfDepartment = entry.getKey();
            ArrayList<String> personList = departmentEmployeeMapping.get(nameOfDepartment);
            String employeeArray = printDepartmentCreateStatement(personList);
//            printWriter.print("db.Department.insertOne ({ name:\"" + nameOfDepartment + "\" , employee:[" + employeeArray + "] } ); \n");
            printWriter.print("{ name:\"" + nameOfDepartment + "\" , employee:[" + employeeArray + "] }\n");

        }
        printWriter.close();

    }

    private String printDepartmentCreateStatement(ArrayList<String> personList) {
        StringBuffer buffer = new StringBuffer();
        for (int i = 0; i < personList.size() - 2; i++) { // Printing to one less than the total size for ","
            buffer.append("\"" + personList.get(i) + "\", ");
        }
        buffer.append("\"" + personList.get(personList.size() - 1) + "\"");
        return buffer.toString();
    }

    public void printPersons(ArrayList<Person> personsList, String fileName) {

        FileWriter fileWriter = null;
        try {
            fileWriter = new FileWriter(fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
        PrintWriter printWriter = new PrintWriter(fileWriter);
        for (Person p : personsList) {
            printWriter.printf(p.toMongoCreate() + "\n");
        }
        printWriter.close();

    }


}
