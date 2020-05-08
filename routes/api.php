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
    Route::get('/search-option', 'UsersController@searchOption')->name('searchOption');
    Route::get('/find/{id}', 'UsersController@find')->name('find');
    Route::post('/store', 'UsersController@store')->name('store');
    // Route::post('/update/{id}', 'DocumentsController@update')->name('update');
    Route::post('/delete/{id}', 'UsersController@destroy')->name('delete');

    // Route::post('/upload/{id}', 'DocumentsController@upload')->name('upload');
    // Route::get('/sequence-letter', 'DocumentsController@sequenceLetter')->name('sequenceLetter');
});