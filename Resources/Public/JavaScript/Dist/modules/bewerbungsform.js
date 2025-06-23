export function bewerbungsform() {
    document.addEventListener('DOMContentLoaded', function () {

        const formular = document.querySelector('[id^="bewerbung-"]');
        // guard against null
        if (!formular) {
            console.warn('Bewerbungsformular not found');
            return;
        }

        // find id*="singleselect-1"
        const jobsSelect = formular.querySelector('[id*="singleselect-1"]');
        // guard against null
        if (!jobsSelect) {
            console.warn('Jobs select not found');
            return;
        }

        /* 
            - fetch /?type=999
            - expect JSON response  
            - Format [{"uid": "51", "title": "(Junior) Technical Consultant"}, ...]
            - populate jobsSelect with options
        */

        fetch('/?type=999')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // clear existing options
                jobsSelect.innerHTML = '';
                // populate select with options
                data.forEach(job => {
                    const option = document.createElement('option');
                    option.value = job.uid;
                    option.textContent = job.title;
                    jobsSelect.appendChild(option);
                });

                // if body has class "seite_"+ job.uid, select the option
                const bodyClass = document.body.className;
                const jobClassMatch = bodyClass.match(/seite_(\d+)/);
                if (jobClassMatch) {
                    const jobUid = jobClassMatch[1];
                    const optionToSelect = jobsSelect.querySelector(`option[value="${jobUid}"]`);
                    if (optionToSelect) {
                        optionToSelect.selected = true;
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
            });
        


    });
}
