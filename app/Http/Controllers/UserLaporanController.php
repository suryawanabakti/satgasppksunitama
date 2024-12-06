<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserLaporanResource;
use App\Models\Laporan;
use App\Models\LaporanFile;
use App\Models\LaporanGambar;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Container\Attributes\CurrentUser;

class UserLaporanController extends Controller
{
    public function index(#[CurrentUser] User $user)
    {
        $laporan = UserLaporanResource::collection(Laporan::with(['user', 'files'])->where('user_id', $user->id)->get());

        return Inertia::render("User/Laporan/page", ["laporan" => $laporan]);
    }

    public function create()
    {
        return Inertia::render("User/Laporan/Create");
    }

    public function step1(Request $request, #[CurrentUser()] User $user)
    {
        $request->validate([
            'judul' => ['required', 'max:255'],
            'deskripsi' => ['required']
        ]);

        $laporan = Laporan::create([
            'user_id' => $user->id,
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'status' => 'PROSES'
        ]);

        return redirect("/user-laporan/step2/{$laporan->id}");
    }

    public function step2(Laporan $laporan)
    {

        return Inertia::render("User/Laporan/Step2", ["laporan" => $laporan->load('files')]);
    }

    public function step2Store(Laporan $laporan, Request $request, #[CurrentUser()] User $user)
    {
        $file = $request->file('file');
        if ($file->isValid() && in_array($file->getClientMimeType(), ['image/jpeg', 'image/png', 'image/gif'])) {
            $type = 'gambar';
        } else {
            $type = 'file';
        }

        LaporanFile::create([
            'laporan_id' => $laporan->id,
            'type' => $type,
            'path' => $request->file('file')->store($user->username . "/file")
        ]);

        return back();
    }

    public function destroy(Laporan $laporan)
    {
        $laporan->delete();
        return back();
    }

    public function destroyFile(LaporanFile $file)
    {
        $file->delete();
        @unlink("storage/" . $file->path);
        return back();
    }
}
