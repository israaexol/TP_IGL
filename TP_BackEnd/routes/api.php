<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/vue','TestVueController@index');
Route::get('/absences/{id_etud}','Controller@getabsences');
Route::get('/affichgroupe/{id_groupe}','Controller@listeetud');
Route::get('/nom/{id_etud}','Controller@getnom');
Route::get('/groupes/{id_prof}','Controller@getgroupes');
Route::get('/nomprof/{id_prof}','Controller@getnomprof');
Route::get('/getcompte/{email}/{mdp}','Controller@getcompte');



Route::get('/affich','Controller@getetud')->middleware('cors');
