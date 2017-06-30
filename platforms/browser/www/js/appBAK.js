
simpleCart({
  checkout: {
    type: "PayPal" ,
    email: "sales@dermamor.com",
      currency: "GBP" // set the currency to pounds sterling
  },
  cartStyle: 'table',
                        cartColumns: [{
                            attr: "name",
                            label: "Name"
                        }, 
                        {
                            attr: "price",
                            label: "Price",
                            view: 'currency'
                        }, 
                        { 	attr: "quantity" ,
                        	label: "Quantity" } ,
                        {
                            view: "remove",
                            text: "Remove",
                            label: false
                        }]
  });

$(".btn").on('click', function(){
  
  checkCart()

});
// simpleCart.grandTotal()
//simpleCart.total();

function checkCart(){
  var sum = simpleCart.quantity();
  $("#dLabel").html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart '+ sum +' items <span class="caret"></span>')

    if (simpleCart.items().length == 0) {
     $("#dLabel").html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart Empty<span class="caret"></span>');

    }else{
        $("#dLabel").html('<span class="glyphicon glyphicon-shopping-cart"></span> Cart '+ sum +' items <span class="caret"></span>')
    }
    
  
}







function get_url( url , type , param , callback ) {
        var req = new XMLHttpRequest () ;
        var params = param;
        req.open ( type , url , true );
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.addEventListener ("load" , function () {
        if ( req.status < 400)
        callback ( req.responseText );
        else
        callback ( null , new Error (" Request failed : " +
        req.statusText ) );
        });
        req.addEventListener ("error" , function () {
        callback ( null , new Error (" Network error ") );
        });
        req.send (params);
}	
get_url ('data/data.json', 'GET', '', function ( content , error ) {	
	if ( error != null )
	console.log ("ERROR!" + error );
	else
	// GOOD	

	var data = JSON.parse(content);
	var data_length = data.length - parseInt(1);
	console.log(data['items']);
    //alert('test');
   for(a = 1; a<=3; a++){
       var page = data['items']['c00'+a+'']['categoryName'];
    document.getElementById('nav-mobile').innerHTML += "<li><a href='#' onclick='pages(this);' data-massage='"+page+"'>"+data['items']['c00'+a+'']['categoryName']+"</a></li>";
   }
	//document.getElementById('category_con').innerHTML = "<tr>	<Td>"+data['items']['c001']['categoryName']+"</td>	<Td>"+data['items']['c002']['categoryName']+"</td> <Td>"+data['items']['c003']['categoryName']+"</td>	</tr>";
	//document.getElementById('product_con').innerHTML = "<tr>	<Td>"+data['items']['p001']['productName']+"</td>      </tr><Tr> <Td>"+data['items']['p002']['productName']+"</td>    </tr><Tr>     <Td>"+data['items']['p003']['productName']+"</td>    </tr><Tr>     <Td>"+data['items']['p004']['productName']+"</td>    </tr><Tr>     <Td>"+data['items']['p005']['productName']+"</td>    </tr> <Tr>     <Td>"+data['items']['p006']['productName']+"</td>    </tr>  ";
for(a = 1; a<=6; a++){

    
  document.getElementById('product_con').innerHTML += "<div class='"+data['items']['p00'+a+'']['categoryId']+" col-md-3 simpleCart_shelfItem'>"+
  "<div class='panel panel-default'>"+
        "<div class='panel-heading item_name'>"+data['items']['p00'+a+'']['productName']+"</div>"+
        "<div class='panel-body'>"+
                  /*"<img src='http://placehold.it/1000x1000/cecc00/' class='img-thumbnail img-responsive item_thumb'><br>"+*/
                  "<img src='images/products/"+data['items']['p00'+a+'']['productName']+".jpg' class='img-thumbnail img-responsive item_thumb'><br>"+
                  "<p class='input-sm clearfix'>Manufacturer: <brand>"+data['items']['p00'+a+'']['manufacturer']+"</brand></p>"+
                  "<span class='row'></span>"+
        "</div>"+
              
        "<div class='panel-footer'>"+
                  "<p class='item_price'>$ "+data['items']['p00'+a+'']['price']+"</p>"+
                  
"<div class='col-sm-6'><label>Qty: <input class='item_Quantity form-control' type='text' value='1'></label></div>"+
"<div class='col-sm-6'><span class='btn btn-success btn-md btn-full item_add'>ADD</span></div>"+
                  "<select name='size' id='size' class='item_size'>"+
                    "<option value='#'>120</option>"+
                    "<option value='small'>"+
                        
                    "</option>"+
                    "<option value='medium'>Medium</option>"+
                    "<option value='large'>Large</option>"+
                  "</select>"+
                  "<p class='input-sm release clearfix'>Release Date: "+data['items']['p00'+a+'']['releaseDate']+"</p>"+
        "</div>"+
    "</div>"+
"</div>";

}
	//GOOD
    })	


    

















