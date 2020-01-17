<?php

namespace App\Http\Controllers;
use App\Http\Resources\EtudiantResource;
use Illuminate\Http\Request;

class Etudiant extends Controller
{
    //
    public function getetud()
    {
        $etud= \DB::table('etudiants')
        ->get();
        return EtudiantResource::collection($etud);
    }
}
