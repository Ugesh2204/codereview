$( document ).ready(function() {
  ShowAlloption();

  
});


// window.onload = function(){
//   ShowAlloption();

// }

const company = [
  {
    company: 'ABC',
    details: [
      {
        id: 455557045,
        title: 'Lesley Peden',
        decs: 'This is first text'
        
      },
      {
        id: 894557088,
        title: 'Ben',
        decs: 'This is second text'
        
      },

      {
        id: 894557889,
        title: 'Ten',
        decs: 'This is third text'
        
      }
    ]
  },
  {
    company: 'EFG',
    details: [
      {
        id: 455557046,
        title: 'Wayne Smith',
        decs: 'This is second text'
        
      }
    ]
  },
];




let arr = [];


function ShowAlloption() {
 
  GetAllitems();

  let card = document.querySelectorAll(".card");
  card.forEach(function(cardbtn){
    cardbtn.addEventListener('click',function(e){
      cardbtnid = e.currentTarget.id;
      console.log(cardbtn);
      let titleid = document.getElementById(`title_${cardbtnid}`);
      let titlecontainer = document.getElementById(`title_${cardbtnid}`).textContent;


      

    })
  })

  
}


function GetAllitems(){
  for(let i = 0; i<company.length; i++ ) {
    // console.log(company[i]);
    let inner = company[i];
    if(inner.company == "ABC"){
      for(let y = 0; y < inner.details.length; y++){
        console.log(inner.details[y]);
        let product = inner.details[y];
  
        let optionwrapper = document.querySelector('.abc');
        let titlecontainer = document.createElement('div');
        titlecontainer.setAttribute('id',`option_${product.id}`);
        titlecontainer.setAttribute('class','card');
        optionwrapper.appendChild(titlecontainer);
  
        let option = document.getElementById(`option_${product.id}`);
        let optioninner = document.createElement('div');
        optioninner.setAttribute('class',`option__title_${product.id}`);
        option.appendChild(optioninner);
  
        let title = document.querySelector(`.option__title_${product.id}`);
        title.innerHTML = `<h2 class="title_${product.id}">${product.title}</h2>`;
  
        let desinfo = document.createElement('div');
        desinfo.setAttribute('class',`descinfo_${product.id} description__info`);
        option.appendChild(desinfo);
  
        let descinfo = document.querySelector(`.descinfo_${product.id}`);
        descinfo.innerHTML = `<p>${product.decs}</p>`;

        let capusle  = inner.details[0].id;
        let filter = inner.details[1].id;
        let expresso = inner.details[2].id
        let capusleobtn = document.getElementById(`option_${capusle}`);
        let filterobtn = document.getElementById(`option_${filter}`);
        let expressobtn = document.getElementById(`option_${expresso}`);



          // capusleobtn.addEventListener('click', function(){
          //   capusleobtn.classList.add('active');
          //   let sectionone = document.getElementById('sectionone');
          //   let optionOnetitle = inner.details[0].title
          //   sectionone.textContent = `${optionOnetitle}`;
          //   if(filterobtn){
          //     filterobtn.classList.remove('active');
          //   }
          //   if(expressobtn){
          //     expressobtn.classList.remove('active');
          //   }
          // });
        
        
   
          // filterobtn.addEventListener('click', function(){
          //   filterobtn.classList.add('active');
          //   let sectionone = document.getElementById('sectionone');
          //   let optionOnetitle = inner.details[1].title
          //   sectionone.textContent = `${optionOnetitle}`;
           
           
          //   if(capusleobtn){
          //     capusleobtn.classList.remove('active');
          //   }
          //   if(expressobtn){
          //     expressobtn.classList.remove('active');
          //   }

          // });
        

          // expressobtn.addEventListener('click', function(){
          //   expressobtn.classList.add('active');
          //   let sectionone = document.getElementById('sectionone');
          //   let optionOnetitle = inner.details[2].title
          //   sectionone.textContent = `${optionOnetitle}`;
          //   if(capusleobtn){
          //     capusleobtn.classList.remove('active');
          //   }
          //   if(filterobtn){
          //     filterobtn.classList.remove('active');
          //   }
          // });  
      } 
    }

    if(inner.company == "EFG"){
      for(let y = 0; y < inner.details.length; y++){
        console.log(inner.details[y]);
        let product = inner.details[y];
  
        let optionwrapper = document.querySelector('.efg');
        let titlecontainer = document.createElement('div');
        titlecontainer.setAttribute('id',`option_${product.id}`);
        titlecontainer.setAttribute('class','card');
        optionwrapper.appendChild(titlecontainer);
  
        let option = document.getElementById(`option_${product.id}`);
        let optioninner = document.createElement('div');
        optioninner.setAttribute('class',`option__title_${product.id}`);
        option.appendChild(optioninner);
  
        let title = document.querySelector(`.option__title_${product.id}`);
        title.innerHTML = `<h2>${product.title}</h2>`;
  
        let desinfo = document.createElement('div');
        desinfo.setAttribute('class',`descinfo_${product.id} description__info`);
        option.appendChild(desinfo);
  
        let descinfo = document.querySelector(`.descinfo_${product.id}`);
        descinfo.innerHTML = `<p>${product.decs}</p>`;

        
      } 
     
    }


 
    
  }

}


