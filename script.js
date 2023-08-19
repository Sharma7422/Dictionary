let url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn=document.querySelector("button");
let fetch_data=document.querySelector(".fetch");


btn.addEventListener("click" , async function(event){
  event.preventDefault();
    let word=document.querySelector("form .input").value;
    console.log(word);
    fetch_data.innerHTML="Fetching data...";

    let mean= await meaning(word);
    let exam = await example(word); 
    let syno = await synonym(word); 
    fetch_data.innerHTML="";  
     
    
    let output=document.querySelector(".result");
  
    output.innerHTML=
      `<h2><strong>Word :- </strong>${word}</h2>
       <h3><b>Meaning :- </b>${mean === undefined ? "Meaning Not Found" : mean}</h3>
       <h3><b>Example :- </b>${exam === undefined ? "Example Not Found" : exam}</h3>
       <h3><b>Synonyms :- </b>${syno === undefined ? "Synonyms Not Found" : syno}</h3>`
      
    });


async function meaning(word){
    try{
      let res= await axios.get(url + word);
      return res.data[0].meanings[0].definitions[0].definition;
      }
    catch{
      return  "Error no facts";
    }
}


async function example(word){
    try{
      let res= await axios.get(url + word);
      return res.data[0].meanings[0].definitions[0].example;
    }
    catch{
      return  "Error no facts";
    }
}


async function synonym(word){
    try{
      let res= await axios.get(url + word);
      return res.data[0].meanings[0].synonyms;
    }
    catch{
      return  "Error no facts";
    }
}
