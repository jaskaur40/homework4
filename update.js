conn = new Mongo();
db = conn.getDB("local");
printjson('Connected');

try {



var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4965"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4965"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2632"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2632"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2554"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2554"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7163"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7163"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6214"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6214"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2851"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2851"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6512"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6512"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5138"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5138"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3574"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3574"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4884"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4884"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6960"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6960"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9136"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9136"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5139"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5139"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4669"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4669"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3712"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3712"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1833"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1833"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8549"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8549"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5144"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5144"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5630"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5630"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4685"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4685"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8687"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8687"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1280"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1280"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1268"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1268"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4152"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4152"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4021"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4021"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5049"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5049"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4091"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4091"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3451"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3451"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6896"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6896"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4976"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4976"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8730"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8730"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9126"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9126"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4375"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4375"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3126"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3126"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3264"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3264"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3755"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3755"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5284"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5284"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4107"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4107"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5581"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5581"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9934"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9934"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4835"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4835"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5797"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5797"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8447"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8447"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4396"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4396"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6859"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6859"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7598"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7598"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3394"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3394"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3331"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3331"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8845"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8845"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2657"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2657"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6884"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6884"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7790"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7790"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2189"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2189"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1388"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1388"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7134"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7134"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6049"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6049"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9407"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9407"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1052"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1052"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1566"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1566"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9144"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9144"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9677"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9677"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5157"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5157"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1112"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1112"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1379"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1379"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2648"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2648"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7711"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7711"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7415"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7415"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6779"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6779"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6513"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6513"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5955"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5955"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2781"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2781"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2508"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2508"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3876"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3876"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8661"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8661"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8919"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8919"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2593"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2593"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3608"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3608"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9041"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9041"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2482"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2482"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2168"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2168"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5250"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5250"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5007"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5007"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5750"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5750"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1894"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1894"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3210"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3210"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6254"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6254"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8142"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8142"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6772"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6772"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1824"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1824"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1087"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1087"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7610"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7610"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7374"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7374"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3412"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3412"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1430"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1430"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8257"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8257"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9507"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9507"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1807"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1807"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9944"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9944"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9800"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9800"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6458"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6458"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4415"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4415"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1416"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1416"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2843"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2843"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8175"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8175"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6192"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6192"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7979"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7979"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3433"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3433"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2251"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2251"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9855"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9855"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8791"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8791"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9468"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9468"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5035"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5035"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7559"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7559"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4604"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4604"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4191"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4191"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7319"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7319"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6271"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6271"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9229"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9229"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9233"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9233"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9155"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9155"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5586"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5586"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1717"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1717"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7182"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7182"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9731"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9731"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1689"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1689"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8769"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8769"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2486"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2486"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5553"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5553"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4729"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4729"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5072"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5072"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9463"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9463"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6285"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6285"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4527"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4527"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9137"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9137"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1453"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1453"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8331"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8331"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8908"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8908"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1887"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1887"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2914"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2914"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2895"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2895"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4262"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4262"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7599"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7599"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1105"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1105"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5292"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5292"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4388"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4388"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1090"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1090"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3497"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3497"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5777"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5777"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4149"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4149"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4913"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4913"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7099"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7099"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6824"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6824"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9111"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9111"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3092"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3092"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2295"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2295"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8168"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8168"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5552"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5552"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7823"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7823"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6030"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6030"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5072"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5072"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5594"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5594"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2626"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2626"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7556"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7556"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7194"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7194"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2410"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2410"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6980"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6980"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4821"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4821"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7888"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7888"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5280"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5280"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5248"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5248"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5933"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5933"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7872"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7872"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7374"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7374"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8434"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8434"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6906"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6906"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2291"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2291"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2778"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2778"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7654"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7654"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3388"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3388"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6714"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6714"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3281"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3281"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8440"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8440"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3838"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3838"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5632"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5632"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7947"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7947"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5129"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5129"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3739"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3739"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1217"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1217"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7129"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7129"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2774"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2774"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5776"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5776"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6446"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6446"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3538"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3538"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6687"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6687"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3514"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3514"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6159"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6159"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3506"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3506"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5941"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5941"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8015"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8015"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8336"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8336"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6202"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6202"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1435"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1435"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4823"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4823"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9445"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9445"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6954"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6954"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1245"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1245"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8354"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8354"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1612"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1612"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3644"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3644"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1451"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1451"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9286"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9286"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2140"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2140"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9346"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9346"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4394"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4394"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5820"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5820"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5121"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5121"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6088"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6088"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6446"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6446"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1308"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1308"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5793"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5793"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1913"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1913"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4122"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4122"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3970"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3970"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8905"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8905"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3484"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3484"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6734"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6734"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5747"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5747"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3031"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3031"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5681"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5681"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3537"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3537"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4736"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4736"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2029"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2029"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3647"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3647"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2348"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2348"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5443"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5443"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3987"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3987"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8328"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8328"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8950"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8950"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3868"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3868"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2846"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2846"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5597"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5597"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7432"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7432"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2045"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2045"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6624"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6624"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4881"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4881"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5151"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5151"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4290"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4290"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6200"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6200"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8914"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8914"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9206"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9206"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9143"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9143"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8231"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8231"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4441"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4441"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6602"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6602"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8874"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8874"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9236"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9236"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2519"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2519"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7508"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7508"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6486"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6486"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7921"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7921"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5472"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5472"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7087"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7087"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2574"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2574"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9386"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9386"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9480"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9480"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5385"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5385"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5526"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5526"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3722"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3722"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1623"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1623"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5818"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5818"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3057"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3057"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8333"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8333"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1966"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1966"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1932"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1932"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5941"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5941"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3019"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3019"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6659"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6659"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4572"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4572"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8255"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8255"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5273"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5273"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5910"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5910"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6428"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6428"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8717"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8717"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3037"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3037"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8762"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8762"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1277"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1277"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4187"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4187"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9039"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9039"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7289"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7289"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3960"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3960"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2289"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2289"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1927"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1927"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8787"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8787"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4262"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4262"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2353"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2353"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9871"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9871"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6244"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6244"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6907"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6907"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7883"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7883"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4650"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4650"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3537"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3537"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1583"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1583"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6776"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6776"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4769"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4769"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7835"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7835"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5767"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5767"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3762"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3762"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1462"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1462"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5062"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5062"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2969"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2969"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9898"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9898"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2035"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2035"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9847"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9847"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2976"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2976"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9881"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9881"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1364"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1364"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8664"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8664"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9439"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9439"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6246"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6246"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3953"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3953"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5796"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5796"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6604"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6604"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2281"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2281"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2109"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2109"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3494"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3494"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8899"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8899"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8512"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8512"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7983"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7983"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2627"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2627"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1385"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1385"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2087"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2087"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1703"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1703"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5735"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5735"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5527"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5527"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6505"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6505"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5755"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5755"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4828"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4828"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7938"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7938"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9033"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9033"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7587"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7587"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9303"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9303"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9611"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9611"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1620"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1620"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2873"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2873"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5967"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5967"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4280"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4280"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3543"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3543"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7318"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7318"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1618"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1618"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4641"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4641"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8889"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8889"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4676"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4676"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7769"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7769"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9784"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9784"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7581"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7581"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6756"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6756"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6206"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6206"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2113"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2113"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9168"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9168"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2570"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2570"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4416"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4416"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9654"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9654"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6966"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6966"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7992"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7992"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1370"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1370"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3671"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3671"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4818"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4818"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6190"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6190"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3197"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3197"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8445"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8445"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4508"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4508"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3606"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3606"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6466"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6466"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3705"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3705"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9364"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9364"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6899"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6899"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5671"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5671"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9279"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9279"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3895"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3895"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9340"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9340"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3508"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3508"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6020"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6020"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2095"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2095"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2632"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2632"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3108"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3108"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2025"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2025"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1005"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1005"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8060"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8060"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9030"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9030"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8295"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8295"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7484"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7484"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6603"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6603"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4167"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4167"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2747"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2747"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2705"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2705"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3676"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3676"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9489"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9489"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6018"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6018"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6865"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6865"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6252"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6252"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9627"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9627"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6652"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6652"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2442"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2442"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5061"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5061"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4157"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4157"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5887"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5887"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8145"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8145"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7406"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7406"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3047"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3047"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1747"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1747"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7770"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7770"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6767"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6767"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7283"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7283"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5412"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5412"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6338"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6338"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5508"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5508"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2005"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2005"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5664"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5664"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3238"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3238"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6143"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6143"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2795"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2795"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7942"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7942"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3447"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3447"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1404"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1404"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4154"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4154"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9003"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9003"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3529"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3529"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7793"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7793"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4986"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4986"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5342"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5342"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8868"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8868"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9489"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9489"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2289"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2289"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3955"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3955"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3292"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3292"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1210"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1210"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6096"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6096"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8135"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8135"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7683"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7683"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7573"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7573"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2846"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2846"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5293"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5293"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1639"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1639"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9084"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9084"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9936"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9936"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7274"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7274"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4128"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4128"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3218"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3218"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7880"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7880"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4525"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4525"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8389"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8389"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4083"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4083"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1522"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1522"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9239"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9239"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7085"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7085"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9120"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9120"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5390"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5390"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5991"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5991"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8903"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8903"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5587"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5587"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6995"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6995"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1901"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1901"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6654"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6654"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9441"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9441"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4224"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4224"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4626"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4626"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5014"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5014"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6632"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6632"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4529"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4529"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1724"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1724"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5853"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5853"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8878"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8878"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7837"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7837"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1304"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1304"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6533"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6533"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1355"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1355"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6471"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6471"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7417"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7417"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9796"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9796"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5834"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5834"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1540"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1540"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3830"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3830"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1948"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1948"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3418"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3418"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3689"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3689"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9791"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9791"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9335"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9335"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6576"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6576"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6411"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6411"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4716"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4716"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4051"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4051"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3544"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3544"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9417"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9417"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5487"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5487"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5777"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5777"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7889"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7889"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3157"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3157"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2575"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2575"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9053"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9053"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2772"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2772"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9025"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9025"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3824"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3824"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7636"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7636"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4855"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4855"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5861"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5861"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6784"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6784"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3410"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3410"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9637"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9637"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7925"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7925"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8370"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8370"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7066"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7066"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8527"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8527"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4913"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4913"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6329"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6329"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1264"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1264"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2960"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2960"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3984"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3984"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8718"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8718"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7548"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7548"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6956"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6956"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5681"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5681"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8262"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8262"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4207"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4207"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4774"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4774"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5566"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5566"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4251"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4251"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6957"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6957"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4961"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4961"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5498"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5498"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1088"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1088"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6043"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6043"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1743"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1743"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7924"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7924"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1831"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1831"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1741"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1741"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9552"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9552"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2685"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2685"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3896"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3896"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8667"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8667"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1216"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1216"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5665"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5665"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9130"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9130"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5283"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5283"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4866"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4866"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3207"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3207"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8255"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8255"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7039"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7039"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8952"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8952"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8506"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8506"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9570"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9570"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5543"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5543"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4047"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4047"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7288"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7288"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1476"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1476"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7106"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7106"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1072"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1072"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3974"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3974"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7188"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7188"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2720"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2720"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5296"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5296"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2144"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2144"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7469"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7469"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8922"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8922"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6195"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6195"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2959"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2959"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3196"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3196"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7621"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7621"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4271"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4271"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2061"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2061"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8622"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8622"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2953"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2953"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6940"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6940"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1482"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1482"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5990"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5990"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6257"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6257"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6303"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6303"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7703"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7703"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2728"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2728"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1313"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1313"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7121"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7121"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8147"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8147"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8224"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8224"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4232"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4232"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4878"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4878"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7113"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7113"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5774"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5774"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2123"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2123"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8705"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8705"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2386"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2386"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5687"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5687"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8071"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8071"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2019"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2019"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9341"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9341"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7034"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7034"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9470"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9470"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6286"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6286"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7482"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7482"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1154"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1154"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6637"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6637"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1077"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1077"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6193"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6193"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9088"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9088"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7964"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7964"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1230"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1230"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7550"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7550"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6435"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6435"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5514"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5514"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1208"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1208"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9415"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9415"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1128"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1128"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7972"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7972"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5841"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5841"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2800"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2800"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8299"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8299"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1828"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1828"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7576"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7576"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6513"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6513"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2417"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2417"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9398"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9398"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6174"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6174"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3074"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3074"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4975"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4975"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7306"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7306"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3829"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3829"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2596"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2596"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8489"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8489"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9489"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9489"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1049"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1049"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6637"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6637"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4231"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4231"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1369"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1369"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5191"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5191"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2282"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2282"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2218"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2218"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2258"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2258"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5891"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5891"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4827"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4827"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5027"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5027"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4844"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4844"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4521"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4521"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5030"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5030"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3735"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3735"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1406"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1406"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9167"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9167"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4571"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4571"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4518"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4518"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1265"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1265"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6918"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6918"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4012"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4012"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5677"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5677"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5229"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5229"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9504"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9504"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1720"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1720"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3533"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3533"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9649"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9649"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9287"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9287"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5435"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5435"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3473"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3473"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3579"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3579"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1164"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1164"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7307"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7307"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2968"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2968"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5995"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5995"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9600"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9600"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4373"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4373"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2347"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2347"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7365"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7365"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3768"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3768"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7853"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7853"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7052"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7052"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2056"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2056"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2412"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2412"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3247"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3247"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1455"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1455"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5680"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5680"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3374"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3374"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6036"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6036"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9508"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9508"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2323"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2323"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3251"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3251"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3373"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3373"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2024"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2024"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8171"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8171"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2616"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2616"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3245"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3245"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9088"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9088"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7628"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7628"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8635"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8635"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6256"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6256"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1233"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1233"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6855"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6855"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2438"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2438"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2923"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2923"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3047"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3047"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7032"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7032"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9507"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9507"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9867"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9867"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9344"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9344"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5957"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5957"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1153"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1153"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1638"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1638"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4894"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4894"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6205"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6205"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1184"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1184"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7868"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7868"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2774"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2774"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4343"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4343"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8907"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8907"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2606"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2606"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6853"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6853"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9640"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9640"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1045"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1045"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3554"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3554"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3028"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3028"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6301"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6301"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3568"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3568"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2750"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2750"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4204"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4204"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2061"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2061"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8547"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8547"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7885"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7885"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7362"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7362"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9583"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9583"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3322"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3322"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3233"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3233"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6662"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6662"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7861"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7861"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7763"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7763"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2584"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2584"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4524"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4524"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9354"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9354"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9750"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9750"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3392"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3392"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5493"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5493"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5198"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5198"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2479"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2479"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1862"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1862"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1950"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1950"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8970"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8970"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8030"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8030"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4872"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4872"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1206"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1206"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5745"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5745"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4659"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4659"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5533"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5533"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4214"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4214"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8555"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8555"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7293"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7293"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3401"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3401"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1825"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1825"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2264"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2264"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3003"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3003"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7086"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7086"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3320"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3320"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2160"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2160"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8409"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8409"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9411"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9411"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5112"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5112"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5002"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5002"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7615"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7615"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8101"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8101"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3334"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3334"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4893"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4893"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8623"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8623"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2362"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2362"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7007"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7007"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5255"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5255"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1527"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1527"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5259"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5259"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6731"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6731"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2715"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2715"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9879"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9879"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9574"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9574"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9357"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9357"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9164"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9164"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5589"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5589"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1917"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1917"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3077"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3077"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6867"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6867"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2967"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2967"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7883"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7883"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3641"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3641"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1284"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1284"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1295"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1295"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3885"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3885"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1865"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1865"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9067"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9067"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1555"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1555"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7705"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7705"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8658"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8658"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4091"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4091"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6181"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6181"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5679"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5679"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1243"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1243"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4678"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4678"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2402"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2402"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4051"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4051"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9503"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9503"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6473"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6473"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1867"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1867"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7301"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7301"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4999"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4999"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9799"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9799"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5432"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5432"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5606"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5606"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9292"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9292"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6318"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6318"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6396"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6396"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2659"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2659"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4675"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4675"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5057"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5057"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1513"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1513"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1658"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1658"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7837"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7837"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9996"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9996"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9972"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9972"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4537"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4537"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7491"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7491"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5933"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5933"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3835"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3835"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9056"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9056"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5940"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5940"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1317"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1317"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6725"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6725"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5869"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5869"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3068"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3068"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8503"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8503"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7048"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7048"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6519"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6519"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4722"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4722"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7768"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7768"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5707"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5707"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5347"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5347"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8797"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8797"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4926"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4926"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9049"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9049"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8688"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8688"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1289"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1289"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1342"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1342"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3333"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3333"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7407"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7407"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7590"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7590"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4649"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4649"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6830"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6830"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7908"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7908"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5780"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5780"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9438"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9438"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9244"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9244"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4495"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4495"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3458"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3458"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9119"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9119"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5766"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5766"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4724"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4724"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5635"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5635"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6102"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6102"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9118"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9118"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4817"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4817"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4531"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4531"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1547"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1547"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1403"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1403"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4479"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4479"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7614"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7614"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2006"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2006"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8533"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8533"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6137"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6137"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4406"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4406"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4695"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4695"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4324"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4324"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3091"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3091"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3209"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3209"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9581"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9581"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1904"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1904"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3635"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3635"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4113"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4113"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6495"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6495"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6751"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6751"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3404"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3404"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8685"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8685"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1533"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1533"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7695"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7695"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8046"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8046"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4160"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4160"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9394"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9394"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6877"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6877"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9772"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9772"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2194"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2194"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6017"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6017"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8675"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8675"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7539"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7539"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4279"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4279"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4588"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4588"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7039"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7039"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6010"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6010"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1144"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1144"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1800"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1800"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1258"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1258"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5182"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5182"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7847"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7847"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4850"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4850"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3968"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3968"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1307"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1307"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4472"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4472"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7832"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7832"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1487"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1487"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3676"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3676"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3239"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3239"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5352"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5352"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7045"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7045"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3856"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3856"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9340"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9340"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1335"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1335"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9758"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9758"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4989"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4989"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9945"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9945"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1632"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1632"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9035"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9035"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3963"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3963"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2888"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2888"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2506"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2506"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5782"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5782"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7333"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7333"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2686"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2686"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7079"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7079"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4835"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4835"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4293"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4293"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4342"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4342"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4261"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4261"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1066"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1066"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3536"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3536"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3552"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3552"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1462"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1462"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4806"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4806"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8875"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8875"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6932"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6932"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9575"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9575"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5866"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5866"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6105"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6105"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3606"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3606"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3004"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3004"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3642"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3642"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6288"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6288"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7278"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7278"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9743"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9743"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6442"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6442"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5394"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5394"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3500"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3500"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3992"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3992"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2952"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2952"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1468"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1468"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7734"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7734"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2325"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2325"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7675"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7675"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2073"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2073"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4806"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4806"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8921"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8921"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2325"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2325"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7411"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7411"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8789"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8789"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7461"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7461"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3600"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3600"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3349"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3349"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8244"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8244"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7470"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7470"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4200"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4200"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8073"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8073"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5473"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5473"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3276"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3276"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5037"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5037"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3008"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3008"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4786"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4786"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7977"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7977"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5111"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5111"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5146"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5146"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2578"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2578"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6670"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6670"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2882"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2882"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7951"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7951"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7367"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7367"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6574"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6574"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7058"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7058"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9487"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9487"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9346"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9346"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5323"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5323"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3368"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3368"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7108"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7108"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8855"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8855"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2209"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2209"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3517"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3517"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2044"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2044"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3019"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3019"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5155"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5155"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9003"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9003"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8690"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8690"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7442"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7442"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9779"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9779"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4700"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4700"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8406"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8406"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8320"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8320"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8531"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8531"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7373"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7373"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8056"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8056"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3462"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3462"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3205"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3205"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6608"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6608"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5149"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5149"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2482"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2482"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1106"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1106"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7798"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7798"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8658"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8658"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8649"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8649"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8546"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8546"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2188"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2188"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1727"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1727"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2793"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2793"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3957"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3957"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4636"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4636"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9796"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9796"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4565"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4565"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2216"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2216"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6255"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6255"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2483"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2483"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8115"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8115"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8809"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8809"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9362"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9362"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7212"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7212"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4513"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4513"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7888"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7888"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2523"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2523"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9310"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9310"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4924"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4924"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2033"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2033"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5116"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5116"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3946"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3946"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2762"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2762"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8989"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8989"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7641"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7641"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5261"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5261"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8967"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8967"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3829"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3829"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9704"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9704"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8192"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8192"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8587"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8587"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6455"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6455"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6000"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6000"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1817"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1817"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7640"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7640"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5029"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5029"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8510"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8510"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2339"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2339"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2064"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2064"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6363"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6363"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4359"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4359"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1704"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1704"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4672"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4672"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1948"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1948"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2264"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2264"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4506"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4506"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9835"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9835"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5500"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5500"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8332"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8332"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4091"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4091"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4443"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4443"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8780"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8780"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1997"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1997"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3051"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3051"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4467"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4467"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3062"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3062"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8981"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8981"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4923"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4923"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5142"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5142"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1209"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1209"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1402"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1402"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7020"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7020"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6169"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6169"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9892"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9892"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4229"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4229"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6221"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6221"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2718"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2718"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6151"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6151"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4846"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4846"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4983"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4983"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4494"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4494"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2877"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2877"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2397"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2397"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6119"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6119"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8761"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8761"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2179"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2179"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1369"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1369"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3816"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3816"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2875"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2875"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6231"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6231"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8456"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8456"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4784"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4784"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6171"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6171"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6660"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6660"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2999"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2999"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7835"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7835"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7324"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7324"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1408"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1408"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2236"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2236"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9523"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9523"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8971"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8971"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6867"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6867"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7912"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7912"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4101"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4101"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2341"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2341"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7628"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7628"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3192"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3192"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9325"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9325"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4406"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4406"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8136"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8136"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9638"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9638"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9087"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9087"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8464"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8464"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1032"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1032"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4239"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4239"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5549"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5549"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5806"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5806"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8636"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8636"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4712"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4712"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2367"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2367"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6210"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6210"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8731"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8731"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3312"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3312"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2677"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2677"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8004"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8004"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9181"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9181"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9684"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9684"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8464"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8464"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7207"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7207"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2834"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2834"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1840"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1840"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5573"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5573"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4482"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4482"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9870"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9870"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5492"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5492"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2594"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2594"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8952"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8952"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1271"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1271"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6113"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6113"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2450"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2450"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9851"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9851"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9710"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9710"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6265"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6265"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8695"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8695"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9524"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9524"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5805"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5805"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6310"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6310"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9966"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9966"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4325"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4325"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3064"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3064"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2986"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2986"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7468"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7468"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9356"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9356"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7173"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7173"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4519"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4519"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8311"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8311"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1211"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1211"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5299"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5299"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7639"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7639"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3357"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3357"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7165"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7165"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5049"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5049"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6800"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6800"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7370"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7370"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7739"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7739"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7976"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7976"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8759"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8759"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7223"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7223"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5473"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5473"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4598"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4598"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5284"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5284"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3581"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3581"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8965"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8965"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5287"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5287"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6935"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6935"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4172"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4172"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4563"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4563"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5779"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5779"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1049"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1049"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4724"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4724"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7613"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7613"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4786"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4786"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7376"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7376"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4154"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4154"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9212"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9212"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2189"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2189"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6494"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6494"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7299"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7299"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7800"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7800"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4474"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4474"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9743"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9743"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1524"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1524"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7278"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7278"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4792"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4792"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3384"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3384"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6522"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6522"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2264"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2264"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7110"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7110"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6940"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6940"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2088"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2088"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6041"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6041"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5251"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5251"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7712"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7712"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3982"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3982"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9521"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9521"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1361"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1361"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8874"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8874"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6374"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6374"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5577"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5577"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5498"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5498"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2739"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2739"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3514"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3514"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6776"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6776"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9073"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9073"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8284"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8284"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5860"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5860"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1962"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1962"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9990"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9990"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3451"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3451"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1368"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1368"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2744"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2744"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9948"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9948"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3196"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3196"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8214"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8214"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4153"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4153"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3105"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3105"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5267"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5267"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5843"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5843"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7949"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7949"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8524"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8524"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1349"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1349"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1250"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1250"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4109"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4109"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7857"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7857"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3837"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3837"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6569"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6569"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1593"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1593"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6049"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6049"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7085"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7085"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1942"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1942"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1567"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1567"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3528"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3528"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8974"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8974"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7733"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7733"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5903"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5903"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4779"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4779"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5758"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5758"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4736"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4736"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5784"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5784"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3593"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3593"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7391"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7391"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7821"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7821"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8421"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8421"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7271"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7271"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2832"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2832"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5641"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5641"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8929"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8929"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1953"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1953"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2518"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2518"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3684"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3684"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6790"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6790"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3556"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3556"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9681"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9681"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5737"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5737"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4976"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4976"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4725"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4725"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4373"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4373"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2803"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2803"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9324"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9324"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8411"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8411"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9232"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9232"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1530"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1530"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5399"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5399"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5301"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5301"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7259"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7259"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2318"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2318"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8976"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8976"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3033"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3033"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8196"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8196"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6845"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6845"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6401"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6401"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5079"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5079"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5703"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5703"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3110"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3110"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2000"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2000"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1772"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1772"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5052"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5052"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9174"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9174"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6918"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6918"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3964"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3964"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6039"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6039"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8809"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8809"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8561"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8561"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5680"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5680"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9064"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9064"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6468"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6468"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4158"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4158"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3701"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3701"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2034"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2034"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6673"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6673"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2259"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2259"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8466"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8466"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9070"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9070"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8146"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8146"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2915"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2915"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5669"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5669"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9190"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9190"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3592"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3592"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3436"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3436"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8042"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8042"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6338"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6338"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3838"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3838"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1470"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1470"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7466"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7466"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4504"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4504"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4878"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4878"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2285"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2285"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8107"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8107"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2062"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2062"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6729"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6729"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1377"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1377"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6129"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6129"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5109"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5109"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9894"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9894"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3689"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3689"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7413"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7413"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6244"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6244"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1704"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1704"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3967"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3967"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4087"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4087"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9693"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9693"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6301"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6301"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6328"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6328"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6892"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6892"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3251"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3251"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3427"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3427"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3846"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3846"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5672"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5672"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5860"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5860"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2344"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2344"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6834"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6834"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3377"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3377"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7571"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7571"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5495"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5495"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8880"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8880"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8218"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8218"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6263"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6263"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9229"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9229"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7964"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7964"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7041"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7041"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4376"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4376"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6932"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6932"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7681"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7681"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5295"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5295"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3941"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3941"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3844"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3844"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1819"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1819"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3347"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3347"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2738"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2738"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5687"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5687"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7777"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7777"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5872"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5872"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7439"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7439"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3827"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3827"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9792"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9792"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1949"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1949"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7037"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7037"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7996"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7996"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5760"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5760"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1637"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1637"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4864"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4864"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6783"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6783"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2172"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2172"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5051"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5051"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6341"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6341"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4768"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4768"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5306"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5306"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4828"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4828"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4739"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4739"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7839"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7839"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2246"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2246"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6367"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6367"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6275"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6275"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2295"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2295"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7370"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7370"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1050"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1050"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3553"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3553"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5386"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5386"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5470"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5470"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8625"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8625"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2488"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2488"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9702"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9702"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4771"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4771"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3537"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3537"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6703"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6703"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8690"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8690"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6423"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6423"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4170"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4170"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4529"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4529"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3457"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3457"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5875"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5875"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6763"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6763"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4218"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4218"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7126"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7126"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4853"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4853"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1779"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1779"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5062"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5062"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3342"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3342"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2954"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2954"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9070"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9070"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5468"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5468"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1984"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1984"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4707"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4707"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3469"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3469"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6218"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6218"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1784"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1784"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1008"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1008"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9862"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9862"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3477"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3477"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5879"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5879"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8874"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8874"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6125"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6125"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1731"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1731"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4703"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4703"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8762"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8762"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1360"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1360"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5960"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5960"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2209"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2209"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6240"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6240"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5540"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5540"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2733"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2733"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5704"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5704"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3745"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3745"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2251"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2251"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8839"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8839"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7140"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7140"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8795"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8795"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7715"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7715"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9796"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9796"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6740"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6740"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9923"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9923"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5813"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5813"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9513"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9513"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4912"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4912"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7767"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7767"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2226"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2226"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1417"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1417"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3671"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3671"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1833"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1833"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2375"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2375"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9464"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9464"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8201"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8201"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6901"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6901"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3884"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3884"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4122"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4122"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1667"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1667"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5217"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5217"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8446"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8446"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6649"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6649"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6109"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6109"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6992"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6992"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4861"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4861"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4227"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4227"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3300"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3300"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7331"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7331"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9680"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9680"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9621"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9621"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1605"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1605"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4863"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4863"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5314"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5314"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9470"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9470"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7076"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7076"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5750"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5750"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9980"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9980"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4258"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4258"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7259"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7259"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5468"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5468"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6857"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6857"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8846"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8846"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9446"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9446"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4161"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4161"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6970"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6970"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6281"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6281"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8867"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8867"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8339"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8339"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3144"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3144"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2377"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2377"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9791"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9791"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8751"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8751"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6410"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6410"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6706"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6706"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6604"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6604"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3098"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3098"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3030"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3030"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5220"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5220"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9682"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9682"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6565"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6565"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9745"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9745"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6139"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6139"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7250"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7250"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4200"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4200"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2608"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2608"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8939"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8939"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6751"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6751"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1151"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1151"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8090"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8090"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2171"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2171"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8871"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8871"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6888"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6888"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7096"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7096"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7724"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7724"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7095"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7095"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8102"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8102"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2975"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2975"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2107"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2107"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8480"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8480"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8083"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8083"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6350"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6350"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5557"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5557"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7339"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7339"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3723"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3723"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2469"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2469"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7496"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7496"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1806"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1806"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8980"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8980"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8904"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8904"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7978"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7978"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8909"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8909"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2448"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2448"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1106"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1106"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8625"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8625"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1533"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1533"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3556"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3556"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6886"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6886"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5129"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5129"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1944"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1944"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6898"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6898"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9762"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9762"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3185"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3185"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3064"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3064"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6158"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6158"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9898"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9898"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1860"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1860"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9060"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9060"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3652"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3652"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5504"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5504"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5811"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5811"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8125"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8125"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3332"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3332"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5071"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5071"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3592"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3592"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9621"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9621"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5345"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5345"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9454"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9454"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3288"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3288"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8503"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8503"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9078"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9078"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4101"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4101"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1286"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1286"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5186"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5186"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7240"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7240"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1724"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1724"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2279"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2279"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1242"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1242"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5090"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5090"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8099"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8099"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9788"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9788"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7976"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7976"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4020"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4020"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8750"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8750"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5691"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5691"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8912"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8912"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3077"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3077"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1762"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1762"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4236"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4236"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6257"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6257"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7345"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7345"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6760"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6760"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1007"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1007"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1877"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1877"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1857"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1857"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8693"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8693"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1143"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1143"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4412"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4412"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2486"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2486"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7717"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7717"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7873"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7873"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8414"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8414"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8758"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8758"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8013"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8013"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1266"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1266"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8585"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8585"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1365"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1365"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7024"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7024"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6082"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6082"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4678"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4678"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9372"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9372"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9409"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9409"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7301"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7301"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6548"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6548"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3050"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3050"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2684"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2684"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9846"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9846"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4660"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4660"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4222"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4222"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4633"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4633"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6951"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6951"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6944"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6944"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6751"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6751"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6262"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6262"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9474"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9474"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8284"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8284"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5018"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5018"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9816"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9816"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9892"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9892"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9500"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9500"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5371"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5371"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9254"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9254"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8156"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8156"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5503"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5503"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4058"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4058"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5836"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5836"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4674"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4674"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9672"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9672"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5962"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5962"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3327"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3327"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9333"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9333"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8911"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8911"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6297"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6297"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2371"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2371"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1722"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1722"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1980"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1980"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9697"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9697"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1730"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1730"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2549"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2549"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1648"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1648"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6079"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6079"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5290"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5290"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2943"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2943"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1587"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1587"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2659"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2659"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3938"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3938"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6365"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6365"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3913"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3913"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8447"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8447"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6233"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6233"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4224"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4224"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4954"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4954"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1576"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1576"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2342"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2342"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4468"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4468"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1066"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1066"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8820"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8820"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9600"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9600"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9497"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9497"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3189"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3189"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7837"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7837"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2441"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2441"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4950"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4950"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9422"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9422"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2672"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2672"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2015"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2015"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8653"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8653"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9814"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9814"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7110"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7110"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8795"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8795"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3844"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3844"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1262"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1262"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3106"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3106"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2631"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2631"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5755"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5755"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3699"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3699"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7473"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7473"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5091"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5091"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3114"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3114"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6403"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6403"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9768"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9768"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2594"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2594"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4428"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4428"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4937"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4937"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7806"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7806"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6276"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6276"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1359"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1359"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3001"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3001"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9898"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9898"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4964"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4964"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7292"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7292"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9600"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9600"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3443"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3443"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2934"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2934"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1694"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1694"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6676"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6676"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2987"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2987"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6198"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6198"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7907"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7907"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7956"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7956"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4847"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4847"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4619"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4619"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2996"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2996"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1618"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1618"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4427"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4427"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6012"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6012"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6560"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6560"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7767"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7767"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2716"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2716"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2364"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2364"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9623"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9623"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2074"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2074"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1833"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1833"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7024"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7024"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7697"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7697"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4098"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4098"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4325"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4325"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8031"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8031"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8715"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8715"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5960"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5960"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8296"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8296"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3882"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3882"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7171"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7171"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9267"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9267"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7152"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7152"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2418"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2418"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3219"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3219"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6627"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6627"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6726"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6726"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8370"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8370"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2331"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2331"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1065"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1065"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3956"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3956"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2574"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2574"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4122"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4122"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7663"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7663"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4773"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4773"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9153"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9153"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8326"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8326"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2306"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2306"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8647"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8647"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5505"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5505"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4873"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4873"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1650"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1650"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2432"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2432"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5010"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5010"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4158"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4158"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3176"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3176"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8371"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8371"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3689"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3689"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8334"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8334"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3134"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3134"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4932"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4932"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4076"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4076"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9535"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9535"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7292"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7292"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5688"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5688"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5150"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5150"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8457"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8457"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9593"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9593"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9999"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9999"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8641"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8641"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4078"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4078"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7666"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7666"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6758"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6758"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6939"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6939"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4315"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4315"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9115"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9115"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2948"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2948"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2883"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2883"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7980"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7980"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4766"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4766"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8983"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8983"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7751"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7751"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3358"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3358"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3045"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3045"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2302"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2302"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4656"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4656"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8055"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8055"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9307"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9307"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1946"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1946"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7009"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7009"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1010"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1010"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7607"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7607"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1916"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1916"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9794"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9794"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7324"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7324"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5505"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5505"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1233"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1233"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5565"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5565"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2056"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2056"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3258"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3258"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1230"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1230"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9949"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9949"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5843"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5843"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4232"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4232"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6208"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6208"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8794"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8794"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4946"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4946"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1785"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1785"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7831"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7831"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6195"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6195"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1206"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1206"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8166"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8166"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9202"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9202"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3119"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3119"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3498"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3498"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8576"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8576"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7078"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7078"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6858"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6858"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1458"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1458"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4793"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4793"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8197"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8197"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6886"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6886"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8631"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8631"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"9694"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9694"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4998"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4998"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2654"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2654"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6812"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6812"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5860"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5860"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6151"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6151"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6337"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6337"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9614"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9614"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2873"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2873"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1950"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1950"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7884"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7884"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5352"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5352"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1627"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1627"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3965"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3965"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1226"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1226"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6316"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6316"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7889"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7889"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8867"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8867"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3063"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3063"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7927"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7927"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2326"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2326"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5268"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5268"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5651"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5651"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9792"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9792"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6815"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6815"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6057"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6057"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3701"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3701"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9780"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9780"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8924"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8924"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9880"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9880"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5106"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5106"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"3422"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3422"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2601"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2601"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5984"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5984"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4966"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4966"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8913"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8913"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2051"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2051"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2804"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2804"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5473"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5473"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6235"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6235"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7108"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7108"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2405"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2405"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8541"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8541"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7876"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7876"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7560"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7560"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2208"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2208"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9783"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9783"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2509"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2509"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4285"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4285"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7854"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7854"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7543"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7543"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8949"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8949"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5678"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5678"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8926"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8926"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4894"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4894"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2340"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2340"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2376"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2376"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1411"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1411"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8465"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8465"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5689"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5689"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3461"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3461"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1522"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1522"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5351"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5351"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"5493"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5493"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"2344"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2344"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1939"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1939"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7216"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7216"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1084"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1084"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3179"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3179"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5305"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5305"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"1622"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1622"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8217"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8217"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7189"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7189"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1631"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1631"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3965"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3965"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4172"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4172"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8555"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8555"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6993"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6993"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"3472"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3472"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6799"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6799"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9225"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9225"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1704"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1704"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8749"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8749"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"3681"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3681"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6239"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6239"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7565"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7565"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9450"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9450"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4845"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4845"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2005"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2005"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1929"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1929"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7202"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7202"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6417"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6417"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6876"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6876"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"9531"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9531"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"1491"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1491"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8160"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8160"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8065"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8065"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8896"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8896"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8787"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8787"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9767"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9767"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"2496"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2496"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5476"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5476"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8857"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8857"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2781"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2781"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6497"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6497"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"4088"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4088"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4000"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4000"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8622"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8622"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"6179"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6179"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"6216"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6216"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"4058"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4058"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1319"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1319"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"7941"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7941"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7753"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7753"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"5496"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5496"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9917"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9917"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"8548"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8548"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4201"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4201"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4564"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4564"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"6444"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6444"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1357"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1357"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2928"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2928"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3772"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3772"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"8777"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8777"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2965"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2965"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"2061"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2061"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5277"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5277"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"6663"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6663"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"7633"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7633"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1779"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1779"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"4888"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4888"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1255"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1255"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8573"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8573"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7281"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7281"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"4697"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4697"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1315"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1315"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7900"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7900"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"7745"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7745"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"2350"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2350"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1583"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1583"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1146"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1146"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4828"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4828"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5453"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5453"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7766"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7766"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3575"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3575"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9841"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9841"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2885"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2885"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"9812"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9812"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"9561"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9561"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"4173"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4173"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3203"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3203"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"1741"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1741"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6527"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6527"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9132"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9132"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8966"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8966"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"3517"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3517"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7098"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7098"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6070"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6070"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2963"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2963"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"7418"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7418"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"8889"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8889"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2194"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2194"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7560"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7560"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8425"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8425"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"7671"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7671"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9000"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9000"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"3450"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3450"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"8473"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8473"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"1766"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1766"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"8018"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8018"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4836"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4836"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2776"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2776"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"5588"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5588"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"5411"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5411"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"3041"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3041"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"4687"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4687"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"1280"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1280"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"9250"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9250"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"5524"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5524"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:"1595"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1595"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:"2977"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2977"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:"2227"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2227"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"9394"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9394"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:"6123"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6123"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"7064"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7064"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"5471"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5471"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:"8350"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8350"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:"6798"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6798"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

} catch (e) {
   print (e);
}


function printUpdateResult(result,logStatement){
	print("\n\n"+logStatement+" : ");
	print("\n\n"+result+" : ");
}


function printValues(mycursor, logStatement){
	print("\n\n"+logStatement+" : ");
	while( myCursor.hasNext()){
		var myDocument = myCursor.next();
		if (myDocument) {
		    var myName = myDocument;
		    print (tojson(myName));
		}
	}
}