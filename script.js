let ID;

//Main API implemented here
const loadData=async()=>{
    const res = await fetch ('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json()
    const cards = data.data.tools
    showCards(cards)

}

//show card
const showCards=(cards)=>{
    const cardContainer = document.getElementById('card-container')

    cards.forEach(card => {
    
        const Div = document.createElement('div');
        Div.innerHTML =
        ` 
        
        <figure class="px-6 pt-6">
        <img src="${card.image}" alt="AI image" class="rounded-xl" />
    </figure>
    <div class="card-body">
        <h2 class="font-semibold card-title pb-3">Features</h2>
        <ol type="1" class="list-decimal list-inside pb-4">
                <li>
                ${card?.features[0]}
                </li>
                <li>
                    ${card?.features[1]}
                </li>
                <li>
                    ${card?.features[2]}
                </li>
                </ol>
        <hr >
        <div class="flex justify-between pt-4">
                    <div >
                    <h2 id="name" class="card-title font-semibold">${card.name}</h2>
                    <div class="flex gap-2">
                    <img src="./images/Frame.svg" alt="">
                    <p>${card.published_in}</p>
                    </div>
                    </div>
                    
                    <div class="card-actions flex justify-end">
                    <button id='${card.id}' onclick="modalDisplay('${card.id}')" class="bg-[#FEF7F7] rounded-full p-3 hover:bg-[#ff9c9c]"><img src="./images/Frame (1).png" alt=""></button>
                    </div>
                    </div>
                    </div>
                    
                    
                    `;
        
            
        Div.classList.add('rounded-lg' ,'border' ,'border-solid' ,'border-opacity-10','border-gray-600', 'bg-white')
        cardContainer.appendChild(Div);
    
       
    });
    
   
}

loadData()


//select single:
const modalDisplay=async(id)=>{
    ID=id
    const res = await fetch (`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json()
    const modal = data.data
    console.log(modal)
    
    const modalContainer = document.getElementById('modal_html-container')
    modalContainer.innerHTML=''
    const newDiv= document.createElement('div')
    newDiv.classList.add('rounded-lg' ,'border' ,'border-[#EB5757]', 'bg-[#EB5757]', 'bg-opacity-5','p-6')
    
    newDiv.innerHTML= `
    <h3 class="font-bold text-lg">${modal?.description}</h3>
    
    <div class="flex justify-between my-6 p-4">
    <p class="text-green-600 text-base text-center font-semibold">${modal?.pricing[0]?.price} <br> ${modal?.pricing[0]?.plan}</p>
    <p class="text-yellow-600 text-base text-center font-semibold">${modal?.pricing[1]?.price} <br> ${modal?.pricing[1]?.plan}</p>
    <p class="text-red-600 text-base text-center font-semibold">${modal?.pricing[2]?.price} <br> ${modal?.pricing[2]?.plan}</p>
    </div>
    <div class="flex gap-4">
        <div>
            <h2 class="font-semibold text-lg pb-3">Features</h2>
            <ul  class="list-inside list-disc pb-4 text-base text-[#585858]">
            <li>
            ${modal?.features?.['1']?.feature_name}
            </li>
            <li>
            ${modal?.features?.['2']?.feature_name}
            </li>
            <li>
            ${modal?.features?.['3']?.feature_name}
            </li>
            </ul>
        </div>
        
        <div>
            <h2 class="font-semibold text-lg pb-3">Integrations</h2>
            <ol  class="list-inside list-disc pb-4 text-base text-[#585858]">
            <li>
            ${modal?.integrations[0]}
            </li>
            <li>
                ${modal?.integrations[1]}
            </li>
            <li>
                ${modal?.integrations[2]}
            </li>
            </ol>
        </div>
      
    </div>
    `
    modalContainer.appendChild(newDiv)

    const newDiv2= document.createElement('div')
    newDiv.classList.add('bg-white')
    const accuracy= (modal?.accuracy?.score)*100
  
    

    newDiv2.innerHTML= `   
    <div>
    <figure class="relative">
    <img src="${modal?.image_link[0]}" alt="AI image" class="rounded-xl" />
    <p class="absolute top-1 bg-[#EB5757] rounded-lg text-white font-semibold text-center bottom-100 right-1 px-4">${accuracy}% accuracy</p>

    </figure>
<div class="text-center p-4 ">
    <p class="font-semibold text-2xl">${modal?.input_output_examples[0]?.input}</p>
    <p class="text-base text-[#585858]">${modal?.input_output_examples[0]?.output}</p>

     </div>    
     </div>  
    `
    newDiv2.classList.add('border', 'border-solid', 'rounded-lg', 'border-opacity-10', 'border-gray-600', 'bg-white', 'p-6')
    modalContainer.appendChild(newDiv2)


    // Show the modal
    const myModal = document.getElementById('my_modal_5');
    myModal.showModal();


}

console.log(card);


// sorting by publish date
// const sortByDate = async(ID)=>{
//     const res = await fetch (`https://openapi.programming-hero.com/api/ai/tool/${ID}`)
//     const data = await res.json() 
//     const sortData = data.data.sort((a,b)=>{
//        let previous = a.others
//        let next =  b.others?.views.slice(0, -1)
//         return  next - previous
        
//     })
  
//     showCards(sortData)
  
  
//   }