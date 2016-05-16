<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVersionAssociationTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('version_associations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('version_id')->unsigned();
            $table->string('foreign_key_name');
            $table->integer('foreign_key_id');
            $table->foreign('version_id')->references('id')->on('versions')->onDelete('cascade');
            $table->timestamps();
            //$table->foreign('item_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('version_association');
    }

}
