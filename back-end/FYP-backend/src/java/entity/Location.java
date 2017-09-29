/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

/**
 *
 * @author Teh Ming Yi
 */
public class Location {
    String[] destination_addresses;
    String[] origin_addresses;
    Rows[] rows;
    

    public String[] getDestination_addresses() {
        return destination_addresses;
    }

    public void setDestination_addresses(String[] destination_addresses) {
        this.destination_addresses = destination_addresses;
    }

    public String[] getOrigin_addresses() {
        return origin_addresses;
    }

    public void setOrigin_addresses(String[] origin_addresses) {
        this.origin_addresses = origin_addresses;
    }

    public Rows[] getRows() {
        return rows;
    }

    public void setRows(Rows[] rows) {
        this.rows = rows;
    }
            
    

}
