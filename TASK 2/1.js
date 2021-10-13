const data = [
    {
        Name: "Premi",
        Tamil:"97",
        English:"98",
        Maths:"100",
        Physics:"99",
        Chemistry : "90",

    
    },
    {
        Name: "Srii",
        Tamil:"77",
        English:"78",
        Maths:"92",
        Physics:"97",
        Chemistry : "66",

      
    },
    {
        Name: "Seenivasan",
        Tamil:"20",
        English:"58",
        Maths:"90",
        Physics:"91",
        Chemistry : "92",
      
    },
    {
        Name: "Anuma",
        Tamil:"87",
        English:"98",
        Maths:"99",
        Physics:"93",
        Chemistry : "96",
    },
    {
        Name: "Reshma",
        Tamil:"67",
        English:"98",
        Maths:"59",
        Physics:"93",
        Chemistry : "94",
    }
]

const results = document.getElementById('results')

const submit= document.getElementById('submit')
submit.addEventListener("click", function() {
    const Name = document.getElementById('num-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].Name.toLowerCase() == Name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML =
             "<h3>" + "Tamil : " + data[i].Tamil +"</h3>" + 
             "<h3>" + "English : " + data[i].English +"</h3>" + 
             "<h3>" + "Maths : " + data[i].Maths +"</h3>" + 
             "<h3>" + "Physics : "  + data[i].Physics +"</h3>"+
             "<h3>" + "Chemistry : " + data[i].Chemistry +"</h3>"

            return;
        }
    }
    results.innerHTML = "<h3>" + "No information ! " + "</h3>" 
}) 