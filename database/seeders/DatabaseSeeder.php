<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::create([
            'name' => 'Satgas PPKS',
            'username' => 'satgasppks',

            'password' => bcrypt('qwerty123'),
            'role' => 'SATGAS PPKS'
        ]);

        User::create([
            'name' => 'Rektor',
            'username' => 'rektor',

            'password' => bcrypt('qwerty123'),
            'role' => 'REKTOR'
        ]);
    }
}
