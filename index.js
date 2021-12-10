$(document).ready(function(){

    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var currentName='';
    var userInput=[];
    var level=0

    function getName(){
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
                currentName=data.results[0].name.first.toLowerCase();
              console.log(data.results[0].name.first);
              $(".name").html("<h1 class='name'>"+currentName+"</h1>");
              console.log(currentName)
            }
        });
    }

    getName();

    $(".openKeyboard").on("click", ()=>{
        navigator.virtualKeyboard.show();
    })
    
    $(".lvlNo").html(level);

    $("html").keypress(function(event){
        var key = event.originalEvent.key;
        console.log(currentName[0])
        userInput.push(key);
        console.log(userInput[0]);
        for(let i=0; i<userInput.length; i++){
            // alert("UerInpit: "+userInput[i]+"\nCurrent"+currentName[i])
            if(currentName[i]==userInput[i] && currentName.length==userInput.length){
                $("body").css("backgroundColor", "green");
                getName();
                userInput=[]
                level=level+1
                $(".lvlNo").html(level);
             
            }
            else if(currentName[i]==userInput[i]){
                $("body").css("backgroundColor", "green");
                console.log(currentName[i]+" = "+userInput[i])
             
            }
            else{
                $("body").css("backgroundColor", "red");
                level=0
                $(".lvlNo").html(level);
                if(userInput.length>0){
                    userInput=[];
                }
                console.log(currentName[i]+" = "+userInput[i])
                
            }
        }
        for(let i=0; i<26; i++){

            if(alpha[i]==event.originalEvent.key){
                $("."+event.originalEvent.key).css("backgroundColor", "white")
            }
            else{
                let tempClass = '.'+alpha[i];
                $(tempClass).css("backgroundColor", "rgb(71, 218, 255)")
            }
        }
        console.log(event.originalEvent.key)
    });
})
