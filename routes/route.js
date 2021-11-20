const language = require("./../controllers/language");
module.exports = function(express) {
 const route = express.Router();
//brands route
 route.get("/",language.getAll);
 route.get("/:id",language.get);
 route.post("/",language.save);
 route.put("/update",language.update);
 route.delete("/:id",language.delete);

 return route;
};