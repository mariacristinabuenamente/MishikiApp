// function to store data
document.addEventListener('click',function(){ //callback function
	let input = document.getElementById('field_input').value;
    document.getElementById('field_input',).value = "";
	if(input != ""){
	    let count = (localStorage.getItem('count') == null)?0:localStorage.getItem('count');
	    localStorage.setItem('count',(count*1)+1);
	    console.log(count);
	    localStorage.setItem(`input-${(count)}`,input);

	}
});
function retrieve(){
    let data =[];
    let count = Number(localStorage.getItem('count'));

    for(let x= 0; x<count; x++){
        data.push(localStorage.getItem(`input-${x}`));
    }
    list(data);
}
 function list(data){
     let content = "";
     for(let value of data){
         content += `<li>${value}</li>`;
     }
     document.getElementById('display_list').innerHTML = `<ol>${content}</ol>`;
 }