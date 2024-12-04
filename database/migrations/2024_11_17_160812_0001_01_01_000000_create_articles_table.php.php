<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id') // Relasi dengan tabel users
                ->constrained('users') // Secara otomatis merujuk ke kolom 'id' di tabel 'users'
                ->cascadeOnDelete() // Hapus artikel jika user terkait dihapus
                ->cascadeOnUpdate(); // Perbarui foreign key jika user diubah
            $table->string('title');
            $table->text('body');
            $table->string('hero');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
