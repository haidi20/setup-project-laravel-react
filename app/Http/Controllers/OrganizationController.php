<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Organization;

class OrganizationController extends Controller
{
    public function index()
    {
        $data = Organization::sorted()
                            ->search()
                            ->filter()
                            ->paginate(request('per_page', 25));

        return response()->json($data, 200);
    }

    public function store()
    {
        return $this->save();
    }

    public function update($id)
    {
        return $this->save($id);
    }

    public function save($id = null)
    {
        if($id){
            $data   = Organization::find($id);
        }else{
            $data   = New Organization();
        }

        try {
            $data->name     = request('name');
            $data->save();
        } catch (\Execption $e) {
            return response()->json('Maaf, Data Tidak Berhasil Terkirim', 500);
        }

        return response()->json('Data Berhasil Terkirim', 200);
    }

    public function destroy($id)
    {
        try {
            $data = Organization::findOrFail($id);
            $data->delete();
        } catch (\Execption $e) {
            return response()->json('Maaf, Data Tidak Berhasil Diperbaharui', 500);
        }

        return response()->json('Data Berhasil Dihapus', 200);
    }
}
