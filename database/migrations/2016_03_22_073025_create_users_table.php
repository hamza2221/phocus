<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
			$table->string('email')->default('');
			$table->string('password')->default('');
			$table->string('remember_token')->nullable();
			
			//	Recoverable
			$table->string('reset_password_token');
			$table->dateTime('reset_password_sent_at');
			
			// 	Rememberable
			$table->dateTime('remember_created_at');
			
			//	Trackable
			$table->integer('sign_in_count')->unsigned()->default(0);
			$table->dateTime('current_sign_in_at');
			$table->dateTime('last_sign_in_at');
			$table->string('current_sign_in_ip');
			$table->string('last_sign_in_ip');
			$table->enum('role', ['Super Admin', 'Admin', 'User', 'Provider']);
			$table->string('type')->nullable();
			
			//	Provider Fields
			$table->string('name')->nullable();
			$table->string('location')->nullable();
			$table->integer('years_experience')->nullable();
			$table->text('knowledge')->nullable();
			$table->text('skills')->nullable();
			$table->text('gear_equipment')->nullable();
			$table->text('specialization')->nullable();
			$table->string('portfolio')->nullable();
			$table->string('w9_form')->nullable();
			$table->dateTime('w9_form_updated_at');
			
			$table->string('picture')->nullable();
			$table->dateTime('picture_updated_at');
			
			$table->boolean('completed_profile')->default(false);
			
			//	Registration Fields
			$table->string('work_area_radio')->nullable();
			$table->string('country')->nullable();
			$table->string('zipcode')->nullable();
			$table->string('phone_number')->nullable();
			$table->string('alternate_number')->nullable();
			$table->enum('status', ['0', '1'])->default('1');
			
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
        Schema::drop('users');
    }
}
