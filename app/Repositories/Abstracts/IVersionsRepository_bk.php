<?php

namespace App\Repositories\Abstracts;
use Illuminate\Http\Request;

interface IVersionsRepository {
   	public function exportData();
	public function getExportData();
	public function exportCSV();
	public function exportJSON();
	public function exportXML();
	
	public function versionCreateEvent_Tagging($object_changes_json);
	public function versionCreateEvent($object_changes_json);
	public function versionUpdateEvent($object_json, $object_chages_json);

	public function AddOrUpdateVersion(Request $request);
	public function getVersionByID($ID);
	public function DeleteVersionByID($ID);
	public function getFilteredVersions($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination,$setNo);
   public function getVersionsByID($ids);
   public function deleteVersionsByID($ids);
   public function GetAllVesionIDs();
   public function versionDestroyEvent($object_json);
}