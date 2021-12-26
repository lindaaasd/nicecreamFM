// random background on refresh


function ChangeBgImg(color) 
{
let totalImages = 6;
console.log('sono entrata qui')
let num = Math.ceil( Math.random() * totalImages );
document.body.background = './media/'+color+num+'.jpg';
document.body.style.backgroundSize = "cover";
}
