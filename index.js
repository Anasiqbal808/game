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
                // for(let i=0; i<data.results[0].name.first.toLowerCase().length; i++){
                //     var test = 0;
                //     for(let j=0; j<26; j++){
                //         console.log("Name we get: "+data.results[0].name.first.toLowerCase()[i])
                //         if(data.results[0].name.first.toLowerCase()[i]==alpha){
                //             test=1;
                //         }
                //         else{
                //             test=0;
                //         }
                //         console.log('test value: '+test)
                //     }
                //     if(test==0){
                //         // getName();
                //     }
                // }
                currentName=data.results[0].name.first.toLowerCase();
              console.log(data.results[0].name.first);
              $(".name").html("<h1 class='name'>"+currentName+"</h1>");
              console.log(currentName)
              $(".but").trigger("tap"); //jQuery Mobile
            }

        });
    }

    getName();






    var time = 5;

    // function timer(){

    // }

    setInterval(()=>{
        time=time-1;
        if(time<0){
            time=0;
        }
        else if(time==0){
            getName();
            time=5;
        }
        $(".timer").html(time);
    }, 1000)




    $(".but").on("click", ()=>{
        alert("SDfdfsdf")
    })

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
                time=5
                $(".lvlNo").html(level);
             
            }
            else if(currentName[i]==userInput[i]){
                $("body").css("backgroundColor", "green");
                console.log(currentName[i]+" = "+userInput[i])
             
            }
            else{
                $("body").css("backgroundColor", "red");
                // level=0
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
