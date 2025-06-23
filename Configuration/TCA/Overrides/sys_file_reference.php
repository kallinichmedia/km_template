<?php

defined('TYPO3') or die();

// Overwrite \typo3\sysext\core\Configuration\TCA\sys_file_reference.php
// Source: https://jweiland.net/typo3/codebeispiele/tsconfig/seitenverhaeltnisse-im-bild-editor-anpassen-ab-typo3-7-lts.html

#define fal image crop-sizes

$GLOBALS['TCA']['sys_file_reference']['columns']['crop']['config']['cropVariants'] = array(
	'phone' => array(
		'title' => 'Phone',
		'allowedAspectRatios' => array(
			'16:9' => array(
				'title' => '16:9',
				'value' => 16 / 9
			),
			'4:3' => array(
				'title' => '4:3',
				'value' => 4 / 3
			),
			'1:1' => array(
				'title' => '1:1',
				'value' => 1 / 1
			),
			'free' => array(
				'title' => 'Frei',
				'value' => 0
			),
		),
		'selectedRatio' => 'Frei',
		/* 'coverAreas' => array(
			'1' => array(
				'x' => 0.1,
				'y' => 0.1,
				'width' => 0.8,
				'height' => 0.8
			),
		), */
	),
	'tablet' => array(
		'title' => 'Tablet',
		'allowedAspectRatios' => array(
			'16:9' => array(
				'title' => '16:9',
				'value' => 16 / 9
			),
			'4:3' => array(
				'title' => '4:3',
				'value' => 4 / 3
			),
			'1:1' => array(
				'title' => '1:1',
				'value' => 1 / 1
			),
			'free' => array(
				'title' => 'Frei',
				'value' => 0
			),
		),
		'selectedRatio' => 'Frei',
		/* 'coverAreas' => array(
			'1' => array(
				'x' => 0.1,
				'y' => 0.1,
				'width' => 0.8,
				'height' => 0.8
			),
		), */
	),
	'desktop' => array(
		'title' => 'Desktop',
		'allowedAspectRatios' => array(
			'16:9' => array(
				'title' => '16:9',
				'value' => 16 / 9
			),
			'4:3' => array(
				'title' => '4:3',
				'value' => 4 / 3
			),
			'1:1' => array(
				'title' => '1:1',
				'value' => 1 / 1
			),
			'free' => array(
				'title' => 'Frei',
				'value' => 0
			),
		),
		'selectedRatio' => 'Frei',
		/* 'coverAreas' => array(
			'1' => array(
				'x' => 0.3,
				'y' => 0.1,
				'width' => 0.8,
				'height' => 0.8
			),
		), */
	),
);
	
