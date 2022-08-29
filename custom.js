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
    let is_displayed = $("#"+categoryName).css("display");
    if (is_displayed === "none") {
        $("#mobileCategoryList").children("div").hide();
        $("#"+categoryName).toggle();
        $("#mobileProductList").show();
    }else{
        $("#mobileCategoryList").children("div").hide();
        $("#mobileProductList").hide();
    }
}

const toggleProductList = () => {
    $("#mobileProductList").toggle();
}

$(document).ready(function() {
    let long_name_td = $(".bg-d9");
    long_name_td.each(function() {
        let long_name = $(this).text();
        console.log(long_name);
        if (long_name.length > 2) {
            $(this).css("font-size", "0.7rem");
            if (long_name.length > 16) {
                $(this).css("font-size", "0.6rem");
            }
            if (long_name.length > 21) {
                $(this).text(long_name.substring(0, 21) + "..");
            }
        }
    });
});