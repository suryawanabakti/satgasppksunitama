import { DataTableUsers } from "@/Components/datable-users";
import { DataTableArticles } from "@/Components/datatable-articles";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function page({ articles }: any) {
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
            <Head title="Article" />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ps-5 pe-5">
                <DataTableArticles data={articles.data} />
            </div>
        </AuthenticatedLayout>
    );
}
