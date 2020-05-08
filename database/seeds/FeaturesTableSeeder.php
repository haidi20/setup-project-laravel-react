<?php

use Illuminate\Database\Seeder;

use App\Models\Feature;

use Carbon\Carbon;

class FeaturesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Feature::insert([
            'menu'              => 'user',
            'access'            => 'read, create',
            'organization_id'   => 1,
        ]);
    }
}
