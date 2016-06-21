/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import utils.CPJUtils;
import utils.APPEUtils;

/**
 *
 * @author prego
 */
public class AuthServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try {
            String str = request.getQueryString();
            String dados = CPJUtils.decryptObject(str);
                    
            if(!dados.isEmpty()){
                //obter o user
                String[] args = dados.split(";");
                String user = args[0].replaceAll("user=", "");
                String pid = args[1].replaceAll("pid=", "");
                String app = args[2].replaceAll("appExt=", "");
                
                request.getSession().setAttribute("user", user);
                request.getSession().setAttribute("pid", pid);
                
                if(app.equals("OP")){
                    response.sendRedirect(request.getContextPath() + "/faces/op.xhtml");
                }else if(app.equals("ezWaste")){
                    response.sendRedirect(request.getContextPath() + "/faces/ezWaste.xhtml");
                }else{
                    response.sendRedirect(request.getContextPath() + "/faces/index.xhtml");
                }        
                
            }else{
                response.sendRedirect(request.getContextPath() + "/faces/error.xhtml");
            }
            
        } catch (Exception ex) {
            response.sendRedirect(request.getContextPath() + "/faces/error.xhtml");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
