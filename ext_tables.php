<?php
defined('TYPO3') or die('Access denied.');

// Add CSS to backend
$GLOBALS['TBE_STYLES']['skins']['km_template']['stylesheetDirectories']['km_template'] = 'EXT:km_template/Resources/Public/Css/Backend/';

// Change backend logo
$GLOBALS['TBE_STYLES']['logo'] = 'EXT:km_template/Resources/Public/Favicon/mstile-150x150.png';

/* // Add static TypoScript file
call_user_func(function () {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        'km_template',
        'Configuration/TypoScript',
        'KM Template Setup'
    );
}); */