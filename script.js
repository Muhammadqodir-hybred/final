let cartItems = [];
let likeItems = [];

const getElements = () => ({
    overlay: document.getElementById("overlay"),
    cartSidebar: document.getElementById("cartSidebar"),
    likeSidebar: document.getElementById("likeSidebar"),
    cartList: document.getElementById("cartItemsList"),
    likeList: document.getElementById("likeItemsList")
});

function closeAll() {
    const { cartSidebar, likeSidebar, overlay } = getElements();
    cartSidebar?.classList.remove("active");
    likeSidebar?.classList.remove("active");
    overlay?.classList.remove("active");
}

function toggleSidebar(targetType) {
    const { cartSidebar, likeSidebar, overlay } = getElements();
    
    const target = targetType === 'cart' ? cartSidebar : likeSidebar;
    const sibling = targetType === 'cart' ? likeSidebar : cartSidebar;
    
    sibling?.classList.remove("active");
    
    if (target?.classList.contains("active")) {
        target.classList.remove("active");
        overlay?.classList.remove("active");
    } else {
        target?.classList.add("active");
        overlay?.classList.add("active");
    }
}

const toggleCart = () => toggleSidebar('cart');
const toggleLike = () => toggleSidebar('like');

function renderList(itemsArray, targetElement, emptyMessage) {
    if (!targetElement) return;
    
    if (itemsArray.length === 0) {
        targetElement.innerHTML = `<p class="empty-msg">${emptyMessage}</p>`;
        return;
    }
    
    targetElement.innerHTML = "";
    
    itemsArray.forEach(item => {
        const div = document.createElement("div");
        div.className = "sidebar-item";
        div.textContent = item;
        targetElement.appendChild(div);
    });
}

const renderCart = () => renderList(cartItems, getElements().cartList, "Savatingiz hozircha bo'sh.");
const renderLike = () => renderList(likeItems, getElements().likeList, "Saralanganlar hozircha bo'sh.");

function addToCart(productName) {
    cartItems = [...cartItems, productName];
    renderCart();
    
    const { cartSidebar, likeSidebar, overlay } = getElements();
    likeSidebar?.classList.remove("active");
    cartSidebar?.classList.add("active");
    overlay?.classList.add("active");
}

function addToLike(productName) {
    if (!likeItems.includes(productName)) {
        likeItems = [...likeItems, productName];
    }
    renderLike();
    
    const { cartSidebar, likeSidebar, overlay } = getElements();
    cartSidebar?.classList.remove("active");
    likeSidebar?.classList.add("active");
    overlay?.classList.add("active");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
});
