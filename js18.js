

var inputHead=[]

function inputNumber(){
    var NumberInput =document.getElementById("inputHead").value*1;
 inputHead.push(NumberInput)

 document.getElementById("showNumb").innerHTML=inputHead;
}



  
function cau1(){
    var sum= 0;
    for (var i=0; i <= inputHead.length-1 ;i++)
    { if ( inputHead[i]>0){
        sum += inputHead[i]
    }else{
        continue;
    }
    document.getElementById("result_1").innerHTML = sum;
    }
}

function cau2(){
    var total = 0;
    for (var i=0; i <= inputHead.length-1 ;i++)
    { if ( inputHead[i]>0){
        total ++
    }else{
        continue;
    }
    document.getElementById("result_2").innerHTML = total;
    }
}


function cau3(){
    var minNumb = inputHead[0];
    for (var i=0; i <= inputHead.length-1 ;i++)
    { if ( inputHead[i]<=minNumb){
        minNumb = inputHead[i]
    }else{
        continue;
    }
    document.getElementById("result_3").innerHTML = minNumb;
    }
}

function cau4(){
    var minNumbPost = inputHead[0];
    for (var i=0; i <= inputHead.length-1 ;i++)
    { if ( inputHead[i]<=minNumbPost && inputHead[i] >= 0){
        minNumbPost = inputHead[i]
    }else{
        continue;
    }
    document.getElementById("result_4").innerHTML = minNumbPost;
    }
}

function cau5(){
    var lastNumb = "" ;
    for (var i=inputHead.length; i>0 ;i--)
    if( inputHead[i] % 2==0){
        lastNumb=inputHead[i];
        break
    }
   
    document.getElementById("result_5").innerHTML = lastNumb;
    }

function cau6(){
    var pos1=document.getElementById("pos1").value*1;
    var pos2=document.getElementById("pos2").value*1;
    var changePos=0
    if(pos1 != pos2){
      changePos=inputHead[pos1]
      inputHead[pos1]=inputHead[pos2]
      inputHead[pos2]=changePos
    }
    document.getElementById("result_6").innerHTML = inputHead;
}


function cau7(){
    for (var n = 0; n < inputHead.length - 1; n++) 
                for (var i = 0; i < inputHead.length - 1; i++) {
                    if (inputHead[i] > inputHead[i + 1]) {
                        var temp = inputHead[i];
                        inputHead[i] = inputHead[i + 1];
                        inputHead[i + 1] = temp;
                    }
                }
                document.getElementById("result_7").innerHTML = inputHead;
         }
        



function cau8(){
    for(var i = 0; i <= inputHead.length - 1; i++){
        if(inputHead[i]==2 || inputHead[i]==3){
            document.getElementById("result_8").innerHTML = inputHead[i]
            break;
        } else if(inputHead[i] % 2 !=0 
            && inputHead[i] % 3 != 0
             && inputHead[i] % 5 !=0 && inputHead[i] > 1 ){
                document.getElementById("result_8").innerHTML = inputHead[i]
                break;
        }
        
        // document.getElementById("result_8").innerHTML = inputHead[i] ;
    }
}

var input9=[]

function inputNumber9(){
    var NumberInput9 =document.getElementById("input9").value*1;
 input9.push(NumberInput9)

 document.getElementById("showNumb9").innerHTML=input9;
}

function cau9 (){
    var total9=0
    // for (var k=0;k<input9.length-1;k++){
        for (var i = 0; i <= input9.length-1 ; i++){
            if (Number.isInteger(input9[i])== true ){
              total9++
            } else {
                continue
            }
            document.getElementById("result_9").innerHTML = total9
            // console.log(Number.isInteger(input9[i]))
        }
    }
// }
// console.log(Number.isInteger(input9[i]))

function cau10(){
    var negativeN =0
    var positiveN =0
    var comp =""
    for (i=0;i < inputHead.length ; i++){
        if(inputHead[i]<0){
            negativeN++
            
        }else if(inputHead[i]>0){
            positiveN++
            
        }
    }
    console.log("só âm",negativeN)
    console.log("số dương",positiveN)

    if(negativeN>positiveN){
        comp="số âm nhiều hơn số dương"
    }else if(positiveN>negativeN){
        comp="số dương nhiều hơn số âm"
    }else if(positiveN==negativeN){
        comp="số âm == số dương"
    }
    document.getElementById("result_10").innerHTML = comp
}