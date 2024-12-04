import FormCreate from "@/Components/Article/FormCreate";
import { DataTableUsers } from "@/Components/datable-users";
import { DataTableArticles } from "@/Components/datatable-articles";
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
                label: "Articles",
                link: "/users",
            },
        ],
    };

    return (
        <AuthenticatedLayout breadCrumb={data.breadCrumb}>
            <Head title="Create a article" />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ps-5 pe-5">
                <FormCreate />
            </div>
        </AuthenticatedLayout>
    );
}
