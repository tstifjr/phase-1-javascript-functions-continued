// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity="go to the office") => `This Monday, I will ${activity}.`

function wrapAdjective(flair="*"){
    return function(adj="special"){
       return 'You are ' + flair + adj + flair + "!";
    } 
};
