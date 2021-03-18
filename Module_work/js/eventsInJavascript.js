let divText = d3.select('#div1').text();
console.log(divText);

d3.selectAll('li').style('background-color', 'blue');

$(
function(){
d3.select('hoverElement').on('mouseover', function(){
        d3.select(this).style('background-color','pink')
    }
)};

);