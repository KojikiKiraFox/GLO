const tabsButtons = document.querySelectorAll(".design-list__item"),
    tabsContent = document.querySelectorAll(".design__descr"),
    tabsImages = document.querySelectorAll(".design-images"),
    tabsMainImages = document.querySelectorAll(".feature__img"),
    tabsTitle = document.querySelectorAll(".design__title");

const changeContent = (elements, value) => {
    elements.forEach(elem => {
        if(elem.dataset.tabsField === value) {
            elem.classList.remove("hidden")
        } else {
            elem.classList.add("hidden")
        }
    })
}

tabsButtons.forEach(tabsButton => {
    tabsButton.addEventListener("click", (e) => {
        
        const dataValue = e.target.dataset.tabsHandler;

        changeContent(tabsContent, dataValue);
        changeContent(tabsImages, dataValue);
        changeContent(tabsMainImages, dataValue);
        changeContent(tabsTitle, dataValue);

        tabsTitle.forEach(title => {
            if(!title.classList.contains("hidden")) {
                document.title = title.innerText;
            }
        })

        tabsButtons.forEach(btn => {
            if(btn === e.target) {
                btn.classList.add("design-list__item_active")
            } else {
                btn.classList.remove("design-list__item_active")
            }
        })
    })
})