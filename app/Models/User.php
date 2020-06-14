<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $appends = ['key', 'name_user_group'];

    /**
     * The attributes that are mass assignable.
     *
     * @var mixed
     */
    protected $fillable = [
        'name', 'email', 'password', 'address'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function user_group()
    {
        return $this->belongsTo('App\Models\UserGroup');
    }

    public function searchAbleColumn()
    {
        return ['id', 'name', 'email', 'address'];
    }

    public function scopeSearch($query)
    {
        foreach($this->searchAbleColumn() as $item){
            $query->orWhere($item, 'like', '%'.request('search').'%');
        }
    }

    public function scopeFilter($query)
    {
        foreach($this->searchAbleColumn() as $item){
            $query->where($item, 'like', '%'.request($item).'%');
        }
    }

    public function scopeSorted($query, $by = 'created_at', $sort = 'desc')
    {
        return $query->orderBy($by, $sort);
    }

    public function getKeyAttribute()
    {
        return $this->id;
    }

    public function getNameUserGroupAttribute()
    {
        if($this->user_group){
            return $this->user_group->name;
        }
    }
}
