// Hold all Elements Needed

    // Input Elements
let vendorInput = document.getElementById('venIn'),
    mediaInput = document.getElementById('medIn'),
    corpInput = document.getElementById('corIn'),
    teamInput = document.getElementById('teIn'),
    

    // Buttons
    Brex_btn = document.getElementById('breBtn'),
    Stripe_btn = document.getElementById('striBtn'),
    Amex_btn = document.getElementById('ameBtn'),
    allBtns = document.querySelector('#brandContainer').querySelectorAll('button'),

    // Result View
    unlimited_Result = document.getElementById('unliResult'),
    lifetime_result = document.getElementById('lifeResult'),
    

    // Selected card Amount & ProgressBar
    brand_label = document.getElementById('branLabel'),
    brand_Bar = document.getElementById('branBar'),
    brand_Result = document.getElementById('branResult'),

    //CardContainer Selector
    card_Container = document.getElementById('Card'),

    lifetime_Bar = document.getElementById('lifeBar'),
    shadow_Selector = document.getElementById('shadow')



allBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        if(vendorInput.value === "" || mediaInput.value ==="" || corpInput.value === "" || teamInput.value === ""){
            alert("Pleas Enter A Number!..")
        } else {
            btn.classList.add('btnsEffect')
            allBtns.forEach(butt => {
                    let sum = (vendorInput.value + mediaInput.value + corpInput.value + teamInput.value) || 0,
                    unlimited_Rewards = (sum * 1.1),
                    liftime_Rewards = (sum * 1.2) 
    
                if(butt.classList.contains('selected_Btn')) {
                    butt.classList.remove('selected_Btn')
                }
    
                this.classList.add('selected_Btn')
                brand_Bar.classList.add('branBar')
                brand_label.classList.add('branBar')
                card_Container.classList.add('cardAfterEffect')
                lifetime_Bar.classList.add('lifeTimeBar')
                shadow_Selector.classList.add('shadow')

                brand_label.innerHTML = this.innerText + " Bussiness Card"
                unlimited_Result.innerHTML = "$"+unlimited_Rewards
                lifetime_result.innerHTML = "$"+liftime_Rewards 
                if(this.innerHTML === "Brex"){
                    let Brex = sum * 0.3
                    brand_Result.innerHTML = "$"+Brex
                }else if(this.innerHTML === "Stripe"){
                    let Stripe = sum * 2.9
                    brand_Result.innerHTML = "$"+Stripe
                }else {
                    let Amex = sum * 1.3
                    brand_Result.innerHTML = "$"+Amex
                }
                brand_Result.classList.add('branBar')
                
                
            })
        }
    })
})
   



