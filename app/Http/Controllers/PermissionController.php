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
        return request()->all();
    }
}