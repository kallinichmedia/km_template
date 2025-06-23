<?php

if (!defined('TYPO3')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItemGroup(
    'tt_content', // table
    'CType', // typeField
    'km_special', // group
    'KM Spezial', // label
    'after:default', // position
);


// Register a new field in the TCA
$newField = [
    'km_template_header_css' => [
        'exclude' => false,
        'label' => 'Header CSS-Klasse',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => [
                ['keine', 'no-class'],
                ['groß', 'big-font-size'],
                ['größer', 'bigger-font-size'],
                ['riesig', 'large-font-size'],
                ['mega', 'huge-font-size'],
            ],
            'default' => 'big-font-size',
        ],
    ],
];

// Add the new field to the TCA
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $newField);

// Place the field beside `header_layout` by adding it to the `palette` property
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'headers',
    'km_template_header_css',
    'after:header_layout'
);

// $GLOBALS['TCA']['tt_content']['palettes']['header']['showitem'] .= ',km_template_header_css';
// $GLOBALS['TCA']['tt_content']['palettes']['headers']['showitem'] .= ',km_template_header_css';




// Add the new field to tt_content
$GLOBALS['TCA']['tt_content']['columns']['tx_kmtemplate_animation_text'] = [
    'exclude' => true,
    'description' => 'Referenz: https://michalsnik.github.io/aos/',
    'label' => 'weitere AOS-Attribute',
    'config' => [
        'type' => 'input',
        'size' => 30,
        'eval' => 'trim',
    ],
];


// Define the select field with aos.js animation options
$GLOBALS['TCA']['tt_content']['columns']['tx_kmtemplate_animation_type'] = [
    'exclude' => true,
    'label' => 'Animation Type',
    'config' => [
        'type' => 'select',
        'renderType' => 'selectSingle',
        'items' => [
            ['None', ''],
            ['Fade', 'fade'],
            ['Slide Up', 'slide-up'],
            ['Slide Down', 'slide-down'],
            ['Slide Left', 'slide-left'],
            ['Slide Right', 'slide-right'],
            ['Zoom In', 'zoom-in'],
            ['Zoom Out', 'zoom-out'],
            ['Flip Left', 'flip-left'],
            ['Flip Right', 'flip-right'],
            ['Flip Up', 'flip-up'],
            ['Flip Down', 'flip-down']
        ],
        'default' => '',
    ],
];


// Create a palette and add the new field to it
$GLOBALS['TCA']['tt_content']['palettes']['kmtemplateAnimationPalette'] = [
    'showitem' => 'tx_kmtemplate_animation_type, tx_kmtemplate_animation_text',
];

// Add the "Animation" tab at the end
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'tt_content',
    '--div--;Animation, --palette--;Animation;kmtemplateAnimationPalette'
);

