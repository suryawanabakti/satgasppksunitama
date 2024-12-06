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
        $laporan = AdminLaporanResoruce::collection(Laporan::with('user')->get());
        return Inertia::render("Admin/Laporan/page", ["laporan" => $laporan]);
    }
}
