"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { router } from "@inertiajs/react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    name: z.string({ message: "Nama harus di isi" }),
    username: z.string({ message: "Username harus di isi" }),
    password: z.string({ message: "Password harus di isi" }),
    password_confirmation: z.string({
        message: "Konfirmasi password harus di isi",
    }),
    role: z.string({ message: "Role harus di pilih" }),
});

export default function MyForm() {
    const languages = [
        {
            label: "User",
            value: "USER",
        },
        {
            label: "Rektor",
            value: "REKTOR",
        },
    ] as const;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const { toast } = useToast();
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            router.post(route("users.store"), values, {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    toast({
                        description: "Berhasil tambah user ✅" + values.name,
                    });
                },
            });
        } catch (error) {
            console.error("Form submission error", error);
            toast({
                description: "Gagal ",
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukkan nama...."
                                    type=""
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukkan username..."
                                    type="text"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Ini adalah username untuk masuk ke aplikasi
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Role</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-[200px] justify-between",
                                                !field.value &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? languages.find(
                                                      (language) =>
                                                          language.value ===
                                                          field.value
                                                  )?.label
                                                : "Pilih Role"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search role..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                No role found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {languages.map((language) => (
                                                    <CommandItem
                                                        value={language.label}
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue(
                                                                "role",
                                                                language.value
                                                            );
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                language.value ===
                                                                    field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {language.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                This is the role that will be used in the user.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukkan password..."
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Enter your password.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password_confirmation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password Konfirmasi</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukkan password konfirmasi..."
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Enter your password confirmation.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
