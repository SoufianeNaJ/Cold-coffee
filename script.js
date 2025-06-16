let showMenu = document.querySelector(".show_menu");
let closeMenu = document.querySelector(".close_menu");
let ul = document.querySelector("ul");
let menu = document.querySelector(".menu");
let allCart = document.querySelector(".all_cart")
let popular = document.querySelectorAll("ul a")
let retur = document.querySelector(".return")

if (showMenu) {
    showMenu.addEventListener("click", function() {
        ul.style.marginLeft = "0"
        closeMenu.style.display = "block"
        showMenu.style.display = "none"
    })
}

if (closeMenu) {
    closeMenu.addEventListener("click", function() {
        ul.style.marginLeft = "120%"
        showMenu.style.display = "block"
        closeMenu.style.display = "none"
    })
}

window.onscroll = function() {
    menu.style.cssText = "background: hsl(166, 56%, 18%)"
    if (window.pageYOffset >= 415) {
        retur.style.cssText = "animation: hop 1s;"
        retur.style.display = "block"
    }
    else{
        retur.style.display = "none"
    }

    if (window.scrollY >= 3226) {
        document.querySelectorAll("footer article").forEach((el) => {
            el.style.cssText = "animation: visiblity 1s, key 1.8s"
        })
        document.querySelector("footer .copyright").style.cssText = "animation: visiblity 2s, key 3s"
    }
}


let Requet = new XMLHttpRequest();

Requet.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        data.forEach((el) => {
            allCart.innerHTML += 
            `
            <div class="item_cart">
                <div class="bg_home"></div>
                <img src="images/${el.img}" alt="image" class="cold_coffee">
                <img src="images/caféengrains.png.png" alt="image" class="bean_1">
                <img src="images/caféengrains.png.png" alt="image" class="bean_2">
                <div class="content">
                    <h3>${el.title}</h3>
                    <p>${el.paragraph}</p>
                    <button>Order now: $19:90</button>
                </div>
            </div>
            <button onclick="nextElement()" class="next_btn"><i class="fa-solid fa-chevron-right"></i></button>
            <button onclick="prevElement()" class="prev_btn"><i class="fa-solid fa-chevron-left"></i></button>
            `
        })
    }
}
Requet.open("GET", "product.json");
Requet.send();

let inext = 3;
function nextElement() {
    let itemCart = document.querySelectorAll(".all_cart > .item_cart")
    itemCart.forEach((el) => {
        el.style.cssText = `transform: translatex(-${inext}00px);`
    })
    if (inext < itemCart.length) {
        inext += 3
    }
}
popular[1].addEventListener("click", function() {
    allCart.style.cssText = "animation: visiblity 0.7s, products 2s;"
    window.scroll(0, document.body.scrollHeight)
})

popular[2].addEventListener("click", function() {
    document.querySelector("#about .content").style.cssText = "animation: visiblity 1s, about 2s;"
    document.querySelector("#about .cercle").style.cssText = "animation: visiblity 1s, photo 2s;"
    document.querySelector("#about .coffe").style.cssText = "animation: visiblity 1.8s, footer 2.8s;"
    document.querySelector("#about .bean1").style.cssText = "animation: visiblity 2.3s, bean1 3s;"
    document.querySelector("#about .bean2").style.cssText = "animation: visiblity 2.3s, bean1 3s;"
})

popular[4].addEventListener("click", function() {
    document.querySelector("#contact .write").style.cssText = "animation: visiblity 1s, cold 2s;"
    document.querySelector("#contact .location").style.cssText = "animation: visiblity 1s, cold 2s;"
    document.querySelector("#contact .delivery").style.cssText = "animation: visiblity 1s, cold 2s;"
    document.querySelector("#contact .attention").style.cssText = "animation: visiblity 1s, cold 2s;"
    document.querySelector("#contact .del").style.cssText = "animation: visiblity 1.7s, del 2.7s;"
    document.querySelector("#contact .del img").style.cssText = "animation: visiblity 2.4s, cold 3.5s;"
})

let iprev = 2;
function prevElement() {
    let itemCart = document.querySelectorAll(".all_cart > .item_cart")
    itemCart.forEach((el) => {
        el.style.cssText = `transform: translatex(${iprev}px);`
    })
    if (iprev < itemCart.length) {
        iprev++
    }
}

popular.forEach((el) => {
    el.addEventListener("click", function() {
        if (!el.classList.contains("active")) {
            popular.forEach((item) => {
                item.classList.remove("active")
            })
            el.classList.add("active")
        }
    })
})

retur.addEventListener("click", function() {
    window.scrollTo(0, 0);
})
