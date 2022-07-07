const robot = require('robotjs');
const {display} = require('./time');
const screen = robot.getScreenSize();

const time = new Date;

    (async function(){
        await display(5000);
        robot.moveMouse(24,150);

        await display(2000);
        robot.mouseClick();

        await display(2000);
        robot.moveMouse(1168,108);

        await display(2000);
        robot.mouseClick();

        await display(2000);
        robot.moveMouse(949,430);

        await display(2000);
        robot.mouseClick();

        await display(2000);
        robot.scrollMouse(0,500);

        await display(2000);
        robot.moveMouse(964);

        await display(2000);
        robot.mouseClick()
    })()

