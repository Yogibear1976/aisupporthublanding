"use client";

import * as React from "react";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "../icons/Icons";

import { toast } from "sonner";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";

import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ModalWaitlistProps {
  title: string;
  navbar?: boolean;
  sky?: boolean;
  width?: boolean;
}

// Skills/frameworks options
const frameworks = [
  "Python",
  "JavaScript",
  "OpenAI GPT models",
  "Google Gemini",
  "Meta Llama",
  "Anthropic Claude",
  "Prompt Engineering",
  "AI agents",
  "Next.js",
  "n8n Automation",
] as const;

export const ModalWaitinglist = ({
  title,
  navbar,
  width,
}: ModalWaitlistProps) => {
  const router = useRouter();
  const anchor = useComboboxAnchor();

  const formSchema = z
    .object({
      role: z.enum(["COMPANY", "PROFESSIONAL"], {
        message: "Selecteer een rol",
      }),
      name: z.string().min(2, "Naam is verplicht"),
      email: z.string().email("Ongeldig e-mailadres"),
      companyName: z.string().optional(),
      skills: z.array(z.string()).optional(),
    })
    .superRefine((data, ctx) => {
      if (data.role === "COMPANY" && !data.companyName) {
        ctx.addIssue({
          code: "custom",
          message: "Bedrijfsnaam is verplicht",
          path: ["companyName"],
        });
      }
      if (
        data.role === "PROFESSIONAL" &&
        (!data.skills || data.skills.length === 0)
      ) {
        ctx.addIssue({
          code: "custom",
          message: "Selecteer ten minste 1 skill",
          path: ["skills"],
        });
      }
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: undefined,
      name: "",
      email: "",
      companyName: "",
      skills: [],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const { reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { role, name, email, companyName, skills } = values;

    try {
      setIsSubmitting(true);
      await axios.post(`/api/waitinglist`, {
        role,
        name,
        email,
        companyName,
        skills,
      });
      setIsSubmitting(false);
      reset();
      setOpen(false);
      toast(
        "Inschrijving ontvangen. Bedankt voor je interesse en je hoort snel van ons!",
      );
    } catch {
      toast.error("Uh oh! Er ging iets mis.");
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <DialogTrigger asChild>
        <Button
          className={width ? "w-full" : "block"}
          variant="pulse"
          size={navbar ? "xs" : "default"}
        >
          {title}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
      sm:max-w-106
      p-0
      max-h-[85dvh]
      grid-rows-[auto_minmax(0,1fr)_auto]
      overflow-hidden
    "
      >
        {/* HEADER */}
        <DialogHeader className="p-4 sm:p-6 pb-2">
          <DialogTitle className="text-left">
            Claim jouw early adopter voordeel
          </DialogTitle>

          <DialogDescription className="text-left">
            De eerste 5 geregistreerde bedrijven krijgen na livegang ons{" "}
            <span className="font-bold text-primary-light">
              laagste uurtarief
            </span>
            . Toegang tot pre-screened AI engineers die binnen 48 uur starten.
            Bespaar direct 45% op je projectkosten.
          </DialogDescription>

          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Icons.email className="h-3.5 w-3.5 text-primary-light" />
            <p className="text-[11px]">
              Je ontvangt direct een bevestiging van inschrijving op je mail.
            </p>
          </div>
        </DialogHeader>

        {/* FORM (scrollable center area) */}
        <div className="px-6 pb-4 overflow-y-auto">
          <Form {...form}>
            <form className="space-y-4 mt-2">
              {/* Role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">
                      Wat is je rol?
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Maak een keuze" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="COMPANY">Bedrijf</SelectItem>
                            <SelectItem value="PROFESSIONAL">
                              AI Professional
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* Conditional: Bedrijfsnaam (only for bedrijf) */}
              {form.watch("role") === "COMPANY" && (
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs ml-1">
                        Bedrijfsnaam
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Bedrijfsnaam" {...field} />
                      </FormControl>
                      <FormMessage className="text-[10px] ml-1" />
                    </FormItem>
                  )}
                />
              )}

              {/* Conditional: Skills (only for professional) */}
              {form.watch("role") === "PROFESSIONAL" && (
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs ml-1">
                        Skills & Specialisaties
                      </FormLabel>
                      <FormDescription className="text-[10px] ml-1">
                        Selecteer je belangrijkste skills
                      </FormDescription>
                      <FormControl>
                        <Combobox
                          multiple
                          autoHighlight
                          items={frameworks}
                          value={field.value || []}
                          onValueChange={field.onChange}
                        >
                          <ComboboxChips ref={anchor} className="w-full">
                            <ComboboxValue>
                              {(values) => (
                                <React.Fragment>
                                  {values.map((value: string) => (
                                    <ComboboxChip key={value}>
                                      {value}
                                    </ComboboxChip>
                                  ))}
                                  <ComboboxChipsInput placeholder="Zoek skills..." />
                                </React.Fragment>
                              )}
                            </ComboboxValue>
                          </ComboboxChips>
                          <ComboboxContent anchor={anchor}>
                            <ComboboxEmpty>Geen skills gevonden.</ComboboxEmpty>
                            <ComboboxList>
                              {(item) => (
                                <ComboboxItem key={item} value={item}>
                                  {item}
                                </ComboboxItem>
                              )}
                            </ComboboxList>
                          </ComboboxContent>
                        </Combobox>
                      </FormControl>
                      <FormMessage className="text-[10px] ml-1" />
                    </FormItem>
                  )}
                />
              )}

              {/* Naam */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">Naam</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Naam"
                        autoComplete="name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />

              {/* E-mailadres */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs ml-1">E-mailadres</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="naam@email.nl"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px] ml-1" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        {/* FOOTER BUTTON */}
        <DialogFooter className="p-4">
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full"
            variant="default"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              <Icons.save className="h-4 w-4" />
            )}
            Zet me op de waiting list
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
