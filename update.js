conn = new Mongo();
db = conn.getDB("local");
printjson('Connected');

try {



var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8468}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9143}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9362}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7756}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4251}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9497}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8469}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2382}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6754}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1915}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7691}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2415}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5443}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7172}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1798}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5666}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1147}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7725}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3234}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2916}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8998}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3053}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9374}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9922}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7870}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4388}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4308}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3082}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7312}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3374}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3064}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9543}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4544}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5797}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7728}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8573}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8434}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2523}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6719}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8238}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1293}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6707}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2976}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9241}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1832}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8486}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2621}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5016}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8923}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6308}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3526}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8513}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8566}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8543}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2859}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1429}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3052}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8377}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6145}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8976}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9628}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1454}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4437}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3080}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1249}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3046}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1158}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9464}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8300}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2869}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7206}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8753}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1050}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6339}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6582}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5822}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2919}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6882}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5279}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9239}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2621}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5672}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4323}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8768}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9433}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1223}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2124}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9323}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1933}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1690}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9095}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5860}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8706}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5767}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8277}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8000}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1885}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3982}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3764}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9120}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5505}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8540}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4286}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9075}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8158}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8523}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9832}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6547}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9995}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2794}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1396}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5804}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9402}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3994}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9373}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7643}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2055}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3202}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6481}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1555}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4734}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1368}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9059}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3137}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1842}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5171}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6702}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1200}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6721}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5520}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8290}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1150}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4191}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9828}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3258}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1914}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1488}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8315}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3974}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6688}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9623}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1422}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1752}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2726}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3650}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4647}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4875}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7352}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9127}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4554}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7153}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3141}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8117}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1834}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5262}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6195}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6508}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7077}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9244}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4891}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5564}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4647}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1736}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5614}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9850}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5079}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3808}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3106}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7997}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9870}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1953}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4882}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5072}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9934}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1034}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1623}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2254}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7799}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1777}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2179}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2823}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8360}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9172}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3792}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8745}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3180}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3771}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2745}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3375}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1390}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7652}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8090}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9946}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7836}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2455}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2240}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8451}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3731}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1190}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5713}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1575}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4207}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1537}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1845}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9222}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6295}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6476}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8726}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7602}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4907}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8149}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7984}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5115}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4712}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4433}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7266}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9770}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4426}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6487}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7162}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9459}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2036}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9999}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8070}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4795}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2062}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8776}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9222}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2503}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7207}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6111}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7321}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5412}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4343}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7029}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3329}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8702}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5696}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5603}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1609}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3468}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2549}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4800}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8213}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5051}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6420}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7882}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1213}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8486}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4010}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4402}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5748}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3893}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2169}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2485}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1896}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1629}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4898}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2698}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8453}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1091}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3076}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7817}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9996}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5775}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3198}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8666}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8993}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7629}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6177}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1224}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8426}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1501}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7144}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4267}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6312}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2463}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7753}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9188}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7378}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7902}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8383}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2746}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9228}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4354}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6816}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8849}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6346}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6345}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9870}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1889}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7502}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5786}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6781}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5657}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7686}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6327}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5718}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6170}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3587}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5462}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7008}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9461}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9699}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3236}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6667}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1618}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3298}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4284}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1997}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8719}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6344}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8476}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6862}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1544}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7000}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3229}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5669}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5342}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7112}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9151}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7936}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8763}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4067}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8473}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6863}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2407}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2356}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6195}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4157}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1082}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1724}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8744}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5234}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5521}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1095}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8768}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2928}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1187}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7247}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5879}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3804}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6418}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7776}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3067}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4677}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7778}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6749}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2093}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1521}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5098}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3170}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2241}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8273}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5593}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8141}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7245}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2112}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2823}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5012}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7696}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8006}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6615}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7636}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1125}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3313}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2026}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3793}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7952}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7412}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8945}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9570}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7040}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8083}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1343}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6381}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8852}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8300}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6323}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2145}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5147}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1351}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4777}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5926}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2028}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8275}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5799}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4183}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9189}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4047}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1591}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1080}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1857}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6880}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3402}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2394}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7119}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1325}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7904}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4748}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4984}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5147}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4678}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9743}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5524}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7597}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6174}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8726}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2098}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1641}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5048}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2042}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1346}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6270}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9741}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2635}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6940}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2620}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3460}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2823}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3595}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7288}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4335}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3412}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2872}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9631}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5591}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5928}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7361}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8241}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1339}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4929}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2861}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9649}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2702}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6380}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2593}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4000}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2208}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3112}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6891}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6215}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1457}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4062}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1118}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3319}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4867}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4665}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8416}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9677}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6420}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4458}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8051}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4083}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6819}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1159}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6922}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4590}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4946}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5026}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6674}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7355}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8456}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5720}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5495}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4735}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6164}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4451}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2345}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6600}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1392}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6670}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3113}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1892}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2537}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3615}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4130}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7722}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7246}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7513}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1695}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8647}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3458}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5256}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2829}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9547}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4741}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8820}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4827}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6963}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3659}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4018}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1157}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7852}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5701}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7117}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3074}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4777}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9721}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1652}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4663}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5187}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6344}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6865}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3093}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2777}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4362}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7407}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6890}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4457}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5260}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7757}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4240}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3135}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7641}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1611}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1788}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5892}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9241}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9489}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8864}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4539}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6702}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9433}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6610}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5788}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9976}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3057}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9970}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1251}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6107}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2911}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5485}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6510}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5422}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5832}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6419}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5231}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1922}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8051}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9511}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8630}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7367}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9700}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9644}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4992}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5607}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3312}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5437}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6828}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5691}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6079}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9268}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3109}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3905}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5404}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5271}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1157}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6172}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2203}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4882}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3170}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7301}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7020}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8245}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7315}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4810}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8570}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6496}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6099}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5129}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9961}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7789}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8057}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7573}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2135}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6294}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1997}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1856}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1515}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5429}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7253}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1969}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1799}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4607}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5708}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1196}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7977}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5589}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2552}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7598}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1296}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9612}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9604}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9499}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7064}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8172}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3929}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1665}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7095}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9225}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3228}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6820}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3632}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3400}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5992}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7948}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2408}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3829}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9784}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6780}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2610}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8101}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3878}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4717}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2790}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9270}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9310}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2527}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5308}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1102}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7279}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8549}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8712}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5246}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8211}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5653}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9595}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3905}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9789}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8623}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9514}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2561}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1876}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5849}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5202}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7309}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1148}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7288}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8488}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9515}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8923}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8794}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4960}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1206}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8600}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9476}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1597}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6973}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2081}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1183}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7747}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7547}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7781}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8746}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1359}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4027}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8240}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3030}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1343}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1112}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3593}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2331}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5250}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7651}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6092}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5707}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1509}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2956}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1856}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7186}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2075}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5620}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4625}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3347}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9519}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5637}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5089}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7099}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2640}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2965}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2773}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6489}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7608}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5602}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7549}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4229}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3314}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2459}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9374}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9070}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3310}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4004}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1521}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5826}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3458}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3635}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9667}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1548}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8785}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5261}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7077}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9515}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5971}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7135}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6767}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8812}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5210}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9159}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5837}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4311}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9434}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9335}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3736}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3398}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6058}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6808}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2032}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9055}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8739}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2556}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2649}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5163}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7370}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2749}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6109}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4637}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6652}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8340}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8896}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2674}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7228}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8437}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1407}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1725}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3225}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9816}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8191}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8304}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5897}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8988}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1457}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5884}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1903}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3232}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7655}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9254}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7164}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7536}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8415}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2875}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7327}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5031}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8071}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2204}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6094}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4243}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8167}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9059}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4569}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6093}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5502}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5655}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8854}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1237}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2298}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5519}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6432}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9749}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5255}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2097}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5701}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8783}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7174}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2839}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8620}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6555}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2582}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1105}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8064}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6847}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5364}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6177}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8099}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8263}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6142}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1783}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7158}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4430}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8195}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5086}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4811}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9248}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6838}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7718}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4359}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8614}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5917}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5668}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7129}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6725}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4616}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4296}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5554}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2891}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9171}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5607}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1940}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5028}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2989}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1587}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5835}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2009}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2971}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1716}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2893}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7746}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7505}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8572}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9062}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1720}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4141}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7246}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3786}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4394}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9148}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6509}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5295}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4693}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3063}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4362}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7597}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2487}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2912}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5399}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8084}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4759}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7636}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7044}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2795}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1912}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7075}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3225}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4143}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1909}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8345}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7589}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9650}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1772}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7071}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1749}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6034}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5887}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4927}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2396}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3531}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9797}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8897}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9324}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7730}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9910}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5258}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7989}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9735}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3664}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8385}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8393}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8252}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5561}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2607}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2818}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9372}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7408}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5728}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7013}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4912}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2674}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3983}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1034}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5155}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4646}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8883}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3752}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9863}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7197}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7061}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5939}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6052}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7101}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4606}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1116}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2732}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5152}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2743}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8648}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4917}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8645}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8686}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3509}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1467}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3469}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2054}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4026}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9561}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7110}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3532}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1151}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2279}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1021}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3476}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2379}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2122}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8242}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9335}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5090}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2809}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1813}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7076}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9311}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4475}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3914}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5694}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4213}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9241}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8586}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4209}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4437}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2431}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7228}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9489}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2813}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4436}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7845}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2343}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5392}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8665}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4856}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9667}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9310}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7322}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6252}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3771}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2335}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4815}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5088}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3677}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4169}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4485}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8109}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2020}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9715}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5021}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7199}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1196}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4311}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2830}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4056}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2417}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3845}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2098}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9798}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7691}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6168}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9539}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3219}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7387}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5709}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3386}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1380}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4771}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4270}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2621}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5896}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8376}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2450}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9888}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4762}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8894}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4177}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2148}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4942}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8143}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1044}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9943}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3511}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2250}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8053}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5495}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1747}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9913}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8553}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3733}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5895}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2988}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2014}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7672}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8185}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1656}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9620}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4461}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7909}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5460}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7538}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3422}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8134}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4469}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7504}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1542}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6911}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8289}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7919}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8740}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1619}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2475}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8669}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8646}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5926}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4370}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7801}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6176}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1622}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6960}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2804}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7734}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5840}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6420}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6243}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1869}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8048}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7388}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6232}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3518}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4265}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6594}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5465}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2325}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9518}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8677}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3520}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6108}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4470}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4242}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5402}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9535}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6974}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5559}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6693}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3087}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7202}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7587}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6176}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2832}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8513}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8451}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8011}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7839}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8255}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8633}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5768}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8102}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3349}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3234}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9519}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9156}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7518}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5282}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3148}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3522}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8211}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3435}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5620}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5575}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3666}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4427}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2051}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8827}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8101}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6260}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8856}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8820}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6017}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3716}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8518}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7833}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8743}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5787}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9304}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3170}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3198}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6738}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2741}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9927}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3098}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3318}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7279}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3710}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9194}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1320}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3903}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8751}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1533}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8075}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8159}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9542}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2220}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5683}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7116}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2323}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7453}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3335}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8867}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8549}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8526}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3267}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3435}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7757}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7165}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7576}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9407}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1648}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1855}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8943}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4576}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8259}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3272}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9496}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7302}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9425}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7508}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3292}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4683}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9781}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6642}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9239}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8056}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4785}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3541}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8100}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3831}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4545}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6402}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6152}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8876}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4772}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4889}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1294}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3307}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8586}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7527}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6090}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3871}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8841}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5566}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3335}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1526}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7904}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3247}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7601}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1480}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2844}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8688}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6625}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8195}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7354}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5878}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9292}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6996}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1211}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2409}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7832}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4576}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3221}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4538}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3472}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9526}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5058}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6328}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2635}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8381}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1688}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1531}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5253}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4087}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2909}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2328}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6004}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6304}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7991}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7948}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8086}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1534}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1994}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4283}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6506}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3076}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7360}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6629}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5445}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9492}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6875}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5385}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3389}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3897}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5210}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8821}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3692}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2758}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4579}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3165}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7051}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6131}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8992}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9745}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8966}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1336}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1179}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3657}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1814}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2452}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8946}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4578}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6260}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6245}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3679}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7281}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4173}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8137}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3086}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1040}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6706}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2996}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7565}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2692}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9481}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1975}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9384}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9885}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2042}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3580}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6878}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1058}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7233}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2224}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7164}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6825}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7909}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4208}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2817}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1148}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7732}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9111}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8921}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3120}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8824}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4449}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7340}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6244}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7245}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1673}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8219}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5734}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5922}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1043}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2481}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8139}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8064}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8472}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2183}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3867}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2478}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7431}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9822}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1535}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7999}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8523}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4240}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6206}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5905}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3605}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3540}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3237}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7629}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4944}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9723}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2432}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6875}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2778}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1807}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8145}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5363}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7345}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6593}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8193}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4782}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3048}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1533}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4781}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4869}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5351}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7295}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7110}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1853}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5992}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5216}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9587}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1329}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9893}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7629}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8798}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1331}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5715}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3320}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4767}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7599}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5652}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6298}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2758}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9852}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9989}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1701}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1093}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5219}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5138}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3771}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6195}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1439}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3598}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8535}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8680}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7913}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2811}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5896}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5412}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8495}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7638}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3666}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1904}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2497}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7914}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2312}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4414}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7997}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1141}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9020}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9353}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4022}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2814}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1621}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7103}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6044}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5557}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4236}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1482}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3913}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2760}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2655}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4479}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9316}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6435}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1958}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2128}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1396}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1877}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7647}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7432}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6758}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2003}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5343}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7135}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1897}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5481}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7653}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2695}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2764}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5868}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5713}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7752}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7532}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1344}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3897}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1537}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6817}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4980}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7457}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8359}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8459}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4489}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8271}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4732}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1649}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3263}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9290}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4342}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9445}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1793}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3115}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4401}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3626}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6550}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3364}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4493}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5336}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1623}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3076}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5429}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4515}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5392}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6999}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7075}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4640}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5286}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2268}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4828}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9697}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3463}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2062}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9180}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3152}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9740}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8941}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6216}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6117}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4255}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4090}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9601}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1206}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8393}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3276}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5759}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8941}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1219}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2206}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7498}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4852}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7472}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4211}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5089}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3699}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8521}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8929}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5201}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6339}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5797}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9529}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5482}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3856}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3241}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2736}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9714}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7295}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3895}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6223}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4478}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5972}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2915}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4862}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9578}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1636}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9418}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3637}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3318}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1917}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3321}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9452}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7638}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6201}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6745}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3252}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3413}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6189}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8229}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5784}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7492}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7673}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6586}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8275}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6432}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6731}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2395}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6969}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6148}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4788}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8748}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1971}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6661}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8815}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4072}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2559}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8999}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1688}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1948}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4260}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1198}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2723}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7686}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1624}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9926}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5081}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3724}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2437}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7771}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3024}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8540}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6890}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4607}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7158}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6016}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1343}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6381}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9219}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3813}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9964}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9235}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2542}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2731}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1318}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9121}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9407}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7355}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8715}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7259}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7425}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1741}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3167}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9264}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4612}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3000}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5522}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2119}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3040}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5054}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3045}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3336}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2458}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7228}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4122}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3538}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8388}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3794}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9763}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7017}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2046}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7179}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8184}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6403}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7942}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3036}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6392}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7456}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4559}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5947}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3712}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3450}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2377}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3266}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4193}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4632}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8895}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3198}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8190}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5953}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6380}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5881}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8154}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4673}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2317}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7313}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9837}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8746}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9265}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7865}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2676}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2463}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5399}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1976}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5593}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8156}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4323}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2654}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5742}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1066}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1029}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2831}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5098}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7794}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8028}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9341}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1285}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8211}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2283}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3785}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6348}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4846}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6124}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6618}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7254}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1424}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8991}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5734}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8327}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5546}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9055}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2711}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3475}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8454}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2025}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3998}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8627}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6555}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5951}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9132}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6572}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3189}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2529}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3970}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3786}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7742}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8680}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8949}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9717}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1956}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4231}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7548}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2912}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1316}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1346}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3343}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9215}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6809}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7105}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7295}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5188}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2073}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6631}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4174}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8508}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5598}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8256}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3233}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8344}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6115}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7959}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4097}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5847}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4556}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7302}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9661}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6049}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5836}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8711}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6315}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8437}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4491}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9012}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4325}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4448}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5643}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6203}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5345}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3729}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6758}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5071}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6667}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5833}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7176}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2025}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1726}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3996}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1574}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8416}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7433}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8382}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5393}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6164}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9965}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4454}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6952}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4069}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4414}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4032}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7519}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2862}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5356}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1497}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8489}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3387}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2758}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8529}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7456}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5046}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5365}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8791}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1519}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3125}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1362}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6348}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9196}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6345}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5195}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6746}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5434}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6509}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6659}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1778}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9943}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2449}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1426}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2766}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5099}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5358}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1547}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1594}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1044}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9073}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4791}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9382}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1545}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3981}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4428}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9692}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8375}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5047}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6966}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9385}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2463}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3274}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8757}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:7647}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5132}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8232}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4717}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4306}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1080}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4532}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6109}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9203}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6856}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1364}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6937}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7520}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6557}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9665}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8439}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5112}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6247}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:5090}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9146}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9667}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4782}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2314}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:2861}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1809}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7557}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5050}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9814}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5175}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2575}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3046}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2738}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5995}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8753}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8572}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1389}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5639}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2983}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1751}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3207}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4132}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9514}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5963}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1167}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3300}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1870}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4759}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9810}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9798}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1225}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7806}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4396}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8920}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9694}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5159}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4259}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2105}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1139}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9527}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:3745}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5691}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8332}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9056}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1333}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8926}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3522}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1538}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1064}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3457}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6649}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8789}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7934}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1917}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7617}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4587}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6943}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6460}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6258}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9721}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7481}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2213}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6451}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3860}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5418}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1389}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1389}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1324}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1216}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5525}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8587}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9797}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3249}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:4952}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3070}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5796}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9693}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:3487}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2015}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9334}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2437}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6754}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1782}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3775}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5713}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4213}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2914}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2640}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8043}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7305}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9430}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8433}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9874}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7032}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4268}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:1452}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8841}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7664}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6621}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1313}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8248}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5137}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6333}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1366}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6901}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2773}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8146}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6782}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5863}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4045}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6322}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2585}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3171}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1865}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7787}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1651}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9149}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:7169}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9016}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4223}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6934}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2864}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9152}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3289}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6526}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2392}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1164}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2386}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3648}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7381}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:5807}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5591}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3150}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6461}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9928}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1792}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4856}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8531}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7952}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8100}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8902}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2741}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7575}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9143}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1079}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5557}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5230}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8732}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7937}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2133}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2221}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4679}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5115}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9574}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7554}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2690}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6769}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:2263}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:9979}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9714}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6764}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5372}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8197}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1314}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:6879}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5993}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:6275}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2957}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8003}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:2844}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6088}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5036}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:7046}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6996}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:8424}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5530}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1904}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9845}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4927}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9208}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1876}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5929}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:1502}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:2440}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5441}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4899}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7088}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:4890}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4190}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1520}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3873}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7629}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9126}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2900}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4264}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8561}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7339}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:8428}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6815}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:1170}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3219}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8867}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9912}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2765}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:3356}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:7454}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2269}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4220}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8859}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8237}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:8201}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7873}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3443}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:9594}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5478}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:1973}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:2753}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6485}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:6466}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6697}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:1602}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:3677}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6926}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:7308}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2616}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:9364}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6511}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:9879}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:4091}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:6731}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:9688}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:8432}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:1149}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5401}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4548}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:7028}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:6017}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3277}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:3985}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:5969}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:2178}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:8983}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:9791}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8644}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Operations"},{$inc:{salary:5992}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3692}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Sales"},{$inc:{salary:5733}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:6892}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:5180}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Director"});

printValues(result, "");

var result = db.Employee.update({department: "Engineering"},{$inc:{salary:4874}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:8824}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Customer Support"},{$inc:{salary:4409}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Product Management"},{$inc:{salary:4520}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Head"});

printValues(result, "");

var result = db.Employee.update({department: "Marketing"},{$inc:{salary:3852}});

printUpdateResult(result, "");

var result = db.Employee.find({designation:"Manager"});

printValues(result, "");

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