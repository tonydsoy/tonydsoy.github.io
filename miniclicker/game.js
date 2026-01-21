document.addEventListener('DOMContentLoaded',function() {
    const htmlcookies = document.getElementById("cookies");
    const htmlcookiebutton = document.getElementById("clickcookie");
    const htmlcps = document.getElementById("cps");

    const htmlbuyclickerbutton = document.getElementById("buyclicker");
    const htmlclickerprices = document.getElementById("clickerprice")
    const htmlclickers = document.getElementById("clickers")

    const htmlbuygrannybutton = document.getElementById("buygranny");
    const htmlgrannyprices = document.getElementById("grannyprice")
    const htmlgrannys = document.getElementById("grannys")

    const htmlbuyfarmbutton = document.getElementById("buyfarm");
    const htmlfarmprices = document.getElementById("farmprice")
    const htmlfarms = document.getElementById("farms")

    const htmlbuyminebutton = document.getElementById("buymine");
    const htmlmineprices = document.getElementById("mineprice")
    const htmlmines = document.getElementById("mines")


    const htmludoubleclick0 = document.getElementById("udoubleclick0");
    const htmlubuydoubleclick0 = document.getElementById("ubuydoubleclick0");

    const htmludoubleclick1 = document.getElementById("udoubleclick1");
    const htmlubuydoubleclick1 = document.getElementById("ubuydoubleclick1");

    const htmludoubleclick2 = document.getElementById("udoubleclick2");
    const htmlubuydoubleclick2 = document.getElementById("ubuydoubleclick2");

    const htmludoublegranny0 = document.getElementById("udoublegranny0");
    const htmlubuydoublegranny0 = document.getElementById("ubuydoublegranny0");

    const htmludoublegranny1 = document.getElementById("udoublegranny1");
    const htmlubuydoublegranny1 = document.getElementById("ubuydoublegranny1");

    const htmludoublegranny2 = document.getElementById("udoublegranny2");
    const htmlubuydoublegranny2 = document.getElementById("ubuydoublegranny2");

    const htmludoublefarm0 = document.getElementById("udoublefarm0");
    const htmlubuydoublefarm0 = document.getElementById("ubuydoublefarm0");

    const htmludoublefarm1 = document.getElementById("udoublefarm1");
    const htmlubuydoublefarm1 = document.getElementById("ubuydoublefarm1");

    const htmludoublefarm2 = document.getElementById("udoublefarm2");
    const htmlubuydoublefarm2 = document.getElementById("ubuydoublefarm2");

    const htmludoublemine0 = document.getElementById("udoublemine0");
    const htmlubuydoublemine0 = document.getElementById("ubuydoublemine0");

    const htmludoublemine1 = document.getElementById("udoublemine1");
    const htmlubuydoublemine1 = document.getElementById("ubuydoublemine1");

    const htmludoublemine2 = document.getElementById("udoublemine2");
    const htmlubuydoublemine2 = document.getElementById("ubuydoublemine2");

    // stats

    const htmlstatscookies = document.getElementById("statscookies")
    const htmlstatscps = document.getElementsByClassName("statscps")

    const htmlsclickerpower = document.getElementById("sclickerpower")
    const htmlsgrannypower = document.getElementById("sgrannypower")
    const htmlsfarmpower = document.getElementById("sfarmpower")
    const htmlsminepower = document.getElementById("sminepower")

    // very important variables

    var cps = 1;
    var cookies = 0.0;

    // switch menus

    var currentmenu = 0;
    const htmlupgradebutton = document.getElementById("upgrbutton");
    const htmlshopbutton = document.getElementById("shopbutton");
    const htmlstatsbutton = document.getElementById("statsbutton")
    htmlshopbutton.style.textDecoration = "underline";

    const htmlshop = document.getElementById("shop");
    const htmlupgrades = document.getElementById("upgrades");
    const htmlstats = document.getElementById("stats")

    function updatemenu() {
        if (currentmenu == 0) {
            htmlshopbutton.style.textDecoration = "underline";
            htmlupgradebutton.style.textDecoration = "none";
            htmlstatsbutton.style.textDecoration = "none";

            htmlshop.style.display = "block";
            htmlupgrades.style.display = "none";
            htmlstats.style.display = "none";
        } else if (currentmenu == 1) {
            htmlshopbutton.style.textDecoration = "none";
            htmlupgradebutton.style.textDecoration = "underline";
            htmlstatsbutton.style.textDecoration = "none";

            htmlshop.style.display = "none";
            htmlupgrades.style.display = "block";
            htmlstats.style.display = "none";
        } else if (currentmenu == 2) {
            htmlshopbutton.style.textDecoration = "none";
            htmlupgradebutton.style.textDecoration = "none";
            htmlstatsbutton.style.textDecoration = "underline";

            htmlshop.style.display = "none";
            htmlupgrades.style.display = "none";
            htmlstats.style.display = "block";
        }
    }

    htmlupgradebutton.addEventListener("click",function(){
        currentmenu = 1;
        updatemenu();
    })

    htmlshopbutton.addEventListener("click",function(){
        currentmenu = 0;
        updatemenu();
    })

    htmlstatsbutton.addEventListener("click",function(){
        currentmenu = 2;
        updatemenu();
    })

    // i like shopping i like shopping

    var clickers = 0;
    var clickerprice = 15;
    var cookiesperclickandauto = 1;

    var clickeru0 = false;
    var clickeru1 = false;
    var clickeru2 = false;
    
    var grannyu0 = false;
    var grannyu1 = false;
    var grannyu2 = false;

    var farmu0 = false;
    var farmu1 = false;
    var farmu2 = false;

    var mineu0 = false;
    var mineu1 = false;
    var mineu2 = false;

    var grannys = 0;
    var grannyprice = 100;
    var grannypower = 1;

    var farms = 0;
    var farmprice = 1100;
    var farmpower = 8;

    var mines = 0;
    var mineprice = 12000;
    var minepower = 47;

    function getBuildingPrice(baseCost,owned) {
        var price = baseCost * Math.pow(1.15,owned);
        return Math.ceil(price);
    }

    function updateprices() {
        clickerprice = getBuildingPrice(15,clickers);
        grannyprice = getBuildingPrice(100,grannys);
        farmprice = getBuildingPrice(1100,farms);
        mineprice = getBuildingPrice(12000,mines);
        cps = (clickers*(cookiesperclickandauto/10))+(grannys*grannypower)+(farms*farmpower)+(mines*minepower);
        cps = Math.round(cps*10)/10;

        var clickerscps = clickers*(cookiesperclickandauto/10);
        var grannycps = grannys*grannypower
        var farmcps = farms*farmpower
        var minecps = mines*minepower

        htmlsclickerpower.textContent = clickerscps;
        htmlsgrannypower.textContent = grannycps;
        htmlsfarmpower.textContent = farmcps;
        htmlsminepower.textContent = minecps;

        if (clickers == 1) {
            if (!clickeru0) htmludoubleclick0.style.display = "block";
            if (!clickeru1) htmludoubleclick1.style.display = "block";
        }
        if (clickers == 10) {
            if (!clickeru2) htmludoubleclick2.style.display = "block";
        }

        if (grannys == 1) {
            if (!grannyu0) htmludoublegranny0.style.display = "block";   
        }
        if (grannys == 5) {
            if (!grannyu1) htmludoublegranny1.style.display = "block";
        }
        if (grannys == 25) {
            if (!grannyu2) htmludoublegranny2.style.display = "block";
        }

        if (farms == 1) {
            if (!farmu0) htmludoublefarm0.style.display = "block";
        }
        if (farms == 5) {
            if (!farmu1) htmludoublefarm1.style.display = "block";
        }
        if (farms == 25) {
            if (!farmu2) htmludoublefarm2.style.display = "block";
        }

        if (mines == 1) {
            if (!mineu0) htmludoublemine0.style.display = "block";
        }
        if (mines == 5) {
            if (!mineu1) htmludoublemine1.style.display = "block";
        }
        if (mines == 25) {
            if (!mineu2) htmludoublemine2.style.display = "block";
        }

        htmlcps.textContent = cps;
        htmlstatscookies.textContent = Math.floor(cookies);
        htmlstatscps.textContent = cps;
        htmlcookies.textContent = Math.floor(cookies);
        htmlclickerprices.textContent = clickerprice;
        htmlclickers.textContent = clickers;

        htmlgrannyprices.textContent = grannyprice;
        htmlgrannys.textContent = grannys;

        htmlfarmprices.textContent = farmprice;
        htmlfarms.textContent = farms;

        htmlmineprices.textContent = mineprice;
        htmlmines.textContent = mines;
    }

    function addcookie(howmuch) {
        cookies += howmuch;
        updateprices();
    }
    
    htmlcookiebutton.addEventListener("click",function(){
        addcookie(cookiesperclickandauto);
    })
    // buildings
    htmlbuyclickerbutton.addEventListener("click",function(){
        if (cookies >= clickerprice) {
            cookies -= clickerprice;
            clickers += 1;
            updateprices();
        }
    })
    
    htmlbuygrannybutton.addEventListener("click",function(){
        if (cookies >= grannyprice) {
            cookies -= grannyprice;
            grannys += 1;
            updateprices();
        }
    })
    
    htmlbuyfarmbutton.addEventListener("click",function(){
        if (cookies >= farmprice) {
            cookies -= farmprice;
            farms += 1;
            updateprices();
        }
    })

    htmlbuyminebutton.addEventListener("click",function(){
        if (cookies >= mineprice) {
            cookies -= mineprice;
            mines += 1;
            updateprices();
        }
    })

    // upgrades

    htmlubuydoubleclick0.addEventListener("click",function(){
        if (cookies >= 100) {
            cookies -= 100
            htmludoubleclick0.style.display = "none";
            clickeru0 = true;
            cookiesperclickandauto *= 2;
            updateprices();
        }
    })

    htmlubuydoubleclick1.addEventListener("click",function(){
        if (cookies >= 500) {
            cookies -= 500
            htmludoubleclick1.style.display = "none";
            clickeru1 = true;
            cookiesperclickandauto *= 2;
            updateprices();
        }
    })

    htmlubuydoubleclick2.addEventListener("click",function(){
        if (cookies >= 10000) {
            cookies -= 10000
            htmludoubleclick2.style.display = "none";
            clickeru2 = true;
            cookiesperclickandauto *= 2;
            updateprices();
        }
    })

    htmlubuydoublegranny0.addEventListener("click",function(){
        if (cookies >= 1000) {
            cookies -= 1000
            htmludoublegranny0.style.display = "none";
            grannyu0 = true;
            grannypower *= 2;
            updateprices();
        }
    })

    htmlubuydoublegranny1.addEventListener("click",function(){
        if (cookies >= 5000) {
            cookies -= 5000
            htmludoublegranny1.style.display = "none";
            grannyu1 = true;
            grannypower *= 2;
            updateprices();
        }
    })

    htmlubuydoublegranny2.addEventListener("click",function(){
        if (cookies >= 50000) {
            cookies -= 50000
            htmludoublegranny2.style.display = "none";
            grannyu2 = true;
            grannypower *= 2;
            updateprices();
        }
    })

    htmlubuydoublefarm0.addEventListener("click",function(){
        if (cookies >= 11000) {
            cookies -= 11000
            htmludoublefarm0.style.display = "none";
            farmu0 = true;
            farmpower *= 2;
            updateprices();
        }
    })

    htmlubuydoublefarm1.addEventListener("click",function(){
        if (cookies >= 55000) {
            cookies -= 55000
            htmludoublefarm1.style.display = "none";
            farmu1 = true;
            farmpower *= 2;
            updateprices();
        }
    })

    htmlubuydoublefarm2.addEventListener("click",function(){
        if (cookies >= 550000) {
            cookies -= 550000
            htmludoublefarm2.style.display = "none";
            farmu2 = true;
            farmpower *= 2;
            updateprices();
        }
    })

    htmlubuydoublemine0.addEventListener("click",function(){
        if (cookies >= 120000) {
            cookies -= 120000
            htmludoublemine0.style.display = "none";
            mineu0 = true;
            minepower *= 2;
            updateprices();
        }
        
    })

    htmlubuydoublemine1.addEventListener("click",function(){
        if (cookies >= 600000) {
            cookies -= 600000
            htmludoublemine1.style.display = "none";
            mineu1 = true;
            minepower *= 2;
            updateprices();
        }
    })

    htmlubuydoublemine2.addEventListener("click",function(){
        if (cookies >= 6000000) {
            cookies -= 6000000
            htmludoublemine2.style.display = "none";
            mineu2 = true;
            minepower *= 2;
            updateprices();
        }
    })


    // cps loop
    function cpsLoop() {
        addcookie(cps / 8);
        setTimeout(cpsLoop, 125);
    }

    cpsLoop();

})