<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $data = Permission::where('user_group_id', request('id'))->get();

        return response()->json($data, 200);
    }

    public function store()
    {
        // return request()->all();
        if(request('menu')){
            try {
                $data = Permission::updateOrCreate([
                    'menu'          => request('menu'),
                    'user_group_id' => request('user_group_id'),
                ], ['access' => request('access')]);
            } catch (\Execption $e) {
                return response()->json('Maaf, Data Tidak Berhasil Terkirim', 500);
            }
    
            return response()->json($data, 200);
        }
    }
}
