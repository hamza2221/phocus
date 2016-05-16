<?php

namespace App\Repositories\Abstracts;

interface ILeadsRepository {
	public function getAllLeads();
	public function getAllLeadsPagination($per_page);
	public function getLeadByID($id);
	public function updateLeads($id,$data);
	public function DeleteLeadByID($id);
	public function createLeads($data);
	
   	public function exportData();
	public function getExportData();
	public function exportCSV();
	public function exportJSON();
	public function exportXML();

	public function AddOrUpdateLead($request);
	public function getFilteredLeads($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
	public function getLeadsByID($ids);
	public function deleteLeadsByID($ids);
}