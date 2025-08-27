// heart button configuration
document.getElementById("main-cards-container").addEventListener("click", function (event) {
    if (event.target.className.includes("heart-icon")) {
        let heartsCounter = Number(document.getElementById("hearts-counter").innerText);
        let newHearts = heartsCounter + 1;
        document.getElementById("hearts-counter").innerText = newHearts;
    }
})

//copy button configuration 
document.getElementById("main-cards-container").addEventListener("click", function (event) {
    if (event.target.className.includes("copy-button")) {
        let copyCounter = Number(document.getElementById("copy-counter").innerText);
        let newCopy = copyCounter + 1;
        document.getElementById("copy-counter").innerText = newCopy;
        alert("You heat the copy button");
    }
})

//call button configuration 
document.getElementById("main-cards-container").addEventListener("click", function (event) {
    if (event.target.className.includes("call-button")) {
        let callBtn = event.target,
            cardName = callBtn.parentNode.parentNode.parentNode.children[1].children[0].innerText,
            cardNumber = callBtn.parentNode.parentNode.parentNode.children[1].children[2].innerText,
            coinCounter = Number(document.getElementById("coin-counter").innerText),
            time = new Date().toLocaleTimeString(),
            newCoinCounter = coinCounter - 20;
        if (coinCounter < 20) {
            alert("You don't have enough coin to take the service");
            return;
        }
        document.getElementById("coin-counter").innerText = newCoinCounter;

        let historySection = document.getElementById("history-section");
        let div = document.createElement("div");
        div.innerHTML = `
                    <div class="flex justify-between items-center py-[8px] px-[10px] rounded-[8px] bg-[#FAFAFA] gap-[4px] mt-[28px] mb-[24px]">
						<div class="name-number">
							<p class="hind-madurai-regular text-[18px] font-[400] text-[#111]">${cardName}</p>
							<p class="hind-madurai-regular text-[18px] font-[400] text-[#5C5C5C]">${cardNumber}</p>
						</div>
						<div class="time">
							<p class="hind-madurai-regular text-[18px] font-[400] text-[#111]">${time}</p>
						</div>
					</div>
        `
        historySection.appendChild(div);
    }
})

//clear button configuration
let clearBtn = document.getElementById("clear-button").addEventListener("click", function(){
    document.getElementById("history-section").innerText = "";
})