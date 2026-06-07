import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <p className="contact-eyebrow">✦ GET IN TOUCH ✦</p>
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
            </span>
            <div>
              <h3>Email</h3>
              <p>hello@goldenhope.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            </span>
            <div>
              <h3>Location</h3>
              <p>New York, NY</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </span>
            <div>
              <h3>Hours</h3>
              <p>Mon – Fri, 9am – 6pm EST</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! We'll be in touch soon.");
        }}>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="Jane" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Doe" required />
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="jane@example.com" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="Order inquiry, feedback..." required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={6} placeholder="Write your message here..." required />
          </div>

          <button type="submit" className="contact-submit-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;