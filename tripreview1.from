
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.swing.JOptionPane;


public class tripreview1 extends javax.swing.JFrame {

    
    public tripreview1() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Review = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        phone = new javax.swing.JTextField();
        HomeForm = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        Review.setBackground(new java.awt.Color(204, 255, 255));
        Review.setFont(new java.awt.Font("Cooper Black", 0, 18)); // NOI18N
        Review.setForeground(new java.awt.Color(24, 80, 141));
        Review.setText("View Bookings");
        Review.setPreferredSize(new java.awt.Dimension(250, 80));
        Review.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                ReviewActionPerformed(evt);
            }
        });

        jLabel2.setFont(new java.awt.Font("Cooper Black", 0, 24)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(14, 73, 144));
        jLabel2.setText(" Please Enter your flight number");

        phone.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                phoneActionPerformed(evt);
            }
        });

        HomeForm.setBackground(new java.awt.Color(204, 255, 255));
        HomeForm.setFont(new java.awt.Font("Cooper Black", 0, 18)); // NOI18N
        HomeForm.setForeground(new java.awt.Color(24, 80, 141));
        HomeForm.setText("Back");
        HomeForm.setPreferredSize(new java.awt.Dimension(250, 80));
        HomeForm.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                HomeFormActionPerformed(evt);
            }
        });

        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/الشعار معدل.png"))); // NOI18N
        jLabel1.setText("jLabel1");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(197, 197, 197)
                        .addComponent(Review, javax.swing.GroupLayout.PREFERRED_SIZE, 216, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(88, 88, 88)
                        .addComponent(HomeForm, javax.swing.GroupLayout.PREFERRED_SIZE, 247, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(298, 298, 298)
                        .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 340, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(331, 331, 331)
                        .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 233, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(164, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(phone, javax.swing.GroupLayout.PREFERRED_SIZE, 275, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(331, 331, 331))
        );

        layout.linkSize(javax.swing.SwingConstants.HORIZONTAL, new java.awt.Component[] {HomeForm, Review});

        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(19, 19, 19)
                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 131, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jLabel2, javax.swing.GroupLayout.DEFAULT_SIZE, 41, Short.MAX_VALUE)
                .addGap(32, 32, 32)
                .addComponent(phone, javax.swing.GroupLayout.PREFERRED_SIZE, 54, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(31, 31, 31)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(Review, javax.swing.GroupLayout.PREFERRED_SIZE, 68, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(HomeForm, javax.swing.GroupLayout.PREFERRED_SIZE, 68, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(36, 36, 36))
        );

        layout.linkSize(javax.swing.SwingConstants.VERTICAL, new java.awt.Component[] {HomeForm, Review});

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void ReviewActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_ReviewActionPerformed
        try {
    Connection cc = DBConnection.connect(); 

   String sql = "SELECT customerFname, customerLname, phone, " +
                     "tripType, tripDate, passengersNum, price " +
                     "FROM Customer " +
                     "INNER JOIN Booking b ON customerID = customerID " +
                     "WHERE phone = ?";

    PreparedStatement pst = cc.prepareStatement(sql);
    pst.setString(1, phone.getText().trim()); 

    ResultSet bookingData = pst.executeQuery();

    if (bookingData.next()) {
        

      String TripInformation =
                "First Name: " + bookingData.getString("customerFname") + "\n" +
                "Last Name: " + bookingData.getString("customerLname") + "\n" +
                "Phone: " + bookingData.getString("phone") + "\n\n" +
                " Booking Details: \n" +
                "Trip Type: " + bookingData.getString("tripType") + "\n" +
                "Trip Date: " + bookingData.getString("tripDate") + "\n" +
                "Passengers: " + bookingData.getString("passengersNum") + "\n" +
                "Price: " + bookingData.getString("price");
        JOptionPane.showMessageDialog(this, TripInformation,
            "review", JOptionPane.INFORMATION_MESSAGE);

    } else {
        JOptionPane.showMessageDialog(this,
    "Dear Customer,\n" +
    "We would like to inform you that there are currently no bookings under your number.\n" +
    "Please check the phone number and try again.",
    "No Booking Found",
    JOptionPane.INFORMATION_MESSAGE);
          
    }

   

} catch (Exception ex) {
    JOptionPane.showMessageDialog(this, "ERROR: " + ex.getMessage());
}

    }//GEN-LAST:event_ReviewActionPerformed

    private void HomeFormActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_HomeFormActionPerformed
       this.setVisible (false);
new HomeForm().setVisible(true) ;
    }//GEN-LAST:event_HomeFormActionPerformed

    private void phoneActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_phoneActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_phoneActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(tripreview1.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(tripreview1.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(tripreview1.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(tripreview1.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new tripreview1().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton HomeForm;
    private javax.swing.JButton Review;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JTextField phone;
    // End of variables declaration//GEN-END:variables
}