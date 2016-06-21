/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import com.mongodb.BasicDBObject;
import formParsers.OPPPParsers;
import java.io.Serializable;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import models.orcparticipativo.PropostaParticipacao;
import nosqlconnection.db.MyConnection;
import org.primefaces.model.map.DefaultMapModel;
import org.primefaces.model.map.MapModel;
import utils.APPEUtils;
import utils.CPParsers;

/**
 *
 * @author prego
 */
@Named(value = "oPPPBean")
@ViewScoped
public class OPPPBean implements Serializable {

    private PropostaParticipacao opPP;
    private String pid;
    
    private SystemBean systemBean;
    private MyConnection conn;
    
    
    @Inject
    private MySessionBean mySessionBean;
    
    private MapModel emptyModel;
    
    /**
     * Creates a new instance of OPBean
     */
    public OPPPBean() {
        systemBean = (SystemBean) FacesContext.getCurrentInstance().getExternalContext().getApplicationMap().get("systemBean");
        pid = (String) FacesContext.getCurrentInstance().getExternalContext().getSessionMap().get("pid");
        conn = systemBean.getConn();
        //obter a pp
        popularOPPP();
        emptyModel = new DefaultMapModel();
        
        if(opPP.getLatitude()>0.0){
            APPEUtils.executeJS("togglePoint("+opPP.getLatitude()+","+opPP.getLongitude()+")");
            APPEUtils.updateJS("myform:map");
        }    
        
    }

    
    
    
    private void popularOPPP(){
    
        String db = conn.getDB().getName(); String coll = conn.getDBCollection().getName();
        conn.setDB("dbProcessos"); conn.setCollection("collProcEspecificos");
        
        BasicDBObject res = (BasicDBObject) conn.getDBCollection().findOne(new BasicDBObject("pid",pid));
        if(res!=null){
            opPP = OPPPParsers.jsonToPropostaParticipacao(res);
        }    
        
        conn.setDB(db); conn.setCollection(coll);
        
    }
    
    
    
    
    
    /**
     * @return the opPP
     */
    public PropostaParticipacao getOpPP() {
        return opPP;
    }

    /**
     * @param opPP the opPP to set
     */
    public void setOpPP(PropostaParticipacao opPP) {
        this.opPP = opPP;
    }

    /**
     * @return the mySessionBean
     */
    public MySessionBean getMySessionBean() {
        return mySessionBean;
    }

    /**
     * @param mySessionBean the mySessionBean to set
     */
    public void setMySessionBean(MySessionBean mySessionBean) {
        this.mySessionBean = mySessionBean;
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
    
}
