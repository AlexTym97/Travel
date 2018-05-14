jQuery(document).ready(function($) {
    let click_menu=$('.hamberg');
    let real_menu=$('.ul');
    let menu_open=false;

    click_menu.click(function(event) {
        if(menu_open===false)
        {
            real_menu.slideDown('slow', function() {
                menu_open=true;
            });
        }
        else if(menu_open===true)
        {
            real_menu.slideUp('slow', function() {
                menu_open=false;
            });
        }
    });

    let k=document.getElementById('contunent');
    k.onmousemove = function(e) {
        let x = e.offsetX === undefined ? e.layerX : e.offsetX;
        let y = e.offsetY === undefined ? e.layerY : e.offsetY;
    }
});