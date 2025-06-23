<?php

/* create a class to fetch 
https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ80z9c9BRqEcRRIp62eSTyP4&fields=reviews&key=AIzaSyDw8quS-lbwACjONFXP-eqQxOrH7dQA5IM

and store the result in a file reviews.txt 
*/

// CONSTANT Template

define("REVIEWTEMPLATE", '

<div class="swiper-slide">
    <div class="swiper-slide-inner">
        <div class="rating-box">
            <div class="rating-icon">                       
                <span class="iconwrap"><img src="/typo3conf/ext/km_template/Resources/Public/Images/google.svg" width="59" height="59" alt="" /></span>                    
            </div>
            
            <div class="rating-stars" data-value="{{RATING}}">  
                <svg width="100%" height="100%" viewBox="0 0 881 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                    <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                        <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style="fill:rgb(255,216,0);"/>
                    </g>
                    <g transform="matrix(1,0,0,1,-447.914,-382.568)">
                        <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style="fill:rgb(255,216,0);"/>
                    </g>
                    <g transform="matrix(1,0,0,1,-261.961,-382.568)">
                        <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style="fill:rgb(255,216,0);"/>
                    </g>
                    <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
                        <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style="fill:rgb(255,216,0);"/>
                    </g>
                    <g transform="matrix(1,0,0,1,109.853,-382.568)">
                        <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style="fill:rgb(255,216,0);"/>
                    </g>
                </svg>                                                               
                <span class="cover"></span>
            </div>
        </div>
        
            <div class="testitext">{{REVIEWTEXT}}</div>
        
        
            <p class="testiuser">{{NAME}}</p>
        
        <a href="https://g.page/r/CUSKetnkk8j-EAI/review" target="_blank" class="btn" rel="noreferrer">Jetzt bewerten</a>                               
        
    </div>
</div>
');


function fetchReviews() {
    $url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ80z9c9BRqEcRRIp62eSTyP4&fields=reviews&key=AIzaSyDw8quS-lbwACjONFXP-eqQxOrH7dQA5IM&language=de";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}

$reviews = fetchReviews();

$reviews = json_decode($reviews, true);
$reviews = $reviews["result"]["reviews"];

$reviewText = "";
foreach ($reviews as $review) {
    $reviewText .= REVIEWTEMPLATE;

    // round rating to 0.5 steps

    $rating = $review["rating"];
    $rating = round($rating * 2) / 0.02;



    $reviewText = str_replace("{{RATING}}", $rating, $reviewText);
    $reviewText = str_replace("{{REVIEWTEXT}}", $review["text"], $reviewText);
    $reviewText = str_replace("{{NAME}}", $review["author_name"], $reviewText);
}

echo $reviewText;

// write to file Reviews.html

$myfile = fopen("./typo3conf/ext/km_template/Resources/Private/Mask/Frontend/Partials/Testimonialsslider/Reviews.html", "w") or die("Unable to open file!");
fwrite($myfile, $reviewText);
fclose($myfile);




?>

