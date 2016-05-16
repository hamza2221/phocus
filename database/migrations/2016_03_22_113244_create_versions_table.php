<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVersionsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('versions', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('item_type');
            $table->integer('item_id')->unsigned();
            $table->string('event');
            $table->string('whodunnit');
            $table->text('object');
            $table->text('object_changes');
            $table->integer('transaction_id');
            //$table->foreign('item_type')->references('role')->on('users')->onDelete('cascade');
            $table->foreign('item_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('versions');
    }

}
