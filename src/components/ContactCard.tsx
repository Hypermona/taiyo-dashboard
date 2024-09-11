import { Icontact, deleteContacts } from "@/features/contactSlice";
import { Card, CardHeader } from "./ui/card";
import { DotFilledIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useAppDispatch } from "@/features/store";
import { useState } from "react";
import { ConfirmDaialog } from "./common/ConfirmDailog";

interface Iprops {
  data: Icontact;
  onEdit: (v: Icontact) => void;
}

function ContactCard(props: Iprops) {
  const { firstName, lastName, status } = props.data;
  const [showDialog, setShowDialog] = useState(false);
  const dispatch = useAppDispatch();
  const onDelete = () => {
    dispatch(deleteContacts({ id: props.data.id }));
  };
  return (
    <Card className="w-full sm:w-[370px]">
      <CardHeader>
        <div className="flex gap-x-3 items-center">
          <div className="flex flex-1 mr-auto">
            <div className="mr-2 w-[3rem]">
              <img
                className="rounded-[50%]"
                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                alt="user pic"
              />
            </div>
            <div>
              <div className="font-bold tracking-tight">{firstName + " " + lastName}</div>
              <div className="flex text-sm text-muted-foreground items-center">
                <span>Status:</span>
                <DotFilledIcon
                  width={32}
                  height={32}
                  color={status === "active" ? "green" : "gray"}
                />
                <span className="ml-[-7px]">{status}</span>
              </div>
            </div>
          </div>
          <Pencil1Icon
            className="text-blue-500 cursor-pointer"
            width={24}
            height={24}
            onClick={() => {
              props.onEdit(props.data);
            }}
          />
          <TrashIcon
            className=" text-red-600 cursor-pointer"
            width={24}
            height={24}
            onClick={() => setShowDialog(true)}
          />
        </div>
        <ConfirmDaialog
          open={showDialog}
          onClose={() => setShowDialog(false)}
          onConfirm={onDelete}
          actionbtnClass="bg-red-500 hover:bg-red-600"
        />
      </CardHeader>
    </Card>
  );
}

export default ContactCard;
