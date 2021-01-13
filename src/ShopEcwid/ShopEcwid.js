import React, {useRef, useEffect} from 'react';
import {withRouter} from 'react-router';

function ShopEcwid(props) {
    const storeDiv = useRef(null);
    const scriptRef = useRef(null);

    window.localStorage.setItem("show_ecwid_logs","true")
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;
    window.ec = window.ec || Object();
    window.ec.storefront = window.ec.storefront || Object();
    window.ec.enable_catalog_on_one_page = true;
    window._xnext_initialization_scripts = [{
      widgetType: 'ProductBrowser',
      id: 'my-store-44436111',
      arg: ["id=productBrowser", "views=grid(20,3)"]  },
      {
        widgetType: 'CategoriesV2',
        id: 'my-categories-44436111',
        arg: ["id=categoriesV2"]
      }
      ,
      {
        widgetType: 'SearchWidget',
        id: 'my-search-44436111',
        arg: ["id=searchWidget"]
      }
    ];

    var script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = 'https://app.ecwid.com/script.js?44436111';
    script.defer = true;
    script.ref=scriptRef;


  useEffect(() => {
      if(!scriptRef.current){
        storeDiv.current.appendChild(script);
      }
  });

    return (
      <div>
        <div id="my-store-44436111" ref={storeDiv}></div>
        <div className="ec-cart-widget"></div>
      </div>

      );
    }

  export default withRouter(ShopEcwid);
