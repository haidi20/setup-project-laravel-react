<?php

use Illuminate\Database\Seeder;

use App\Models\User;

use Faker\Generator as Faker;

/**
 * Class UsersTableSeeder
 */
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        // factory(App\Models\User::class, 3)->create();

        $names = ['nata', 'andi', 'risky'];

        foreach($names as $index => $name){
            User::insert([
                'name'              => $name,
                'email'             => $faker->unique()->safeEmail,
                'email_verified_at' => now(),
                'address'           => $faker->address,
                'age'               => rand(10, 30),
                'organication_id'   => 1,
                'password'          => bcrypt('samarinda'),
                'remember_token'    => str_random(10),
            ]);
        }
    }
}
