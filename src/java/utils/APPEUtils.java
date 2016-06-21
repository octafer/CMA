/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.RandomStringUtils;
import org.primefaces.context.RequestContext;

/**
 *
 * @author prego
 */
public abstract class APPEUtils {
    
    
    
    public static String encryptObject(String str) throws Exception {
        byte[] bytesEncoded = Base64.encodeBase64(str.getBytes());
        String aux =  new String(bytesEncoded);
        aux = RandomStringUtils.randomAlphabetic(8) + aux + RandomStringUtils.randomAlphabetic(4);
        aux = aux.replaceAll("=", "");
        return aux;
    }
    
    
    
    
    public static String decryptObject(String encStr) throws Exception {
        String aux3 = encStr.substring(8);
        String aux4 = aux3.substring(0, aux3.length()-4)+"=";
        byte[] valueDecoded = Base64.decodeBase64(aux4);
        String aux = new String(valueDecoded);
        return aux;
    }
    
    
    
    public static void printMessage(String message1){
        FacesContext context = FacesContext.getCurrentInstance();
        context.addMessage(null, new FacesMessage(message1, ""));
    }
    
    
    
    public static void executeJS(String comando){
        RequestContext.getCurrentInstance().execute(comando);
    }
    
    
    public static void updateJS(String comando){
        RequestContext.getCurrentInstance().update(comando);
    }
    
    
    
    
}
