<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminLaporanResoruce;
use App\Models\Laporan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminLaporanController extends Controller
{
    public function index()
    {
        $laporan = AdminLaporanResoruce::collection(Laporan::with('user', 'files')->get());
        return Inertia::render("Admin/Laporan/page", ["laporan" => $laporan]);
    }

    public function destroy(Laporan $laporan)
    {
        $laporan->delete();
        return back();
    }

    public function terima(Laporan $laporan)
    {
        $laporan->update(['status' => 'DISETUJUI']);
        return back();
    }
    public function tolak(Laporan $laporan)
    {
        $laporan->update(['status' => 'DITOLAK']);
        return back();
    }
}
