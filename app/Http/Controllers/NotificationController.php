<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class NotificationController extends Controller
{
    public function index()
    {
        Redis::publish('notification', json_encode(['notif' => 'new message']));

        return response()->json('data berhasil terkirim', 200);
    }
}
