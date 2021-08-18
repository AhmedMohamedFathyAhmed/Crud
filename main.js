var nameInput=document.getElementById("name");
var ageInput=document.getElementById("age");
var salaryInput=document.getElementById("salary");
var phoneInput=document.getElementById("phone");
var inputbtn=document.getElementById("btn");
var inputs=document.getElementsByClassName("control");

if(localStorage.getItem("employeelist")==null){

    container=[];
}   

else{
    container=JSON.parse(localStorage.getItem("employeelist"));
    display();
}

btn.onclick=function(){


   addemployee();
   display();
   reset();
    
}
var container=[];
function addemployee(){

    var employee={
        name:nameInput.value,
        age:ageInput.value,
        salary:salaryInput.value,
        phone:phoneInput.value
    }

    container.push(employee);
    localStorage.setItem("employeelist",JSON.stringify(container));

}

function display(){
    var trs="";
    for(var i=0 ;i<container.length;i++){
        trs+=`
        <tr>
        <td>${container[i].name}</td>
        <td>${container[i].age}</td>
        <td>${container[i].salary}</td>
        <td>${container[i].phone}</td>
        <td><button onclick="deleteEmployee(${i})" class="delete">Delete</button></td>
        </tr>`
       


    }
    document.getElementById("tableBody").innerHTML=trs;
}
function deleteEmployee(del){
    container.splice(del,1);
    display();

    
}
function reset(){
    for(i=0;i<inputs.length;i++){
    inputs[i].value="";
  }
}


function search(textsearch){
    var trs="";
    for(var i=0 ;i<container.length;i++){  
    if(container[i].name.toLowerCase().includes(textsearch.toLowerCase())==true){

        console.log("jkb");
                //مشيت ع الاريه عشان احد منه الفاليو اللى اليوزر دخلها
            trs+=`
            <tr>
            <td>${container[i].name}</td>
            <td>${container[i].age}</td>
            <td>${container[i].salary}</td>
            <td>${container[i].phone}</td>
            <td><button onclick="deleteEmployee(${i})" class="delete">Delete</button></td>
            </tr>`
           
    
    
        }

    }
        document.getElementById("tableBody").innerHTML=trs;       //متنساش تحطها فى الاتش تى ام ال عن طريق الفاريابل اللى عامله
   
    


    }
