<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnsgroupesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ensgroupes', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->integer('anneesc');
            $table->integer('niveau');
            $table->string('module');
            $table->integer('idprof');
            $table->string('groupe');
            $table->boolean('cours');
            

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ensgroupes');
    }
}
