let cartItems = [];
let likeItems = [];

function openOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay) overlay.classList.add("active");
}

function closeAll() {
    document.getElementById("cartSidebar").classList.remove("active");
    document.getElementById("likeSidebar").classList.remove("active");
    const overlay = document.getElementById("overlay");
    if (overlay) overlay.classList.remove("active");
}

function toggleCart() {
    const cart = document.getElementById("cartSidebar");
    const like = document.getElementById("likeSidebar");
    const isOpen = cart.classList.contains("active");
    like.classList.remove("active");
    if (isOpen) {
        cart.classList.remove("active");
        const overlay = document.getElementById("overlay");
        if (overlay) overlay.classList.remove("active");
    } else {
        cart.classList.add("active");
        openOverlay();
    }
}

function toggleLike() {
    const like = document.getElementById("likeSidebar");
    const cart = document.getElementById("cartSidebar");
    const isOpen = like.classList.contains("active");
    cart.classList.remove("active");
    if (isOpen) {
        like.classList.remove("active");
        const overlay = document.getElementById("overlay");
        if (overlay) overlay.classList.remove("active");
    } else {
        like.classList.add("active");
        openOverlay();
    }
}

function renderCart() {
    const listDiv = document.getElementById("cartItemsList");
    if (!listDiv) return;
    if (cartItems.length === 0) {
        listDiv.innerHTML = '<p class="empty-msg">Savatingiz hozircha bo\'sh.</p>';
        return;
    }
    listDiv.innerHTML = "";
    cartItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "sidebar-item";
        div.innerText = " " + item;
        listDiv.appendChild(div);
    });
}

function renderLike() {
    const listDiv = document.getElementById("likeItemsList");
    if (!listDiv) return;
    if (likeItems.length === 0) {
        listDiv.innerHTML = '<p class="empty-msg">Saralanganlar hozircha bo\'sh.</p>';
        return;
    }
    listDiv.innerHTML = "";
    likeItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "sidebar-item";
        div.innerText = " " + item;
        listDiv.appendChild(div);
    });
}

function addToCart(productName) {
    cartItems.push(productName);
    renderCart();
    const cart = document.getElementById("cartSidebar");
    const like = document.getElementById("likeSidebar");
    like.classList.remove("active");
    cart.classList.add("active");
    openOverlay();
}

function addToLike(productName) {
    if (!likeItems.includes(productName)) {
        likeItems.push(productName);
    }
    renderLike();
    const like = document.getElementById("likeSidebar");
    const cart = document.getElementById("cartSidebar");
    cart.classList.remove("active");
    like.classList.add("active");
    openOverlay();
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeAll();
});
