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
import { Textarea } from "@/Components/ui/textarea";
import { router } from "@inertiajs/react";

const formSchema = z.object({
    judul: z.string(),
    deskripsi: z.string(),
});

export default function FormCreate() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const [loading, setLoading] = useState(false);
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            router.post(route("user-laporan.step1"), values, {
                onFinish: () => setLoading(false),
            });
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 max-w-3xl mx-auto py-10"
            >
                <FormField
                    control={form.control}
                    name="judul"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Judul</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukkan judul laporan anda...."
                                    type="text"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Ini adalah judul laporan anda.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="deskripsi"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Deskripsi</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Masukkan deskripsi laporan anda...."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Ini adalah deskripsi untuk laporan anda
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>
                    Lanjutkan{" "}
                </Button>
            </form>
        </Form>
    );
}
