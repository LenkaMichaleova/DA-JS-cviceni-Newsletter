const newsletterElm = document.querySelector(".newsletter")
const email = document.querySelector(".email")

email.addEventListener("input", (e) => {
    e.preventDefault()
    if (email.value.length === 0 || !email.value.includes("@")) {
        email.classList.add("email--wrong")

    } else {
        email.classList.remove("email--wrong")
        newsletterElm.addEventListener("submit", (e) => {
            e.preventDefault()
        
            newsletterElm.innerHTML = `
            <p>Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email.value}</p>
            `
        })
    }
})