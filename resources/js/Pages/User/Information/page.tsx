import { DataTableUsers } from "@/Components/datable-users";
import { DataTableArticles } from "@/Components/datatable-articles";
import { DataTableLaporan } from "@/Components/datatable-laporan";
import { DataTableLaporanUser } from "@/Components/datatable-laporanuser";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { BadgeInfo } from "lucide-react";

export default function page({ laporan }: any) {
    const data = {
        breadCrumb: [
            {
                label: "Home",
                link: "/dashboard-user",
            },
            {
                label: "Informasi",
                link: "/user-informasi",
            },
        ],
    };

    return (
        <AuthenticatedLayout breadCrumb={data.breadCrumb}>
            <Head title="Laporan" />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 ps-5 pe-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Informasi</CardTitle>
                        <CardDescription>
                            Verifikasi oleh Satgas PPKS bertujuan memastikan
                            keabsahan laporan kekerasan seksual. Proses ini
                            mencakup pengecekan kelengkapan data, validasi
                            informasi, dan analisis bukti yang diajukan pelapor.
                            Pelapor dapat diminta memberikan tambahan informasi
                            atau bukti jika diperlukan. Hasil verifikasi
                            menentukan apakah laporan akan ditindaklanjuti atau
                            tidak, dengan alasan yang jelas. Selama proses,
                            kerahasiaan identitas pelapor tetap dijaga, dan
                            notifikasi transparan diberikan pada setiap tahap.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!laporan && (
                            <p className="text-center">
                                Laporan tidak ditemukan. <br />
                                <Link
                                    className="text-primary text-sm"
                                    href="/user-laporan/create"
                                >
                                    Klik disini untuk buat laporan
                                </Link>
                            </p>
                        )}
                        {laporan && (
                            <h1 className="text-center">
                                Terimakasih telah melakukan pelaporan kepada TIM
                                Satgas PPKS Aduan anda telah terkirim dan akan
                                segera kami verifikasi dan Tindaklanjuti.
                            </h1>
                        )}
                        <br /> <br />
                        <Link
                            href="/dashboard-user"
                            className="text-primary text-sm"
                        >
                            Kembali Ke Halam Depan
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
