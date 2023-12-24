var callback=(enteries)=>{
    console.log(enteries);
}

const mutationObserver = new MutationObserver(callback);
const parent = document.querySelector('.parentcontainer');

//  ---1----childList --make changes to the child elements it will trigger 

// var options={
//     childList:true
// }
// mutationObserver.observe(parent,options);
// parent.children[0].remove();
// const childel=`<div class="childcontainer">new element</div>`
// setTimeout(()=>{
//     parent.insertAdjacentHTML('beforeend',childel);
// },500)


// ---2----mutation observer disconnect -- changes after disconnecting mutation observer will be not recorded

// var options ={
//     childList:true
// }

// mutationObserver.observe(parent,options);
// mutationObserver.disconnect();
// parent.children[0].remove();


// ---3----changing/adding attribute

// var options={
//     childList:true,
//     attributeOldValue:true
// }
// mutationObserver.observe(parent,options);
// parent.setAttribute('data-val','parentval');

// ---4----attribute filter --if given only triggers to taht attibute filter here we have
// given data-attr but adding data-val so it wont trigger

// var options={
//     childList:true,
//     attributeOldValue:true,
//     attributeFilter:['data-attr']
// }
// mutationObserver.observe(parent,options);
// parent.setAttribute('data-val','parentval');

// ---5----checking the charecterdata or text inside it

// var options={
//     characterData:true,
//     characterOldValue:true
// }
// mutationObserver.observe(parent.children[0].childNodes[0],options);

// ---5----observing changes inside parent all child elements

var options={
    characterData:true,
    characterOldValue:true,
    subtree:true
}
mutationObserver.observe(parent,options);