import { createSlice } from "@reduxjs/toolkit";

export interface Icontact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

const initialState: Icontact[] = [];

const contactSLice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (contacts: Icontact[], actions) => {
      contacts.push(actions.payload);
    },
    updateContacts: (contacts: Icontact[], { payload }: { payload: Icontact }) => {
      const index = contacts.findIndex((contact) => contact.id === payload.id);
      contacts[index] = payload;
      return contacts;
    },
    deleteContacts: (contacts: Icontact[], { payload }) => {
      return contacts.filter((contact) => contact.id !== payload.id);
    },
  },
});

export default contactSLice.reducer;
export const { addContacts, deleteContacts, updateContacts } = contactSLice.actions;
