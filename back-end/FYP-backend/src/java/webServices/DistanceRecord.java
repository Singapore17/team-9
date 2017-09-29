/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webServices;

import com.google.gson.Gson;
import entity.Element;
import entity.Product;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import entity.Location;
import entity.Property;
import entity.Rows;
import java.util.ArrayList;


//import com.mashape.unirest.http.HttpResponse;
//import com.mashape.unirest.http.JsonNode;
//import com.mashape.unirest.http.Unirest;
//import com.mashape.unirest.http.exceptions.UnirestException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONArray;
import org.json.JSONObject;

@Path("/json/product")
public class DistanceRecord {

    public static void main(String args[]) {

        try {
            String origin = "Singapore+160133";
            String destinations = "Singapore579799";
            String units = "metric";
            String mode = "walking";
            String key = "";

            URL url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json?units=" + units + ""
                    + "&origins=" + origin + "&mode=" + mode + "&destinations=" + destinations + "&key=" + key);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");

            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + conn.getResponseCode());
            }

            BufferedReader br = new BufferedReader(new InputStreamReader(
                    (conn.getInputStream())));
Gson gs = new Gson();
            String output;
            String result="";
            System.out.println("Output from Server .... \n");
            while ((output = br.readLine()) != null) {
                System.out.println(output);
                result = result +output;
                
            }
            final Location location = gs.fromJson(result, Location.class);
            ArrayList<String> destination_locations = new ArrayList<String>();
            for(int i=0; i < location.getDestination_addresses().length; i++){
                //for every destinations
                Rows e = location.getRows()[0];
                Property distance = e.getElements()[0].getDistance();
                String distanceText = distance.getText();
                Property duration = e.getElements()[0].getDuration();
                String durationText = duration.getText();
                destination_locations.add(location.getDestination_addresses()[i] + "," 
                        + distanceText +","+ durationText);
            }
            System.out.println(destination_locations);
            
            conn.disconnect();

        } catch (MalformedURLException e) {

            e.printStackTrace();

        } catch (IOException e) {

            e.printStackTrace();

        }

    }
}
