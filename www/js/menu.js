



function get_menu( url , type , param , callback ) {
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
get_menu ('data/data.json', 'GET', '', function ( content , error ) {	
	if ( error != null )
	console.log ("ERROR!" + error );
	else
	// GOOD	

	var data = JSON.parse(content);
	var data_length = data.length - parseInt(1);
	console.log(data['items']);
    //alert('test');
	//document.getElementById('category_con').innerHTML = "<tr>	<Td>"+data['items']['c001']['categoryName']+"</td>	<Td>"+data['items']['c002']['categoryName']+"</td> <Td>"+data['items']['c003']['categoryName']+"</td>	</tr>";
	//document.getElementById('product_con').innerHTML = "<tr>	<Td>"+data['items']['p001']['productName']+"</td>      </tr><Tr> <Td>"+data['items']['p002']['productName']+"</td>    </tr><Tr>     <Td>"+data['items']['p003']['productName']+"</td>    </tr><Tr>     <Td>"+data['items']['p004']['productName']+"</td>    </tr><Tr>     <Td>"+data['items']['p005']['productName']+"</td>    </tr> <Tr>     <Td>"+data['items']['p006']['productName']+"</td>    </tr>  ";
for(a = 1; a<=6; a++){
  document.getElementById('nav-mobile').append += "<li><a href='#'>"+data['items']['c00'+a+'']['categoryName']+"'</a></li>";
  
  

}
	//GOOD
    })	




    


















