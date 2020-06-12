<?php

use Illuminate\Database\Seeder;

use App\Models\UserGroup;

use Carbon\Carbon;

class UserGroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        $role = ['developer', 'admin', 'user'];

        foreach ($role as $index => $item) {
            UserGroup::insert([
                'name'          => $item, 
                'created_at'    => $now, 
                'updated_at'    => $now,
            ]);
        }
    }
}
