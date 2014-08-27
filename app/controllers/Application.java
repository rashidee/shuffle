package controllers;

import helper.MongoDBConnector;
import model.User;
import play.Play;
import play.mvc.Controller;
import play.mvc.Result;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Application extends Controller {

    public static Result index() {
        return ok();
    }

    public static Result RandomEmployee() throws JsonProcessingException {
    	MongoDBConnector mongoConnector = new MongoDBConnector(
    			Play.application().configuration().getString("MONGODB_USERNAME"),
    			Play.application().configuration().getString("MONGODB_DBNAME"),
    			Play.application().configuration().getString("MONGODB_PASSWORD"),
    			Play.application().configuration().getString("MONGODB_URL"),
    			Play.application().configuration().getInt("MONGODB_PORT"));
		User user = mongoConnector.getRandomEmployeeID();
		ObjectMapper mapper = new ObjectMapper();
		response().setHeader("Access-Control-Allow-Origin", "*");
    	return ok(mapper.writeValueAsString(user));
    }
    
}
