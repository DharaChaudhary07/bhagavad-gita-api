
let gita = document.getElementById('chapters');
let slok = document.getElementById('sloks');

const chapters = () => {

    fetch('https://vedicscriptures.github.io/chapters').then((res)=>{
        return res.json();
    }).then((data)=>{
        // console.log("data",data);

        data.forEach(element => {
            
            gita.innerHTML += `<li class="hover p-2 mb-2 text-center" style="background-color:#e8eded;box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;" onclick="return slokList(${element.chapter_number},${element.verses_count} )"> ${element.name}</li>`
        });

    }).catch((err)=>{
        console.log("err", err);
    }) 
}

chapters();

const slokList = (id, verses_count ) => {

    slok.innerHTML = "";

    for (let x = 1; x < verses_count ; x++) { 

        fetch(`https://vedicscriptures.github.io/slok/${id}/${x}/`).then((res)=>{  

            return res.json();
        }).then((data)=>{

            // console.log(data);
            slok.innerHTML += data.slok + "<br><br>";

        }).catch((err)=>{

            console.log(err);
        })
    }

}
