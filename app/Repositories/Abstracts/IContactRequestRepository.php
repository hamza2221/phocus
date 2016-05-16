<?php 
namespace App\Repositories\Abstracts;

Interface IContactRequestRepository{

	public function getAllContactRequestsPagination($per_page,$sort_order);
	public function getAllContactRequests();
	public function createContactRequests($data);
	public function deleteContactRequests($id);
	public function showContactRequests($id);
	public function updateContactRequests($id,$data);
	
	public function exportData();
	public function getExportData();
	public function exportCSV();
	public function exportJSON();
	public function exportXML();

	public function getFilteredRequests($search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination,$setNo);
	public function getRequestsByID($ids);
	public function deleteRequestsByID($ids);
	
}