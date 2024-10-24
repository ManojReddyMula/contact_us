 
 import React from "react";
  function ContactForm(){
    return(
        <div className="contact-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="left-container">
                <div className="contact-left-container">
               
                <input type="hidden" name="access_key" value="8622d59b-446f-4456-b9b4-c7c87e0e437f"/>

                    <h2>Contact Us</h2>
                    <hr/>
                    
                </div>
                
                    <label className="types">Full Name</label>
                    <input name="full_name" className="contact-inputs" type="text" placeholder="Enter Your Name" require/> <br/>
                    <label className="types">Gmail</label>
                    <input className="contact-inputs"  type="mail" placeholder="Enter Your Mail" require/> <br/>
                    <label className="types">Phone Number</label>
                    <input className="contact-inputs"   type="number" placeholder="Enter Your Number" require/> <br/>
                    <label className="types">write Your opinion</label>
                    <textarea className="message" typeof="text">Start writting....</textarea> <br/>
                    <button  type=" submit">send Message</button>
                   
                    </form>

                <div className="right-container">  
                <img src="https://raw.githubusercontent.com/codeWithKG/contact_form/e46fb172ce3cda3a98480f1ddbe1da41a1fbd556/assests/sun.gif" alt=""/>           
                    </div>



            


           
       
        </div>

    )
  }
   export default ContactForm;