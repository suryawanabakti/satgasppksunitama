import FormCreate from "@/Components/Laporan/FormCreate";

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
                label: "Laporan",
                link: "/user-laporan",
            },
            {
                label: "Tambah Laporan",
                link: "/user-laporan/create",
            },
        ],
    };

    return (
        <AuthenticatedLayout breadCrumb={data.breadCrumb}>
            <Head title="Create a User" />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ps-5 pe-5">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Tambah Laporan</CardTitle>
                        <CardDescription>
                            "Tambah Laporan Satgas PPKS" adalah sebuah fitur
                            atau modul dalam sistem yang dirancang untuk
                            memfasilitasi Satuan Tugas (Satgas) Pencegahan dan
                            Penanganan Kekerasan Seksual (PPKS) dalam mengelola
                            laporan terkait kasus atau insiden. Fitur ini
                            bertujuan untuk mendukung transparansi,
                            akuntabilitas, dan efisiensi dalam menangani
                            laporan, memastikan semua informasi yang relevan
                            terdokumentasi dengan baik.
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
