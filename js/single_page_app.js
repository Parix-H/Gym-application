// get all the menu items
var menuItems = document.getElementsByClassName('menuitem');
console.log(menuItems);

// register an event on every menu item
for (var loop = 0; loop < menuItems.length; loop++) {
    menuItems[loop].addEventListener('click' , function(evt) {
        // console.log(evt);
        doMenuV2(evt.target.id);
    });
}

if (sessionStorage.getItem('menuitem') == null) {
    sessionStorage.setItem('menuitem' , 'menu_home');
    doMenuV2('menu_home');
} else {
    doMenuV2(sessionStorage.getItem('menuitem'));
}

function doMenuV2(EvtID) {
    var oldID = sessionStorage.getItem('menuitem');
    document.getElementById(oldID).style.borderBottom = '0px';
    document.getElementById(oldID).style.color = 'black';
    // document.getElementById(oldID).style.backgroundColor = '#6c757d';
    var eventIDArray = oldID.split('_');
    var newID = 'content_' + eventIDArray[1];
    document.getElementById(newID).style.display = 'none';

    document.getElementById(EvtID).style.borderBottom = '6px solid red';
    document.getElementById(EvtID).style.color = 'white';
    // document.getElementById(EvtID).style.backgroundColor = 'rgb(108, 117, 125,.6)';
    var eventIDArray = EvtID.split('_');
    var newID = 'content_' + eventIDArray[1];
    document.getElementById(newID).style.display = 'block';

    sessionStorage.setItem('menuitem' , EvtID);
}
