const studentBioData = {
    firstName: "Sush",
    lastName:"Chav",
    age: 20,
    gender:"male",
    grade:"A",
    courses:["Math","Science","English"],
    address:{
        street: "123 Mt St",
        city: "Bournville",
        state:"USA",
        zipCode:"1103BN",
    },
 };
 

 const getToDoList = ()=>{
    const retrieveStudentData=JSON.parse(localStorage.getItem("ObjectData")); //JSONstring to Object
    console.log(retrieveStudentData);
 };

 const addToDoList = ()=>{
    localStorage.setItem("ObjectData",JSON.stringify(studentBioData));
 };

 const deleteToDoList = ()=>{
    const removedData=localStorage.removeItem("ObjectData");
    //const removedData =localStorage.getItem("ObjectData");
    console.log("After Removal: ",removedData);
    
 };

 document.getElementById("addBtn").addEventListener(
    "click",()=>{
       addToDoList();
    }
 );
 document.getElementById("getBtn").addEventListener(
    "click",()=>{
       getToDoList();
    }
 );
 document.getElementById("removeBtn").addEventListener(
    "click",()=>{
       deleteToDoList();
    }
 )
 
 
 
 