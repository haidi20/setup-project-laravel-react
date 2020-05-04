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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'user', 'name' => 'user.'], function(){
    Route::get('/', 'UsersController@index')->name('index');
    Route::get('/search', 'UsersController@search')->name('search');
    Route::get('/find/{id}', 'DocumentsController@find')->name('find');
    // Route::get('/edit/{id}', 'DocumentsController@edit')->name('edit');
    // Route::post('/store', 'DocumentsController@store')->name('store');
    // Route::post('/update/{id}', 'DocumentsController@update')->name('update');
    Route::post('/delete/{id}', 'UsersController@destroy')->name('delete');

    // Route::post('/upload/{id}', 'DocumentsController@upload')->name('upload');
    // Route::get('/sequence-letter', 'DocumentsController@sequenceLetter')->name('sequenceLetter');
});