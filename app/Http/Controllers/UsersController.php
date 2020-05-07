<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UsersResource;

use App\Models\User;

/**
 * Class UsersController
 * @property User user
 * @package App\Http\Controllers
 */
class UsersController extends Controller
{
    /**
     * @var User
     */
    protected $user;

    /**
     * UsersController constructor.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * List of users in Json format
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $data = User::sorted()
                    ->search()
                    ->filter()
                    ->paginate(request('per_page', 25));

        return response()->json($data, 200);
    }

    public function show()
    {
        $data = user::sorted()->search()->limit(5)->get();

        return response()->json($data, 200);
    }

    public function find($id)
    {
        $data = User::find($id);

        return response()->json($data, 200);
    }

    public function store()
    {
        $checkEmail = $this->checkEmail();
        if($checkEmail) return response()->json('Maaf, Email Sudah Ada', 400);

        try {
            $data           = New User();
            $data->name     = request('name');
            $data->email    = request('email');
            $data->address  = request('address');
            $data->password = bcrypt(request('password'));
            $data->save();
        } catch (\Execption $e) {
            return response()->json('Maaf, Data Tidak Berhasil Terkirim', 500);
        }

        return response()->json('Data Berhasil Terkirim', 200);
    }

    public function update($id)
    {

    }

    public function destroy($id)
    {
        try {
            $data = User::findOrFail($id);
            $data->delete();
        } catch (\Execption $e) {
            return response()->json('Maaf, Data Tidak Berhasil Diperbaharui', 500);
        }

        return response()->json('Data Berhasil Dihapus', 200);
    }

    private function checkEmail()
    {
        $checkEmail = User::where('email', request('email'))->first();

        if($checkEmail) return true;

        return false;
    }
}
