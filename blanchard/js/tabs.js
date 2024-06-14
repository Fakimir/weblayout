document.querySelectorAll(".catalog__link").forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;
        const screenWidth = window.screen.width

        document.querySelectorAll(".tabs-content").forEach(function(tabContent) {
            tabContent.classList.remove("tab-content-active");
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active");

        document.querySelectorAll(".catalog__link").forEach(function(tabContent) {
            tabContent.classList.remove("catalog__link--active");
        })
        document.querySelector(`[data-path="${path}"]`).classList.add("catalog__link--active");
        $("#accordion").accordion('refresh')
    })
})

document.querySelectorAll(".accordion__text").forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;
        const screenWidth = window.screen.width

        document.querySelectorAll(".tabs-content__left__drawers").forEach(function(tabContent) {
            tabContent.classList.remove("tab-content-active");
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active");

        document.querySelectorAll(".accordion__text").forEach(function(tabContent) {
            tabContent.classList.remove("accordion__text--active");
        })
        document.querySelector(`[data-path="${path}"]`).classList.add("accordion__text--active");
        $("#accordion").accordion('refresh')
    })
})

document.querySelectorAll(".gallery-slide").forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll(".overlay").forEach(function(tabContent) {
            tabContent.classList.remove("tab-content-modal-active");
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-modal-active");

        document.querySelectorAll(".overlay").forEach(function(tabContent) {
            tabContent.classList.remove("gallery-slide--active");
        })
        document.querySelector(`[data-path="${path}"]`).classList.add("gallery-slide--active");
    })
})