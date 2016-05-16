<?php

namespace App\Repositories\Abstracts;

interface IPackageRepository {
	public function deleteById($id);
	public function getById($id);
	public function manageAddUpdate($request);
	public function getFilteredData($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
	public function delete($ids);
	
   	public function exportData();
	public function getExportData();
	public function exportCSV();
	public function exportJSON();
	public function exportXML();
}