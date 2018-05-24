conn = new Mongo();
db = conn.getDB("DatabaseAssignment3");
db.dropDatabase();
printjson('Connected');

// Author: Jaspreet Kaur
try {
	// Inserting values for collection Projects	
	db.createCollection("Projects"); // Creating collection explicitly even though mongo can create it implicitly.
	db.Projects.insertOne( { projectName: "Department" } );
	db.Projects.insertOne( { projectName: "Employees" } );
	db.Projects.insertOne( { projectName: "Qualification"} );
	print("Data inserted for collection:Projects");

	// Inserting values for collection Employees	
	db.createCollection("Employees");
	db.Employees.insertOne( { name:"Jaspreet", department:"Engineering", address:"Union City", phone:'1234567890', email:"jaspreet@abc.com", dateOfHire: new Date('08/01/2010'),dateOfBirth: new Date('28/12/1991'),SSN:'123457367', designation:"Manager", salary:150000 } );
	db.Employees.insertOne( { name:"Prabhjot", department:"Product Management", address:"Fremont", Phone:'1234564890', email:"prabhjot@abc.com", dateOfHire: new Date('03/05/2010'),  dateOfBirth: new Date('27/01/1989'),SSN:'123454367', designation:"LMTS", salary:130000 } );
	db.Employees.insertOne( { name:"Suman", department:"Sales", address:"Sacramento", Phone:'1224567890', email:"suman@abc.com", dateOfHire: new Date('08/10/2014'),  dateOfBirth: new Date('10/05/1990'),SSN:'127557367', designation:"SMTS", salary:110000 } );
	db.Employees.insertOne( { name:"David", department:"Product Marketing", address:"San Leandro, California", Phone:'1234897890', email:"john@abc.com", dateOfHire: new Date('08/01/2010'), dateOfBirth: new Date('28/12/1991'),SSN:'123457367', designation:"AMTS", salary:100000 } );
	db.Employees.insertOne( { name:"Varun", department:"Product Marketing", address:"Palo Alto, CA", Phone:'1231167890', email:"varun@abc.com", dateOfHire: new Date('09/02/2010'), dateOfBirth: new Date('03/10/1991'),SSN:'123454367', designation:"PMTS", salary:140000 } );
	db.Employees.insertOne( { name:"Joseph", department:"Sales", address:"Hayward", Phone:'1244567890', email:"joseph@abc.com", dateOfHire: new Date('10/01/2000'), dateOfBirth: new Date('11/05/1985'),SSN:'123657367', designation:"Manager", salary:150000 } );
	print("Data inserted for collection:Employees");
	
	// Inserting values for collection Department	
	db.createCollection("Department");
	db.Department.insertOne ({ name:"Engineering", employee:["Jaspreet"] } );
	db.Department.insertOne ({ name:"Product Management", employee:["Prabhjot"] } );
	db.Department.insertOne ({ name:"Sales", employee: ["Suman" , "Joseph"] });
	db.Department.insertOne ({ name:"Product Marketing", employee: ["Varun" , "John"] } );
	print("Data inserted for collection:Department");

	// Printing values for various collections	
	print("Collection Names:")
	printjson(db.getCollectionNames());

	printValues("Projects",db.Projects.find());
	printValues("Employees",db.Employees.find());
	printValues("Department",db.Department.find());
} catch (e) {
   print (e);
}
 
//Function to loop over cursor to print various values.
function printValues(project,myCursor){
	print("\n\n------>>> Starting printing values of collection:" + project + "<<<-----------");
	while( myCursor.hasNext()){
		var myDocument = myCursor.next();
		if (myDocument) {
		    var myName = myDocument;
		    print (tojson(myName));
		}
	}
	print("\n------>>> End of collection:" + project + "<<<-----------");
}   
