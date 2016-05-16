<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_requests', function (Blueprint $table) {
            $table->increments('id');
            $table->string('full_name');
			$table->string('phone');
			$table->integer('zip_code')->unsigned();;
			$table->string('location');
			$table->string('subject');
			$table->text('message');
			$table->string('email');
			$table->boolean('is_provider')->nullable();			
			$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('contact_requests');
    }
}
