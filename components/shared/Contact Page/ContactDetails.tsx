import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function ContactDetails() {
  return (
    <form className="w-full pt-10 pl-4 max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Name</FieldLabel>
          <Input

            id="form-name"
            type="text"
            placeholder="Prashant Sharma"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input
            id="form-email"
            type="email"
            placeholder="YourEmail@gmail.com"
          />
          <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+( ) 999999" />
          </Field>
          <Field>
            <FieldLabel htmlFor="Social Media">Instagram</FieldLabel>
            <Input id="Social Media" type="text" placeholder="@Instagram" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="">Tell me about your project</FieldLabel>
          <Input  type="text" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
