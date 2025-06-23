<?php
defined('TYPO3') or die('Access denied.');


call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 'km_template';

    /**
     * Default PageTS for KmTemplate
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/TsConfig/Page/All.tsconfig',
        'KM Template'
    );
});



$temporaryColumns = [
    'km_template_background_color' => [
        'exclude' => false,
        'label' => 'Hintergrundfarbe der Seite',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => [
                ['Dunkelblau', 'darkblue'],
                ['Rot', 'red'],
                ['Blau', 'blue'],
                ['Lila', 'purple'],
                ['Orange', 'orange'],
                ['Beerenton', 'berry'],
                ['Gelb(Senf)', 'yellow'],
            ],
            'default' => 'darkblue',
        ],
    ],
    // checkbox "ohne Struktur"
    'km_template_no_structure' => [
        'exclude' => false,
        'label' => 'Ohne Struktur',
        'config' => [
            'type' => 'check',
            'default' => 0,
        ],
    ],
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $temporaryColumns);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'pages',
    'layout',
    '--linebreak--, Hintergrundfarbe der Seite',     
    'after:layout'
);


$GLOBALS['TCA']['pages']['palettes']['layout']['showitem'] .= ', km_template_background_color, km_template_no_structure';



