console.log("JS file added")

const bodyTag = document.querySelector("body")

bodyTag.innerHTML += `

<section id="emojis">
    <h1>New Emojis</h1>
</section>

<section id="emojis">
    <h2>Buy one & Get one free!</h2>
        <div class="grid-container">
            <div class="grid-item">&#127800 1</div>
            <div class="grid-item">&#127855 2</div>
            <div class="grid-item">&#127801 3</div>  
            <div class="grid-item">&#127802 4</div>
            <div class="grid-item">&#127796 5</div>
            <div class="grid-item">&#127807 6</div>  
            <div class="grid-item">&#127805 7</div>
            <div class="grid-item">&#127818 8</div>
            <div class="grid-item">&#127799 9</div> 
            <div class="grid-item">&#127867 10</div>
            <div class="grid-item">&#127874 11</div>  
            <div class="grid-item">&#127818 12</div>
        </div>
</section>
`

bodyTag.innerHTML += `
<section id="emojis">
    <h2>Emoji Decimal List</h2>
    <ul id="emojiList"></ul>
</section>
`
let emojis = ["1 = 127800", "2 = 127855", "3 = 127801", "4 = 127802", "5 = 127796", "6 = 127807", "7 = 127805", "8 = 127818", "9 = 127799", "10 = 127863", "11 = 127867", "12 = 127874"]
const emojiUl = document.getElementById("emojiList")

for(item of emojis){
    //insterAdjacentHTML method accepts two parameters where the HTML should be added and what HTML to add
    emojiUl.insertAdjacentHTML("beforeend", `<li>${item}</li>`)
}