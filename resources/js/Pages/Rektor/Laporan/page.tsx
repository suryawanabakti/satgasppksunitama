import { DataTableUsers } from "@/Components/datable-users";
import { DataTableArticles } from "@/Components/datatable-articles";
import { DataTableLaporan } from "@/Components/datatable-laporan";
import { DataTableLaporanRektor } from "@/Components/datatable-laporanrektor";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function page({ laporan }: any) {
    const data = {
        breadCrumb: [
            {
                label: "Home",
                link: "/dashboard",
            },
            {
                label: "Laporan",
                link: "/admin-laporan",
            },
        ],
    };

    return (
        <AuthenticatedLayout breadCrumb={data.breadCrumb}>
            <Head title="Laporan" />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ps-5 pe-5">
                <DataTableLaporanRektor data={laporan.data} />
            </div>
        </AuthenticatedLayout>
    );
}
