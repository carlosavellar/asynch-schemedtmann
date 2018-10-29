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


// const getID = new Promise((resolve, reject)=>{
//     setTimeout(()=>
//         resolve([[223,455,787,333]]),
//     1500);
// });

// getID.then(IDs=>{
//     console.log(IDs);
// });

// const dirIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([223, 455, 787, 333]);
//     }, 1500);
// });

// const geTRecipe = recID => {
//     return new Promisse((resolve, reject) => {
//         setTimeout(ID, 1500, recID);
//     });
// };

// const getrecipe2 = RecID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {
//                 title: "Tomato estrogonofrato",
//                 publisher: 'José Carlos'
//             };
//             resolve(`${ID} e o sei lá ${recipe.publisher}`);
//         }, 1500, RecID);
//     });
// };
// const getRelated = rela =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(someRec =>{
//             const recipe2 = { title: "Italian", publisher: "José" };
//             resolve(`${recipe2.title} and puplidher is ${recipe2.publisher}`);
//         }, 1500, rela);
//     });
// };
// dirIDs
//     .then(IDs => {
//         console.log(IDs);
//         return getrecipe2(IDs[2]);
//     })
//     .then(recipe=>{
//         console.log(recipe);
//         return getRelated(recipe);
//     })
//     .then(recipe => {
//         console.log(recipe);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Asynch Await

// async function getrecipeAW (){
//     const IDs = await(dirIDs);
//     console.log(IDs);
//     const recipe = await(getrecipe2(IDs[2]));
//     console.log(recipe);
//     const related = await(getRelated(recipe));
//     console.log(related);
//     return recipe;
// }

// This aboive is synchronous
// const rec = getrecipeAW();
// console.log(rec);
// getrecipeAW().then(result=>{
//     console.log(`This is the best: ${result}`);
// });

// consuming data from a real API

// fetch('https://www.crossorigin.me/https://www.metaweather.com/api/location/2487956');



//Old Asynchronous code

// const sayRecipie = ()=>{
//     setTimeout(() => {
//         const recipiesID =  [123,445,899,445];
//         console.log(recipiesID);
//             setTimeout((id) => {
//                 const recipe = { publisher: 'Carlos', title: 'Potarto Craralho', cor: 'azul' };
//                 console.log(`${id}: ${recipe.publisher}`);
//                 setTimeout((publisher) => {
//                     
//                 }, 2000, recipe.publisher);
//             }, 1000, recipiesID[2]);

//     }, 1500);
// };


// sayRecipie();

//Promises


const getIDs = new Promise((resolved, rejected)=>{
    setTimeout(() => {
        resolved([123,445,445]);
    }, 1500);
});

const getRecipe = recID =>{
    return new Promise((resolved, rejected)=>{
        setTimeout(id => {
                const recipe = { publisher: 'Carlos', title: 'Potarto Craralho', cor: 'azul' };
                resolved(`${id}, ${recipe.title}`);
        }, 1000, recID);
    });
};

const getPub = recPub =>{
    return new Promise((resolved, rejected)=>{
        setTimeout((pub) => {
            const recipe = { publisher: 'José', title: 'Potarto Craralho', cor: 'azul' };  
            resolved(`${pub}: ${recipe.publisher}`);
        }, 2000, recPub);
    });
};


getIDs
.then(IDs=>{
    console.log(IDs);
    return getRecipe(IDs);
})
.then(recipe=>{
    console.log(recipe);
    return getPub(recipe);
})
.then(publ=>{
    console.log(publ);
})
.catch(error=>{
    console.log('Error');
});