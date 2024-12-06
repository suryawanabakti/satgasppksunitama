<?php

use App\Http\Controllers\AdminLaporanController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserLaporanController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/dashboard-user', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard-user');

Route::middleware('auth')->group(function () {

    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
    Route::post('/users', [UserController::class, 'store'])->name('users.store');
    Route::delete('/users/{article}', [UserController::class, 'destroy'])->name('users.destroy');

    Route::get('/admin-laporan', [AdminLaporanController::class, 'index'])->name('admin-laporan.index');
    Route::get('/admin-laporan/create', [AdminLaporanController::class, 'create'])->name('admin-laporan.create');
    Route::delete('/admin-laporan/{laporan}', [AdminLaporanController::class, 'destroy'])->name('admin-laporan.destroy');

    Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
    Route::delete('/articles/{article}', [ArticleController::class, 'destroy'])->name('articles.destroy');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/user-laporan', [UserLaporanController::class, 'index'])->name('user-laporan.index');

    Route::get('/user-laporan/create', [UserLaporanController::class, 'create'])->name('user-laporan.create');
    Route::post('/user-laporan/step1', [UserLaporanController::class, 'step1'])->name('user-laporan.step1');

    Route::get('/user-laporan/step2/{laporan}', [UserLaporanController::class, 'step2'])->name('user-laporan.step2');
    Route::post('/user-laporan/step2/{laporan}', [UserLaporanController::class, 'step2Store'])->name('user-laporan.step2Store');


    Route::delete('/user-laporan/{laporan}', [UserLaporanController::class, 'destroy'])->name('user-laporan.destroy');
    Route::delete('/user-laporan/file/{file}', [UserLaporanController::class, 'destroyFile'])->name('user-laporan.file.destroy');
});

require __DIR__ . '/auth.php';
