import { aboutUs } from "./aboutUs.js";


function openMenu(event, tabName){

    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName('tabContent');
    for(let i = 0; i < tabContent.length; i++) {
        tabContent[i].getElementsByClassName.display = 'none';
    }

    tabLinks = document.getElementsByClassName('tabLinks');
    for(let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

