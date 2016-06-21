/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import nosqlconnection.db.MyConnection;

/**
 *
 * @author paulo.rego
 */
@ManagedBean(name = "systemBean", eager = true)
@ApplicationScoped
public class SystemBean {

    
    private MyConnection conn;
    private String username;
    
    
    /**
     * Creates a new instance of SystemBeanOLD
     */
    public SystemBean() {
        username = "";
        conn = new MyConnection("192.168.1.46", "dbFinanceira", "collProcContratacao");
    }

    
    
    
    
    public void redirectToApp(String dados){
    
        
        
    }
    
    
    
    
    /**
     * @return the conn
     */
    public MyConnection getConn() {
        return conn;
    }

    /**
     * @param conn the conn to set
     */
    public void setConn(MyConnection conn) {
        this.conn = conn;
    }

    /**
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    

    
    
    
}
