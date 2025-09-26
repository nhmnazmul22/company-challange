"use client";
import { FormEvent, useState } from "react";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import SelectWithLabel from "@/components/ui/SelectWithLabel";
import { productsCategories } from "@/data/products";
import { Textarea } from "@/components/ui/shadcnui/textarea";
import { Label } from "@/components/ui/shadcnui/label";
import { Button } from "@/components/ui/shadcnui/button";
import { Alert, AlertTitle } from "@/components/ui/shadcnui/alert";
import { AlertCircleIcon, Send } from "lucide-react";
import { isValidateEmail } from "@/lib/validator";
import { toast } from "sonner";
import { useStore } from "@/store/useStore";

type ErrorType = {
  label: string;
  message: string;
};

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cName, setCName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<ErrorType>({
    label: "",
    message: "",
  });
  const { addContact } = useStore();

  // Check is error need to show
  const checkIsError = (label: string) =>
    errorMessage.label === label ? errorMessage.message : "";

  // Reset all state
  const reset = () => {
    setFullName("");
    setEmail("");
    setCName("");
    setService("");
    setMessage("");
    setErrorMessage({
      label: "",
      message: "",
    });
  };

  // Handle the form submission
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage({ label: "", message: "" });

    // checking is all input filed filled or not
    if (fullName === "" || email === "" || cName === "") {
      setErrorMessage({
        label: "unfilled-input",
        message: "",
      });
      return;
    }

    //  Validation the email address
    if (!isValidateEmail(email)) {
      setErrorMessage({
        label: "email",
        message: "Please provide a valid email address",
      });
      return;
    }

    // Add the contact data to Zustand store
    const data = {
      fullName,
      email,
      cName,
      service,
      message,
    };
    addContact(data);

    //  Give a notification and reset all state
    toast.success(
      "Message send successful, We will contact as soon as possible"
    );
    reset();
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="col-span-12 xl:col-span-8 bg-linear-to-b from-white to-gray-100 shadow px-5 py-8 rounded-xl border border-gray-100 space-y-3 h-fit"
    >
      <div className="text-center mb-10">
        <h4 className="text-xl font-semibold">Get In Touch</h4>
        <p className="text-base text-gray-600">
          Ready to transform your business? Lets discuss your project.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between items-center">
        <InputWithLabel
          id="full-name"
          label="Full Name"
          value={fullName}
          setValue={setFullName}
          placeholderText="John Deo"
          errorMessage={checkIsError("full-name")}
        />
        <InputWithLabel
          id="email"
          label="Email Address"
          value={email}
          setValue={setEmail}
          placeholderText="john@example.com"
          errorMessage={checkIsError("email")}
        />
        <InputWithLabel
          id="company-name"
          label="Company Name"
          value={cName}
          setValue={setCName}
          placeholderText="Your company"
          errorMessage={checkIsError("cName")}
        />
        <SelectWithLabel
          id="service"
          label="Service Interested In"
          value={service}
          setValue={setService}
          data={productsCategories}
          errorMessage={checkIsError("service")}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          className="min-h-[200px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      {errorMessage.label === "unfilled-input" && (
        <div className="my-3">
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>
              Required Input must be filled, Please complete all field.
            </AlertTitle>
          </Alert>
        </div>
      )}
      <Button type="submit" variant="primary" size="lg">
        <Send /> Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
