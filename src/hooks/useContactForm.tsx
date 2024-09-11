import { Icontact } from "@/features/contactSlice";

function useContactForm({ data }: { data?: Icontact }) {
  const defaultValue = {
    firstName: data?.firstName ?? "",
    lastName: data?.lastName ?? "",
    status: data?.status || "inactive",
  };
  const formData = [
    {
      type: "text",
      value: defaultValue.firstName,
      name: "firstName",
      label: "First Name:",
    },
    {
      type: "text",
      value: defaultValue.lastName,
      name: "lastName",
      label: "Last Name:",
    },
    {
      type: "radio",
      value: defaultValue.status,
      name: "status",
      label: "Status:",
      options: [
        {
          id: "active",
          label: "Active",
          value: "active",
        },
        {
          id: "inactive",
          label: "Inactive",
          value: "inactive",
        },
      ],
    },
  ];
  return {
    formData,
  };
}

export default useContactForm;
