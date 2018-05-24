conn = new Mongo();
db = conn.getDB("DatabaseAssignment3");
printjson('Connected');

// Author: Jaspreet Kaur
try {
 // find employees in a engineering department
 var engineeringEmployees=db.Department.find({name:"Engineering"})
 printValues("Employees in a engineering department",engineeringEmployees);

 //Employees who are hired after a certain date
 var customHiredEmployees=db.Employees.find({ "dateOfHire" : {"$lte": new Date("2011-10-01T00:00:00.000Z")}});
 printValues("Employees who are hired after a certain date ",customHiredEmployees);


 //Employees who are either manager of are principle
 var highEndEmployees=db.Employees.find({$or : [ {designation : "Manager"},{ designation:"PMTS"}]});
 printValues("Employees who are either manager or PMTS ",highEndEmployees);


} catch (e) {
   print (e);
}


//Function to loop over cursor to print various values.
function printValues(logStatement,myCursor){
	print("\n\n"+logStatement+" : ");
	while( myCursor.hasNext()){
		var myDocument = myCursor.next();
		if (myDocument) {
		    var myName = myDocument;
		    print (tojson(myName));
		}
	}
} 