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
        $data = User::sorted()->search()->paginate(request('per_page', 25));

        return response()->json($data, 200);
    }

    public function search()
    {
        $data = user::search()->limit(5)->get();

        return response()->json($data, 200);
    }

    public function find($id)
    {
        $data = User::find($id);

        return response()->json($data, 200);
    }

    public function store()
    {

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
}
