<?php

use Illuminate\Database\Seeder;

use App\Models\Permission;

use Carbon\Carbon;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        $data = [
            [
                'menu'          => 'user',
                'access'        => 'read,create,edit,delete',
                'user_group_id' => 1,
            ],
            [
                'menu'          => 'dashboard',
                'access'        => 'read',
                'user_group_id' => 1,
            ],
        ];

        Permission::insert($data);
    }
}
