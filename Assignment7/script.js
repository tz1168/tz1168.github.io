heading.addEventListener('click',function(){
    
})

function squareNumber(){
    var number=document.getElementById('square-input').value
    alert('The result of squaring the number '+number+' is '+number**2+'.')
}

function halfNumber(){
    var number1=document.getElementById('half-input').value
    alert('Half of '+number1+' is '+number1/2+'.')
}

function percentOf(){
    var fraction=document.getElementById('percent1-input').value
    var whole=document.getElementById('percent2-input').value
    var result=(fraction/whole)*100
    alert(fraction+' is '+ result+'% of '+whole+'.')
}

function areaOfCircle(){
    var radius=document.getElementById('area-input').value
    var area=3.14*(radius**2)
    alert('The area for a circle with radius '+radius+' is '+area+'.')
}

