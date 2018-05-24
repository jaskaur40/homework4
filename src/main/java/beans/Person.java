package beans;

import java.util.Date;

/**
 * Created by jaspreet.kaur on 5/23/18.
 */
public class Person {

    String name;
    String department;
    String address;
    String phone;
    String email;
    Date dateOfBirth;
    Date dateOfHire;
    String SSN;
    String designation;
    double salary;

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setDateOfHire(Date dateOfHire) {
        this.dateOfHire = dateOfHire;
    }

    public void setSSN(String SSN) {
        this.SSN = SSN;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public String toMongoCreate() {
        StringBuffer s = new StringBuffer();
        s.append("{ ");
        s = addValue(s, "name", name);
        s = addValue(s, "department", department);
        s = addValue(s, "address", address);
        s = addValue(s, "phone", phone);
        s = addValue(s, "SSN", SSN);
        s = addValue(s, "designation", designation);
        s.append(" dateOfHire: new Date('" + dateOfHire + "') ,");
        s.append(" dateOfBirth: new Date('" + dateOfBirth + "') ,");
        s.append(" salary:" + salary);
        s.append("}");
        return s.toString();
    }


    public static String escapeMetaCharacters(String inputString) {
        final String[] metaCharacters = {"\\", "^", "$", "{", "}", "[", "]", "'", "(", ")", ".", "*", "+", "?", "|", "<", ">", "-", "&"};
        String outputString = inputString;
        for (int i = 0; i < metaCharacters.length; i++) {
            if (inputString.contains(metaCharacters[i])) {
                outputString = inputString.replace(metaCharacters[i], "");
                inputString = outputString;
            }
        }
        return outputString;
    }

    public StringBuffer addValue(StringBuffer s, String propertyName, String propertyValue) {
        s.append(" " + propertyName + ":\"" + escapeMetaCharacters(propertyValue) + "\",");
        return s;
    }
}
