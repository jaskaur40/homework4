conn = new Mongo();
db = conn.getDB("local");
printjson('Connected');

try {



var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2400}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2400");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5125}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5125");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5340}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5340");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6040}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6040");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1684}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1684");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1850}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1850");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2518}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2518");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5965}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5965");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2977}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2977");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9567}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9567");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9769}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9769");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2370}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2370");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5106}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5106");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8662}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8662");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6286}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6286");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4965}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4965");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5980}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5980");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8674}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8674");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8910}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8910");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2220}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2220");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7321}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7321");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8906}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8906");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2762}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2762");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4375}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4375");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9476}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9476");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3799}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3799");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7895}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7895");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5090}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5090");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9396}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9396");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7866}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7866");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6971}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6971");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2362}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2362");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8540}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8540");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7935}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7935");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5808}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5808");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5967}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5967");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5780}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5780");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1602}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1602");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7187}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7187");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6569}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6569");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6285}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6285");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2733}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2733");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3131}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3131");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5758}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5758");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1736}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1736");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9724}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9724");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5588}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5588");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5573}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5573");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9788}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9788");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9435}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9435");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7960}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7960");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3244}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3244");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5566}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5566");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4705}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4705");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6517}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6517");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4051}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4051");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7312}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7312");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6807}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6807");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9893}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9893");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8373}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8373");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1048}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1048");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6551}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6551");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3129}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3129");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6606}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6606");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3655}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3655");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6497}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6497");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1374}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1374");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2107}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2107");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6150}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6150");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7435}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7435");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5652}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5652");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6419}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6419");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5067}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5067");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2357}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2357");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9863}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9863");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2511}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2511");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9637}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9637");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6792}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6792");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2981}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2981");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9028}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9028");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9241}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9241");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1452}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1452");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2605}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2605");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3609}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3609");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8681}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8681");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8486}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8486");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3552}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3552");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4524}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4524");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9123}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9123");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4844}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4844");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7859}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7859");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2677}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2677");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8747}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8747");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5326}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5326");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6373}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6373");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5139}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5139");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5224}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5224");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1441}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1441");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3049}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3049");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1016}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1016");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5807}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5807");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6965}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6965");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4938}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4938");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8363}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8363");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8545}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8545");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3753}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3753");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7233}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7233");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1771}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1771");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5842}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5842");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6693}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6693");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6830}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6830");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7570}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7570");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9493}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9493");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7782}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7782");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5002}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5002");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8867}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8867");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3015}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3015");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4522}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4522");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8800}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8800");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2874}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2874");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3310}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3310");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7308}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7308");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6820}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6820");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9799}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9799");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6409}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6409");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6906}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6906");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4516}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4516");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7840}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7840");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3477}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3477");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1810}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1810");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9723}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9723");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8767}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8767");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6100}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6100");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7605}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7605");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6367}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6367");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9641}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9641");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8199}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8199");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6469}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6469");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4585}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4585");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8681}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8681");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6663}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6663");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2530}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2530");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7560}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7560");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8374}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8374");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8895}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8895");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5894}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5894");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3826}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3826");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7868}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7868");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7972}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7972");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1541}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1541");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5225}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5225");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1627}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1627");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9534}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9534");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6211}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6211");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7092}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7092");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9479}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9479");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5710}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5710");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5813}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5813");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1379}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1379");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2709}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2709");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2990}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2990");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2954}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2954");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4591}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4591");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3422}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3422");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8376}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8376");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9752}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9752");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8472}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8472");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4180}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4180");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4470}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4470");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5594}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5594");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1909}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1909");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5027}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5027");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7590}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7590");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6342}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6342");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8398}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8398");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2287}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2287");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2510}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2510");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9316}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9316");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6057}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6057");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6365}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6365");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1713}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1713");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4611}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4611");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2582}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2582");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9640}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9640");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5611}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5611");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1802}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1802");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6799}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6799");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1236}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1236");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7459}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7459");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9286}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9286");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6810}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6810");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6291}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6291");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7734}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7734");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2486}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2486");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4296}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4296");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2788}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2788");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3061}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3061");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8048}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8048");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1355}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1355");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5731}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5731");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3760}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3760");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4034}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4034");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7418}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7418");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6221}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6221");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1079}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1079");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3937}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3937");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1474}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1474");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9362}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9362");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1449}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1449");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3313}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3313");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7726}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7726");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3805}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3805");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6385}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6385");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5257}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5257");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5617}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5617");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3163}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3163");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1628}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1628");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4064}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4064");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1347}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1347");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6189}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6189");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2141}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2141");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4674}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4674");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3908}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3908");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8606}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8606");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4522}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4522");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8933}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8933");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1007}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1007");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5380}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5380");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2891}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2891");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9931}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9931");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7385}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7385");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7008}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7008");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9798}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9798");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1934}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1934");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9466}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9466");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8926}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8926");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7432}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7432");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9510}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9510");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4607}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4607");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2022}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2022");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6041}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6041");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6685}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6685");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3333}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3333");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3684}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3684");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4166}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4166");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1784}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1784");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4320}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4320");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6068}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6068");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5505}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5505");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4681}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4681");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2810}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2810");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7774}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7774");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3515}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3515");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9908}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9908");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5545}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5545");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1020}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1020");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9493}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9493");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2617}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2617");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2324}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2324");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5134}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5134");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5043}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5043");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7812}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7812");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4024}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4024");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2368}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2368");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8306}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8306");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6651}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6651");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5003}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5003");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4761}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4761");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5726}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5726");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8567}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8567");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3644}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3644");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9099}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9099");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1254}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1254");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1374}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1374");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9038}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9038");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1051}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1051");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2449}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2449");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2364}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2364");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8539}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8539");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9514}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9514");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8379}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8379");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7386}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7386");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8604}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8604");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9526}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9526");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2558}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2558");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8720}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8720");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9079}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9079");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5672}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5672");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5311}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5311");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3822}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3822");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9589}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9589");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2692}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2692");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9942}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9942");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9124}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9124");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8076}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8076");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7933}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7933");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3811}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3811");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3558}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3558");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6490}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6490");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5581}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5581");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1901}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1901");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1278}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1278");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3049}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3049");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7189}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7189");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9024}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9024");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6663}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6663");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3483}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3483");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6942}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6942");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5494}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5494");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7380}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7380");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6205}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6205");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7154}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7154");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7046}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7046");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2582}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2582");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3489}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3489");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9841}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9841");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4658}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4658");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3760}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3760");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1842}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1842");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9450}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9450");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3734}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3734");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4932}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4932");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9269}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9269");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5390}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5390");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5267}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5267");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8940}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8940");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3877}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3877");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6845}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6845");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5119}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5119");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6583}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6583");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9134}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9134");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7101}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7101");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7632}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7632");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9941}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9941");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8808}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8808");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5369}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5369");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8453}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8453");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5871}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5871");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6571}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6571");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3600}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3600");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7149}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7149");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1938}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1938");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2755}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2755");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3430}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3430");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6947}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6947");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8333}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8333");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1798}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1798");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6465}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6465");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5142}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5142");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7178}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7178");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2509}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2509");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8767}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8767");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5772}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5772");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2569}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2569");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5290}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5290");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8321}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8321");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1580}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1580");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7960}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7960");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9561}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9561");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7176}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7176");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2342}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2342");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6089}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6089");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4422}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4422");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9445}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9445");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2691}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2691");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5787}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5787");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6645}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6645");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8631}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8631");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9713}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9713");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7386}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7386");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1016}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1016");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6643}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6643");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2620}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2620");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8195}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8195");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1405}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1405");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7648}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7648");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7252}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7252");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9316}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9316");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6093}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6093");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5918}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5918");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6209}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6209");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9937}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9937");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8854}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8854");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8588}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8588");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4574}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4574");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5669}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5669");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4026}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4026");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1038}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1038");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6481}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6481");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9404}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9404");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2229}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2229");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6876}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6876");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1115}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1115");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7041}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7041");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4714}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4714");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6915}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6915");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4722}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4722");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9134}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9134");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6473}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6473");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3478}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3478");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9649}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9649");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7683}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7683");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7749}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7749");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6768}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6768");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1014}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1014");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3073}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3073");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1627}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1627");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5641}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5641");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8687}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8687");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1184}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1184");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1588}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1588");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3687}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3687");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4174}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4174");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7828}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7828");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6656}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6656");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4647}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4647");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1305}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1305");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3686}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3686");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8213}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8213");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5736}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5736");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9057}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9057");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1240}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1240");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3972}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3972");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2503}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2503");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8837}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8837");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4976}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4976");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1806}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1806");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4108}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4108");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9582}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9582");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5195}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5195");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3393}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3393");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6238}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6238");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9919}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9919");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8192}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8192");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6492}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6492");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6295}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6295");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7995}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7995");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5484}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5484");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9953}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9953");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1399}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1399");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3061}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3061");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5680}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5680");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6002}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6002");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2615}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2615");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1683}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1683");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5135}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5135");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1771}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1771");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9185}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9185");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5244}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5244");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5597}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5597");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3651}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3651");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3270}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3270");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8055}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8055");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8273}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8273");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1679}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1679");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4765}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4765");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9965}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9965");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7901}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7901");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9613}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9613");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6384}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6384");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3588}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3588");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9392}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9392");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7902}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7902");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3939}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3939");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5440}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5440");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6537}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6537");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9721}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9721");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6338}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6338");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7245}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7245");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8183}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8183");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1775}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1775");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8527}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8527");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6899}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6899");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6304}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6304");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8009}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8009");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3798}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3798");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2464}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2464");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9066}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9066");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2676}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2676");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3790}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3790");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4527}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4527");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4226}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4226");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8875}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8875");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8294}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8294");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1068}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1068");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1022}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1022");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6871}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6871");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2252}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2252");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2162}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2162");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6717}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6717");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7416}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7416");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1869}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1869");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7479}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7479");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8347}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8347");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2439}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2439");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4647}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4647");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9305}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9305");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9099}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9099");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7175}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7175");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8996}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8996");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3523}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3523");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6782}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6782");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9596}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9596");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4682}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4682");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2987}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2987");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9283}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9283");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7681}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7681");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9476}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9476");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9428}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9428");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3663}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3663");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2105}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2105");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1413}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1413");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3048}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3048");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5187}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5187");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1582}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1582");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9394}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9394");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7778}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7778");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3880}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3880");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2817}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2817");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5073}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5073");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3065}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3065");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7369}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7369");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3630}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3630");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7981}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7981");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2656}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2656");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7013}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7013");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2480}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2480");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7812}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7812");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7280}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7280");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5225}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5225");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3099}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3099");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3372}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3372");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7285}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7285");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4287}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4287");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1236}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1236");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7617}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7617");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7794}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7794");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7078}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7078");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9034}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9034");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2830}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2830");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6287}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6287");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7191}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7191");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3782}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3782");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3577}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3577");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2087}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2087");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6995}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6995");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7450}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7450");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6462}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6462");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5591}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5591");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9001}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9001");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4212}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4212");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6941}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6941");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2554}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2554");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3644}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3644");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7485}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7485");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7872}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7872");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7548}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7548");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4958}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4958");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3756}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3756");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8114}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8114");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8779}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8779");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1268}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1268");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1601}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1601");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9909}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9909");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8745}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8745");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6062}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6062");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5382}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5382");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7680}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7680");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4378}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4378");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2849}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2849");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1915}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1915");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9268}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9268");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6770}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6770");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3372}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3372");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4498}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4498");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2732}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2732");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7878}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7878");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4643}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4643");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3271}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3271");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8331}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8331");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1524}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1524");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9256}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9256");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8313}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8313");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5157}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5157");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1164}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1164");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6259}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6259");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9928}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9928");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9040}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9040");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6143}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6143");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4742}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4742");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5845}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5845");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8380}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8380");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7045}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7045");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6650}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6650");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9330}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9330");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6643}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6643");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2109}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2109");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9989}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9989");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2295}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2295");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3550}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3550");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4379}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4379");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4593}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4593");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4698}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4698");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8998}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8998");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6732}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6732");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9645}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9645");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4660}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4660");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2799}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2799");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4594}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4594");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4914}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4914");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5905}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5905");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6679}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6679");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2460}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2460");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2293}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2293");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5289}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5289");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2839}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2839");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7274}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7274");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9592}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9592");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5250}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5250");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9485}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9485");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7318}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7318");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9857}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9857");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3157}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3157");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8320}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8320");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7605}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7605");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8804}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8804");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8664}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8664");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5217}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5217");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4238}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4238");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6376}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6376");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5459}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5459");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3742}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3742");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5717}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5717");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7319}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7319");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1377}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1377");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1345}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1345");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6542}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6542");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7388}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7388");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8119}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8119");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4897}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4897");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1663}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1663");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9998}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9998");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5924}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5924");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8654}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8654");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8412}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8412");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8572}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8572");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3576}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3576");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3373}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3373");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7513}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7513");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9433}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9433");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1366}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1366");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6262}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6262");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2522}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2522");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5197}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5197");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9257}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9257");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1414}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1414");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1548}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1548");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6822}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6822");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5058}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5058");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8247}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8247");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4085}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4085");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4262}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4262");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7968}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7968");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1307}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1307");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9150}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9150");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9258}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9258");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6802}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6802");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2419}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2419");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5534}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5534");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8498}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8498");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4231}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4231");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3871}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3871");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5123}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5123");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8844}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8844");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5273}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5273");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5650}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5650");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5326}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5326");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4127}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4127");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9297}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9297");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1761}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1761");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7785}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7785");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1426}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1426");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7776}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7776");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1201}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1201");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9483}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9483");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7062}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7062");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8477}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8477");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1056}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1056");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3673}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3673");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5570}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5570");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6901}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6901");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1480}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1480");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1980}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1980");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9486}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9486");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4471}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4471");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8892}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8892");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1457}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1457");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7115}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7115");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1364}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1364");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3072}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3072");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4288}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4288");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7381}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7381");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5176}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5176");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6685}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6685");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9591}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9591");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1338}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1338");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5395}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5395");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3971}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3971");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9494}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9494");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2513}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2513");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1338}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1338");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8708}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8708");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7694}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7694");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1867}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1867");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3895}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3895");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6328}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6328");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9710}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9710");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9269}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9269");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1219}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1219");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3582}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3582");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3402}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3402");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2805}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2805");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8924}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8924");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7060}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7060");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2754}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2754");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1643}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1643");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5378}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5378");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7513}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7513");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8716}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8716");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3442}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3442");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4607}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4607");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2221}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2221");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4089}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4089");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1379}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1379");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6404}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6404");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8225}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8225");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5001}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5001");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1171}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1171");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3062}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3062");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2473}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2473");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2936}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2936");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2657}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2657");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8133}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8133");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8311}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8311");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5650}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5650");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4315}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4315");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6048}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6048");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2815}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2815");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5060}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5060");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1910}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1910");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8311}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8311");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2692}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2692");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9493}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9493");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8834}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8834");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2336}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2336");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5381}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5381");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8260}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8260");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1529}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1529");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3012}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3012");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6616}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6616");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5670}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5670");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6008}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6008");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6202}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6202");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4400}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4400");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2392}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2392");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2405}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2405");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4700}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4700");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4256}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4256");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4732}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4732");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1740}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1740");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9527}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9527");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6523}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6523");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4688}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4688");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9091}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9091");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3519}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3519");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1834}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1834");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9480}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9480");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9666}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9666");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1206}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1206");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2370}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2370");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9319}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9319");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9702}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9702");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2218}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2218");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3171}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3171");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4212}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4212");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5064}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5064");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7675}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7675");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8422}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8422");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6908}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6908");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9278}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9278");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6622}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6622");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5156}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5156");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4759}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4759");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1246}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1246");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4963}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4963");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2150}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2150");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2967}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2967");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2758}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2758");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3264}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3264");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5261}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5261");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7671}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7671");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6497}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6497");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8288}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8288");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2350}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2350");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7990}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7990");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2678}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2678");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8330}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8330");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2024}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2024");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9585}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9585");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9319}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9319");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6926}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6926");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6357}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6357");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9067}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9067");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1992}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1992");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5592}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5592");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2671}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2671");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4625}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4625");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5908}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5908");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2577}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2577");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1492}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1492");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6512}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6512");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2495}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2495");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5646}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5646");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9395}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9395");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9669}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9669");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2877}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2877");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5705}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5705");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8169}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8169");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1151}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1151");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4200}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4200");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6068}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6068");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8131}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8131");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6728}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6728");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2905}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2905");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2496}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2496");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1033}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1033");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6778}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6778");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7086}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7086");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7910}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7910");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8187}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8187");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4253}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4253");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5549}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5549");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4405}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4405");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4412}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4412");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6695}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6695");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9374}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9374");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2657}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2657");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8008}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8008");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8131}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8131");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2372}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2372");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1065}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1065");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3023}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3023");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6534}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6534");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3642}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3642");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5477}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5477");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4715}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4715");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1856}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1856");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7828}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7828");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6630}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6630");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3667}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3667");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5687}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5687");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3336}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3336");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2041}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2041");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6986}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6986");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7313}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7313");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2730}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2730");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9178}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9178");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8766}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8766");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7130}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7130");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1750}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1750");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1186}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1186");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2838}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2838");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9589}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9589");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5796}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5796");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4587}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4587");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6181}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6181");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5586}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5586");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4542}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4542");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1517}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1517");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1941}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1941");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2347}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2347");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1420}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1420");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1361}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1361");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7674}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7674");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9950}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9950");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5460}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5460");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7929}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7929");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4112}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4112");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2696}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2696");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5569}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5569");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4497}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4497");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1420}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1420");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5736}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5736");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6970}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6970");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8434}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8434");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2187}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2187");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8811}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8811");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6518}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6518");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3199}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3199");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7470}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7470");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8572}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8572");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7646}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7646");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1343}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1343");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2037}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2037");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7779}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7779");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2640}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2640");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5690}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5690");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6585}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6585");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1216}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1216");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5695}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5695");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3580}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3580");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9371}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9371");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7801}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7801");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5214}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5214");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8367}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8367");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1805}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1805");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5619}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5619");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4541}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4541");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7663}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7663");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7147}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7147");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2863}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2863");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2182}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2182");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8865}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8865");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9266}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9266");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4294}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4294");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3931}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3931");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1022}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1022");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4230}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4230");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2865}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2865");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9754}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9754");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6458}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6458");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8141}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8141");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4047}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4047");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2114}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2114");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1304}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1304");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7860}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7860");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7856}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7856");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1028}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1028");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9189}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9189");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8509}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8509");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3006}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3006");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9297}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9297");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4186}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4186");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3135}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3135");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6207}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6207");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8571}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8571");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9282}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9282");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3861}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3861");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4880}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4880");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9341}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9341");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6313}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6313");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1080}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1080");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8479}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8479");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6478}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6478");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9783}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9783");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1409}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1409");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8476}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8476");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3632}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3632");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1401}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1401");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4191}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4191");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5214}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5214");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1441}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1441");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5607}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5607");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4165}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4165");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7586}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7586");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8327}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8327");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9794}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9794");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7879}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7879");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3852}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3852");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4878}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4878");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2809}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2809");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8824}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8824");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6862}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6862");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6334}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6334");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5061}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5061");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7100}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7100");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2035}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2035");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3395}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3395");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5773}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5773");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5265}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5265");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2391}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2391");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6362}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6362");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1918}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1918");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3748}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3748");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4875}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4875");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2591}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2591");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6686}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6686");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9509}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9509");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8390}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8390");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6194}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6194");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3972}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3972");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4727}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4727");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5732}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5732");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2627}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2627");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4313}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4313");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6141}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6141");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9663}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9663");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3681}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3681");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6647}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6647");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1804}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1804");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7676}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7676");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3145}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3145");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7222}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7222");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5177}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5177");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8270}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8270");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9299}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9299");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8824}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8824");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3819}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3819");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8869}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8869");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7650}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7650");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7635}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7635");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4957}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4957");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8008}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8008");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5822}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5822");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3060}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3060");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9147}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9147");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8663}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8663");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3968}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3968");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1923}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1923");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8177}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8177");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1424}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1424");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6810}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6810");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4755}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4755");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1186}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1186");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9402}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9402");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3924}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3924");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8928}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8928");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3420}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3420");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4406}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4406");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5793}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5793");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7709}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7709");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3451}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3451");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8218}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8218");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8590}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8590");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3034}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3034");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9912}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9912");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4554}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4554");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4668}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4668");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6254}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6254");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6996}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6996");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3642}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3642");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6832}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6832");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9817}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9817");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2368}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2368");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5420}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5420");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8811}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8811");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7293}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7293");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7735}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7735");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7337}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7337");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5727}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5727");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8640}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8640");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4591}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4591");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8166}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8166");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1192}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1192");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8042}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8042");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2828}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2828");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7518}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7518");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6548}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6548");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4883}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4883");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8829}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8829");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8410}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8410");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1902}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1902");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8895}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8895");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3195}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3195");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1736}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1736");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2016}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2016");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7182}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7182");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6796}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6796");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9438}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9438");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7188}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7188");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6108}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6108");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4237}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4237");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9260}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9260");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6057}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6057");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7448}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7448");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8557}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8557");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4473}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4473");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2457}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2457");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6048}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6048");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2502}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2502");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6855}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6855");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8914}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8914");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2440}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2440");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6420}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6420");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8762}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8762");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6451}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6451");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5736}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5736");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2606}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2606");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8809}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8809");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3812}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3812");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5592}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5592");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4993}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4993");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6130}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6130");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8588}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8588");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8606}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8606");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6823}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6823");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1861}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1861");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8479}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8479");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2182}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2182");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3719}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3719");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5069}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5069");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3387}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3387");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1755}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1755");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7862}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7862");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3741}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3741");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2430}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2430");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5993}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5993");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5692}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5692");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2841}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2841");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8591}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8591");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3873}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3873");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2274}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2274");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4826}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4826");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5962}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5962");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2584}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2584");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2332}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2332");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2347}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2347");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8397}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8397");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5741}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5741");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1403}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1403");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5089}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5089");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2668}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2668");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8267}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8267");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2664}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2664");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5701}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5701");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3849}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3849");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2358}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2358");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2175}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2175");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2124}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2124");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6197}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6197");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1602}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1602");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1147}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1147");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4514}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4514");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2981}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2981");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8045}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8045");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8407}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8407");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4317}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4317");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5060}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5060");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6874}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6874");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6260}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6260");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4485}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4485");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5634}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5634");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9219}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9219");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7655}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7655");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6175}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6175");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4813}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4813");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3825}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3825");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7404}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7404");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3399}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3399");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9274}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9274");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2793}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2793");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1876}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1876");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1886}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1886");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9655}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9655");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9059}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9059");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5531}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5531");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8469}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8469");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3069}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3069");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3762}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3762");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7602}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7602");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5112}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5112");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3783}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3783");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7714}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7714");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1741}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1741");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5099}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5099");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2512}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2512");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7231}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7231");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1745}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1745");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5994}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5994");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7929}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7929");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2820}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2820");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2904}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2904");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3375}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3375");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9274}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9274");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2851}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2851");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8283}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8283");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9930}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9930");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8325}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8325");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1989}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1989");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3111}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3111");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3395}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3395");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3947}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3947");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9623}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9623");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8927}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8927");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9225}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9225");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9429}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9429");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1142}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1142");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1195}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1195");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4345}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4345");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4037}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4037");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9863}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9863");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2077}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2077");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1909}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1909");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9416}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9416");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9443}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9443");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5446}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5446");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4409}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4409");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4023}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4023");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4344}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4344");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4496}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4496");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5848}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5848");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7669}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7669");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1252}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1252");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5311}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5311");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4355}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4355");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9728}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9728");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1333}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1333");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5188}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5188");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5037}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5037");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8288}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8288");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2098}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2098");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7919}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7919");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8577}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8577");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9942}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9942");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9754}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9754");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4087}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4087");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1025}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1025");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1516}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1516");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8770}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8770");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9243}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9243");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3722}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3722");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2260}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2260");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8511}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8511");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7488}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7488");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4696}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4696");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2026}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2026");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3966}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3966");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6414}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6414");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6863}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6863");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3258}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3258");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7076}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7076");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7079}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7079");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5146}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5146");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3850}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3850");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5172}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5172");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3565}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3565");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2595}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2595");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2023}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2023");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7090}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7090");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9449}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9449");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3206}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3206");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9292}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9292");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1451}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1451");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9386}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9386");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4226}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4226");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5612}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5612");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1438}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1438");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9436}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9436");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5543}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5543");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9095}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9095");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8517}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8517");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8770}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8770");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6056}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6056");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8183}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8183");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8807}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8807");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7441}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7441");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1655}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1655");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5992}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5992");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3700}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3700");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8816}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8816");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4097}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4097");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9405}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9405");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6872}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6872");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9363}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9363");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1908}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1908");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6221}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6221");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9816}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9816");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7222}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7222");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9936}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9936");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2302}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2302");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3219}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3219");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3323}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3323");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7334}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7334");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8261}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8261");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3453}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3453");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8071}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8071");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6780}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6780");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5090}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5090");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4487}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4487");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4985}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4985");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8365}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8365");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6150}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6150");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1210}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1210");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8126}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8126");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8537}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8537");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9051}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9051");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1491}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1491");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6963}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6963");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4314}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4314");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3499}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3499");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1579}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1579");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9046}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9046");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5424}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5424");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3790}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3790");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2139}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2139");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6395}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6395");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8170}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8170");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3025}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3025");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4145}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4145");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4179}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4179");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2485}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2485");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4701}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4701");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9261}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9261");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9071}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9071");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5335}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5335");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7736}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7736");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1651}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1651");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2257}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2257");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4058}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4058");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1109}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1109");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1717}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1717");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3145}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3145");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1073}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1073");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3738}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3738");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9566}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9566");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3293}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3293");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8912}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8912");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1067}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1067");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1288}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1288");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1812}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1812");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3060}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3060");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1598}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1598");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5852}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5852");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9855}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9855");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2717}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2717");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9187}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9187");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4377}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4377");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9124}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9124");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3966}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3966");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3840}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3840");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4038}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4038");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7389}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7389");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6231}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6231");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2898}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2898");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9383}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9383");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9804}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9804");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8868}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8868");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6367}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6367");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1066}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1066");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2908}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2908");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7490}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7490");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9071}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9071");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7941}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7941");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1524}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1524");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6251}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6251");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6585}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6585");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7368}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7368");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5345}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5345");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9196}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9196");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3645}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3645");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1433}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1433");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2064}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2064");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1773}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1773");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2366}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2366");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5103}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5103");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5398}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5398");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5878}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5878");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8831}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8831");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2095}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2095");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6417}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6417");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3632}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3632");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7159}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7159");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8528}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8528");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4045}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4045");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7185}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7185");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9294}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9294");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6253}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6253");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1278}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1278");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6629}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6629");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4588}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4588");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7877}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7877");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9812}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9812");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5358}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5358");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1126}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1126");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2028}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2028");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5262}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5262");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8336}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8336");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4190}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4190");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5434}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5434");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5720}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5720");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7396}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7396");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3472}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3472");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2065}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2065");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9093}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9093");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3831}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3831");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8570}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8570");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4815}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4815");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3875}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3875");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3288}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3288");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2368}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2368");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6109}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6109");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4002}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4002");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8309}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8309");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7421}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7421");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1444}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1444");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3142}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3142");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1195}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1195");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7526}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7526");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3903}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3903");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6581}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6581");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5020}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5020");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1493}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1493");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3104}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3104");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5350}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5350");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3583}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3583");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8201}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8201");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7109}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7109");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2929}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2929");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4898}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4898");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2371}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2371");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4519}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4519");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3561}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3561");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6955}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6955");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3543}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3543");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8688}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8688");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4317}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4317");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7052}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7052");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6971}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6971");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6387}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6387");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6395}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6395");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6870}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6870");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1481}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1481");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7791}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7791");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1224}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1224");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1798}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1798");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7677}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7677");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9184}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9184");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2715}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2715");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3861}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3861");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5882}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5882");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9786}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9786");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3406}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3406");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6748}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6748");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2509}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2509");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7213}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7213");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4830}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4830");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5852}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5852");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3835}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3835");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8952}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8952");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5133}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5133");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4671}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4671");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1911}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1911");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1004}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1004");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8389}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8389");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9260}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9260");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3350}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3350");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4279}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4279");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5039}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5039");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5903}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5903");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5106}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5106");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2671}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2671");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2080}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2080");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7690}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7690");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9359}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9359");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4728}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4728");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8332}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8332");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1129}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1129");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1137}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1137");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3179}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3179");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7535}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7535");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4687}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4687");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4406}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4406");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3051}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3051");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1138}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1138");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1878}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1878");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5978}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5978");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6739}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6739");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3016}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3016");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7321}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7321");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8157}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8157");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8701}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8701");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8121}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8121");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7556}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7556");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5031}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5031");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2081}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2081");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2610}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2610");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6346}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6346");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4351}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4351");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6219}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6219");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8774}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8774");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9156}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9156");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4406}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4406");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9831}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9831");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4674}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4674");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9366}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9366");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2441}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2441");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6885}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6885");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2247}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2247");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4085}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4085");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8918}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8918");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3287}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3287");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9592}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9592");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5721}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5721");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9648}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9648");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8899}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8899");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5372}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5372");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7870}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7870");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3245}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3245");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4246}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4246");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2453}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2453");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7928}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7928");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4643}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4643");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3401}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3401");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5362}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5362");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8703}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8703");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9473}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9473");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6958}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6958");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8698}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8698");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7352}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7352");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4955}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4955");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2387}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2387");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6018}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6018");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3118}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3118");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9594}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9594");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1561}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1561");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1596}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1596");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1261}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1261");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3636}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3636");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7944}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7944");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1778}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1778");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9247}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9247");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9957}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9957");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1294}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1294");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9240}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9240");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8677}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8677");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9027}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9027");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7634}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7634");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8121}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8121");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3883}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3883");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4851}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4851");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3697}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3697");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3405}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3405");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5087}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5087");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5002}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5002");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7183}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7183");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4387}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4387");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9888}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9888");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4426}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4426");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5126}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5126");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1437}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1437");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5889}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5889");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6322}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6322");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9559}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9559");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9742}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9742");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9428}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9428");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9078}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9078");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9719}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9719");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6638}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6638");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3415}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3415");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7848}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7848");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1421}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1421");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7358}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7358");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6174}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6174");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5667}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5667");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1116}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1116");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4362}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4362");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8925}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8925");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9973}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9973");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1356}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1356");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1793}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1793");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4397}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4397");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8824}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8824");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4449}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4449");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2328}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2328");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4092}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4092");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8122}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8122");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2938}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2938");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1336}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1336");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8124}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8124");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7734}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7734");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2109}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2109");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2843}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2843");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9772}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9772");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5671}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5671");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4830}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4830");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3930}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3930");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8683}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8683");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2027}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2027");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9776}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9776");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7457}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7457");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6260}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6260");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8805}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8805");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3938}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3938");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6167}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6167");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4080}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4080");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2710}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2710");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3415}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3415");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6475}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6475");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6729}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6729");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6620}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6620");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1841}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1841");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4210}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4210");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1605}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1605");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4740}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4740");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8879}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8879");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7126}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7126");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3677}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3677");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8059}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8059");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8029}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8029");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4205}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4205");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2379}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2379");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9871}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9871");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1082}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1082");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8759}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8759");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3586}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3586");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9675}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9675");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1278}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1278");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1578}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1578");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6824}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6824");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3558}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3558");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5838}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5838");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8162}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8162");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5433}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5433");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4482}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4482");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3601}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3601");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6949}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6949");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6083}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6083");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9555}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9555");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1066}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1066");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1237}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1237");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5414}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5414");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5657}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5657");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7258}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7258");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6043}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6043");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9572}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9572");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5184}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5184");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1731}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1731");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9269}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9269");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7196}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7196");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9067}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9067");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8554}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8554");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6861}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6861");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2073}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2073");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7809}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7809");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9863}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9863");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8908}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8908");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9113}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9113");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4515}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4515");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6443}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6443");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2236}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2236");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9402}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9402");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9133}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9133");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9187}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9187");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8391}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8391");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7403}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7403");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5217}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5217");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9281}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9281");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5229}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5229");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9194}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9194");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2755}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2755");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6517}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6517");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6117}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6117");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5264}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5264");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6205}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6205");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4634}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4634");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7246}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7246");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4930}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4930");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2869}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2869");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8181}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8181");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2484}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2484");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7478}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7478");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1443}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1443");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7576}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7576");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1227}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1227");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2994}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2994");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7791}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7791");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2702}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2702");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7791}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7791");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4788}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4788");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2572}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2572");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5186}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5186");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3124}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3124");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8887}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8887");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8997}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8997");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1251}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1251");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6660}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6660");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3085}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3085");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8970}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8970");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2714}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2714");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1738}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1738");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1894}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1894");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1635}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1635");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5888}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5888");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3638}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3638");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7867}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7867");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5310}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5310");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8388}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8388");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8861}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8861");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1508}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1508");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7224}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7224");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8040}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8040");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1797}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1797");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9395}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9395");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5170}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5170");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5391}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5391");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8149}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8149");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6314}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6314");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4349}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4349");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1480}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1480");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5663}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5663");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6595}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6595");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6774}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6774");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7444}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7444");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5858}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5858");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4277}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4277");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5202}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5202");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1094}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1094");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6019}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6019");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8003}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8003");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2806}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2806");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2170}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2170");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5313}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5313");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5106}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5106");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4774}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4774");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4526}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4526");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9441}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9441");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4261}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4261");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9359}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9359");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3482}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3482");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8477}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8477");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2671}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2671");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2891}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2891");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1289}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1289");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6132}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6132");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3339}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3339");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5975}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5975");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7086}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7086");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6798}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6798");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8775}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8775");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2877}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2877");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7631}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7631");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6152}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6152");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4694}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4694");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6221}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6221");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2038}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2038");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2444}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2444");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6772}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6772");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7676}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7676");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8997}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8997");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9311}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9311");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2015}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2015");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9656}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9656");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3321}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3321");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8699}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8699");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6092}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6092");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3868}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3868");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3504}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3504");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1927}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1927");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3754}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3754");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8195}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8195");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6095}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6095");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7721}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7721");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5094}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5094");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5311}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5311");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8258}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8258");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7891}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7891");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6577}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6577");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9111}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9111");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6355}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6355");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8821}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8821");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4195}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4195");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8048}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8048");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8924}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8924");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2043}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2043");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5123}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5123");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8300}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8300");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3967}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3967");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7370}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7370");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3210}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3210");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9534}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9534");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9560}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9560");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8380}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8380");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8156}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8156");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3644}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3644");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2888}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2888");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3419}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3419");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9200}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9200");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4400}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4400");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7045}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7045");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4519}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4519");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3999}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3999");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7089}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7089");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6619}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6619");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4563}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4563");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9856}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9856");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4513}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4513");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4294}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4294");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7104}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7104");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9307}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9307");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5215}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5215");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7607}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7607");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6776}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6776");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2690}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2690");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4858}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4858");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3291}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3291");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8905}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8905");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4078}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4078");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6225}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6225");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9483}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9483");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3334}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3334");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6351}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6351");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6402}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6402");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8737}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8737");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5561}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5561");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5882}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5882");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9105}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9105");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9216}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 9216");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8841}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8841");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5160}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5160");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2244}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2244");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7943}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7943");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1040}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1040");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4030}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4030");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2007}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2007");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2572}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2572");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3948}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3948");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2947}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2947");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7558}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7558");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1829}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1829");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3078}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3078");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6815}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6815");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7743}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7743");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3980}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3980");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4126}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4126");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6811}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6811");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4421}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4421");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3859}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3859");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4034}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4034");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3123}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3123");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2427}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2427");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3715}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 3715");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6029}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6029");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3006}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3006");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5827}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5827");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2280}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2280");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8547}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8547");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6009}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6009");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7927}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7927");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7393}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7393");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4166}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 4166");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2674}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2674");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5616}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5616");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1275}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1275");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1219}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1219");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8930}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8930");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5537}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5537");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7829}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7829");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2925}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2925");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1089}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1089");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5022}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5022");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1091}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1091");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6948}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6948");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8132}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 8132");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2225}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2225");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8331}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8331");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2540}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2540");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6398}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6398");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3017}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3017");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3561}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3561");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9946}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9946");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3895}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3895");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2401}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2401");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7785}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7785");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6934}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6934");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7370}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7370");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1546}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1546");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9092}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9092");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7612}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7612");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6226}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6226");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8295}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8295");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5865}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5865");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5660}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5660");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2338}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2338");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4743}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4743");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3115}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3115");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3772}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3772");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6317}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6317");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9268}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9268");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6597}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6597");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9068}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 9068");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8186}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8186");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3907}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3907");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5853}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5853");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7095}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 7095");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2517}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2517");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4336}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4336");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6873}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6873");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3948}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3948");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7636}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7636");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8550}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8550");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9946}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 9946");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5413}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5413");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8683}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8683");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6458}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6458");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4805}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4805");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8720}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8720");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4781}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 4781");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9995}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 9995");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1276}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1276");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7630}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7630");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8082}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8082");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5592}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 5592");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1213}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1213");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8671}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8671");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1544}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1544");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7586}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7586");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6757}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6757");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6078}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 6078");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8763}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 8763");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1664}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1664");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6795}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6795");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4205}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4205");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4390}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 4390");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3325}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3325");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7535}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 7535");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7042}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7042");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2140}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2140");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3226}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 3226");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3425}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3425");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7463}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7463");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6635}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6635");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5541}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5541");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2902}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2902");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3415}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3415");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5148}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5148");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2181}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2181");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4900}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4900");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5014}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5014");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2847}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2847");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3978}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3978");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1844}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1844");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6072}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6072");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7496}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7496");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5295}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 5295");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2186}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 2186");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1256}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 1256");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7155}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 7155");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7540}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7540");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4641}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4641");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6486}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6486");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3547}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3547");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8183}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8183");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3715}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3715");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1992}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1992");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9458}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9458");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6179}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 6179");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2955}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2955");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4094}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 4094");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1627}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1627");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7670}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7670");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1142}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 1142");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1420}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 1420");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8099}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8099");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9052}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9052");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2217}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2217");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1622}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 1622");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9248}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9248");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6971}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 6971");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1727}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 1727");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7308}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7308");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4406}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 4406");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6796}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6796");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8434}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 8434");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3135}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 3135");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2991}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2991");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7300}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7300");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3876}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3876");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9609}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9609");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2104}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 2104");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8230}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8230");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5820}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 5820");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3229}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 3229");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5400}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5400");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2867}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 2867");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8234}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 8234");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6040}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6040");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8512}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 8512");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2336}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 2336");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5052}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5052");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1054}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1054");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6707}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 6707");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7406}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 7406");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2412}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 2412");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5931}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 5931");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9938}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 9938");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2688}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 2688");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5921}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5921");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3251}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 3251");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4244}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by 4244");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8948}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 8948");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5925}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by 5925");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7172}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 7172");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7815}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 7815");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3489}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by 3489");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9973}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 9973");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5424}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by 5424");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6795}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 6795");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6426}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6426");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6815}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by 6815");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1588}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by 1588");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

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