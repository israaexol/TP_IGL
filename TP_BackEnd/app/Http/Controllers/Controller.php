<?php
namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Resources\EtudiantResource;
use App\Http\Resources\AbsenceResource;
use App\Http\Resources\NameResource;
use App\Http\Resources\GroupesResource;
use App\Http\Resources\NomEnseignantResource;
use App\Http\Resources\CompteResource;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function getetud()
    {
        $etud = \DB::table('etudiants')
        ->get() ;
        return EtudiantResource::collection($etud);
    }
    public static function listeetud($id_groupe)
    {
        
        $etud = \DB::table('etudiants')->where("groupe",$id_groupe)->where("anneesc",2019)
        ->get() ;
        return EtudiantResource::collection($etud);
    }
    public function getcompte($email,$mdp)
    {
        $etud = \DB::table('comptes')->where("login",$email)->where("mp",$mdp)
        ->get()->first() ;
        

        return [
            "privilege" => $etud->privilege,
            "iduser" => $etud->iduser,
            "id" => $etud->id ,
            "email"=>$etud->login,

        ];    
    }


   
    
    
    
    public function getabsences($id_etud)
    {
        $abs= \DB::table('absences')->where("idetudiant",$id_etud)
        ->get();
        return AbsenceResource::collection($abs);
        
    }
    public function getnom($id_etud)
    {
        //remplacer tous les 2 par session
        $nom= \DB::table('etudiants')->where("id",$id_etud)
        ->get();
        return NameResource::collection($nom);    
    }
    public function getgroupes($id_prof)
    {
        $groupes = \DB::table('ensgroupes')->where("idprof",$id_prof)
        ->get();
        return GroupesResource::collection($groupes);    
         
    }
    public function getnomprof($id_prof)
    {
        //remplacer tous les 2 par session
        $nom= \DB::table('enseignants')->where("id",$id_prof)
        ->get();
        return NomEnseignantResource::collection($nom);    
    }

    


}
