<?php



defined('TYPO3') or die('Access denied.');

// Add default RTE configuration
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['km_template'] = 'EXT:km_template/Configuration/RTE/Default.yaml';

// PageTS - remove the duplicate call
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:km_template/Configuration/TsConfig/Page/All.tsconfig">'
);