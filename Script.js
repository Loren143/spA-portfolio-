function navigateTo(page) {
   
    const contentSections = document.querySelectorAll('main');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });


    const selectedSection = document.getElementById(page);
    selectedSection.style.display = 'block';
}

navigateTo('home');
function openRepository() {
 
    const repositoryLink = document.querySelector("#repositories a").href;
    window.open(repositoryLink, "_blank");
}
function openRepositories() {
    const repositoriesLink = document.querySelector("#repositories a").href;
    window.open(repositoriesLink, "_blank");
}