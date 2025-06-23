<?php

/**
 * Extension Manager/Repository config file for ext "km_template".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'KM Template',
    'description' => 'Website Template by Kallinich Media',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '12.5.0-13.5.99',
            'fluid_styled_content' => '11.5.0-13.5.99',
            'rte_ckeditor' => '12.5.0-13.5.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'KallinichMedia\\KmTemplate\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Andreas Leinberger',
    'author_email' => 'andreas.leinberger@kallinich-media.de',
    'author_company' => 'Kallinich Media Digital GmbH',
    'version' => '1.0.0',
];
