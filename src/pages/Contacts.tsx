import { AddContactForms } from "@/components/AddContactsForm";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icontact } from "@/features/contactSlice";
import { RootState } from "@/features/store";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useSelector } from "react-redux";

function Contacts() {
  const contacts = useSelector((state: RootState) => state.contact);
  // handling the add contact popup state
  const [addContactState, setAddContactState] = useState<{ open: boolean; data?: Icontact }>({
    open: false,
    data: undefined,
  });
  const handleFormClose = () => {
    setAddContactState({ open: false, data: undefined });
  };
  const onEdit = (data: Icontact) => {
    setAddContactState({ open: true, data: data });
  };
  return (
    <Card className="p-5 h-full overflow-auto">
      <div className="flex">
        <h2 className="text-4xl flex-1 tracking-tight font-bold">Contacts</h2>
        <AddContactForms
          open={addContactState.open}
          data={addContactState.data}
          handleClose={handleFormClose}
        />
        <Button onClick={() => setAddContactState({ open: true, data: undefined })}>
          Add Contacts
        </Button>
      </div>
      <div className="mt-20 flex gap-5 flex-wrap">
        {contacts.length > 0 ? (
          contacts.map((contact) => <ContactCard data={contact} onEdit={onEdit} />)
        ) : (
          <div className="flex justify-center items-start w-full">
            <CrossCircledIcon className="text-muted-foreground" width={24} height={24} />
            <p className="ml-2 text-muted-foreground">
              No contacts found please add contacts from 'Add Contacts' button
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}

export default Contacts;
