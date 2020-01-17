<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NomEnseignantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "nomens" => $this->nom,
            "prenomens" => $this->prenom

        ];
    }
}
