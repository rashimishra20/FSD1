function f1(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("hiiiii");
        resolve();
    },4000);
    })
   
}
function f2(){

}