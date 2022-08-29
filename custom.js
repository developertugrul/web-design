$("#sidebar-toggle").click(
    function() {
        if ($("#sidebar-toggle").hasClass("icon-align-left")) {
            $("#sidebar-toggle").removeClass("icon-align-left");
            $("#sidebar-toggle").addClass("icon-align-right");
        }else{
            $("#sidebar-toggle").removeClass("icon-align-right");
            $("#sidebar-toggle").addClass("icon-align-left");
        }
    }
);

function changePrice(){
    alert("chancing price");
}

const showCategoryButtons =  (categoryName) => {
    $("#"+categoryName).toggle();
}

const showCategoryButtonsMobile =  (categoryName) => {
    $("#"+categoryName).toggle();
}