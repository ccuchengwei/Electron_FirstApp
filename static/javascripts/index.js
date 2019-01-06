
const { ipcRenderer } = require('electron')



// let btn = document.querySelector('#close')
// btn.addEventListener('click',()=>{console.log('123')});
$("#close").click(function(){
    ipcRenderer.send('test');
});