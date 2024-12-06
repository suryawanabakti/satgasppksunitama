import FormCreate2 from "@/Components/Laporan/FormCreate2";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Step2({ laporan }: any) {
    console.log(laporan);
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
            {
                label: "Tambah Bukti Gambar Laporan",
                link: "/user-laporan/create",
            },
        ],
    };

    return (
        <AuthenticatedLayout breadCrumb={data.breadCrumb}>
            <Head title="Upload Bukti" />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ps-5 pe-5">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Tambah Bukti Gambar Laporan</CardTitle>
                        <CardDescription>
                            "Tambah Bukti Gambar Laporan Satgas PPKS" adalah
                            sub-fitur dalam sistem pengelolaan laporan untuk
                            mendukung pelapor atau pihak berwenang dalam
                            melampirkan bukti visual yang relevan terkait
                            laporan Pencegahan dan Penanganan Kekerasan Seksual
                            (PPKS). Fitur ini memastikan setiap laporan
                            dilengkapi dengan bukti tambahan yang dapat
                            memperkuat proses investigasi dan pengambilan
                            keputusan. <br />
                            <b>Judul : {laporan.judul}</b>
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="">
                        <FormCreate2 laporan={laporan} />
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
