<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Registration;

class RegistrationController extends Controller
{

    public function __construct()
    {
    }

    public function test1($id)
    {
        $registration = Registration::where('id', '=', $id)->firstOrFail();
        return response()->json(['registration' => $registration]);
    }

    public function test2(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);

        $registration = new Registration;
        $registration->email = $request->email;
        return response()->json(['ex1' => $imgUrl, 'ex2' => $bottlesLeft], 200);
    }

    public function test3(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email'
        ]);

        $email = $request->email;
        $registrations = Registration::where('isBottleRequested', 1)
                            ->where(function($q) use($email,$phone){
                                $q->where('email', $email);
                                $q->orWhere('phone', $phone);
                            });

        if(true){
            return response('ok');
        } else{
            return response("duplicate", 400)
                ->header('Content-Type', 'text/plain');
        }
    }
}
