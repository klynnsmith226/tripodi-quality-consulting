<template>
    <div id="uicore-animate">

        <div class="uianim-notification" :class="[{'uianim-error':isError}]" v-show="notification">
            {{ notification }}
        </div>

        <div class="uianim-header-title">
            <h2>UiCore Animate</h2>
            <p>UiCore Animate is a plugin that allows you to add animation to your website.</p>
        </div>

        <div v-if="connect === 'none'">
            <h5>Connect to UiCore Animate</h5>
            <p>Connect to UiCore Animate to get access to all the features.</p>
            <div class="uianim-btn" @click="connectToUiCoreAnimate">
                Connect
            </div>
        </div>

        <!-- Settings -->
        <div v-else class="uianim-settings">
            <label for="uianim_split_type">Animation style</label>
            <select id="uianim_split_type" v-model="style">
                <option v-for="styleType in styleList" :key="styleType.value" :value="styleType.value">{{ styleType.name }}</option>
            </select>

            <label class="uianim-checkbox">
                Disable UiCore Animate from Editor 
                <input type="checkbox" id="disable" v-model="disable"/>
                <div class="uianim-check"></div>
            </label>
        </div>

        <h3>Faq</h3>
        <p style="margin-bottom: 20px;">If you can’t find what you’re looking for, please don’t hesitate to contact our customer support team. We’re always here to help.</p>
        <p><b>Does UiCore Animate affect my website performance?</b></p>
        <p>Not at all. The plugin only replaces the CSS animations from Elementor so it has zero impact on performance.</p>
        <p><b>Can I use UiCore Animate with any theme?</b></p>
        <p>Yes, you can use it with any theme that supports Elementor Page Builder.</p>
        <p><b>Is this a standalone plugin?</b></p>
        <p>No. You cannot use UiCore Animate without Elementor.</p>
        <p><b>Does it work with Elementor PRO?</b></p>
        <p>Yes, absolutely.</p>
        <p><b>Will UiCore Animate break my site after an update?</b></p>
        <p style="margin-bottom: 0;">No. This is a lightweight plugin and the chances of affecting the site are minimal.</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            disable: window.uianim.disable,
            style: window.uianim.style,
            connect: 'da',
            notification: '',
            isError: false,
            styleList:[
                {
                    name: 'Default',
                    value: ''
                },
                {
                    name: 'Creative',
                    value: 'style1'
                },
                {
                    name: 'Snappy',
                    value: 'style2'
                },
                {
                    name: 'Soft',
                    value: 'style3'
                },
                {
                    name: 'Laser',
                    value: 'style4'
                },
                {
                    name: 'Elastic',
                    value: 'style5'
                },
                {
                    name: 'Linear',
                    value: 'style6'
                },
                {
                    name: 'Magic',
                    value: 'style7'
                },
                {
                    name: 'SCI-FI',
                    value: 'style8'
                }
            ]
        }
    },
    watch: {
        disable: function (val) {
            this.updateSettings('disable', val);
        },
        style: function (val) {
            this.updateSettings('style', val);
        }
    },
    methods: {
        updateSettings(setName, setVal) {
            this.notification = 'Your settings are being saved...';
            const requestData = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': uianim.nonce
                },
                method: 'POST',
                body: JSON.stringify({
                    name: setName,
                    value: setVal
                })
            };

            fetch(uianim.rest , requestData)
                .then(res => res.json())
                .then(res => {
                    this.notification = '';
                    this.notification = res.message;
                    if(!res.success){
                        this.isError = true;
                    }
                    setTimeout(() => {
                        this.notification = '';
                        this.isError = false;
                    }, 5000);
                })
                .catch(err => {
                    this.notification = '';
                    this.notification = 'Something went wrong!';
                    this.isError = true;
                    setTimeout(() => {
                        this.notification = '';
                    }, 5000);
                });
        },
        connectToUiCoreAnimate() {
            window.location.href = 'https://my.uicore.co/connect/?ui_connect=true&ui_connect_url='+uianim.root+'&ui_free_prod=Animate';
        }
    },
}
</script>

<style lang="scss">
$primary: #532df5;
$white: #FFFFFF;
$black: #0F172A;
$black-100: #334155;
$gray-100: #F3F4F6;
$gray-200: #E5E7EB;
$gray-300: #F1F5F9;
$border: #CBD5E1;
#uicore-animate{
    position: relative;
    background: $white;
    border: 1px solid $gray-200;
    box-shadow: 0px 4px 4px rgba(174, 174, 174, 0.25), 0 9px 40px -15px rgba(174, 174, 174, 0.25);
    border-radius: 6px;
    width: 100%;
    max-width: 500px;
    color: $black;
    margin-top:30px;
    padding: 20px 35px 45px;

    .uianim-notification{
        position: absolute;
        top: 20px;
        right: 20px;
        background: $primary;
        color: $white;
        padding: 10px 15px;
        border-radius: 6px;
        text-align: center;
        animation: uianim-notification 0.4s cubic-bezier(0.165, 0.84, 0.44, 1.2) forwards;
        &.uianim-error{
            background: #FF0000;
        }

        @keyframes uianim-notification{
            0%{
                opacity: 0;
                transform: translateY(10px);
            }
            100%{
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
    .uianim-btn{
        display: inline-block;
        background: $primary;
        color: $white;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            background: darken($primary, 10%);
        }
    }

    label{
        font-size: 12px;
        color: $black;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 3px;
    }
    input, select{
        margin:0;
        border-radius: 6px;
        font-size: 14px;
        width: 100%;
        max-width: 500px;
        box-shadow: none;
        color: $black;
        background: $white;
        border: 1px solid $border;
        outline: none;
        padding: 8px 16px;
        height: auto;
    }
    .uianim-check{
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
        height: 15px;
        width: 15px;
        background: $white;
        border: 1px solid $border;
        &:after {
            content: "";
            position: absolute;
            display: none;
            left: 5.5px;
            top: 2px;
            width: 3px;
            height: 8px;
            border: solid $white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    }
    .uianim-checkbox {
        display: block;
        position: relative;
        padding-left: 23px;
        cursor: pointer;
        line-height: 15px;
        margin-top: 20px;
        input{
            position: absolute;
            z-index: -1;
            opacity: 0;
        }
        input:checked ~ .uianim-check {
            background: $black-100;
            &:after {
                display: block;
            }
        }
    }
    .uianim-settings {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        padding: 20px 0;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
    }
}
</style>
