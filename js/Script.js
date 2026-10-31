
// رسالة ترحيب بموقع تراثنا
alert("مرحباً بكم في موقع تراثنا الثقافي");

// عرض رسالة في وحدة التحكم
console.log("أهلاً بكم في TURATHUNA");

// البحث عن المنتجات
let searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        let searchText = searchInput.value.toLowerCase();

        let products = document.querySelectorAll("main section, .product");

        products.forEach(function(product) {

            let productName = product.textContent.toLowerCase();

            if (productName.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });
}



let cartCount = 0;
let totalPrice = 0;

function addToCart(productName) {

  let prices = {
    "البخور": 8000,
    "الحرف اليدوية": 15000,
    "منتجات الفخار": 12000,
    "الثوب السوداني": 25000
};

    if (prices[productName] === undefined) {
        alert("سعر هذا المنتج لم يحدد بعد");
        return;
    }

    cartCount++;
    totalPrice += prices[productName];

    document.getElementById("cartCount").textContent = cartCount;

    document.getElementById("totalPrice").textContent = totalPrice.toLocaleString("en-US");

    alert("تمت إضافة " + productName + " إلى السلة 🛒");
}

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "" || password === "") {

            alert("الرجاء إدخال البريد الإلكتروني وكلمة المرور");

        } else if (password.length < 6) {

            alert("كلمة المرور يجب ألا تقل عن 6 أحرف");

        } else {

            alert("تم التحقق من البيانات بنجاح! مرحباً بك في تراثنا ❤️");

        }

    });

}
