import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectNameFilter,
} from "../../redux/filtersSlice";
import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const query = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
