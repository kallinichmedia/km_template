<?php
declare(strict_types=1);
namespace KallinichMedia\KmTemplate\ViewHelpers;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use Doctrine\DBAL\ParameterType;

final class CatlistViewHelper extends AbstractViewHelper
{
    protected $escapeOutput = false;
    
    public function initializeArguments(): void
    {
        // registerArgument($name, $type, $description, $required, $defaultValue, $escape)
        $this->registerArgument(
            'pageId',
            'int',
            'The Page ID to get the categories from',
            true,
        );
    }
    
    public function render(): array
    {
        $pageId = $this->arguments['pageId'];
        // get the categories from the database table sys_category record with pid=pageId
        $queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('sys_category');
        $statement = $queryBuilder
            ->select('*')
            ->from('sys_category')
            ->where(
                $queryBuilder->expr()->eq('pid', $queryBuilder->createNamedParameter($pageId, ParameterType::INTEGER))
            )
            ->orderby('sorting')
            ->executeQuery();
        
        // Return as array to be iterated in template
        return $statement->fetchAllAssociative();
        
        /* usage in Fluid:
        <f:for each="{km:catlist(pageId: page.uid)}" as="category">
            <span data-cat="cat-{category.uid}" class="catfilter">
                <i></i><span class="term">{category.title}</span>
            </span>
        </f:for>
        */
    }
}