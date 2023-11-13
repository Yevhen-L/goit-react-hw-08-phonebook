import { Box } from '@mui/material';
import { ContactForm } from '../components/ContactForm/ContactForm';
// import { Filter } from '../components/Filter/index';
import { ContactsList } from '../components/ContactList/ContactList';

const ContactsView = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // backgroundColor="rgb(205, 243, 255);"
      paddingBottom="250px"
    >
      <ContactForm />
      <ContactsList />
    </Box>
  );
};

export default ContactsView;
