<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::whereNot('role', 'SATGAS PPKS')->get();
        return Inertia::render("Admin/Users/page", ["users" => $users]);
    }

    public function create()
    {
        return Inertia::render("Admin/Users/Create");
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'username' => ['required'],
            'password' => ['required', 'confirmed'],
            'role' => ['required']
        ]);

        User::create([
            'name' => $request->name,
            'username' => $request->username,
            'password' => $request->password,
            'role' => $request->role
        ]);
        return redirect('/users');
    }
}
