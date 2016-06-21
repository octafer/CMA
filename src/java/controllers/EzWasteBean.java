/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import com.mongodb.BasicDBObject;
import formParsers.EzParsers;
import formParsers.OPPPParsers;
import java.io.Serializable;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import models.EzWaste;
import nosqlconnection.db.MyConnection;
import org.primefaces.model.map.DefaultMapModel;
import org.primefaces.model.map.MapModel;
import utils.APPEUtils;

/**
 *
 * @author prego
 */
@Named(value = "ezWasteBean")
@ViewScoped
public class EzWasteBean implements Serializable {

    @Inject
    private MySessionBean sessionBean;
    private MyConnection conn;
    private SystemBean systemBean;
    
    private MapModel emptyModel;
    
    private String pid;
    
    private EzWaste ezw;
    
    /**
     * Creates a new instance of EzWasteBean
     */
    public EzWasteBean() {
        
        systemBean = (SystemBean) FacesContext.getCurrentInstance().getExternalContext().getApplicationMap().get("systemBean");
        pid = (String) FacesContext.getCurrentInstance().getExternalContext().getSessionMap().get("pid");
        conn = systemBean.getConn();
        //obter a pp
        popularEz();
        emptyModel = new DefaultMapModel();
        
        APPEUtils.executeJS("togglePoint("+ezw.getLat()+","+ezw.getLng()+")");
        APPEUtils.updateJS("myform:map");
        
    }
    
    
    
    private void popularEz(){
    
        conn.setDB("dbCompta"); conn.setCollection("collIssues_back");
        
        BasicDBObject res = (BasicDBObject) conn.getDBCollection().findOne(new BasicDBObject("pid",Integer.parseInt(pid)));
        if(res!=null){
            ezw = EzParsers.jsonToEzWaste(res);
        }    
        
        
    }
    
    

    /**
     * @return the emptyModel
     */
    public MapModel getEmptyModel() {
        return emptyModel;
    }

    /**
     * @param emptyModel the emptyModel to set
     */
    public void setEmptyModel(MapModel emptyModel) {
        this.emptyModel = emptyModel;
    }

    /**
     * @return the sessionBean
     */
    public MySessionBean getSessionBean() {
        return sessionBean;
    }

    /**
     * @param sessionBean the sessionBean to set
     */
    public void setSessionBean(MySessionBean sessionBean) {
        this.sessionBean = sessionBean;
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
     * @return the systemBean
     */
    public SystemBean getSystemBean() {
        return systemBean;
    }

    /**
     * @param systemBean the systemBean to set
     */
    public void setSystemBean(SystemBean systemBean) {
        this.systemBean = systemBean;
    }

    /**
     * @return the ezw
     */
    public EzWaste getEzw() {
        return ezw;
    }

    /**
     * @param ezw the ezw to set
     */
    public void setEzw(EzWaste ezw) {
        this.ezw = ezw;
    }
    
}
