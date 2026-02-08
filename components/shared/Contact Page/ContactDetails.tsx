"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";

export function ContactDetails() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    project: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.project) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      if (!supabase) {
        throw new Error("Supabase client is not initialized");
      }

      const { error } = await supabase.from("contact_requests").insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        instagram: form.instagram,
        project: form.project,
      });

      if (error) {
        throw error;
      }

      toast.success("We will get back to you soon..");

      setForm({
        name: "",
        email: "",
        phone: "",
        instagram: "",
        project: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full pt-10 pl-4 max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel>Name *</FieldLabel>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Prashant Sharma"
            required
          />
        </Field>

        <Field>
          <FieldLabel>Email *</FieldLabel>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
          <FieldDescription>
            We&apos;ll never share your email.
          </FieldDescription>
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Phone</FieldLabel>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 99999 99999"
            />
          </Field>

          <Field>
            <FieldLabel>Instagram</FieldLabel>
            <Input
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              placeholder="@instagram"
            />
          </Field>
        </div>

        <Field>
          <FieldLabel>Tell me about your project *</FieldLabel>
          <textarea
            name="project"
            value={form.project}
            onChange={handleChange}
            rows={6}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-y min-h-[120px]"
            placeholder="Describe your project, goals, and requirements..."
            required
          />
        </Field>

        <Field orientation="horizontal">
          <Button
            type="reset"
            variant="outline"
            onClick={() =>
              setForm({
                name: "",
                email: "",
                phone: "",
                instagram: "",
                project: "",
              })
            }
          >
            Cancel
          </Button>

          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
