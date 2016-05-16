<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaggingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tagging', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tag_id')->unsigned();
            $table->integer('provider_id')->unsigned();
            $table->timestamps();
			
            $table->foreign('tag_id')
                  ->references('id')->on('tags')
                  ->onDelete('cascade');
				  
            $table->foreign('provider_id')
                  ->references('id')->on('users')
                  ->onDelete('cascade');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('tagging');
    }
}
