<?php

use Illuminate\Database\Seeder;

use App\Models\Organization;

use Carbon\Carbon;

class OrganizationsTableSeeder extends Seeder
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
            Organization::insert([
                'name'          => $item, 
                'created_at'    => $now, 
                'updated_at'    => $now,
            ]);
        }
    }
}
