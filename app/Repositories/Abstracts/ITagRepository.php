<?php

namespace App\Repositories\Abstracts;

interface ITagRepository {
   	public function exportData();
	public function getExportData();
	public function exportCSV();
	public function exportJSON();
	public function exportXML();

	public function AddOrUpdateTag($request);
	public function getTagByID($id);
	public function DeleteTagByID($id);
	public function getFilteredTags($tagType,$search_term,$filters,$pageNumber,$orderBy,$sortOrder,$pagination);
	public function getTagsByID($ids);
	public function deleteTagsByID($ids);
	public function updatePositions($requests);
}