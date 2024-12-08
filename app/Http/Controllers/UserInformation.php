<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserInformation extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $laporan = Laporan::orderBy('created_at', 'DESC')->first();
        return Inertia::render("User/Information/page", ["laporan" => $laporan]);
    }
}
