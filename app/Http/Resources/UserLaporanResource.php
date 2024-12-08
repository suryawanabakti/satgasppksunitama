<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserLaporanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            "user" => $this->user,
            "status_pelapor" => $this->status_pelapor,
            "kategori" => $this->kategori,
            "judul" => $this->judul,
            "deskripsi" => $this->deskripsi,
            "files" => $this->whenLoaded('files'),
            "status" => $this->status,
            "created_at" => $this->created_at
        ];
    }
}
