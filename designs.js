let colorPicked='#ff0000';
const colorPicker1=document.getElementById('colorPicker')
// Select color input
/**
 * Gets the color from the color picker and save it in colorPicked variable
 */
//Sets color for the filler
colorPicker1.addEventListener('change',function() {
  colorPicked=colorPicker1.value
  })



/**
 * Getting the width and length saving it in variables then calling makeGrid()
 */
const myForm=document.getElementById('sizePicker');
myForm.addEventListener('submit',function (event){
  event.preventDefault();
  const width=document.getElementById('inputWidth').value;
  const height=document.getElementById('inputHeight').value;
  event.target[2].disabled=true;
  return makeGrid(width,height);
});

/**
 * Reset button 
 */
myForm[3].addEventListener('click',function(){
  myForm[2].disabled=false;
  document.getElementById('pixelCanvas').innerHTML='';
  
})

function makeGrid(width,height){
  for(let i=1;i<=height;i++){
    const row=document.createElement('tr');
    for(let j=1;j<=width;j++){
      const col=document.createElement('td');
      row.appendChild(col);
    }
    document.getElementById('pixelCanvas').appendChild(row);
  }
};

//Changing the pixel background-color on hovering and getting it back when leaveing
const myTable=document.getElementById('pixelCanvas');
myTable.addEventListener('mouseover',function (event){
  event.target.classList.add('changeHover');
  
});
myTable.addEventListener('mouseout',function (event){
  event.target.classList.remove('changeHover');
});

//Changing background-color on clicking the pixel
myTable.addEventListener('mousedown',function (event){
  event.preventDefault();
  if(event.target.tagName==='TD'){
    if(event.target.style.backgroundColor==''){
      event.target.style.backgroundColor=colorPicked;
    }else{
      event.target.style.backgroundColor='';
    }
    myTable.addEventListener('mouseover',handleMouseOver)
    }
    
});

function handleMouseOver(event1) {
  event1.preventDefault();
  if(event1.target.tagName==='TD'){
    if(event1.target.style.backgroundColor==''){
      event1.target.style.backgroundColor=colorPicked;
    }else{
      event1.target.style.backgroundColor='';
    }
  }
}
myTable.addEventListener('mouseup',function(){
  myTable.removeEventListener('mouseover',handleMouseOver)
})


  
  






  