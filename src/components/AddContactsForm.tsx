import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import useContactForm from "@/hooks/useContactForm";
import FormField from "./common/FormField";
import { formToData } from "@/lib/utils";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Icontact, addContacts, updateContacts } from "@/features/contactSlice";
import { v4 as uuidv4 } from "uuid";

interface IAddContactForm {
  open: boolean;
  data?: Icontact;
  handleClose: () => void;
}

export function AddContactForms({ data, handleClose, open }: IAddContactForm) {
  const { formData } = useContactForm({ data });
  const dispatch = useDispatch();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const contactData = formToData(event) as Icontact; // extract from data from submit event
    contactData["id"] = data ? data.id : uuidv4(); // append unique id to each contact
    dispatch(data ? updateContacts(contactData) : addContacts(contactData));
    handleClose();
  };
  return (
    <Dialog open={open} onOpenChange={(open) => !open && handleClose()}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{data ? "Update Contacts" : "Add Contacts"}</DialogTitle>
          <DialogDescription>
            Make changes to your contact here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            {formData.map((form) => (
              <div className="grid grid-cols-4 items-center gap-4" key={form.name}>
                <Label htmlFor={form.name} className="text-right">
                  {form.label}
                </Label>
                <FormField {...form} />
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button type="submit">Save {data && "Edited"} Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
