window.mobilesidebar = {}

mobilesidebar.contenttooverlay = function () {
    const sidebaroverlaycontent = document.querySelector(".sidebar-overlay-content");
    const sidebarcontent = document.querySelector(".sidebar");
    sidebaroverlaycontent.appendChild(sidebarcontent.children[0]);
}

mobilesidebar.overlaytocontent = function () {
    const sidebarcontent = document.querySelector(".sidebar");
    const sidebaroverlaycontent = document.querySelector(".sidebar-overlay-content");
    sidebarcontent.appendChild(sidebaroverlaycontent.children[0]);
}

mobilesidebar.opensidebar = function () {
    const sidebarhtml = '<div class="sidebar-overlay"><div class="sidebar-overlay-content"></div><div id="close-sidebar"><img src="graphics/cancel.png" height="32px"></div></div>'
    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", sidebarhtml);
    mobilesidebar.contenttooverlay();
    document.getElementById("close-sidebar").addEventListener("click", () => {
        mobilesidebar.overlaytocontent();
        document.querySelector(".sidebar-overlay").remove();
    })
}
