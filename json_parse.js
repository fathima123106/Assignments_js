function adddata(){
    var num = document.getElementById("num").value;
    
     var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;

    var jsonobj = {ID:"",Email:"",Name:""};
    jsonobj.ID=num;
    jsonobj.Email=email;
    jsonobj.Name=name;
    

    var str=JSON.stringify(jsonobj);
    //document.write(str); 
    try{
        var parseData = JSON.parse(str);
        document.write("id :",parseData.ID);
        document.write("Name :",parseData.Name);
        document.write("Email :",parseData.Email);
    }catch(e){
        console.error("Error parsing JSON :"+e.message);
    }
}