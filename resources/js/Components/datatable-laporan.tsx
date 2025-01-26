"use client";

import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    ArrowUpDown,
    ChevronDown,
    Download,
    Import,
    MoreHorizontal,
    Plus,
    Upload,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import moment from "moment";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { router } from "@inertiajs/react";
import { Badge } from "./ui/badge";

export type Laporan = {
    id: string;
    judul: string;
    deskripsi: string;
    status: string;
    files: any;
    user: any;
    updated_at: string;
};

export function DataTableLaporan({ data }: { data: Laporan[] }) {
    const [rowsSelected, setRowsSelected] = React.useState([]);

    const columns: ColumnDef<Laporan>[] = [
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const laporan = row.original;

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    router.delete(
                                        route(
                                            "admin-laporan.destroy",
                                            laporan.id
                                        ),
                                        {
                                            onBefore: () =>
                                                confirm("Apakah anda yakin ?"),
                                            preserveScroll: true,
                                            preserveState: true,
                                        }
                                    )
                                }
                            >
                                Delete
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() =>
                                    router.patch(
                                        route(
                                            "admin-laporan.terima",
                                            laporan.id
                                        ),
                                        {
                                            preserveScroll: true,
                                            preserveState: true,
                                        }
                                    )
                                }
                            >
                                Di tindak lanjuti
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() =>
                                    router.patch(
                                        route(
                                            "admin-laporan.tolak",
                                            laporan.id
                                        ),
                                        {
                                            preserveScroll: true,
                                            preserveState: true,
                                        }
                                    )
                                }
                            >
                                Tolak
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
        {
            accessorKey: "id",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        ID
                        <ArrowUpDown className="" />
                    </Button>
                );
            },
            cell: ({ row }) => (
                <div className="lowercase">{row.getValue("id")}</div>
            ),
            enableSorting: true,
        },
        {
            accessorKey: "User",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        User
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => {
                const user = row.original.user;
                return <span>{user.name}</span>;
            },
        },
        {
            accessorKey: "judul",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        Judul
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => (
                <div className="lowercase">{row.getValue("judul")}</div>
            ),
        },
        {
            accessorKey: "status_pelapor",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => (
                <div className="lowercase">
                    {row.getValue("status_pelapor")}
                </div>
            ),
        },
        {
            accessorKey: "kategori",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        kategori
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => (
                <div className="lowercase">{row.getValue("kategori")}</div>
            ),
        },

        {
            accessorKey: "deskripsi",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        Deskripsi
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => (
                <div className="">{row.getValue("deskripsi")}</div>
            ),
        },
        {
            accessorKey: "laporan_gambar",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        Daftar File
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => {
                const laporan = row.original; // Dapatkan data asli dari baris
                console.log(laporan); // Debug untuk melihat data laporan

                // Pastikan `files` adalah array
                if (!Array.isArray(laporan.files)) {
                    return <span>No Files</span>; // Handle jika `files` bukan array
                }

                // Tampilkan data file
                return (
                    <div>
                        {laporan.files.map((file: any, index: number) => (
                            <div key={index}>
                                <a
                                    href={`storage/${file.path}`}
                                    className="text-primary"
                                    target="_blank"
                                >
                                    Download File {index + 1}
                                </a>
                            </div> // Ganti `file` sesuai dengan properti file (contoh: file.name)
                        ))}
                    </div>
                );
            },
        },

        {
            accessorKey: "status",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => (
                <div>
                    {row.original.status === "PROSES" &&
                        "Di lakukan verifikasi"}
                    {row.original.status === "DISETUJUI" && "Di tindak lanjuti"}
                </div>
            ),
        },
        {
            accessorKey: "created_at",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === "asc")
                        }
                    >
                        Created At
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => (
                <div className="">
                    {moment(row.getValue("created_at")).format(
                        "DD MMM YYYY HH:mm:ss"
                    )}
                </div>
            ),
        },
    ];

    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    }); // Set pageSize to 5

    const table = useReactTable({
        data,
        columns,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            pagination: pagination,
        },
    });
    const [filterValue, setFilterValue] = React.useState("");
    const handleFilterChange = (event: any) => {
        const value = event.target.value;
        setFilterValue(value);
        table.setGlobalFilter(value); // Metode ini perlu ada di implementasi tabel
    };
    // Inside your DataTableDemo function
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Persetujuan Laporan (Satgas PPKS)</CardTitle>
                <CardDescription>
                    Persetujuan Laporan (Satgas PPKS) merujuk pada proses formal
                    dalam menangani laporan kekerasan seksual yang diterima oleh
                    Satuan Tugas Pencegahan dan Penanganan Kekerasan Seksual
                    (Satgas PPKS) di lingkungan institusi pendidikan, seperti
                    universitas.
                </CardDescription>
            </CardHeader>

            <CardContent className="">
                <div className="flex items-center justify-between py-4">
                    <Input
                        placeholder="Search ...."
                        value={filterValue}
                        onChange={handleFilterChange}
                        className="max-w-sm"
                    />
                    <div className="flex gap-2"></div>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={
                                            row.getIsSelected() && "selected"
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s)
                        selected.
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
