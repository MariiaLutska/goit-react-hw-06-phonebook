import { useSelector } from 'react-redux';

import { Contact } from '../ContactItem/ContactItem';
import { Box } from '../Box';

import { statusFilters } from '../../redux/constants';


const getVisibleContacts = ({ contacts, statusFilter }) => {
  switch (statusFilter) {
    case statusFilters.active:
      return contacts.filter(contact => !contact.completed);
    case statusFilters.completed:
      return contacts.filter(contact => contact.completed);
    default:
      return contacts;
  }
};
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const statusFilter = useSelector(state => state.filters.status);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);
 
  return (
    <Box color="secondary" as="ul">
      {visibleContacts.map(contact => (
        <Contact key={contact.id}>
          <Contact contact={contact} />
          </Contact>
        
      ))}
    </Box>
  );
};
// export const ContactList=({ contacts, onDeleteClick }) => {
//   return (
//     <Box color="secondary" as="ul">
//       {contacts.map(item => (
//         <ContactItem
//           key={item.id}
//           item={item}
//           onDeleteClick={onDeleteClick} />
//       ))}
//     </Box>
//   );
// };