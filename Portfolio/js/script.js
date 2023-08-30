// navigation bar
$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 50){
            $('.header').addClass("sticky-header");
        }else{
            $('.header').removeClass("sticky-header");
        }
        
        if(this.scrollY > 500){
            $('.return-home-btn').removeClass("none-rt-home-btn");
        }else{
            $('.return-home-btn').addClass("none-rt-home-btn");
        }
    })
});

////////////////////////////////////////////////////////////////



// data project
let projs = [
    {
        name: 'Timer',
        img: 'project_Timer.png',
        languages: 'HTML, CSS, JavaScript',
        frameworks: 'No frameworks',
        descibe: 'Web page for watching time and counting time.',
        de_describe: 'A basic web page for everyone that show time as an alarm and other records time.',
        demo: 'https://popcorn11.github.io/Timer/',
        github: 'https://github.com/popcorn11/popcorn11.github.io/tree/46484c49341bff0ea80123f6bc4c69ba6a84dcbc/Timer'
    },
    {
        name: '404Page',
        img: 'project_404Page.png',
        languages: 'HTML, CSS, JavaScript',
        frameworks: 'No frameworks',
        descibe: 'A 404 page when pages are not found or files are not found.',
        de_describe: '404Page is a landing page, and a small personal project I created to tell users that the requested page is unavaiable or does not exist. And a small game in this page with a UFO flies around to collect trashes.',
        demo: 'https://popcorn11.github.io/404Error/',
        github: 'https://github.com/popcorn11/popcorn11.github.io/tree/46484c49341bff0ea80123f6bc4c69ba6a84dcbc/404Error'
    }
];

// detail project modal
const modal = document.querySelector('.modal');
const projModal = document.querySelector('.modal-proj');
const closeModalBtn = document.querySelector('.fa-close');
const projDetailCtn = document.querySelector('.proj-detail-container');

modal.addEventListener('click', show_hideProjectModal);
// closeModalBtn.addEventListener('click', show_hideProjectModal);
projDetailCtn.addEventListener('click', function (event) {
    event.stopPropagation()
});

function show_hideProjectModal(){
    projModal.classList.toggle('dis-none');
}

function openProject(url) {
    if(url != ''){
        window.open(url, '_blank').focus();
    }
}
function showDetailProject(index_project){
    const proDetail = document.querySelector('.proj-detail-container');
    proDetail.innerHTML = `
        <div class="modal-close">
            <i class="fa fa-close"></i>
        </div>
        <div class="proj-img">
            <img src="./css/img/${projs[index_project].img}" alt="${projs[index_project].name}">
        </div>
        <div class="proj-detail">
            <div class="proj-name">
                <h2>${projs[index_project].name}</h2>
            </div>
            <div class="proj-language">
                <span>Languages: </span>${projs[index_project].languages}
            </div>
            <div class="proj-framework">
                <span>Frameworks: </span> ${projs[index_project].frameworks}
            </div>
            <div class="proj-descibe-detail">
                <span>Descibe: </span> ${projs[index_project].de_describe}
            </div>
            <div class="btn-view-proj">
                <button onclick="openProject('${projs[index_project].demo}')">Demo</button>
                <button onclick="openProject('${projs[index_project].github}')">View on Github</button>
            </div>
        </div>
    `;
    document.querySelector('.modal-proj').classList.toggle('dis-none');
    document.querySelector('.modal').addEventListener('click', show_hideProjectModal);
    document.querySelector('.fa-close').addEventListener('click', show_hideProjectModal);
    proDetail.addEventListener('click', function (event) {
        event.stopPropagation()
    });
}

function showProject(){
    let showProj = "";
    for(let i in projs){
        showProj += `
            <div class="proj" style="background: url(./css/img/${projs[i].img}) center / cover no-repeat;">
                <div class="proj-description">
                    <div class="proj-name"><h3>${projs[i].name}</h3></div>
                    <p class="describe">${projs[i].descibe}</p>
                    <h5 onclick="showDetailProject(${i})">More <i class="fa fa-angle-double-right"></i></h5>
                </div>
            </div>
        `;
    }
    return `<div class="projs" style="width: ${240*projs.length}px;">${showProj}</div>`;
}
document.querySelector('.projs-row').innerHTML = showProject();

// //////////////////////////////////////////////////////////////
// contact modal
// const contactBtn = document.querySelector('.contact-btn')
// const modalCtner = document.querySelector('.modal-container')
// const closeModalBtn = document.querySelector('.modal-close')

// contactBtn.addEventListener('click', show_hideModal)
// closeModalBtn.addEventListener('click', show_hideModal)

// modalCtner.addEventListener('click', function (event) {
//     event.stopPropagation()
// })
