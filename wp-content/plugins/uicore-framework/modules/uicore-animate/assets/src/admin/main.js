import Vue from 'vue'
import App from './App.vue'
// import router from './router'

Vue.config.productionTip = false

document.addEventListener("DOMContentLoaded", () => {
    /* eslint-disable no-new */
    // Create a div element
    let div = document.createElement('div');

    // SVG Markup
    let svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 15C3 19.9706 7.02944 24 12 24C16.9706 24 21 19.9706 21 15L21 10C21 9.48893 20.9574 8.98781 20.8756 8.49999C20.1614 12.7566 16.4595 16 12 16C7.54051 16 3.83855 12.7566 3.12444 8.5C3.0426 8.98781 3 9.48893 3 10L3 15Z" fill="black" fill-opacity="0.1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12L21 10C21 9.65181 20.9802 9.30825 20.9417 8.97036C20.4628 12.931 17.0898 16 13 16L11 16C6.91018 16 3.53715 12.931 3.05825 8.97036C3.01977 9.30825 3 9.65182 3 10L3 12Z" fill="black" fill-opacity="0.2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM12 18C7.02944 18 3 13.9706 3 9C3 4.02944 7.02944 0 12 0C16.9706 0 21 4.02944 21 9C21 13.9706 16.9706 18 12 18ZM11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V8.6301L13.2526 8.91426C13.6195 9.32704 14.2516 9.3642 14.6644 8.99727C15.0772 8.63034 15.1143 7.99827 14.7474 7.5855L12.7474 5.33562C12.5576 5.12214 12.2856 5 12 5C11.7144 5 11.4424 5.12214 11.2526 5.33562L9.25261 7.5855C8.88568 7.99827 8.92284 8.63035 9.33562 8.99727C9.74839 9.3642 10.3805 9.32704 10.7474 8.91427L11 8.6301V12Z" fill="black"/></svg>';

    // Append the SVG element to the div
    div.innerHTML = svg;

    // Add a class to the div
    div.classList.add('uianim-start');

    // Append the div to the body
    document.getElementById('elementor-preview').appendChild(div);

    console.log('div added');
    // Add a click event listener to the div
    div.addEventListener("click", () => {

        div.hidden = true;
        // Create a new Vue instance
        let vue = new Vue({
            el: '#uianim-app',
            // router,
            destroyed: function(){
                console.log('done');
                // this.$el.innerHTML = '<p>done</p>';
            },
            render: h => h(App)
        });

        // Add a click event listener to the close button
        setTimeout(() => {
            document.querySelector('.uicore-base_close').addEventListener("click", () => {
                console.log('destroying vue instance')
                console.log(vue);
                vue.$destroy();
                div.hidden = false;
                document.getElementById('uianim-wrapp').innerHTML = '<div id="uianim-app"></div>';
            });
        }, 400);
    });
});
