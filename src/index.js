const robot = require('robotjs');
const {display} = require('./time');
const screen = robot.getScreenSize();



const time = new Date;

    (async function(){
        await display(2000);
        robot.moveMouse(24,150);

        await display(2000);
        robot.keyTap('enter');

        await display(2000);
        robot.moveMouse(1168,108);

        await display(2000);
        robot.keyTap('enter');

        //缺少参数要等明天
    })()
