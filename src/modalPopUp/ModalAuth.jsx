import React, { useState } from "react";
import { Dialog, DialogContent, Tabs, Tab, Box } from "@mui/material";
import SignInForm from "./signInForm"; 
import SignUpForm from "./signUpForm";

const ModalAuth = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={handleChange} variant="fullWidth">
          <Tab label="Kirish" />
          <Tab label="Ro'yxatdan o'tish" />
        </Tabs>
      </Box>

      <DialogContent>
        {tab === 0 ? (
          <SignInForm onSuccess={onClose} />
        ) : (
          <SignUpForm onSuccess={onClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalAuth;
