
// Simple timeout
/* const first = ()=>{
    console.log('Primeiro');
};
const second = ()=>{
    console.log('Segundo');
};
const  thirth = ()=>{
    console.log('Terceiro');
};

setTimeout(()=>{
    second();
}, 3000);
first();
thirth();
 */


// Simulating Ajax

// const getRecipe = ()=>{
//     setTimeout(() => {
//         const menu = [223,455,787,333];
//         console.log(menu);
//         setTimeout(id=>{
//             const recipe = { title: "Tomato estrogonofrato", publisher: 'José Carlos' };
//             console.log(`${id} e o sei lá ${recipe.publisher}`);
//             setTimeout(publisher => {
//                 const recipe2 = { title: "Italian", publisher: "José" };
//                 console.log(recipe);
//             }, 1500, recipe.publisher);
//         }, 1500, menu[2]);
//     }, 1500);
// };
// getRecipe();


const getID = new Promise((resolve, reject)=>{
    setTimeout(()=>
        resolve([[223,455,787,333]]),
    1500);
});

getID.then(IDs=>{
    console.log(IDs);
});
