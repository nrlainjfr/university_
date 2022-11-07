function buttonClicked(){

    var uni_input=document.getElementById("uni_input").value //fetch the uni_input from apilink(for example:universiti,university,kolej,college)
    var unicountry=document.getElementById("unicountry").value //fetch data about country in apilink
    fetch(`http://universities.hipolabs.com/search?name=${uni_input}&country=${unicountry}`)  //fecth apilink
    .then((response) => response.json()) 
    .then((data) => {  
        console.log(data); //fetch all data from api
        console.log(data.web_pages); //fetch the data inside web_pages from api
    

    for(let count=0 ; count<5 ; count++){
      var web=document.createElement("li") //to create list of data
      var unidata=document.getElementById("info")   //to fecth data from api
      let random=(Math.floor(Math.random() * data.length)) //fecth a random data from api
      web.innerHTML=data[random].web_pages[0];
      unidata.appendChild(web);
    }}
    
  
).catch(err => alert("Wrong Country Input!")); //error message wil be displayed if data input not found in apilink
}
  