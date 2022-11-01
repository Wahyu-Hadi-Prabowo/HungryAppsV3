(()=>{"use strict";var n,A={47:(n,A,r)=>{r.d(A,{Z:()=>a});var e=r(537),t=r.n(e),i=r(645),o=r.n(i)()(t());o.push([n.id,".hero {\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.hero img {\r\n    height: 490px;\r\n    width: 100%;\r\n    filter: opacity(0.7) drop-shadow(0 0 #424242);\r\n    object-fit: cover;\r\n}\r\n\r\n.hero-inner{\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.hero-title {\r\n    color: orange;\r\n    font-size: 46px;\r\n    font-family: initial;\r\n    text-shadow: 2px 2px 4px #000000;\r\n}\r\n\r\n.hero-subtitle {\r\n    color: orange;\r\n    font-style: italic;\r\n    font-size: 20px;\r\n    font-family: initial;\r\n    text-shadow: 2px 2px 4px #000000;\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/hero.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,6CAA6C;IAC7C,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,oBAAoB;IACpB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,gCAAgC;AACpC",sourcesContent:[".hero {\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.hero img {\r\n    height: 490px;\r\n    width: 100%;\r\n    filter: opacity(0.7) drop-shadow(0 0 #424242);\r\n    object-fit: cover;\r\n}\r\n\r\n.hero-inner{\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.hero-title {\r\n    color: orange;\r\n    font-size: 46px;\r\n    font-family: initial;\r\n    text-shadow: 2px 2px 4px #000000;\r\n}\r\n\r\n.hero-subtitle {\r\n    color: orange;\r\n    font-style: italic;\r\n    font-size: 20px;\r\n    font-family: initial;\r\n    text-shadow: 2px 2px 4px #000000;\r\n}\r\n"],sourceRoot:""}]);const a=o},756:(n,A,r)=>{r.d(A,{Z:()=>a});var e=r(537),t=r.n(e),i=r(645),o=r.n(i)()(t());o.push([n.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    width: 100%;\n    background-color: sandybrown;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Roboto', sans-serif;\n}\n\nh1,\nh2,\nh3 {\n    color: wheat;\n    font-family: 'Roboto', sans-serif;\n}\n\nmain {\n    margin: 40px 30px 0;\n}\n\n#maincontent {\n    width: 100%;\n    margin-top: 18px;\n}\n\n#maincontent h2 {\n    text-align: center;\n    margin-bottom: 18px;\n}\n\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 18px 0;\n}\n\n.item {\n    width: calc(100% / 3 - 12px);\n    margin-bottom: 32px;\n    display: flex;\n    flex-direction: column;\n}\n\n.detail, restaurant-review {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    margin: 32px auto ;\n}\n\n.detail .title {\n\tfont-size: 30px;\n\ttext-align: center;\n    margin-bottom: 20px;\n}\n\n.detail img {\n\twidth: 100%;\n\theight: 370px;\n\tobject-fit: cover;\n\tobject-position: center;\n\tmargin-bottom: 10px;\n    border-radius: 5px;\n}\n\n.info ul {\n    list-style-type: none;\n}\n\n.info ul li {\n    margin-bottom: 10px;\n}\n\n.header-review {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 14px 14px;\n}\n.name-review {\n\tfont-weight: bold;\n    text-shadow: 0px 1px 0px #000000;\n}\n  \n.date-review {\n\tfont-size: 11px;\n\tfont-weight: lighter;\n}\n.body-review {\n\tpadding: 16px;\n\ttext-align: left;\n}\n.card {\n    background-color: wheat;\n    box-shadow: 2px 1px 2px #00000033;\n    flex: 1;\n    border-radius: 15px;\n    overflow: hidden;\n}\n\n.card img {\n    width: 100%;\n    max-height: 250px;\n    object-fit: cover;\n}\n\n.card-body {\n    padding: 16px;\n}\n\n.card-title a {\n    color: orange;\n    font-weight: 500;\n    min-height: 44px;\n    min-width: 44px;\n    text-shadow: 1px 1px 1px #424242;\n    text-decoration: none;\n    display: inline-block;\n}\n.card-title a:hover {\n    color: #424242;\n    transition: 0.3s;\n}\n\n.card-text {\n    color: #424242;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n}\n\n.search-box {\n    margin-bottom: 1rem;\n    display: block;\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    min-height: 44px;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #EADCA6;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0.25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.search-box:focus {\n    color: #212529;\n    background-color: #fff;\n    border-color: #E2C275;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(226, 194, 117, 0.25);\n  }\n\n.like {\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #db0000;\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    color: white;\n    border: 0;\n    border-radius: 50%;\n}\n\nfooter {\n    text-align: center;\n    color: #FBFBFB;\n    background-color: orange;\n    padding: 30px;\n    font-weight: bold;\n}\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 10px;\n    background-color: wheat;\n    color: black;\n    padding: 6px;\n    z-index: 999;\n}\n\n.skip-link:focus {\n    top: 0;\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,WAAW;IACX,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;;;IAGI,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,4BAA4B;IAC5B,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;CACC,eAAe;CACf,kBAAkB;IACf,mBAAmB;AACvB;;AAEA;CACC,WAAW;CACX,aAAa;CACb,iBAAiB;CACjB,uBAAuB;CACvB,mBAAmB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,kBAAkB;AACnB;AACA;CACC,iBAAiB;IACd,gCAAgC;AACpC;;AAEA;CACC,eAAe;CACf,oBAAoB;AACrB;AACA;CACC,aAAa;CACb,gBAAgB;AACjB;AACA;IACI,uBAAuB;IACvB,iCAAiC;IACjC,OAAO;IACP,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gCAAgC;IAChC,qBAAqB;IACrB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;IACd,sBAAsB;IACtB,4BAA4B;IAC5B,yBAAyB;IACzB,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,sBAAsB;IACtB,qEAAqE;AACzE;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,qBAAqB;IACrB,UAAU;IACV,mDAAmD;EACrD;;AAEF;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,eAAe;IACf,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,wBAAwB;IACxB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,MAAM;AACV",sourcesContent:["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    width: 100%;\n    background-color: sandybrown;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Roboto', sans-serif;\n}\n\nh1,\nh2,\nh3 {\n    color: wheat;\n    font-family: 'Roboto', sans-serif;\n}\n\nmain {\n    margin: 40px 30px 0;\n}\n\n#maincontent {\n    width: 100%;\n    margin-top: 18px;\n}\n\n#maincontent h2 {\n    text-align: center;\n    margin-bottom: 18px;\n}\n\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 18px 0;\n}\n\n.item {\n    width: calc(100% / 3 - 12px);\n    margin-bottom: 32px;\n    display: flex;\n    flex-direction: column;\n}\n\n.detail, restaurant-review {\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    margin: 32px auto ;\n}\n\n.detail .title {\n\tfont-size: 30px;\n\ttext-align: center;\n    margin-bottom: 20px;\n}\n\n.detail img {\n\twidth: 100%;\n\theight: 370px;\n\tobject-fit: cover;\n\tobject-position: center;\n\tmargin-bottom: 10px;\n    border-radius: 5px;\n}\n\n.info ul {\n    list-style-type: none;\n}\n\n.info ul li {\n    margin-bottom: 10px;\n}\n\n.header-review {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 14px 14px;\n}\n.name-review {\n\tfont-weight: bold;\n    text-shadow: 0px 1px 0px #000000;\n}\n  \n.date-review {\n\tfont-size: 11px;\n\tfont-weight: lighter;\n}\n.body-review {\n\tpadding: 16px;\n\ttext-align: left;\n}\n.card {\n    background-color: wheat;\n    box-shadow: 2px 1px 2px #00000033;\n    flex: 1;\n    border-radius: 15px;\n    overflow: hidden;\n}\n\n.card img {\n    width: 100%;\n    max-height: 250px;\n    object-fit: cover;\n}\n\n.card-body {\n    padding: 16px;\n}\n\n.card-title a {\n    color: orange;\n    font-weight: 500;\n    min-height: 44px;\n    min-width: 44px;\n    text-shadow: 1px 1px 1px #424242;\n    text-decoration: none;\n    display: inline-block;\n}\n.card-title a:hover {\n    color: #424242;\n    transition: 0.3s;\n}\n\n.card-text {\n    color: #424242;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n}\n\n.search-box {\n    margin-bottom: 1rem;\n    display: block;\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    min-height: 44px;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #EADCA6;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0.25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.search-box:focus {\n    color: #212529;\n    background-color: #fff;\n    border-color: #E2C275;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgba(226, 194, 117, 0.25);\n  }\n\n.like {\n    width: 55px;\n    height: 55px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #db0000;\n    font-size: 18px;\n    position: fixed;\n    bottom: 16px;\n    right: 16px;\n    color: white;\n    border: 0;\n    border-radius: 50%;\n}\n\nfooter {\n    text-align: center;\n    color: #FBFBFB;\n    background-color: orange;\n    padding: 30px;\n    font-weight: bold;\n}\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 10px;\n    background-color: wheat;\n    color: black;\n    padding: 6px;\n    z-index: 999;\n}\n\n.skip-link:focus {\n    top: 0;\n}"],sourceRoot:""}]);const a=o},145:(n,A,r)=>{r.d(A,{Z:()=>a});var e=r(537),t=r.n(e),i=r(645),o=r.n(i)()(t());o.push([n.id,"nav {\r\n    background-color: orange;\r\n    position: sticky;\r\n    display: flex;\r\n    padding: 0 64px;\r\n    height: auto;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    z-index: 100;\r\n}\r\n\r\nnav h1 {\r\n    margin: 16px 0;\r\n    text-transform: initial;\r\n    letter-spacing: 1px;\r\n}\r\n\r\nnav h1 a {\r\n    color: #424242;\r\n    transition: 0.3s;\r\n    text-decoration: none;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    display: inline-block;\r\n    line-height: 44px;\r\n}\r\n\r\n.menu-list {\r\n    margin: 24px 0;\r\n    display: flex;\r\n}\r\n\r\n.menu-list li {\r\n    font-weight: 600;\r\n    padding: 0 10px;\r\n    margin-left: 10px;\r\n    list-style-type: none;\r\n    display: inline-block;\r\n}\r\n\r\n.menu-list a {\r\n    color:#424242;\r\n    text-decoration: none;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    display: inline-block;\r\n    line-height: 44px;\r\n}\r\n\r\n.menu-list a:hover {\r\n    font-weight: 800;\r\n    transition: 0.3s;\r\n    color: #C36A2D;\r\n}\r\n\r\n.menu-key {\r\n    display: none;\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/navbar.css"],names:[],mappings:"AAAA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB",sourcesContent:["nav {\r\n    background-color: orange;\r\n    position: sticky;\r\n    display: flex;\r\n    padding: 0 64px;\r\n    height: auto;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    z-index: 100;\r\n}\r\n\r\nnav h1 {\r\n    margin: 16px 0;\r\n    text-transform: initial;\r\n    letter-spacing: 1px;\r\n}\r\n\r\nnav h1 a {\r\n    color: #424242;\r\n    transition: 0.3s;\r\n    text-decoration: none;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    display: inline-block;\r\n    line-height: 44px;\r\n}\r\n\r\n.menu-list {\r\n    margin: 24px 0;\r\n    display: flex;\r\n}\r\n\r\n.menu-list li {\r\n    font-weight: 600;\r\n    padding: 0 10px;\r\n    margin-left: 10px;\r\n    list-style-type: none;\r\n    display: inline-block;\r\n}\r\n\r\n.menu-list a {\r\n    color:#424242;\r\n    text-decoration: none;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    display: inline-block;\r\n    line-height: 44px;\r\n}\r\n\r\n.menu-list a:hover {\r\n    font-weight: 800;\r\n    transition: 0.3s;\r\n    color: #C36A2D;\r\n}\r\n\r\n.menu-key {\r\n    display: none;\r\n}\r\n"],sourceRoot:""}]);const a=o},948:(n,A,r)=>{r.d(A,{Z:()=>a});var e=r(537),t=r.n(e),i=r(645),o=r.n(i)()(t());o.push([n.id,"@media (max-width: 900px) {\r\n    .menu-list {\r\n        margin: 24px 0;\r\n        font-size: 20px;\r\n    }\r\n    .item {\r\n        width: calc(100% / 2 - 10px);\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    nav {\r\n        padding: 0 40px;\r\n    }\r\n    .menu-list {\r\n        background-color: sandybrown;\r\n        border-radius: 20px 0px 0px 20px;\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        width: 60%;\r\n        height: 40%;\r\n        margin-top: 0;\r\n        padding: 60px 46px;\r\n        flex-direction: column;\r\n        align-items: flex-end;\r\n        transform: translateX(100%);\r\n        transition: transform 0.5s;\r\n    }\r\n    .menu-list li {\r\n        padding: 10px 0;\r\n    }\r\n    .menu-list a {\r\n        font-size: 20px;\r\n        color: wheat;\r\n    }\r\n\r\n    .open .menu-list {\r\n        transform: translateX(0);\r\n    }\r\n    .menu-key {\r\n        margin: auto 0;\r\n        width: 46px;\r\n        height: 46px;\r\n        border: 0;\r\n        border-radius: 3px;\r\n        color: wheat;\r\n        font-size: 30px;\r\n        display: block;\r\n        z-index: 2;\r\n        cursor: pointer;\r\n    }\r\n \r\n    .menu i.fa-greater-than,\r\n    .menu.open i.fa-book-open {\r\n        display: none;\r\n        animation: enter 0.8s;\r\n    }\r\n    .menu.open i.fa-greater-than,\r\n    .menu i.fa-book-open {\r\n        display: block;\r\n        animation: enter 0.8s;\r\n    }\r\n    .menu-list a:hover{\r\n        transition-duration: 0.2s;\r\n        color: #C36A2D;\r\n    }\r\n    .item {\r\n        width: 100%;\r\n    }\r\n    .detail, restaurant-review {\r\n        width: 100%;\r\n    }\r\n}","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI;QACI,cAAc;QACd,eAAe;IACnB;IACA;QACI,4BAA4B;IAChC;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,4BAA4B;QAC5B,gCAAgC;QAChC,eAAe;QACf,MAAM;QACN,QAAQ;QACR,UAAU;QACV,WAAW;QACX,aAAa;QACb,kBAAkB;QAClB,sBAAsB;QACtB,qBAAqB;QACrB,2BAA2B;QAC3B,0BAA0B;IAC9B;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,wBAAwB;IAC5B;IACA;QACI,cAAc;QACd,WAAW;QACX,YAAY;QACZ,SAAS;QACT,kBAAkB;QAClB,YAAY;QACZ,eAAe;QACf,cAAc;QACd,UAAU;QACV,eAAe;IACnB;;IAEA;;QAEI,aAAa;QACb,qBAAqB;IACzB;IACA;;QAEI,cAAc;QACd,qBAAqB;IACzB;IACA;QACI,yBAAyB;QACzB,cAAc;IAClB;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ",sourcesContent:["@media (max-width: 900px) {\r\n    .menu-list {\r\n        margin: 24px 0;\r\n        font-size: 20px;\r\n    }\r\n    .item {\r\n        width: calc(100% / 2 - 10px);\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    nav {\r\n        padding: 0 40px;\r\n    }\r\n    .menu-list {\r\n        background-color: sandybrown;\r\n        border-radius: 20px 0px 0px 20px;\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        width: 60%;\r\n        height: 40%;\r\n        margin-top: 0;\r\n        padding: 60px 46px;\r\n        flex-direction: column;\r\n        align-items: flex-end;\r\n        transform: translateX(100%);\r\n        transition: transform 0.5s;\r\n    }\r\n    .menu-list li {\r\n        padding: 10px 0;\r\n    }\r\n    .menu-list a {\r\n        font-size: 20px;\r\n        color: wheat;\r\n    }\r\n\r\n    .open .menu-list {\r\n        transform: translateX(0);\r\n    }\r\n    .menu-key {\r\n        margin: auto 0;\r\n        width: 46px;\r\n        height: 46px;\r\n        border: 0;\r\n        border-radius: 3px;\r\n        color: wheat;\r\n        font-size: 30px;\r\n        display: block;\r\n        z-index: 2;\r\n        cursor: pointer;\r\n    }\r\n \r\n    .menu i.fa-greater-than,\r\n    .menu.open i.fa-book-open {\r\n        display: none;\r\n        animation: enter 0.8s;\r\n    }\r\n    .menu.open i.fa-greater-than,\r\n    .menu i.fa-book-open {\r\n        display: block;\r\n        animation: enter 0.8s;\r\n    }\r\n    .menu-list a:hover{\r\n        transition-duration: 0.2s;\r\n        color: #C36A2D;\r\n    }\r\n    .item {\r\n        width: 100%;\r\n    }\r\n    .detail, restaurant-review {\r\n        width: 100%;\r\n    }\r\n}"],sourceRoot:""}]);const a=o},375:(n,A,r)=>{var e=r(379),t=r.n(e),i=r(795),o=r.n(i),a=r(569),l=r.n(a),s=r(565),p=r.n(s),C=r(216),d=r.n(C),B=r(589),c=r.n(B),x=r(47),I={};I.styleTagTransform=c(),I.setAttributes=p(),I.insert=l().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=d(),t()(x.Z,I),x.Z&&x.Z.locals&&x.Z.locals},46:(n,A,r)=>{var e=r(379),t=r.n(e),i=r(795),o=r.n(i),a=r(569),l=r.n(a),s=r(565),p=r.n(s),C=r(216),d=r.n(C),B=r(589),c=r.n(B),x=r(756),I={};I.styleTagTransform=c(),I.setAttributes=p(),I.insert=l().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=d(),t()(x.Z,I),x.Z&&x.Z.locals&&x.Z.locals},786:(n,A,r)=>{var e=r(379),t=r.n(e),i=r(795),o=r.n(i),a=r(569),l=r.n(a),s=r(565),p=r.n(s),C=r(216),d=r.n(C),B=r(589),c=r.n(B),x=r(145),I={};I.styleTagTransform=c(),I.setAttributes=p(),I.insert=l().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=d(),t()(x.Z,I),x.Z&&x.Z.locals&&x.Z.locals},362:(n,A,r)=>{var e=r(379),t=r.n(e),i=r(795),o=r.n(i),a=r(569),l=r.n(a),s=r(565),p=r.n(s),C=r(216),d=r.n(C),B=r(589),c=r.n(B),x=r(948),I={};I.styleTagTransform=c(),I.setAttributes=p(),I.insert=l().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=d(),t()(x.Z,I),x.Z&&x.Z.locals&&x.Z.locals}},r={};function e(n){var t=r[n];if(void 0!==t)return t.exports;var i=r[n]={id:n,exports:{}};return A[n](i,i.exports,e),i.exports}e.m=A,n=[],e.O=(A,r,t,i)=>{if(!r){var o=1/0;for(p=0;p<n.length;p++){for(var[r,t,i]=n[p],a=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(e.O).every((n=>e.O[n](r[l])))?r.splice(l--,1):(a=!1,i<o&&(o=i));if(a){n.splice(p--,1);var s=t();void 0!==s&&(A=s)}}return A}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[r,t,i]},e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var r in A)e.o(A,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:A[r]})},e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={644:0};e.O.j=A=>0===n[A];var A=(A,r)=>{var t,i,[o,a,l]=r,s=0;if(o.some((A=>0!==n[A]))){for(t in a)e.o(a,t)&&(e.m[t]=a[t]);if(l)var p=l(e)}for(A&&A(r);s<o.length;s++)i=o[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(p)},r=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];r.forEach(A.bind(null,0)),r.push=A.bind(null,r.push.bind(r))})(),e.nc=void 0;var t=e.O(void 0,[946,2,135,337,268,924],(()=>e(253)));t=e.O(t)})();
//# sourceMappingURL=app~013bb811.bundle.js.map