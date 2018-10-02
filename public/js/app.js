
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

const dirIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([223, 455, 787, 333]);
    }, 1500);
});

const geTRecipe = recID => {
    return new Promisse((resolve, reject) => {
        setTimeout(ID, 1500, recID);
    });
};

const getrecipe2 = RecID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: "Tomato estrogonofrato",
                publisher: 'José Carlos'
            };
            resolve(`${ID} e o sei lá ${recipe.publisher}`);
        }, 1500, RecID);
    });
};
const getRelated = rela =>{
    return new Promise((resolve, reject)=>{
        setTimeout(someRec =>{
            const recipe2 = { title: "Italian", publisher: "José" };
            resolve(`${recipe2.title} and puplidher is ${recipe2.publisher}`);
        }, 1500, rela);
    });
};
dirIDs
    .then(IDs => {
        console.log(IDs);
        return getrecipe2(IDs[2]);
    })
    .then(recipe=>{
        console.log(recipe);
        return getRelated(recipe);
    })
    .then(recipe => {
        console.log(recipe);
    })
    .catch(err => {
        console.log(err);
    });

