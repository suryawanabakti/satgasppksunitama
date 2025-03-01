import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Calendar,
    Clock,
    Users,
    Target,
    Phone,
    Mail,
    MapPin,
    Info,
    ExternalLink,
    Shield,
} from "lucide-react";

export default function Dashboard() {
    const data = {
        breadCrumb: [
            {
                label: "Home",
                link: "/dashboard",
            },
        ],
    };

    return (
        <AuthenticatedLayout breadCrumb={data.breadCrumb}>
            <Head title="Dashboard" />

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {/* Header Section with Gradient */}
                <div className="rounded-lg border shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-primary/90 via-primary to-purple-600 p-6 text-white">
                        <div className="flex flex-col space-y-1.5 pb-4">
                            <div className="flex items-center gap-2">
                                <Shield className="h-8 w-8" />
                                <h2 className="text-2xl font-bold tracking-tight">
                                    Satuan Tugas PPKS
                                </h2>
                            </div>
                            <p className="text-white/90">
                                Pencegahan dan Penanganan Kekerasan Seksual
                            </p>
                        </div>
                        <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold transition-colors border border-white/30">
                            Dibentuk pada 17 Mei 2024
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Struktur Organisasi */}
                    <div className="rounded-lg border bg-gradient-to-br from-blue-50 to-white text-card-foreground shadow-sm overflow-hidden">
                        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2 border-b border-blue-100">
                            <h3 className="text-lg font-medium text-blue-700">
                                Struktur Organisasi
                            </h3>
                            <Users className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="p-6 pt-4">
                            <div className="space-y-4">
                                <div className="bg-blue-100/50 p-3 rounded-md border-l-4 border-blue-500">
                                    <h4 className="font-medium text-blue-700">
                                        Ketua
                                    </h4>
                                    <p className="text-sm text-blue-600">
                                        Dr. Nama Ketua, M.Pd
                                    </p>
                                </div>
                                <div className="bg-blue-100/30 p-3 rounded-md border-l-4 border-blue-400">
                                    <h4 className="font-medium text-blue-700">
                                        Sekretaris
                                    </h4>
                                    <p className="text-sm text-blue-600">
                                        Nama Sekretaris, S.Kom., M.Kom
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-700">
                                        Anggota
                                    </h4>
                                    <ul className="list-disc list-inside text-sm text-blue-600 mt-2 space-y-1">
                                        <li>Nama Anggota 1, S.H., M.H</li>
                                        <li>Nama Anggota 2, S.Psi., M.Psi</li>
                                        <li>Nama Anggota 3, S.Sos., M.Si</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visi & Misi */}
                    <div className="rounded-lg border bg-gradient-to-br from-purple-50 to-white text-card-foreground shadow-sm overflow-hidden">
                        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2 border-b border-purple-100">
                            <h3 className="text-lg font-medium text-purple-700">
                                Visi & Misi
                            </h3>
                            <Target className="h-5 w-5 text-purple-500" />
                        </div>
                        <div className="p-6 pt-4">
                            <div className="space-y-4">
                                <div className="bg-purple-100/50 p-3 rounded-md border-l-4 border-purple-500">
                                    <h4 className="font-medium text-purple-700">
                                        Visi
                                    </h4>
                                    <p className="text-sm text-purple-600">
                                        Mewujudkan lingkungan kampus yang aman,
                                        nyaman, dan bebas dari segala bentuk
                                        kekerasan seksual.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-purple-700">
                                        Misi
                                    </h4>
                                    <ul className="list-disc list-inside text-sm text-purple-600 mt-2 space-y-1">
                                        <li>
                                            Memberikan edukasi dan sosialisasi
                                            tentang pencegahan kekerasan seksual
                                        </li>
                                        <li>
                                            Memberikan pendampingan kepada
                                            korban kekerasan seksual
                                        </li>
                                        <li>
                                            Membangun sistem pelaporan yang aman
                                            dan terpercaya
                                        </li>
                                        <li>
                                            Berkoordinasi dengan pihak terkait
                                            dalam penanganan kasus kekerasan
                                            seksual
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Layanan */}
                    <div className="rounded-lg border bg-gradient-to-br from-green-50 to-white text-card-foreground shadow-sm overflow-hidden">
                        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2 border-b border-green-100">
                            <h3 className="text-lg font-medium text-green-700">
                                Layanan
                            </h3>
                            <Clock className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="p-6 pt-4">
                            <div className="space-y-4">
                                <div className="bg-green-100/50 p-3 rounded-md border-l-4 border-green-500 flex items-center gap-3">
                                    <div className="bg-green-500 text-white p-2 rounded-full">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-green-700">
                                            Waktu Layanan
                                        </h4>
                                        <p className="text-sm text-green-600">
                                            Layanan tersedia{" "}
                                            <span className="font-bold">
                                                24 jam
                                            </span>{" "}
                                            untuk kasus darurat
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-green-700">
                                        Jenis Layanan
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div className="bg-green-100/30 p-2 rounded-md text-sm text-green-600 text-center">
                                            Konsultasi
                                        </div>
                                        <div className="bg-green-100/30 p-2 rounded-md text-sm text-green-600 text-center">
                                            Pendampingan
                                        </div>
                                        <div className="bg-green-100/30 p-2 rounded-md text-sm text-green-600 text-center">
                                            Pelaporan kasus
                                        </div>
                                        <div className="bg-green-100/30 p-2 rounded-md text-sm text-green-600 text-center">
                                            Edukasi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cara Melapor */}
                    <div className="rounded-lg border bg-gradient-to-br from-amber-50 to-white text-card-foreground shadow-sm overflow-hidden">
                        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2 border-b border-amber-100">
                            <h3 className="text-lg font-medium text-amber-700">
                                Cara Melapor
                            </h3>
                            <Info className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="p-6 pt-4">
                            <div className="space-y-4">
                                <p className="text-sm text-amber-600">
                                    Untuk melaporkan kasus kekerasan seksual,
                                    Anda dapat:
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            1
                                        </div>
                                        <p className="text-sm text-amber-600">
                                            Masuk ke aplikasi dengan akun yang
                                            terdaftar
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            2
                                        </div>
                                        <p className="text-sm text-amber-600">
                                            Pilih menu "Lapor Kasus" pada
                                            dashboard
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            3
                                        </div>
                                        <p className="text-sm text-amber-600">
                                            Isi formulir pelaporan dengan
                                            lengkap
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            4
                                        </div>
                                        <p className="text-sm text-amber-600">
                                            Lampirkan bukti pendukung (jika ada)
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            5
                                        </div>
                                        <p className="text-sm text-amber-600">
                                            Kirim laporan
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-amber-100/50 p-3 rounded-md border-l-4 border-amber-500">
                                    <p className="text-sm text-amber-600">
                                        Tim Satgas PPKS akan merespon laporan
                                        Anda dalam waktu{" "}
                                        <span className="font-bold">
                                            1x24 jam
                                        </span>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kontak */}
                    <div className="rounded-lg border bg-gradient-to-br from-red-50 to-white text-card-foreground shadow-sm overflow-hidden">
                        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2 border-b border-red-100">
                            <h3 className="text-lg font-medium text-red-700">
                                Kontak
                            </h3>
                            <Phone className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="p-6 pt-4">
                            <div className="space-y-4">
                                <div className="bg-red-100/50 p-3 rounded-md flex items-center gap-3">
                                    <div className="bg-red-500 text-white p-2 rounded-full">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-red-600 font-medium">
                                            085242264118
                                        </p>
                                        <p className="text-xs text-red-500">
                                            LISTIA UTAMI
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-red-100/30 p-3 rounded-md flex items-center gap-3">
                                    <div className="bg-red-400 text-white p-2 rounded-full">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-red-600">
                                            Listia@unitama.ac.id
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-red-100/30 p-3 rounded-md flex items-center gap-3">
                                    <div className="bg-red-400 text-white p-2 rounded-full">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-red-600">
                                            Kampus UNITAMA, Jl. Perintis
                                            Kemerdekaan KM.9, Makassar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Jadwal Kegiatan */}
                    <div className="rounded-lg border bg-gradient-to-br from-indigo-50 to-white text-card-foreground shadow-sm overflow-hidden">
                        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2 border-b border-indigo-100">
                            <h3 className="text-lg font-medium text-indigo-700">
                                Jadwal Kegiatan
                            </h3>
                            <Calendar className="h-5 w-5 text-indigo-500" />
                        </div>
                        <div className="p-6 pt-4">
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-md shadow-sm">
                                    <div className="font-medium">
                                        Sosialisasi PPKS
                                    </div>
                                    <div className="text-sm text-white/90 flex items-center gap-1 mt-1">
                                        <Calendar className="h-3 w-3" /> 28 Mei
                                        2024 | Aula Kampus
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-md shadow-sm">
                                    <div className="font-medium">
                                        Workshop Pencegahan Kekerasan Seksual
                                    </div>
                                    <div className="text-sm text-white/90 flex items-center gap-1 mt-1">
                                        <Calendar className="h-3 w-3" /> 10 Juni
                                        2024 | Ruang Seminar
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors"
                                    >
                                        Lihat Semua Kegiatan
                                        <ExternalLink className="ml-1 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
