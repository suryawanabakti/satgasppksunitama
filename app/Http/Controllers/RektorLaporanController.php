<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminLaporanResoruce;
use App\Models\Laporan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RektorLaporanController extends Controller
{
    public function index()
    {
        $laporan = AdminLaporanResoruce::collection(Laporan::with('user', 'files')->get());
        return Inertia::render("Rektor/Laporan/page", ["laporan" => $laporan]);
    }
}
