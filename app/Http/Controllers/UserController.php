<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function update(Request $request, User $user)
    {

        $request->validate([
            'name' => ['required', 'string'],
            'username' => ['required'],
            'role' => ['required']
        ]);
        $user->update([
            'name' => $request->name,
            'username' => $request->username,
            'role' => $request->role
        ]);
        return redirect('/users');
    }
    public function destroy(User $user)
    {
        $user->delete();
        return redirect('/users');
    }

    public function index()
    {
        $users = User::whereNot('role', 'SATGAS PPKS')->get();
        return Inertia::render("Admin/Users/page", ["users" => $users]);
    }

    public function create()
    {
        return Inertia::render("Admin/Users/Create");
    }

    public function edit(User $user)
    {
        return Inertia::render("Admin/Users/Edit", ["user" => $user]);
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
