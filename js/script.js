const tabsButtons = document.querySelectorAll(".design-listitem"),
    tabsContent = document.querySelectorAll(".designdescr"),
    tabsImages = document.querySelectorAll(".design-images"),
    tabsMainImages = document.querySelectorAll(".featureimg"),
    tabsTitle = document.querySelectorAll(".designtitle");

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
                console.log(title, title.innerText);
                document.title = title.innerText;
            }
        })

        tabsButtons.forEach(btn => {
            if(btn === e.target) {
                btn.classList.add("design-listitem_active")
            } else {
                btn.classList.remove("design-listitem_active")
            }
        })
    })
})