menu_list_array = ["1.Veg Margherita Pizza", "2.Chicken Tandoori Pizza", "3.Deluxe Veggie", "4.Paneer Tikka Pizza", "5.Veg Extravaganza Pizza", "6.Veg Supreme Pizza"];
                   
function getmenu(){
var htmldata;
htmldata="<o1 class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<Ii>' + menu_list_array[i] + '</Ii>'
}
htmldata=htmldata+"</o1>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'
    +'<img src="images/pizzaImg.png"/>'
    + menu_list_array[i]+ '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}