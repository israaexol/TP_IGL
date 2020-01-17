<?php

namespace Tests\Unit;
use App\Etudiant;
use App\Enseignant;
use App\Absence;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $etudiant = factory(Etudiant::class)->create();
        $absence1= new Absence;
        $absence2= new Absence;
        $absence1->idetudiant=$etudiant->id;
        $absence2->idetudiant=$etudiant->id;
        $absence1->justifiee=0;
        $absence2->justifiee=0;
        $absence1->save(); // Sauvegarde des objets crées dans la bdd
        $absence2->save();
        $reponse = $this->call('GET', '/absences/{$etudiant->id}', array('id' => $etudiant->id));
       

        $this->assertTrue(true);
    }
}
