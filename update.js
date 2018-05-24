conn = new Mongo();
db = conn.getDB("local");
printjson('Connected');

try {



var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6983"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6983"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7189"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7189"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9106"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9106"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7353"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7353"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7820"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7820"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6689"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6689"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6319"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6319"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6850"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6850"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2414"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2414"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1865"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1865"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3036"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3036"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2584"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2584"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1636"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1636"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1291"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1291"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3709"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3709"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2611"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2611"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8852"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8852"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6996"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6996"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2945"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2945"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1071"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1071"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2436"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2436"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5923"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5923"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9257"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9257"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3618"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3618"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9863"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9863"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8949"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8949"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5446"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5446"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5386"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5386"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2478"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2478"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1703"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1703"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3422"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3422"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9334"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9334"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4912"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4912"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1224"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1224"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1875"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1875"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5444"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5444"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9624"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9624"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4402"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4402"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7304"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7304"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9857"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9857"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4770"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4770"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7870"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7870"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1890"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1890"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2026"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2026"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6048"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6048"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8152"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8152"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4556"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4556"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8672"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8672"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1056"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1056"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1919"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1919"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6990"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6990"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1174"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1174"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7601"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7601"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6051"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6051"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7938"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7938"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2909"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2909"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1097"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1097"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6509"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6509"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8532"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8532"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7404"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7404"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6541"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6541"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7351"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7351"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2659"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2659"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6371"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6371"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5638"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5638"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7342"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7342"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3802"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3802"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4964"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4964"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2914"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2914"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6106"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6106"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2797"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2797"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5567"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5567"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1862"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1862"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6725"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6725"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1692"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1692"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4826"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4826"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4457"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4457"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7315"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7315"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8254"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8254"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3369"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3369"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8434"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8434"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3253"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3253"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5913"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5913"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5758"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5758"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1940"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1940"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9856"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9856"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6829"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6829"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4576"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4576"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8883"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8883"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6830"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6830"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9376"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9376"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4711"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4711"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1744"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1744"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2844"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2844"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6800"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6800"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4487"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4487"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1033"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1033"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2336"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2336"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6623"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6623"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7108"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7108"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9232"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9232"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7118"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7118"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7088"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7088"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8344"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8344"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3379"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3379"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3543"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3543"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6152"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6152"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2497"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2497"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8510"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8510"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2955"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2955"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8877"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8877"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3808"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3808"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5871"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5871"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8569"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8569"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8365"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8365"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5010"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5010"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4499"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4499"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6046"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6046"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3600"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3600"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5336"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5336"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7931"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7931"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3426"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3426"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4082"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4082"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1752"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1752"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7154"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7154"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1321"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1321"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9466"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9466"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3547"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3547"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9688"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9688"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1544"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1544"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8958"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8958"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3602"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3602"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8905"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8905"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8136"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8136"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9921"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9921"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8430"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8430"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7080"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7080"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1706"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1706"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9378"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9378"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6259"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6259"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5895"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5895"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1594"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1594"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2208"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2208"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1066"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1066"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5184"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5184"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2589"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2589"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1224"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1224"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9172"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9172"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5665"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5665"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4302"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4302"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7196"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7196"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7429"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7429"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3999"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3999"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2983"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2983"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2697"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2697"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6689"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6689"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4301"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4301"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7958"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7958"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8337"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8337"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3333"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3333"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7883"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7883"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6385"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6385"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2422"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2422"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3283"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3283"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1947"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1947"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1043"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1043"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3577"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3577"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3502"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3502"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7150"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7150"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5591"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5591"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2016"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2016"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1801"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1801"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9002"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9002"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4217"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4217"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5395"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5395"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5269"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5269"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6541"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6541"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1670"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1670"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8692"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8692"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6092"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6092"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5605"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5605"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1902"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1902"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1681"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1681"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7432"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7432"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9157"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9157"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2727"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2727"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5790"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5790"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7746"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7746"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1338"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1338"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5915"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5915"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9951"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9951"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3646"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3646"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4158"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4158"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8869"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8869"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9820"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9820"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1455"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1455"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4231"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4231"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2549"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2549"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4147"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4147"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8192"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8192"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3506"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3506"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1755"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1755"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2669"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2669"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8461"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8461"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8937"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8937"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2712"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2712"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1520"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1520"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9044"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9044"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7232"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7232"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3347"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3347"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5674"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5674"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3375"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3375"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8827"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8827"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7286"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7286"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9256"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9256"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9172"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9172"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6751"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6751"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6638"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6638"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7488"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7488"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9320"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9320"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6789"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6789"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1098"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1098"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3737"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3737"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2092"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2092"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5692"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5692"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4901"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4901"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5562"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5562"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2957"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2957"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3465"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3465"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1400"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1400"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8347"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8347"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3623"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3623"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7701"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7701"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2121"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2121"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4012"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4012"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6162"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6162"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8132"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8132"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1789"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1789"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4443"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4443"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5246"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5246"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4267"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4267"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3386"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3386"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5215"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5215"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6992"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6992"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6358"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6358"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6665"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6665"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3471"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3471"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3425"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3425"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3280"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3280"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2621"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2621"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5348"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5348"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4489"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4489"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6315"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6315"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5686"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5686"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3233"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3233"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7305"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7305"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7204"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7204"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1775"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1775"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6701"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6701"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5758"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5758"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8169"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8169"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5768"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5768"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2736"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2736"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3478"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3478"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5213"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5213"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5294"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5294"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7963"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7963"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8564"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8564"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5058"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5058"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9210"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9210"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8167"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8167"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5277"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5277"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8304"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8304"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9218"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9218"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8120"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8120"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1079"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1079"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2911"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2911"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8800"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8800"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3189"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3189"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7369"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7369"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6429"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6429"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7729"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7729"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6589"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6589"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6728"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6728"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1961"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1961"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8864"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8864"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9150"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9150"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5555"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5555"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8279"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8279"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3911"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3911"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8422"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8422"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2818"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2818"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9232"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9232"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3572"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3572"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5105"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5105"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4676"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4676"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7014"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7014"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3787"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3787"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5578"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5578"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7760"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7760"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8076"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8076"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1183"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1183"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7851"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7851"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5857"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5857"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8972"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8972"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3546"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3546"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6215"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6215"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6915"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6915"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5180"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5180"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1653"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1653"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6308"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6308"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7818"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7818"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7013"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7013"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1350"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1350"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7624"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7624"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1513"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1513"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1260"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1260"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4582"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4582"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9358"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9358"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4378"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4378"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6776"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6776"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7760"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7760"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6739"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6739"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6729"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6729"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6031"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6031"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9120"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9120"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5159"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5159"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1681"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1681"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3769"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3769"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2232"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2232"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1014"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1014"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8819"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8819"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2442"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2442"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4805"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4805"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4533"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4533"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3702"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3702"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8194"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8194"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3326"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3326"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1252"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1252"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1502"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1502"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3964"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3964"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6678"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6678"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2852"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2852"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6006"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6006"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3189"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3189"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4611"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4611"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5506"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5506"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3505"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3505"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5529"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5529"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9161"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9161"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9305"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9305"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1020"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1020"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4778"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4778"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7745"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7745"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7866"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7866"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7670"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7670"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9245"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9245"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4695"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4695"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3440"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3440"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6652"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6652"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1522"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1522"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6719"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6719"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9854"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9854"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5918"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5918"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2638"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2638"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2459"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2459"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2521"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2521"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7681"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7681"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9538"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9538"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3380"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3380"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7216"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7216"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4901"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4901"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6166"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6166"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9459"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9459"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9991"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9991"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1480"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1480"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6774"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6774"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2869"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2869"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7574"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7574"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9911"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9911"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2378"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2378"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7506"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7506"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5548"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5548"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1545"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1545"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7024"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7024"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3700"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3700"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7850"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7850"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1096"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1096"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8680"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8680"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8358"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8358"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5084"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5084"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4546"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4546"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4569"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4569"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7676"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7676"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7067"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7067"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8879"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8879"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4482"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4482"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6887"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6887"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1490"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1490"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1576"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1576"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7165"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7165"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1529"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1529"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6839"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6839"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3132"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3132"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5420"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5420"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6117"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6117"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4802"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4802"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6213"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6213"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3642"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3642"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5501"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5501"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3120"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3120"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7982"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7982"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4364"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4364"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6227"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6227"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5368"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5368"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7488"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7488"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1911"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1911"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9395"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9395"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3933"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3933"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5754"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5754"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5573"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5573"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9656"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9656"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2554"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2554"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4966"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4966"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1065"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1065"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8763"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8763"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3382"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3382"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9035"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9035"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6372"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6372"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9225"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9225"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5946"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5946"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6052"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6052"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9257"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9257"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1182"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1182"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8919"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8919"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4613"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4613"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5458"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5458"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2557"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2557"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5477"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5477"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9765"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9765"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1483"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1483"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8726"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8726"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6572"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6572"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2811"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2811"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3895"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3895"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1840"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1840"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3173"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3173"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4204"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4204"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7039"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7039"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4939"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4939"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7543"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7543"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3362"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3362"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7501"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7501"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6881"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6881"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8046"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8046"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9015"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9015"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8654"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8654"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2210"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2210"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6975"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6975"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6418"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6418"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9716"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9716"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1612"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1612"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9784"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9784"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9035"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9035"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4664"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4664"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1674"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1674"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2695"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2695"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5996"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5996"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7652"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7652"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2592"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2592"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7945"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7945"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3972"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3972"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1674"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1674"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4570"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4570"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1682"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1682"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3466"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3466"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2932"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2932"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7193"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7193"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4127"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4127"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6398"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6398"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7637"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7637"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2110"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2110"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3390"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3390"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6076"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6076"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9751"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9751"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9979"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9979"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4225"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4225"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6672"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6672"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2736"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2736"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4441"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4441"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8972"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8972"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7864"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7864"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6495"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6495"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4011"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4011"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4141"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4141"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3829"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3829"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4152"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4152"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7434"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7434"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7765"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7765"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1845"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1845"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2001"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2001"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5127"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5127"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2977"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2977"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7060"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7060"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1910"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1910"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6963"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6963"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9210"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9210"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2613"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2613"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2854"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2854"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3947"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3947"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9013"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9013"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4119"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4119"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1626"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1626"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2776"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2776"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1051"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1051"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3284"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3284"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1420"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1420"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1679"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1679"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9292"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9292"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7563"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7563"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4600"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4600"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9642"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9642"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1184"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1184"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4786"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4786"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2722"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2722"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2572"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2572"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2367"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2367"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9208"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9208"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1445"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1445"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5137"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5137"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9768"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9768"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2383"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2383"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8550"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8550"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1580"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1580"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6829"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6829"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4465"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4465"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3418"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3418"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6248"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6248"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7857"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7857"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1160"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1160"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2708"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2708"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6408"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6408"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4070"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4070"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3624"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3624"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8614"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8614"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4375"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4375"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7086"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7086"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4799"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4799"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5495"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5495"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9640"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9640"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7481"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7481"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8057"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8057"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8380"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8380"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2858"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2858"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5192"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5192"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1839"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1839"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5263"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5263"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9885"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9885"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5491"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5491"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7313"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7313"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7916"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7916"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4243"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4243"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3609"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3609"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2909"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2909"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9857"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9857"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6803"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6803"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5662"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5662"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9535"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9535"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7891"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7891"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2497"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2497"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7344"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7344"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2856"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2856"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6750"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6750"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4136"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4136"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4445"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4445"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8931"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8931"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7629"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7629"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7384"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7384"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5390"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5390"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7770"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7770"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6263"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6263"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2150"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2150"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2392"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2392"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1308"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1308"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1655"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1655"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2294"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2294"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2173"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2173"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1260"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1260"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6773"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6773"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4983"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4983"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9601"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9601"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2051"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2051"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1095"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1095"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8985"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8985"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2051"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2051"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6243"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6243"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2448"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2448"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6454"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6454"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4490"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4490"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2625"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2625"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8008"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8008"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4000"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4000"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3994"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3994"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8368"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8368"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1078"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1078"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6109"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6109"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4593"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4593"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2624"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2624"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2446"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2446"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5400"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5400"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9195"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9195"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5079"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5079"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7190"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7190"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3876"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3876"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9066"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9066"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4988"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4988"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5557"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5557"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8762"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8762"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6068"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6068"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8634"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8634"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8253"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8253"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5395"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5395"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5321"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5321"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6274"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6274"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8412"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8412"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5709"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5709"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8610"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8610"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2994"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2994"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4891"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4891"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7167"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7167"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8198"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8198"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6275"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6275"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4702"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4702"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9800"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9800"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3522"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3522"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8500"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8500"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8291"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8291"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3657"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3657"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3250"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3250"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4558"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4558"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1689"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1689"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7380"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7380"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6794"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6794"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2211"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2211"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6868"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6868"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7796"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7796"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5597"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5597"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1635"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1635"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1325"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1325"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8878"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8878"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2838"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2838"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5045"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5045"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3623"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3623"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6558"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6558"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5189"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5189"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2557"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2557"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3768"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3768"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4665"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4665"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3258"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3258"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5105"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5105"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9728"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9728"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6069"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6069"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6203"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6203"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8092"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8092"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1130"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1130"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2131"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2131"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3504"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3504"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8546"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8546"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1588"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1588"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9337"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9337"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7368"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7368"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1641"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1641"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3776"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3776"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4831"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4831"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2082"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2082"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6607"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6607"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4004"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4004"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9319"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9319"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1366"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1366"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1124"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1124"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5292"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5292"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9788"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9788"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9224"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9224"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2594"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2594"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2065"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2065"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8012"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8012"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5799"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5799"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1335"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1335"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2888"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2888"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3365"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3365"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2458"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2458"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3969"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3969"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8775"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8775"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2184"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2184"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8346"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8346"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6947"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6947"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9275"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9275"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2555"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2555"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4014"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4014"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6236"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6236"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1713"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1713"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6165"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6165"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6278"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6278"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5713"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5713"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9027"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9027"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3811"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3811"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7634"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7634"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8386"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8386"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2365"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2365"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6100"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6100"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2296"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2296"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4003"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4003"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1582"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1582"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4564"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4564"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5431"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5431"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2684"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2684"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1873"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1873"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6517"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6517"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5966"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5966"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2837"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2837"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3635"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3635"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6327"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6327"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8314"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8314"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1672"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1672"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5925"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5925"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6414"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6414"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9041"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9041"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7906"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7906"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6278"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6278"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1415"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1415"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1257"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1257"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1279"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1279"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6578"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6578"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3705"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3705"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4951"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4951"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7306"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7306"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2389"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2389"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2533"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2533"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3112"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3112"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9702"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9702"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2334"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2334"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5562"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5562"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3183"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3183"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7480"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7480"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1867"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1867"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6923"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6923"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7438"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7438"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5341"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5341"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9756"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9756"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6963"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6963"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6234"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6234"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7099"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7099"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9952"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9952"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6497"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6497"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6167"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6167"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7624"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7624"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4772"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4772"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7466"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7466"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5767"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5767"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8507"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8507"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9708"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9708"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8457"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8457"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8716"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8716"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6719"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6719"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3165"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3165"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6616"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6616"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2682"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2682"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3104"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3104"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8471"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8471"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7450"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7450"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3906"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3906"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6359"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6359"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2584"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2584"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2191"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2191"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8464"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8464"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6060"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6060"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4080"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4080"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8185"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8185"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8171"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8171"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5889"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5889"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2565"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2565"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3018"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3018"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4718"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4718"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5241"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5241"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6028"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6028"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6202"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6202"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8099"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8099"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7650"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7650"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5180"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5180"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8430"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8430"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2471"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2471"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8831"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8831"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2450"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2450"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7500"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7500"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6590"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6590"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5742"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5742"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8618"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8618"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5009"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5009"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2369"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2369"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6623"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6623"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8714"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8714"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2381"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2381"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7115"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7115"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6203"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6203"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1815"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1815"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8644"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8644"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5641"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5641"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9771"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9771"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3482"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3482"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8200"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8200"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5717"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5717"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2721"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2721"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3868"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3868"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7533"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7533"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8660"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8660"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2179"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2179"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7454"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7454"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9260"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9260"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2263"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2263"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7360"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7360"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6804"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6804"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4903"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4903"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1521"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1521"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7510"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7510"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7021"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7021"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3299"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3299"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8511"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8511"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6345"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6345"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3835"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3835"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5414"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5414"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6922"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6922"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2205"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2205"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3424"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3424"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2677"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2677"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9986"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9986"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9582"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9582"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2498"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2498"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4429"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4429"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9826"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9826"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2906"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2906"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7459"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7459"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1309"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1309"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3400"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3400"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9847"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9847"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1272"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1272"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3661"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3661"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2091"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2091"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4039"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4039"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3311"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3311"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5071"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5071"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1844"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1844"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4544"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4544"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4707"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4707"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1950"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1950"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3624"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3624"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3863"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3863"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8833"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8833"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6366"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6366"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2555"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2555"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8509"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8509"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9002"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9002"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5991"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5991"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6773"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6773"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2726"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2726"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9527"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9527"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5492"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5492"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5921"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5921"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1597"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1597"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5568"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5568"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5100"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5100"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2072"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2072"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7919"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7919"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2772"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2772"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4791"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4791"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3115"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3115"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6887"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6887"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9461"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9461"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4084"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4084"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8363"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8363"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2300"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2300"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1550"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1550"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2261"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2261"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4900"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4900"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2773"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2773"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4395"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4395"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1837"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1837"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5081"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5081"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3644"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3644"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9222"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9222"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1849"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1849"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7750"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7750"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6355"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6355"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3182"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3182"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2999"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2999"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8146"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8146"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5481"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5481"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3727"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3727"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3397"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3397"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7569"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7569"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7758"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7758"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8159"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8159"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6298"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6298"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1382"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1382"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7088"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7088"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5554"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5554"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8508"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8508"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5324"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5324"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1996"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1996"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1629"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1629"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3699"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3699"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3401"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3401"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8433"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8433"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6334"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6334"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5475"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5475"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1467"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1467"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7878"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7878"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7207"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7207"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4670"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4670"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8650"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8650"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9804"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9804"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9907"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9907"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3092"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3092"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3109"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3109"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8871"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8871"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6994"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6994"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7584"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7584"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4706"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4706"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9638"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9638"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6223"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6223"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5280"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5280"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7017"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7017"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6085"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6085"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3794"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3794"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5851"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5851"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9756"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9756"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5085"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5085"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5042"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5042"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5954"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5954"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6304"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6304"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2191"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2191"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5705"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5705"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2092"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2092"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5811"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5811"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5311"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5311"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8344"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8344"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7982"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7982"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6649"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6649"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7386"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7386"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7608"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7608"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2320"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2320"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8538"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8538"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2927"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2927"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1372"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1372"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9580"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9580"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9151"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9151"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2590"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2590"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9974"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9974"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4193"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4193"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8734"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8734"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4720"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4720"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3988"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3988"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5473"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5473"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3105"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3105"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2590"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2590"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3280"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3280"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9655"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9655"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5750"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5750"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7110"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7110"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6722"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6722"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2547"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2547"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3623"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3623"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2122"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2122"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7275"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7275"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3930"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3930"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2443"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2443"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5007"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5007"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7875"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7875"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6649"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6649"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6122"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6122"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2160"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2160"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7287"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7287"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4648"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4648"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1650"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1650"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6676"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6676"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6696"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6696"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4862"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4862"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7091"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7091"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7520"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7520"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8817"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8817"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9268"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9268"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8932"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8932"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1635"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1635"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2855"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2855"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6950"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6950"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7675"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7675"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6965"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6965"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5639"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5639"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4476"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4476"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3959"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3959"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5438"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5438"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8604"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8604"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7321"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7321"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3739"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3739"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9603"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9603"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3025"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3025"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8267"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8267"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8391"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8391"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1456"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1456"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9018"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9018"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4060"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4060"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3730"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3730"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2835"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2835"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2115"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2115"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9127"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9127"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4882"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4882"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4007"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4007"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9337"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9337"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6593"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6593"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9462"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9462"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1653"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1653"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4032"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4032"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2723"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2723"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4648"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4648"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6060"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6060"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8249"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8249"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9626"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9626"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8820"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8820"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1888"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1888"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4683"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4683"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7472"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7472"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8531"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8531"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4197"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4197"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9431"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9431"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8293"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8293"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1112"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1112"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3966"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3966"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8339"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8339"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4429"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4429"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4598"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4598"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4630"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4630"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5092"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5092"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6207"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6207"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5580"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5580"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2176"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2176"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5442"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5442"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7003"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7003"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6771"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6771"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7098"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7098"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3190"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3190"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1479"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1479"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7725"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7725"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7925"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7925"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6080"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6080"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6122"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6122"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3075"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3075"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4214"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4214"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5568"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5568"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6862"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6862"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7228"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7228"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5458"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5458"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1094"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1094"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2365"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2365"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9186"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9186"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3839"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3839"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2353"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2353"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4225"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4225"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2698"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2698"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6756"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6756"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9529"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9529"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7745"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7745"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8491"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8491"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3962"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3962"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3138"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3138"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8799"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8799"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3166"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3166"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3682"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3682"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4386"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4386"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1144"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1144"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4162"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4162"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8425"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8425"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9194"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9194"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5024"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5024"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2061"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2061"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6635"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6635"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3594"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3594"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6054"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6054"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5239"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5239"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7832"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7832"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3528"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3528"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3636"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3636"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7028"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7028"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3845"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3845"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9318"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9318"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3409"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3409"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5445"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5445"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4067"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4067"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1387"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1387"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8302"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8302"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9329"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9329"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4799"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4799"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6620"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6620"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6801"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6801"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8493"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8493"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3990"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3990"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8796"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8796"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6865"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6865"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2915"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2915"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4324"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4324"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3031"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3031"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5224"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5224"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4726"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4726"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1688"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1688"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2452"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2452"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2140"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2140"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8991"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8991"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9957"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9957"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4692"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4692"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5326"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5326"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2154"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2154"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5370"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5370"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4595"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4595"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5679"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5679"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7585"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7585"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7889"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7889"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8778"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8778"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2123"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2123"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5571"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5571"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7316"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7316"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4869"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4869"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4651"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4651"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8796"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8796"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4283"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4283"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3080"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3080"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5370"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5370"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6602"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6602"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5009"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5009"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7078"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7078"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1874"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1874"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1626"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1626"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7879"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7879"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1941"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1941"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7501"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7501"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6079"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6079"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3726"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3726"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6906"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6906"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1612"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1612"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4183"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4183"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4304"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4304"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1460"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1460"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2469"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2469"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7900"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7900"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8858"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8858"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5718"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5718"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7682"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7682"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5044"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5044"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3112"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3112"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9899"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9899"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2362"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2362"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7041"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7041"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8181"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8181"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4647"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4647"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3872"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3872"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5652"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5652"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9705"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9705"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4462"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4462"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6963"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6963"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2305"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2305"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7516"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7516"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3714"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3714"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4210"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4210"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7869"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7869"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3599"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3599"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6256"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6256"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9263"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9263"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5226"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5226"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9390"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9390"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1300"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1300"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9106"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9106"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5752"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5752"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2713"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2713"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5011"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5011"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5985"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5985"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4685"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4685"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9010"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9010"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3904"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3904"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3021"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3021"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5837"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5837"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7203"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7203"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5063"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5063"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6612"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6612"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9984"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9984"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7104"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7104"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8662"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8662"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4255"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4255"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2136"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2136"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1895"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1895"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3242"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3242"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8384"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8384"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4515"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4515"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3824"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3824"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9973"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9973"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8588"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8588"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7465"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7465"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8671"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8671"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2848"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2848"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4638"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4638"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8935"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8935"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1337"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1337"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8074"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8074"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2131"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2131"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1704"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1704"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8452"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8452"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5950"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5950"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2985"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2985"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4974"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4974"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1204"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1204"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8344"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8344"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4545"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4545"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1191"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1191"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5776"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5776"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5460"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5460"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4489"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4489"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7868"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7868"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7932"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7932"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5571"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5571"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1140"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1140"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1816"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1816"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9219"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9219"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7078"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7078"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5883"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5883"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7776"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7776"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6563"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6563"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4383"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4383"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7403"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7403"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4369"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4369"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1853"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1853"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7935"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7935"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2627"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2627"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1970"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1970"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4227"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4227"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2662"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2662"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4323"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4323"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9172"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9172"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8855"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8855"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3010"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3010"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4130"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4130"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3000"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3000"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8885"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8885"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8249"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8249"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4601"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4601"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2567"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2567"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2718"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2718"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4013"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4013"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3821"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3821"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4915"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4915"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9265"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9265"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9372"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9372"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5311"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5311"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1555"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1555"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7845"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7845"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8619"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8619"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8365"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8365"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9701"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9701"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6760"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6760"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8130"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8130"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1400"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1400"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6312"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6312"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7716"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7716"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1596"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1596"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1594"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1594"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6562"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6562"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7359"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7359"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1044"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1044"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4717"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4717"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6116"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6116"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6351"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6351"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6265"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6265"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7434"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7434"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5349"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5349"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9220"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9220"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7907"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7907"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3820"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3820"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1898"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1898"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4633"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4633"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3831"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3831"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3201"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3201"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8861"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8861"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9042"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9042"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6709"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6709"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6896"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6896"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7919"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7919"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2404"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2404"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3181"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3181"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3030"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3030"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2968"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2968"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2292"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2292"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4571"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4571"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2569"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2569"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1343"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1343"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3898"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3898"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4050"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4050"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9917"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9917"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7346"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7346"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2194"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2194"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7931"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7931"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7316"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7316"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9107"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9107"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8519"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8519"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7979"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7979"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3120"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3120"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5728"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5728"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9736"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9736"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1920"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1920"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3332"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3332"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9363"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9363"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5859"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5859"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7806"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7806"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7916"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7916"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1913"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1913"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9944"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9944"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2696"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2696"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4757"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4757"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5844"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5844"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8109"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8109"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7507"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7507"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3147"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3147"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9971"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9971"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4250"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4250"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3130"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3130"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7561"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7561"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3220"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3220"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2875"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2875"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2762"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2762"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5427"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5427"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1603"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1603"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5988"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5988"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4254"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4254"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9393"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9393"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6641"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6641"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8719"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8719"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2478"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2478"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7443"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7443"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2041"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2041"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7707"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7707"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4171"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4171"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9043"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9043"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8392"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8392"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5516"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5516"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9584"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9584"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4128"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4128"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2171"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2171"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7403"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7403"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4492"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4492"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6575"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6575"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5369"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5369"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7668"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7668"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1167"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1167"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9953"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9953"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3437"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3437"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2054"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2054"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5428"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5428"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3385"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3385"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5169"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5169"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4308"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4308"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3053"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3053"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8499"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8499"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9610"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9610"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6226"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6226"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4647"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4647"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1975"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1975"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3579"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3579"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8478"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8478"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4528"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4528"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3821"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3821"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1405"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1405"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9333"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9333"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5936"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5936"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2162"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2162"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4955"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4955"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3210"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3210"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9031"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9031"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8476"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8476"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7598"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7598"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5123"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5123"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8428"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8428"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3644"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3644"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6484"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6484"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5246"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5246"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2467"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2467"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9768"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9768"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1547"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1547"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2246"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2246"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1405"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1405"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3898"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3898"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9515"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9515"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6793"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6793"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3625"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3625"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4557"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4557"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8758"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8758"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3259"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3259"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3382"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3382"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9698"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9698"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3447"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3447"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5573"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5573"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5282"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5282"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3175"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3175"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1640"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1640"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1083"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1083"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3095"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3095"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7229"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7229"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1650"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1650"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2700"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2700"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7395"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7395"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3089"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3089"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3834"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3834"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8084"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8084"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7486"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7486"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2268"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2268"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1858"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1858"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1957"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1957"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9967"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9967"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5607"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5607"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8048"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8048"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4752"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4752"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6512"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6512"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4951"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4951"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5645"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5645"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6560"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6560"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7848"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7848"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9584"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9584"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6029"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6029"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6278"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6278"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1857"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1857"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7029"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7029"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3832"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3832"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7096"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7096"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5972"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5972"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7904"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7904"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1129"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1129"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9746"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9746"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5103"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5103"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2810"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2810"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1384"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1384"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1660"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1660"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9479"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9479"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8693"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8693"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1793"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1793"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8726"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8726"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6937"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6937"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7490"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7490"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5081"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5081"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9440"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9440"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1111"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1111"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2704"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2704"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1175"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1175"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2876"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2876"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8861"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8861"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6258"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6258"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5273"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5273"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1678"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1678"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4115"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4115"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6503"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6503"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1092"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1092"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2692"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2692"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4425"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4425"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4333"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4333"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6445"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6445"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1800"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1800"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4907"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4907"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2116"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2116"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9739"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9739"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2947"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2947"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6408"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6408"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4620"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4620"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5032"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5032"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2100"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2100"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5687"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5687"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8039"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8039"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4838"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4838"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1053"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1053"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9987"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9987"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2896"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2896"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8978"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8978"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1502"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1502"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8952"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8952"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8896"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8896"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5187"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5187"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5075"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5075"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3888"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3888"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1961"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1961"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8653"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8653"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3788"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3788"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1126"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1126"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1566"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1566"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4930"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4930"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7462"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7462"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1497"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1497"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4051"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4051"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5212"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5212"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4698"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4698"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8153"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8153"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3179"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3179"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1667"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1667"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1962"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1962"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3891"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3891"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9845"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9845"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2993"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2993"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3532"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3532"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4959"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4959"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4917"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4917"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5322"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5322"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3533"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3533"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1428"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1428"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4490"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4490"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1927"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1927"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4510"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4510"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1077"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1077"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2722"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2722"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6922"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6922"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2430"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2430"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4174"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4174"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3899"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3899"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6644"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6644"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3900"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3900"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5754"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5754"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4178"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4178"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9645"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9645"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3812"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3812"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4080"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4080"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1375"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1375"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2240"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2240"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7843"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7843"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8900"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8900"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7846"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7846"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8540"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8540"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2940"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2940"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9433"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9433"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9687"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9687"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3267"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3267"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4225"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4225"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7722"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7722"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4771"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4771"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8352"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8352"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2522"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2522"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5850"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5850"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6798"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6798"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5377"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5377"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6204"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6204"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9195"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9195"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4031"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4031"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2936"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2936"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2230"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2230"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9669"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9669"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8559"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8559"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4100"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4100"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4083"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4083"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6604"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6604"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3437"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3437"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5518"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5518"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2042"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2042"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3864"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3864"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7151"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7151"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1833"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1833"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1687"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1687"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5992"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5992"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8245"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8245"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8440"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8440"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6224"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6224"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3632"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3632"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7111"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7111"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8045"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8045"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7293"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7293"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9222"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9222"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1108"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1108"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2078"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2078"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3794"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3794"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7299"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7299"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7476"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7476"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6374"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6374"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7603"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7603"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2642"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2642"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4972"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4972"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1257"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1257"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6324"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6324"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3980"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3980"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6021"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6021"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5573"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5573"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8624"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8624"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9516"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9516"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9167"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9167"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9038"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9038"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7089"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7089"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3019"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3019"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6757"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6757"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2862"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2862"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7472"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7472"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5586"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5586"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7321"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7321"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4814"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4814"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7358"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7358"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9677"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9677"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7747"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7747"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9394"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9394"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6082"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6082"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2905"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2905"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6636"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6636"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7480"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7480"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5132"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5132"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9080"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9080"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9400"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9400"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1379"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1379"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9220"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9220"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9006"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9006"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8364"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8364"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1183"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1183"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4281"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4281"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7217"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7217"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6118"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6118"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9425"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9425"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3019"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3019"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7916"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7916"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4731"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4731"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8225"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8225"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1351"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1351"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7199"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7199"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6478"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6478"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9834"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9834"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7037"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7037"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2784"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2784"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4925"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4925"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3721"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3721"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8458"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8458"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5060"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5060"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6319"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6319"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9731"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9731"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9542"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9542"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2911"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2911"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2896"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2896"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7739"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7739"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8331"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8331"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5446"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5446"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5051"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5051"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3579"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3579"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6040"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6040"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5110"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5110"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3054"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3054"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3426"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3426"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4888"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4888"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1363"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1363"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5475"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5475"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2633"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2633"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8043"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8043"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2832"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2832"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6455"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6455"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9945"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9945"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5442"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5442"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2018"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2018"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3390"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3390"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2997"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2997"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9674"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9674"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6087"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6087"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2131"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2131"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4524"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4524"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4041"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4041"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8983"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8983"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5333"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5333"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4867"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4867"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2557"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2557"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9674"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9674"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7374"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7374"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9282"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9282"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5433"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5433"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7918"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7918"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6800"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6800"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1243"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1243"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6399"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6399"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9846"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9846"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6439"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6439"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3480"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3480"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3304"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3304"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3484"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3484"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5555"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5555"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9932"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9932"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6220"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6220"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6202"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6202"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5699"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5699"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6512"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6512"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6571"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6571"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6605"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6605"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3225"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3225"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2211"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2211"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3940"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3940"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9337"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9337"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1399"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1399"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6459"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6459"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7848"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7848"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3735"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3735"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5147"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5147"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7121"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7121"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2570"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2570"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7873"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7873"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4968"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4968"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2083"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2083"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4824"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4824"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6274"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6274"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7236"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7236"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6320"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6320"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8512"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8512"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2226"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2226"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4331"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4331"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5694"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5694"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3208"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3208"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9594"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9594"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4190"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4190"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8473"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8473"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9488"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9488"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8411"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8411"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7626"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7626"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9434"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9434"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7936"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7936"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3548"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3548"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3582"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3582"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6095"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6095"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5477"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5477"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4929"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4929"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7946"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7946"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1052"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1052"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7877"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7877"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4462"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4462"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1867"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1867"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3854"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3854"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1193"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1193"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7933"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7933"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4331"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4331"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1786"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1786"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1017"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1017"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5840"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5840"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9439"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9439"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7248"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7248"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9310"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9310"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6549"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6549"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9680"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9680"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7774"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7774"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1702"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1702"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7151"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7151"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2624"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2624"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5581"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5581"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4179"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4179"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9759"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9759"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2921"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2921"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4779"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4779"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3986"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3986"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4139"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4139"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4499"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4499"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4743"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4743"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1653"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1653"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9365"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9365"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4870"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4870"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7105"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7105"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4429"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4429"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8085"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8085"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1074"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1074"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8088"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8088"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4559"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4559"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"2607"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "2607"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8455"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8455"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3533"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3533"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7517"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7517"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1368"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1368"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8256"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8256"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2827"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2827"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7245"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7245"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3704"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3704"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1250"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1250"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8174"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8174"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4366"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4366"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1205"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1205"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1996"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1996"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3074"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3074"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6854"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6854"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9131"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9131"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5808"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5808"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8957"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8957"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2102"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2102"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2440"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2440"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8091"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8091"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5127"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5127"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9365"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9365"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7272"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7272"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9035"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9035"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8230"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8230"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8782"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8782"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8085"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8085"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1292"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1292"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9363"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9363"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6159"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6159"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9065"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9065"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7638"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7638"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8793"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8793"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8794"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8794"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4321"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4321"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"4423"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "4423"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9436"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9436"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7867"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7867"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9560"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9560"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1605"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1605"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4860"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4860"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7746"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7746"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8106"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8106"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3467"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3467"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4036"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4036"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3890"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3890"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5298"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5298"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8169"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8169"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2971"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2971"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4228"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4228"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8811"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8811"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"6874"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "6874"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1604"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1604"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2028"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2028"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9611"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9611"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5930"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5930"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1299"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1299"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8768"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8768"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9747"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9747"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7079"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7079"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6524"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6524"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1298"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1298"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3888"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3888"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8197"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8197"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"8914"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "8914"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6563"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6563"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5134"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5134"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8142"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8142"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6119"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6119"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"1838"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "1838"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7000"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7000"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4906"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4906"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9192"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9192"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4490"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4490"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6723"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6723"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8344"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8344"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6063"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6063"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8767"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8767"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1729"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1729"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9806"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9806"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8510"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8510"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4259"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4259"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3965"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3965"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3467"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3467"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2901"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2901"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7842"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7842"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9795"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9795"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7326"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7326"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6640"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6640"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9080"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9080"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5693"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5693"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9877"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9877"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5432"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5432"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1634"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1634"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"7775"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "7775"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3862"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3862"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6316"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6316"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"9204"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "9204"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5896"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5896"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9323"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9323"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7699"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7699"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5309"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5309"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"5291"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "5291"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7578"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7578"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8594"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8594"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3020"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3020"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9584"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9584"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6401"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6401"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2969"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2969"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1843"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1843"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8280"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8280"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4328"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4328"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6715"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6715"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"5314"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "5314"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7565"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7565"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1667"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1667"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2950"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2950"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4349"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4349"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1413"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1413"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6287"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6287"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7218"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7218"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2114"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2114"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7693"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7693"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8091"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8091"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9743"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9743"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6845"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6845"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3431"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3431"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3195"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3195"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3375"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3375"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3086"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3086"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8049"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8049"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"5823"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "5823"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8935"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8935"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7830"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7830"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8754"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8754"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2382"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2382"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2985"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2985"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6337"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6337"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"2953"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "2953"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1800"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1800"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3327"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3327"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2057"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2057"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1709"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1709"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9434"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9434"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3072"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3072"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9587"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9587"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7051"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7051"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3230"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3230"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"1862"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "1862"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"4221"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "4221"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5312"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5312"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1424"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1424"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8864"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8864"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9283"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9283"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"8711"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "8711"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"8378"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "8378"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3103"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3103"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1499"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1499"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"9940"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "9940"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2723"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2723"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3048"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3048"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4207"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4207"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9898"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9898"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"8895"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "8895"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1118"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1118"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"6130"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "6130"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5036"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5036"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7804"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7804"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4545"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4545"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1315"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1315"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9194"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9194"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9477"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9477"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4242"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4242"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9615"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9615"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9468"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9468"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"7176"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "7176"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6268"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6268"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6787"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6787"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"1417"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "1417"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7128"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7128"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4912"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4912"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6272"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6272"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1327"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1327"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"3313"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "3313"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"2414"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "2414"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2754"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2754"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2473"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2473"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5430"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5430"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"7503"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "7503"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6614"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6614"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"9439"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "9439"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4734"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4734"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"5558"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "5558"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3436"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3436"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"7069"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "7069"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1596"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1596"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"8280"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "8280"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"7534"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "7534"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2969"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2969"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6800"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6800"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"4363"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "4363"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"9111"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "9111"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"3099"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "3099"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3239"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3239"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"3255"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "3255"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"6737"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "6737"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3064"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3064"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"9217"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "9217"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"2510"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "2510"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"2107"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "2107"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"5348"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "5348"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"4396"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "4396"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"1692"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "1692"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"1608"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "1608"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"7996"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "7996"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9218"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9218"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8671"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8671"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Operations}",{$inc:{salary:"2116"}});

printUpdateResult(result, "Search by department for Operations and do inc field salary to/by "2116"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6197"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6197"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1714"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1714"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Engineering}",{$inc:{salary:"4144"}});

printUpdateResult(result, "Search by department for Engineering and do inc field salary to/by "4144"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"9331"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "9331"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"8908"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "8908"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6689"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6689"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"6070"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "6070"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"3542"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "3542"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3358"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3358"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"5103"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "5103"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"6769"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "6769"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Product Management}",{$inc:{salary:"3025"}});

printUpdateResult(result, "Search by department for Product Management and do inc field salary to/by "3025"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"1833"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "1833"");

var result = db.Employee.find({designation:"Director"});

printValues(results, "Search by designation for "Director"");

var result = db.Employee.update({department: "Marketing}",{$inc:{salary:"6289"}});

printUpdateResult(result, "Search by department for Marketing and do inc field salary to/by "6289"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Sales}",{$inc:{salary:"4868"}});

printUpdateResult(result, "Search by department for Sales and do inc field salary to/by "4868"");

var result = db.Employee.find({designation:"Head"});

printValues(results, "Search by designation for "Head"");

var result = db.Employee.update({department: "Customer Support}",{$inc:{salary:"3929"}});

printUpdateResult(result, "Search by department for Customer Support and do inc field salary to/by "3929"");

var result = db.Employee.find({designation:"Manager"});

printValues(results, "Search by designation for "Manager"");

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