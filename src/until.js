const robot = require('robotjs');
function scroll(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            robot.scrollMouse(0,-500);
            console.log('moved');
            resolve()
        }, 2000);
    })
}

module.exports={
    scroll
}