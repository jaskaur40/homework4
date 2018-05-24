conn = new Mongo();
db = conn.getDB("local");
printjson('Connected');

try {



} catch (e) {
   print (e);
}