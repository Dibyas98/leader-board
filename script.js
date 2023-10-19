let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const first_name = event.target.children[0].value,
        last_name = event.target.children[1].value,
        country = event.target.children[2].value,
        score = event.target.children[3].value;

    if(first_name==='' || last_name==='' || country==='' || score===''){
        setTimeout(() => {
            document.getElementById("req").style.display='block';
        }, 500);
        
    }
    else{
        document.getElementById("req").style.display='';
        let parent = document.querySelector(".score-board")
    let score_board=document.createElement("div");

    score_board.classList.add("main-boars");
    score_board.innerHTML=`
    <div>
    <p class="playername">${first_name} ${last_name}</p>
    <p class="date">Jan 2023: 09:24:44</p>
</div>
<p class="player-country">${country}</p>
<p class="player-score">${score}</p>
<div class="btn">
    <button>🗑</button>
    <button>+5</button>
    <button>-5</button>
</div>
    `
    parent.appendChild(score_board);
    }
    generatedte();
    sort();
    add_buttom();
form.reset();


    
})



add_buttom();

function add_buttom(){
    let allbut=document.querySelectorAll('.btn');
    allbut.forEach((el)=>{
        el.addEventListener('click',(e)=>{
            let scorePlayer=e.target.parentElement.parentElement.children[2];
            let textContent=e.target.textContent;
            console.log(textContent);


            if(textContent === '🗑')
            return e.target.parentElement.parentElement.remove();
        scorePlayer.textContent=parseInt(scorePlayer.textContent)+parseInt(textContent);
        sort();
        });
    });
   
}


function sort(){
    let score_board=document.querySelector(".score-board");
    let main_board=document.querySelectorAll(".main-boars");
    let elementArry=[];
    main_board.forEach((ele)=>{
        elementArry.push(ele)
    })
    let sortedElements = elementArry.map((el)=>{
        return el;
    })
    .sort((a,b)=>{
        let numA = parseInt(a.children[2].textContent),
        numB = parseInt(b.children[2].textContent)

        if(numA > numB) return -1;
        if(numA < numB) return 1;
    });
    sortedElements.forEach((el)=>{
        score_board.append(el);
    })
    
}

function generatedte(){
    let date=new Date();
    let month=date.toLocaleString('Default',{month:'long'});
    let year=date.getFullYear();
    let time=date.toLocaleTimeString().slice(0,8);
    let generated=`${month.slice(0,3)} ${year}: ${time}`
    return generated;
}

generatedte();
