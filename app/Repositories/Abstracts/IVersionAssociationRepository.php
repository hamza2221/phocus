<?php

namespace App\Repositories\Abstracts;
use Illuminate\Http\Request;

interface IVersionAssociationRepository {
   	public function exportData();
	public function getExportData();
	public function exportCSV();
	public function exportJSON();
	public function exportXML();

	public function AddOrUpdateVerAssociation(Request $request);
	public function getVerAssociationByID($ID);
	public function DeleteVerAssociationByID($ID);
	public function getFilteredVerAssociations($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
   public function getVerAssociationsByID($ids);
   public function deleteVerAssociationsByID($ids);
   public function saveVersionInfo($versionId, $foreignKeyName, $foreignKeyId);
   public function search($searchTerm);
   public function setVersion($versionID,$associations,$all="false");
}