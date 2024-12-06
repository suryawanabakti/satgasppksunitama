import FormCreate from "@/Components/User/FormCreate";
import { DataTableUsers } from "@/Components/datable-users";
import { DataTableArticles } from "@/Components/datatable-articles";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Create() {
    const data = {
        breadCrumb: [
            {
                label: "Home",
                link: "/dashboard",
            },
            {
                label: "Users",
                link: "/users",
            },
            {
                label: "Tambah User",
                link: "/users",
            },
        ],
    };

    return (
        <AuthenticatedLayout breadCrumb={data.breadCrumb}>
            <Head title="Create a User" />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ps-5 pe-5">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Tambah User</CardTitle>
                        <CardDescription>
                            Form ini digunakan untuk menambahkan data pengguna
                            baru ke dalam sistem. Fungsionalitasnya mencakup
                            pengisian informasi pribadi, data akun, dan peran
                            pengguna.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="">
                        {" "}
                        <FormCreate />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
