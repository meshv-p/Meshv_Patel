let bars = document.querySelectorAll(".bar"),
  nav_btn = document.querySelector(".nav__icon"),
  All_projects = document.querySelector(".All_projects"),
  btn_filters = document.querySelectorAll(".btn-filter"),
  category = 'all';

  AOS.init();


nav_btn.addEventListener("click", () => {
  bars[0].classList.toggle("bar1");
  bars[1].classList.toggle("bar2");
  bars[2].classList.toggle("bar3");
});

function setcategory(value){
    category =value;
    render()
}

// For rendering cards in projects
async function render() {
    console.log(category)
  let data =await fetch('projects.json').then((d)=>d.json());
  let cards = ""; 
  cards += data.projects.map((card)=>{
    if (category == "all"){
        return (`<div class="card" data-aos="flip-left">
        <div class="thumb"><img src=${card.img} alt=${card.name}></div>
        <div class="P_about">
        <div class="name">
        <h2 align="center">${card.name}</h2>
        </div>
        <div class="desc"><p>
      ${card.desc}
      </p></div>
      <div class="two_btns flex">
      <a href=${card.github} target="_blank" class="link btn btn-outline-blue btn-left-p">Github</a>
      <a href=${card.link} target="_blank" class="link btn btn-blue btn-right-p">Live Demo</a>
      </div>
      </div>  
      </div>`);
    }

      if ( card.type == category) {
          return (`<div class="card">
          <div class="thumb"><img src=${card.img} alt=${card.name}></div>
          <div class="P_about">
          <div class="name">
          <h2 align="center">${card.name}</h2>
          </div>
          <div class="desc"><p>
        ${card.desc}
        </p></div>
        <div class="two_btns flex">
        <a href=${card.github} target="_blank" class="link btn btn-outline-blue btn-left-p">Github</a>
        <a href=${card.link} target="_blank" class="link btn btn-blue btn-right-p">Live Demo</a>
        </div>
        </div>  
        </div>`)}
        // else{
        //   return (`<div class="card">
        //   <div class="thumb"><img src=${card.img} alt=""></div>
        //   <div class="P_about">
        //   <div class="name">
        //   <h2 align="center">${card.name}</h2>
        //   </div>
        //   <div class="desc"><p>
        // ${card.desc}
        // </p></div>
        // <div class="two_btns flex">
        // <a href=${card.github} target="_blank" class="link btn btn-outline-blue btn-left-p">Github</a>
        // <a href=${card.link} target="_blank" class="link btn btn-blue btn-right-p">Live Demo</a>
        // </div>
        // </div>  
        // </div>`);
        // }
    
}) ; 
  All_projects.innerHTML = cards;
      
}
render()

// console.log(btn_filters)
function removebtn(){
    btn_filters.forEach((btn)=>{
        btn.classList.replace('btn-blue','btn-outline-blue');
    })
}


btn_filters.forEach((btn)=>{btn.addEventListener('click',(e)=>{removebtn();e.srcElement.classList.replace('btn-outline-blue','btn-blue')})})

