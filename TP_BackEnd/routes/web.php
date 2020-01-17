<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/affich', function () {
    return view('home');
});
Route::get('/bla', function () {
    return view('home');
});
Route::get('/abs', function () {
    return view('etudiant');
});
Route::get('/groupes', function () {
    return view('home');
});
Route::get('/groupe/{id_groupe}',function () {
    return view('home');});
 Route::get('/affichgroupe/{id_groupe}',function () {
    return view('home');});

// Route::get('/affichgroupe/{id_groupe}',function($id_groupe) {
//     return Controller.listeetud($id_groupe);});


// Route::get('/affichgroupe/{id_groupe}','Controller@listeetud($id_groupe)');



Auth::routes();

