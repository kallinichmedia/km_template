/*
<div class="ce-accordion">
        <div class="panels" data-columns="1">            
            
                <div class="panel">
                    <div class="panel-header">
                        <span class="title">Panel 1 - Ich bin ein Klappierer</span>
                        <span class="icon">
                            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5.8 5.8" style="enable-background:new 0 0 5.8 5.8;" xml:space="preserve"><g><path d="M0.8,3.9l2.3-1l-2.3-1V0L5,2v1.8l-4.3,2V3.9z"></path></g></svg>
                        </span>
                    </div>
                    <div class="panel-content">
                        <div class="inner">
                            
    

    
            
  
            <div id="c61" class="frame-type-text frame-layout-0">

                
                
                
                    



                
                
                    



                
                
    
            <h2><strong>SEO-Analyse gefällig?</strong></h2>
<p>Eine <strong>SEO-Analyse</strong> sagt mehr als tausend Worte. Fordern Sie jetzt einen<strong> SEO-Check Ihrer Homepage oder Ihres Online-Shops </strong>an. Wir zeigen Ihnen <strong>ungenutzte SEO-Potenziale</strong> und erklären Ihnen, wo genau der SEO-Schuh drückt. Selbstverständlich bekommen Sie einen SEO- / SEA-Schlachtplan von uns, maßgeschneidert auf Ihre Ziele und Ihr Budget.<br><br><a href="https://www.kallinich-media.de/#contactform" target="_blank" class="btn btn-primary" title="SEO-Check - Jetzt anfragen" rel="noreferrer">✓ SEO-Check anfordern</a></p>
        

                
                    



                
                
                    



                
                
            </div>
            
        

    

    
                        </div>
                    </div>
                </div>
            
                <div class="panel">
                    <div class="panel-header">
                        <span class="title">Panel 2 - Clap Your Hands!!!</span>
                        <span class="icon">
                            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5.8 5.8" style="enable-background:new 0 0 5.8 5.8;" xml:space="preserve"><g><path d="M0.8,3.9l2.3-1l-2.3-1V0L5,2v1.8l-4.3,2V3.9z"></path></g></svg>
                        </span>
                    </div>
                    <div class="panel-content">
                        <div class="inner">
                            
    

    
            
  
            <div id="c62" class="frame-type-text frame-layout-0">

                
                
                
                    



                
                
                    



                
                
    
            <h2><strong>SEO-Analyse gefällig?</strong></h2>
<p>Eine <strong>SEO-Analyse</strong> sagt mehr als tausend Worte. Fordern Sie jetzt einen<strong> SEO-Check Ihrer Homepage oder Ihres Online-Shops </strong>an. Wir zeigen Ihnen <strong>ungenutzte SEO-Potenziale</strong> und erklären Ihnen, wo genau der SEO-Schuh drückt. Selbstverständlich bekommen Sie einen SEO- / SEA-Schlachtplan von uns, maßgeschneidert auf Ihre Ziele und Ihr Budget.<br><br><a href="https://www.kallinich-media.de/#contactform" target="_blank" class="btn btn-primary" title="SEO-Check - Jetzt anfragen" rel="noreferrer">✓ SEO-Check anfordern</a></p>
        

                
                    



                
                
                    



                
                
            </div>
            
        

    

    
                        </div>
                    </div>
                </div>
            
                <div class="panel">
                    <div class="panel-header">
                        <span class="title">Panel 3 - Nüscht klappt</span>
                        <span class="icon">
                            <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5.8 5.8" style="enable-background:new 0 0 5.8 5.8;" xml:space="preserve"><g><path d="M0.8,3.9l2.3-1l-2.3-1V0L5,2v1.8l-4.3,2V3.9z"></path></g></svg>
                        </span>
                    </div>
                    <div class="panel-content">
                        <div class="inner">
                            
    

    
            
  
            <div id="c63" class="frame-type-text frame-layout-0">

                
                
                
                    



                
                
                    



                
                
    
            <h2><strong>SEO-Analyse gefällig?</strong></h2>
<p>Eine <strong>SEO-Analyse</strong> sagt mehr als tausend Worte. Fordern Sie jetzt einen<strong> SEO-Check Ihrer Homepage oder Ihres Online-Shops </strong>an. Wir zeigen Ihnen <strong>ungenutzte SEO-Potenziale</strong> und erklären Ihnen, wo genau der SEO-Schuh drückt. Selbstverständlich bekommen Sie einen SEO- / SEA-Schlachtplan von uns, maßgeschneidert auf Ihre Ziele und Ihr Budget.<br><br><a href="https://www.kallinich-media.de/#contactform" target="_blank" class="btn btn-primary" title="SEO-Check - Jetzt anfragen" rel="noreferrer">✓ SEO-Check anfordern</a></p>
        

                
                    



                
                
                    



                
                
            </div>
            
        

    

    
                        </div>
                    </div>
                </div>
                          
        </div>
    </div>

*/

export function ceAccordion() {
    document.addEventListener('DOMContentLoaded', function () {

        let accordions = document.querySelectorAll('.ce-accordion');

        accordions.forEach(accordion => {
            let panels = accordion.querySelectorAll('.panel');

            panels.forEach(panel => {
                let header = panel.querySelector('.panel-header');
                let content = panel.querySelector('.panel-content');

                header.addEventListener('click', function () {
                    let isOpen = panel.classList.contains('active');

                    panels.forEach(p => {
                        p.classList.remove('active');
                    });

                    if (!isOpen) {
                        panel.classList.add('active');
                    }
                });
            });
        });

    })
}