package helper;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;
import java.util.Random;

import org.apache.commons.io.FileUtils;

import model.User;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;

public class MongoDBConnector {
	
	private DB mongoDB;
	private MongoClient mongo;
	private DBCollection collection;
	private Long counter;
	private File file;
	
	private String mongoUsername;
	private String mongoDbname;
	private String mongoPass;
	private String mongoUrl;
	private Integer mongoPort;
	
	public MongoDBConnector(String mongoUsername,
		String mongoDbname,
		String mongoPass,
		String mongoUrl,
		Integer mongoPort) {
		
		this.mongoUsername = mongoUsername;
		this.mongoDbname = mongoDbname;
		this.mongoPass = mongoPass;
		this.mongoUrl = mongoUrl;
		this.mongoPort = mongoPort;
				
		try {
			
			getDB();
			collection = mongoDB.getCollection("user");
			counter = collection.getCount();
			/*
			file = new File(getWebInfPath() + props.getProperty("DUPLICATE_FILE_LOCATION"));
			if ( !file.exists() ) {
				file.createNewFile();
			}
			*/
		}
		catch ( UnknownHostException uex ) {
			uex.printStackTrace();
		}
		catch ( IOException ie ) {
			ie.printStackTrace();
		}
	}
	
	public void closeDB() {
		mongo.close();
	}
	
	private void getDB() throws UnknownHostException {
		
		System.out.println(this.mongoUsername+"|"+this.mongoDbname+"|"+this.mongoPass+"|"+this.mongoUrl+"|"+this.mongoPort);
		
		MongoCredential credential = MongoCredential.createMongoCRCredential( this.mongoUsername, this.mongoDbname, this.mongoPass.toCharArray());
		ServerAddress server = new ServerAddress(this.mongoUrl, this.mongoPort);
		mongo = new MongoClient( server, Arrays.asList(credential) );
		
		if ( mongo == null )
			throw new UnknownHostException("Authentication Failed!!");	
		
		mongoDB = mongo.getDB(this.mongoDbname);	
	}
	
	private User getRandomDocument() {
		
		Integer randomNo = generateRandomNumber( counter.intValue() ) ;
		DBObject object = collection.find().limit(-1).skip(randomNo).next();
		
		while ( object.get("EmployeeId") == null ) {
			randomNo = generateRandomNumber( counter.intValue() ) ;
			object = collection.find().limit(-1).skip(randomNo).next();
		}
		
		User user = new User( (String)object.get("EmployeeId"), (String)object.get("displayName") );
		return user;	
	}
	
	public User getRandomEmployeeID() {
		
		User user = getRandomDocument();
		return user;
	}
	
	private Integer generateRandomNumber( Integer size ) {	
		Random random = new Random();
		return random.nextInt( (size - 0 ) + 0 ) + 0;
	}

}
