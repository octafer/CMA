/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.context.FacesContext;
import utils.APPEUtils;

/**
 *
 * @author prego
 */
@Named(value = "mySessionBean")
@SessionScoped
public class MySessionBean implements Serializable {

    private String pid;
    private String user;
    private String myhash;
    private String myApp;
    
    /**
     * Creates a new instance of MySessionBean
     */
    public MySessionBean() {
        user = (String) FacesContext.getCurrentInstance().getExternalContext().getSessionMap().get("user");
        pid = (String) FacesContext.getCurrentInstance().getExternalContext().getSessionMap().get("pid");
        myApp = "";
    }

    

    
    public void defineExtApp(){
        try {
            
            String res = APPEUtils.decryptObject(myhash);
            String[] fs = res.split(";");
            
        } catch (Exception ex) {
            APPEUtils.printMessage("ERRO: " + ex.toString());
        }
    }
    
    
    
    /**
     * @return the pid
     */
    public String getPid() {
        return pid;
    }

    /**
     * @param pid the pid to set
     */
    public void setPid(String pid) {
        this.pid = pid;
    }

    /**
     * @return the user
     */
    public String getUser() {
        
        user = (String) FacesContext.getCurrentInstance().getExternalContext().getSessionMap().get("user");
        pid = (String) FacesContext.getCurrentInstance().getExternalContext().getSessionMap().get("pid");
        
        return user;
    }

    /**
     * @param user the user to set
     */
    public void setUser(String user) {
        this.user = user;
    }

    /**
     * @return the myhash
     */
    public String getMyhash() {
        return myhash;
    }

    /**
     * @param myhash the myhash to set
     */
    public void setMyhash(String myhash) {
        this.myhash = myhash;
    }

    /**
     * @return the myApp
     */
    public String getMyApp() {
        return myApp;
    }

    /**
     * @param myApp the myApp to set
     */
    public void setMyApp(String myApp) {
        this.myApp = myApp;
        this.defineExtApp();
    }
    
}
