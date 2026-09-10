function f1(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("hiiiii");
        resolve();
    },4000);
    })
   
}
function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Abes");
            resolve();
        },2000)
    })
}
// f1().then(f2)
// .catch(()=>{
//     console.log("error",err)
// })
async function run(){
    try{
        await f1();
        await f2();
    }catch(err){
        console.log("error");
    }
}
run();
