"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { router, usePage } from "@inertiajs/react";
import { useToast } from "@/hooks/use-toast";

// Enhanced form schema with all user fields
const formSchema = z
    .object({
        name: z.string().min(1, { message: "Nama harus di isi" }),
        username: z.string(),
        role: z.string().min(1, { message: "Role harus di pilih" }),
    })
    .refine((data) => {
        return true;
    });

const roles = [
    { label: "User", value: "USER" },
    { label: "Rektor", value: "REKTOR" },
    { label: "Admin", value: "ADMIN" },
    { label: "Dosen", value: "DOSEN" },
    { label: "Mahasiswa", value: "MAHASISWA" },
] as const;

interface UserFormProps {
    user?: {
        id?: number;
        name: string;
        username: string;
        role: string;
    };
    mode?: "create" | "edit";
}

export default function MyForm({ user, mode = "edit" }: any) {
    const { toast } = useToast();
    const isEditMode = mode === "edit";
    const { route } = usePage().props;

    // Initialize form with user data if in edit mode
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name || "",
            username: user?.username || "",
            role: user?.role || "USER",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            router.patch("/users/" + user.id, values, {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    toast({
                        title: "Berhasil",
                        description: `${
                            isEditMode ? "Update" : "Tambah"
                        } user ${values.name} berhasil ✅`,
                        variant: "default",
                    });
                    if (!isEditMode) {
                        form.reset(); // Only reset form on create
                    }
                },
                onError: (errors) => {
                    toast({
                        title: "Error",
                        description: "Terjadi kesalahan. Silakan coba lagi.",
                        variant: "destructive",
                    });
                    console.error(errors);
                },
            });
        } catch (error) {
            console.error("Form submission error", error);
            toast({
                title: "Error",
                description: "Terjadi kesalahan sistem",
                variant: "destructive",
            });
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 max-w-2xl mx-auto p-6"
            >
                <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 border">
                    <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold">
                            {isEditMode ? "Edit User" : "Tambah User Baru"}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {isEditMode
                                ? "Update informasi user yang sudah ada"
                                : "Tambahkan user baru ke dalam sistem"}
                        </p>
                    </div>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama Lengkap</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan nama lengkap..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Nama lengkap yang akan ditampilkan di sistem
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="contoh@email.com"
                                        type="email"
                                        {...field}
                                        disabled={isEditMode} // Disable email editing in edit mode
                                    />
                                </FormControl>
                                <FormDescription>
                                    Email akan digunakan untuk login dan
                                    menerima notifikasi
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih role user" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {roles.map((role) => (
                                            <SelectItem
                                                key={role.value}
                                                value={role.value}
                                            >
                                                {role.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Role menentukan hak akses user dalam sistem
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-end space-x-4 pt-4 border-t">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => window.history.back()}
                        >
                            Batal
                        </Button>
                        <Button type="submit">
                            {isEditMode ? "Update User" : "Tambah User"}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}
