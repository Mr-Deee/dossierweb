import React from "react";
import "./pages.css";
import "./contactus.css";

const ContinuousPage = () => {
  return (
    <div>
      <div id="about" className="section">
        <h2>About</h2>
        <p>

        </p>
        {/* Add three containers beneath container-right */}

        <div className="container-bottom">
          <div className="bottom-container">
            {" "}
            <h1>Mission Statement</h1>
            At Dossier our mission is to provide
            individuals with a secure and efficient way to declare their assets
            and ensure that their legacy is preserved for future generations."
          </div>

   
        </div>

        
      </div>
      <div id="contact" className="section">
        <h2>Contact Us</h2>
        <div className="container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>For inquiries or assistance, please feel free to contact us:</p>
        <p>Phone: +1234567890</p>
        <p>Email: info@example.com</p>
      </div>
      <ContactForm />
    </div>
      </div>
    </div>
  );
};
function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Leave us a message</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
export default ContinuousPage;
