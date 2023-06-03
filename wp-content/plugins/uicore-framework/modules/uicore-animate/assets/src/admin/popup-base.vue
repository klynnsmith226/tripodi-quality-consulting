<template>
    <div class="uicore-base">
        <div class="uicore-base_header">
            <div class="uicore-base_title" v-html="title"></div>
            <div class="uicore-base_close" @click="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="uicore-base_content">
            <perfect-scrollbar v-if="scroll">
                <slot></slot>   
            </perfect-scrollbar>
            <slot v-else></slot>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'uibase', 
    props: ['title','scroll'],
    methods: {
        close() {
            this.$emit('close');
        }
    }
        
}
</script>

<style lang="scss">
@import 'base.scss';
.uicore-base{
    position:fixed;
    right: 30px;
    bottom: 30px;
    z-index: 9999;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(174, 174, 174, 0.25), 0 9px 40px -15px rgba(174, 174, 174, 0.25);
    border-radius: 4px;
    max-height: 510px;
    width: 350px;
    height: 95vh;
    color: #2F2F32;
    display: flex;
    flex-direction: column;

    .uicore-base_header{
        border-bottom: 1px solid #F1F1F3;
        padding: 5px 10px;
        line-height: 1.9;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .uicore-base{
            font-weight: 500;

            span.ui-badge {
                background: var(--uicore-primary,#532df5);
                border-radius: 4.5px;
                color: #fff;
                font-size: 10px;
                line-height: 13px;
                font-weight: 600;
                padding: 4px 6px 4px 7px;
                letter-spacing: .4px;
                margin-left: 5px;
            }
        }
        svg{
            max-width: 16px;
            max-height: 15px;
            vertical-align: text-top;
            opacity: .6;
            cursor: pointer;
            fill: currentColor;
            &:hover{
                opacity: 1;
            }
        }
    }
    .uicore-base_content{
        height: 100%;
    }
    
}
</style>
