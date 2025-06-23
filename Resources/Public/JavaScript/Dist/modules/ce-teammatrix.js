

/**
 * Sets up video triggers for each member in the team matrix.
 * @param {NodeList} members - The list of member elements.
 */


export function ceTeammatrix() {

/*     console.assert('Teammatrix: lets got!')

    const setVideoTrigger = (members) => {
        members.forEach(function(member) {        
            let video = member.querySelector('.video')
            let still = member.querySelector('.still')

            if (!video) return
            
            member.addEventListener('click', function() {
                // when video is running, pause it, show still
                if (!video.paused) {
                    video.pause()
                    still.style.opacity = 1
                    member.classList.remove('playing')
                    return
                } else {
                    // when video is paused, play it, hide still
                    video.play()
                    still.style.opacity = 0
                    member.classList.add('playing')
                    
                    // stop all other videos
                    members.forEach(function(otherMember) {
                        if (otherMember !== member) {
                            let otherVideo = otherMember.querySelector('.video')
                            let otherStill = otherMember.querySelector('.still')
                            otherVideo.pause()
                            setTimeout(
                                function() {
                                    otherVideo.currentTime = 0
                                }, 300)
                            otherMember.classList.remove('playing')    
                            otherStill.style.opacity = 1
       
                        }
                    })
                }                
            })

            video.addEventListener('ended', function() {
                // fade in the still image
                still.style.opacity = 1
                member.classList.remove('playing');
            })
        })
    }



    document.addEventListener('DOMContentLoaded', function() {
       let teammatrices = document.querySelectorAll('.ce-teammatrix')
      
       teammatrices.forEach(function(teammatrix) {
            console.log(teammatrix)
            let members = teammatrix.querySelectorAll('.team-member')           
            setVideoTrigger(members)  

            console.group('members')
            console.log(members)
            console.groupEnd()

            refreshLayout(members, teammatrix.querySelector(".inner"))

            window.addEventListener('resize', function() {
                refreshLayout(members, teammatrix.querySelector(".inner"))
            })
       })

  

    })
 */
    
}


/* 
function refreshLayout( items, container) {
    
    let itemsArray = Array.from( items);
    // remove all columns
    let columns = container.querySelectorAll('.column');
    columns.forEach(function (column) {
        column.remove();
    });

    console.group('refreshLayout');
    console.log(itemsArray);
    
    // create 3 divs .column
    
    let ViewportWidth = window.innerWidth;
    let columnsCount = 3;
    if (ViewportWidth < 768) {
        columnsCount = 1;
    } else if (ViewportWidth < 992) {
        columnsCount = 2;
    } else {
        columnsCount = 3;
    }
    
    // set data-columns attribute
    container.setAttribute('data-columns', columnsCount);
    columns = [];
    for (let i = 0; i < columnsCount; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        columns.push(column);
    }

    console.log(columns);
    
    
    
    // move itemsArray to columns
    
    let column = 0;
    
    itemsArray.forEach(function (item) {

        // if item is last and is nth-child(3n+1) then move it to the next column
        if (itemsArray.indexOf(item) == itemsArray.length - 1 && itemsArray.indexOf(item) % columnsCount == 0) {
            column++;
        }
        columns[column].appendChild(item);
        column++;
        if (column > columnsCount-1) {
            column = 0;
        }
    });

    console.groupEnd();
} */



