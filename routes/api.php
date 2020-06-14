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

Route::group(['prefix' => 'auth', 'name' => 'auth', 'namespace' => 'Auth'], function(){
    Route::post('/login', 'LoginController@login')->name('login');
});

Route::group(['prefix' => 'user', 'name' => 'user.'], function(){
    Route::get('/', 'UsersController@index')->name('index');
    Route::post('/store', 'UsersController@store')->name('store');
    Route::post('/update/{id}', 'UsersController@update')->name('update');
    Route::post('/delete/{id}', 'UsersController@destroy')->name('delete');

    Route::get('/find/{id}', 'UsersController@find')->name('find');
    Route::get('/search-option', 'UsersController@searchOption')->name('searchOption');
});

Route::group(['prefix' => 'user-group', 'name' => 'user-group'], function(){
    Route::get('/', 'UserGroupController@index')->name('index');
    Route::post('/store', 'UserGroupController@store')->name('store');
    Route::post('/update/{id}', 'UserGroupController@update')->name('update');
    Route::post('/delete/{id}', 'UserGroupController@destroy')->name('delete');
});

Route::group(['prefix' => 'permission', 'name' => 'permission'], function(){
    Route::get('/', 'PermissionController@index')->name('index');
    Route::post('/store', 'PermissionController@store')->name('store');
    // Route::post('/update/{id}', 'PermissionController@update')->name('update');
    // Route::post('/delete/{id}', 'PermissionController@destroy')->name('delete');
});

Route::group(['prefix' => 'notification', 'name' => 'notification'], function(){
    Route::get('/', 'NotificationController@index')->name('index');
});
