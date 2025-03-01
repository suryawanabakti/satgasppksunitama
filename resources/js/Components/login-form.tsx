import { Link, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { FormEventHandler } from "react";

export function LoginForm({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Masuk</CardTitle>
                <CardDescription>
                    Masukkan username dan password anda di form bawah ini.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            type="username"
                            placeholder="Masukkan username anda..."
                            required
                            value={data.username}
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="***********"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={submit}
                        disabled={processing}
                    >
                        Login
                    </Button>
                </div>

                <div className="text-center mt-3">
                    <Link
                        href="/register"
                        className="text-sm mt-2 text-primary"
                    >
                        Belum daftar ? Silahkan klik disini!
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
