<?php

namespace App\Repositories\Abstracts;
use Illuminate\Http\Request;

interface IUserRepository {
   public function getUserByID($ID);
   public function AddOrUpdateAdmin(Request $request);
   public function DeleteUserByID($ID);
   public function exportAdminData($role);
   public function getAdminData();
   public function exportCSV();
   public function exportJSON();
   public function exportXML();
   public function getFilteredUsers($role,$search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
   public function getUsersByID($ids);
   public function deleteUsersByID($ids);
   public function AddOrUpdateSuperAdmin(Request $request);
   public function AddOrUpdateProvider($request);
   public function update($id, $request);
   public function w9file_upload($id,$file_name);
   public function getUserObjectJson($id);
   public function getObjectChanges($object_json);
   public function GetIdNameOnly($type);
   public function getFileMetaInfo($path, $filename,$keyprefix, $oldData='');
}