<?php

namespace App\Emailer;
use Mail;
class Emailer{
	
	public function newProviderEmail($provider)
	{
		
		Mail::send('emails.newProvider', ['provider' => $provider], function ($m) use ($provider) {
            $m->from('hello@phocus.com', 'Phocus Admin');

            $m->to($provider->email, $provider->name)->subject('Welcome To Phocus.io');
        });
	}
	public function newClientEmail($client)
		{
			
			Mail::send('emails.newClient', ['client' => $client], function ($m) use ($client) {
	            $m->from('hello@phocus.com', 'Phocus Admin');

	            $m->to($client->email, "Client")->subject('Welcome To Phocus.io');
	        });
		}
}