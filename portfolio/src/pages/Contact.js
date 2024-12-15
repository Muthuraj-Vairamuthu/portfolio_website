import React from 'react';

const Contact = () => {
  const styles = {
    formContainer: {
      backgroundColor: '#444',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      backgroundColor: '#5C7AEA',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#4254b8',
    },
    linkSection: {
      marginTop: '20px',
    },
    link: {
      color: '#5C7AEA',
      textDecoration: 'none',
    }
  };

  return (
    <div>
      <header>
        <h1>Contact Me</h1>
        <p>If you have any questions, project proposals, or just want to say hello, feel free to drop me a message. I'll get back to you as soon as possible!</p>
      </header>

      <div style={styles.formContainer}>
        <form>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Name:</label>
            <input style={styles.input} type="text" id="name" name="name" required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input style={styles.input} type="email" id="email" name="email" required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="message">Message:</label>
            <textarea style={styles.textarea} id="message" name="message" rows="5" required></textarea>
          </div>
          <button style={styles.button} type="submit">Send Message</button>
        </form>
      </div>

      <section style={styles.linkSection}>
        <h2>Direct Contact</h2>
        <p>Email: <a style={styles.link} href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>LinkedIn: <a style={styles.link} href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">View my profile</a></p>
      </section>

      <section style={styles.linkSection}>
        <h2>Follow Me</h2>
        <a style={styles.link} href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a> |
        <a style={styles.link} href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a style={styles.link} href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section>
    </div>
  );
};

export default Contact;
