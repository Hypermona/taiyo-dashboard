import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type IFormField = {
  type: string;
  value: string;
  name: string;
  label: string;
  options?: { id: string; label: string; value: string }[];
};

function FormField({ name, type, value, options }: IFormField) {
  switch (type) {
    case "radio":
      return (
        <RadioGroup id={name} name={name} defaultValue={value} className="flex">
          {options?.map((option) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={option.id} />
              <Label htmlFor={option.id}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      );
    default:
      return <Input id={name} name={name} defaultValue={value} className="col-span-3" />; // handle all other input types
  }
}

export default FormField;
