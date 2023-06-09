import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

function ContactForm() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [message, setMessage] = useState(" ");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submittin ${name} ${email} ${message}`);
    }

    return (
        <form 
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                maxWidth: 400,
                margin: 'auto',
                padding: 50,
                borderRadius: 8,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="h5" align="center">Contact Me</Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ alignSelf: 'center', marginTop: 16 }}
              >
                Submit
              </Button>
            </form>
          );
        }
        
        export default ContactForm;
 