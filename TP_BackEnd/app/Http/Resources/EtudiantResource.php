<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EtudiantResource extends JsonResource
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
            "nom" => $this->nom,
            "prenom" => $this->prenom,
            "id"=>$this->id,
            "matricule"=>$this->matricule

        ];    }
}
