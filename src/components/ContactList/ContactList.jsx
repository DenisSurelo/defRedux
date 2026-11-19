import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";


export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map(c => (
        <li key={c.id}>
          {c.name}: {c.number}
          <button onClick={() => dispatch(deleteContact(c.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  
};
