/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import com.mongodb.BasicDBObject;
import java.io.Serializable;
import java.util.Collections;
import java.util.Date;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import models.Contratacao;
import models.ValorAno;
import nosqlconnection.db.MyConnection;
import utils.CPParsers;
import utils.APPEUtils;

/**
 *
 * @author prego
 */
@Named(value = "dadosBean")
@ViewScoped
public class DadosBean implements Serializable {

    private String pid;
    private String user;
    
    private SystemBean systemBean;
    private Contratacao contratacao;
    private ValorAno selectedValorAno;
    private ValorAno addValorAno;
    private MyConnection conn;
    
    @Inject
    private MySessionBean mySessionBean;
    
    public DadosBean() {
        systemBean = (SystemBean) FacesContext.getCurrentInstance().getExternalContext().getApplicationMap().get("systemBean");
        pid = (String) FacesContext.getCurrentInstance().getExternalContext().getSessionMap().get("pid");
        contratacao = new Contratacao();
        addValorAno = new ValorAno();
        conn = systemBean.getConn();
        popularContratacao();
    }
    
    
    
    
    private void popularContratacao(){
    
        contratacao.setPid(Integer.parseInt(pid));
        BasicDBObject res = (BasicDBObject) conn.getDBCollection().findOne(new BasicDBObject("pid",contratacao.getPid()));
        if(res!=null){
            contratacao = CPParsers.jsonToContratacao(res);
        }    
        
    }
    
    
    
    
    public void guardarDadosPC(){
        
        contratacao.setPid(Integer.parseInt(mySessionBean.getPid()));
        String muser = mySessionBean.getUser();
        
        
        //verificar se o registo já existe
        BasicDBObject res = (BasicDBObject) conn.getDBCollection().findOne(new BasicDBObject("pid",contratacao.getPid()));
        BasicDBObject o = CPParsers.contratacaoToJson(contratacao);
        
        if(res==null){
            //faz insert
            String user = mySessionBean.getUser();
            o.put("user", muser); o.put("updated", new Date());
            conn.getDBCollection().insert(o);
        }else{
            //faz backup
            conn.setDBCollection("collProcContratacao_Backup");
            res.put("_idOld", res.getObjectId("_id"));
            res.removeField("_id");
            conn.getDBCollection().insert(res);
            //faz update
            conn.setDBCollection("collProcContratacao");
            
            o.put("user", muser); o.put("updated", new Date());
            o.removeField("_id");
            conn.getDBCollection().update(new BasicDBObject("pid", res.getInt("pid")), o);
        }    
        
        APPEUtils.printMessage("Dados guardados com sucesso!");
        
    }
    
    
    
    
    public void addNewValorAno(){
        contratacao.getLstValoresAno().add(new ValorAno(addValorAno.getAno(), addValorAno.getValor()));
        addValorAno = new ValorAno();
        Collections.sort(contratacao.getLstValoresAno());
        APPEUtils.printMessage("Dados adicionados com sucesso!");
    }
    
    
    public void editValorAno(){
        APPEUtils.printMessage("Dados atualizados com sucesso!");
    }
    
    
    public void removerValorAno(){
        contratacao.getLstValoresAno().remove(selectedValorAno);
        selectedValorAno = new ValorAno();
        APPEUtils.printMessage("Dados removidos com sucesso!");
    }
    
    
    
    
    
    
    
    
    

    /**
     * @return the contratacao
     */
    public Contratacao getContratacao() {
        return contratacao;
    }

    /**
     * @param contratacao the contratacao to set
     */
    public void setContratacao(Contratacao contratacao) {
        this.contratacao = contratacao;
    }

    /**
     * @return the selectedValorAno
     */
    public ValorAno getSelectedValorAno() {
        return selectedValorAno;
    }

    /**
     * @param selectedValorAno the selectedValorAno to set
     */
    public void setSelectedValorAno(ValorAno selectedValorAno) {
        this.selectedValorAno = selectedValorAno;
    }

    /**
     * @return the addValorAno
     */
    public ValorAno getAddValorAno() {
        return addValorAno;
    }

    /**
     * @param addValorAno the addValorAno to set
     */
    public void setAddValorAno(ValorAno addValorAno) {
        this.addValorAno = addValorAno;
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
        return user;
    }

    /**
     * @param user the user to set
     */
    public void setUser(String user) {
        this.user = user;
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

    

    
    
    
    
    
    
    
    
    
    
}
