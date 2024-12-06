<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    //
    public $table  = 'laporan';

    protected $guarded = ['id'];

    public function files()
    {
        return $this->hasMany(LaporanFile::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
