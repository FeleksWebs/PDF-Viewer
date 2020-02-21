function test(){
    var fil=document.getElementById("myFile");
    var embed=document.createElement("embed");
    var FileLocation=fil.files[0].name; 
    embed.src=FileLocation
    embed.width="400px"
    embed.height="600px"
    document.body.appendChild(embed);
    
    console.log(FileLocation)
    console.log(embed)
    console.log(embed.src)

}