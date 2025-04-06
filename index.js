newsletterElm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newsletterElm = document.querySelector(".newsletter")
    const email = document.querySelector(".email").value
    
    newsletterElm.innerHTML = `
    <p>Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}</p>
    `
})