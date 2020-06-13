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
                Permission::updateOrCreate([
                    'menu'          => request('menu'),
                    'access'        => request('access'),
                    'user_group_id' => request('user_group_id'),
                ]);
            } catch (\Execption $e) {
                return response()->json('Maaf, Data Tidak Berhasil Terkirim', 500);
            }
    
            return response()->json('Data Berhasil Terkirim', 200);
        }
    }
}
