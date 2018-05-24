conn = new Mongo();
db = conn.getDB("DatabaseAssignment3");
printjson('Connected');

// Author: Jaspreet Kaur
try {

	// Update salary for PMTS to add 1000 more.
	print("\n\n ------> QUERY 1: Update salary of PMTS and increment it by 1000: ");
	printValues("Orignal salary of PMTS", db.Employees.find({designation : "PMTS"}));
	db.Employees.update({ designation:"PMTS"}, { $inc: {salary:1000}});
	var newValue=db.Employees.find({designation : "PMTS"});
	printValues("Updating salary of PMTS by 1000. Updated records with new salary for role: PMTS", newValue);


	//Add new employee John to sales department
	print("\n\n ------> QUERY 2: Add new employee John to sales department: ");
	printValues("Department before update", db.Department.find({name : "Sales"}));
	db.Employees.insertOne( { name:"John", department:"Sales", address:"Hayward", Phone:'1244567890', email:"john@abc.com", dateOfHire: new Date('10/11/2000'), dateOfBirth: new Date('11/11/1985'),SSN:'123657367', designation:"Sales Executive", salary:150000 } );
	db.Department.update({name:"Sales" },{ $push: { employee: "John" } })
	var newDepartment=db.Department.find({name : "Sales"});
	printValues("Updating Department to add New employee to departments employees list", newDepartment);
     


	//Move John's Department from Sales to Engineering
	print("\n\n ------> QUERY 3: Move John's Department from Sales to Engineering: ");
    printValues("John's orignal Department", db.Employees.find({name:"John"})); 
	db.Employees.update({name:"John" },{ $set: { department: "Engineering" } })
	db.Department.update({name:"Sales"},{ $pull: { employee: "John" } })
	db.Department.update({name:"Engineering"},{ $push: { employee: "John" } })
	printValues("Updated Department : Sales ::: ", db.Department.find({name:"Sales"}));
	printValues("Updated Department : Engineering ::: ", db.Department.find({name:"Engineering"}));
	printValues("Updated Employee : John ::: ", db.Employees.find({name:"John"}));

} catch (e) {
   print (e);
}


//Function to loop over cursor to print various values.
function printValues(logStatement,myCursor){
	print(logStatement+" : ");
	if(myCursor != null){
		while( myCursor.hasNext()){
			var myDocument = myCursor.next();
			if (myDocument) {
			    var myName = myDocument;
			    print (tojson(myName));
			}
		}
	}
} 