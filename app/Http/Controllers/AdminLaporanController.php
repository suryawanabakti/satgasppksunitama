<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminLaporanResoruce;
use App\Mail\LaporanMail;
use App\Models\Laporan;
use App\Services\Fonnte;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
        Mail::to($laporan->user->username)->send(new LaporanMail("Laporan Di Hapus"));
        $laporan->delete();
        return back();
    }

    public function terima(Laporan $laporan)
    {
        // Fonnte::sendWa("085183028432", "Laporan di setujui");
        Mail::to($laporan->user->username)->send(new LaporanMail("Laporan Diterima"));
        $laporan->update(['status' => 'DISETUJUI']);
        return back();
    }
    public function tolak(Laporan $laporan)
    {
        Mail::to($laporan->user->username)->send(new LaporanMail("Laporan Di Tolak"));
        $laporan->update(['status' => 'DITOLAK']);
        return back();
    }
}
