<?php
error_reporting(E_ALL & ~E_NOTICE);
//require "../Vendor/less-php/lessc.inc.php";

require_once '../Vendor/less.php/lib/Less/Autoloader.php';
Less_Autoloader::register();


header('Content-type: text/css');



/* $less = new lessc;

try {
  echo $less->compileFile("styles.less");
} catch (exception $e) {
  echo "fatal error: " . $e->getMessage();
} */

try {
  $options = [
    'sourceMap' => true,
    'sourceMapWriteTo' => 'filename.map',
    'sourceMapURL' => 'filename.map',
  ];
  $parser = new Less_Parser($options);
	$parser->parseFile( 'style.less', '' );
	$css = $parser->getCss();
  echo $css;
}catch(Exception $e){
	$error_message = $e->getMessage();
  echo $error_message;
}

?>
