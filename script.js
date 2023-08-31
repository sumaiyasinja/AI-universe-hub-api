//Main API implemented here
const loadData=async()=>{
    const res = await fetch ('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json()
    cards = data.data.tools
    // console.log(cards)
    showCards(cards)

}


const showCards=(cards)=>{
    const cardContainer = document.getElementById('card-container')

    cards.forEach(card => {

        console.log(card);
    
        const div = document.createElement('div');
        div.innerHTML =
            ` <figure class="px-10 pt-10">
                <img src="${card.image}" alt="AI image" class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="font-semibold card-title">Features</h2>
                <ol type="1" class="list-decimal list-inside">
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
                <hr>
                <div>
                    <h2 id="name" class="card-title font-semibold">${card.name}</h2>
                    <div class="flex">
                        <img src="./images/Frame.svg" alt="">
                        <p>${card.published_in}</p>
                    </div>
                </div>
    
                <div class="card-actions flex justify-end">
                    <button onclick="my_modal_5.showModal()" class="bg-[#FEF7F7] rounded-full p-2"><img src="./images/Frame (1).png" alt=""></button>
                </div>
            </div>
        `;
       
        cardContainer.appendChild(div);
    
       
    });
    

}

loadData()