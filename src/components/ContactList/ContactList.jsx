import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const query = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.contact}>
      <ul className={styles.list}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))
        ) : (
          <li>No contacts found.</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
