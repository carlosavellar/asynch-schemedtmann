const first = ()=>{
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