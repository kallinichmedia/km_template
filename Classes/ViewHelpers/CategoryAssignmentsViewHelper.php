<?php
declare(strict_types=1);
namespace KallinichMedia\KmTemplate\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use Doctrine\DBAL\ParameterType;

class CategoryAssignmentsViewHelper extends AbstractViewHelper
{
    protected $escapeOutput = false;
    
    public function initializeArguments(): void
    {
        $this->registerArgument(
            'pageUid',
            'int',
            'The Page UID to get the assigned categories from',
            true
        );
        $this->registerArgument(
            'asString',
            'bool',
            'Return categories as comma-separated UIDs string',
            false,
            false
        );
    }
    
    public function render(): mixed
    {
        $pageUid = $this->arguments['pageUid'];
        $asString = $this->arguments['asString'];
        
        // First, get the category relations for this page
        $queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('sys_category_record_mm');
        $statement = $queryBuilder
            ->select('uid_local')
            ->from('sys_category_record_mm')
            ->where(
                $queryBuilder->expr()->eq('tablenames', $queryBuilder->createNamedParameter('pages')),
                $queryBuilder->expr()->eq('uid_foreign', $queryBuilder->createNamedParameter($pageUid, ParameterType::INTEGER))
            )
            ->executeQuery();
            
        $categoryUids = [];
        while ($relation = $statement->fetchAssociative()) {
            $categoryUids[] = (int)$relation['uid_local'];
        }
        
        // If no categories are assigned, return empty result
        if (empty($categoryUids)) {
            return $asString ? '' : [];
        }
        
        // If we only need UIDs as a string, return immediately
        if ($asString) {
            return implode(',', $categoryUids);
        }
        
        // Return full category records
        $queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('sys_category');
        $statement = $queryBuilder
            ->select('*')
            ->from('sys_category')
            ->where(
                $queryBuilder->expr()->in('uid', $queryBuilder->createNamedParameter($categoryUids, ConnectionPool::PARAM_INT_ARRAY))
            )
            ->executeQuery();
            
        return $statement->fetchAllAssociative();
    }
}