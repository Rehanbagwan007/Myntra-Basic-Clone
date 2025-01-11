let bagItems;
onLoad();


function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage(items)

  
  
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage(data) {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
      data.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}



function printdata () {
  console.log("hwllo world")
}



function filterByGender (gender) {

 let FilterData = items.filter((item)=>{

     return  item.for == `${gender}`

  })   

 

  return displayItemsOnHomePage(FilterData)

    




}




let men = document.querySelector('.men');
  console.log(men);
  men.addEventListener("click", (()=>{
    filterByGender('male')
  }))



  let women = document.querySelector('.women')
  women.addEventListener("click" , (()=>{
    filterByGender('female')

  }))


  let dataApi = async()=>{
      let data = await fetch('https://fakestoreapi.com/products/')
      .then(res=>res.json())
      .then((json)=>  {
        let data = json
        AddData(json)
        
        console.log(data)


        
      
      
      })


      
  }



  let AddData = (data)=>{

    let newData = data.map((item,i)=>({

      id: i,
      image: item.image,
      company: "Myntra Default Store",
      item_name: item.title,
    
      original_price: item.price,
      current_price: item.price-20,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: item.rating.rate,
          count: item.rating.count,
      },
      for:function(item){

        if(item.title.include("mens")){
          return(male)
        }

      },

    }))
    
     console.log(newData)
  


  }