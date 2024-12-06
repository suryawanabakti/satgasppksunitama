"use client";
import { Button } from "@/Components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "@inertiajs/react";
import { File, Plus, X } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    judul: z.string(),
    deskripsi: z.string(),
});

export default function FormCreate2({ laporan }: { laporan: any }) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // membuka dialog pemilih file
        }
    };
    const handleDelete = (id: number) => {
        if (confirm("Apakah anda yakin ?")) {
            router.delete(route("user-laporan.file.destroy", id), {
                onSuccess: () =>
                    toast({
                        description: "Berhasil hapus",
                    }),
            });
        }
    };

    return (
        <div className="">
            <Button
                variant="outline"
                className="mb-3"
                onClick={handleButtonClick}
            >
                <Plus /> Tambah File
            </Button>

            {/* Input file hidden */}
            <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        // user-laporan.step2Store
                        router.post(
                            route("user-laporan.step2Store", laporan.id),
                            {
                                file: file,
                            },
                            {
                                preserveScroll: true,
                                preserveState: true,
                                onSuccess: () => {
                                    toast({
                                        description: "Success ✅",
                                    });
                                },
                            }
                        );
                    }
                }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Kolom 1 */}
                {laporan.files.map((data: any) => {
                    return (
                        <div className="relative group border-2 border-dashed border-gray-300 p-4 rounded flex flex-col items-center justify-center">
                            {data.type === "gambar" && (
                                <>
                                    <img
                                        src={`/storage/${data.path}`}
                                        alt="Uploaded"
                                        className="w-32 h-32 object-cover mb-2" // Ukuran gambar dapat disesuaikan
                                    />
                                    {/* Tombol Hapus */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            target="_blank"
                                            href={`/storage/${data.path}`}
                                            className="bg-blue-500 text-white text-sm px-4 py-2 rounded shadow mx-2"
                                        >
                                            Detail
                                        </a>
                                        <button
                                            onClick={() =>
                                                handleDelete(data.id)
                                            } // Ganti dengan fungsi penghapusan
                                            className="bg-red-500 text-white text-sm px-4 py-2 rounded shadow mx-2"
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </>
                            )}

                            {data.type === "file" && (
                                <>
                                    <File />
                                    {/* Tombol Hapus */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={`/storage/${data.path}`}
                                            target="_blank"
                                            className="bg-blue-500 text-white text-sm px-4 py-2 rounded shadow mx-2"
                                        >
                                            Detail
                                        </a>
                                        <button
                                            onClick={() =>
                                                handleDelete(data.id)
                                            } // Ganti dengan fungsi penghapusan
                                            className="bg-red-500 text-white text-sm px-4 py-2 rounded shadow mx-2"
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
            <Button
                className="mt-3"
                onClick={() => router.get(route("user-laporan.index"))}
            >
                Simpan
            </Button>
        </div>
    );
}
