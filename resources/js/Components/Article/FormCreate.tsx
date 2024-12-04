"use client";

import { toast } from "sonner";
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
import { Textarea } from "@/Components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    title: z.string(),
    body: z.string(),
    hero: z.string(),
});

export default function FormCreate() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const { toast } = useToast();

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            toast({
                description: "Success ✅",
            });
        } catch (error) {
            console.error("Form submission error", error);
            toast({
                title: "Uh oh! Something went wrong 🥲.",
                description: "There was a problem with your request.",
            });
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
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your title..."
                                    type=""
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display title.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Body</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter your body..."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display body.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="hero"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Hero Image</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your hero..."
                                    type="file"
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
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
