<?php

namespace App\Http\Controllers;

use App\Models\User;
use GrahamCampbell\ResultType\Success;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\FuncCall;

class UsersController extends Controller
{
    public function index (){
        return response()->json(User::get());
       
    }

    public function store (Request  $request){
       User::create([
        'name'=>$request->name,
        'email'=>$request->email,
        'password'=>$request->password,
       ]);
       return response()->json("sussesfuly Created");
    }


    public function edit($id){
        return response()->json(User::whereId($id)->first());
    }
    public function update(Request $request,$id){
        $user=User::whereId($id)->first();
        $user->update([
            'name'=> $request->name,
            'email'=> $request->email,

        ]);
        return response()->json('success');

    }
    public function destroy($id){
        User::whereId($id)->first()->delete();
        return response()->json('Success');
    }
}
