<template>
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 180 180"
        style="
            transform: rotate(60deg);
            text-align: inherit;
            line-height: 22px;
            letter-spacing: 0px;
            font-weight: 400;
            font-size: 16px;
        "
        :style="{ fill: color }"
        data-stylerecorder="true"
    >
        <pattern
            id="img1"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
            data-stylerecorder="true"
            style="
                text-align: inherit;
                line-height: 22px;
                letter-spacing: 0px;
                font-weight: 400;
                font-size: 16px;
            "
        >
            <image
                href=""
                x="0"
                y="0"
                width="100%"
                height="100%"
                data-stylerecorder="true"
                style="
                    text-align: inherit;
                    line-height: 22px;
                    letter-spacing: 0px;
                    font-weight: 400;
                    font-size: 16px;
                "
            ></image>
        </pattern>
        <path
            d=""
            data-stylerecorder="true"
            style="
                text-align: inherit;
                line-height: 22px;
                letter-spacing: 0px;
                font-weight: 400;
                font-size: 16px;
            "
        >
            <animate
                repeatCount="indefinite"
                attributeName="d"
                dur="10s"
                values="
        M6.5,39.4C7.9,62.9,6,81.5,3.8,94.8c-2.9,17.7-7.2,30.9,0.4,41.9c5.9,8.5,15.7,11,17.6,11.5
        c17.9,4.5,26.2-9.4,64-27c25.6-11.9,39.7-13.9,45.3-28c3.1-7.9,1.9-15.3,1.5-17.3c-2.7-12.7-14.2-21.9-28.5-30.4
        c-20-12-39.7-48.3-72-45.2C29.1,0.5,21.6,1.3,15.3,7C3.2,17.7,6,36.7,6.5,39.4z;

        M6.5,39.4C7.9,62.9,6,81.5,3.8,94.8c-4.1,24.8-5.6,33.6,0.4,41.9c10.6,14.8,41.6,17.2,56,4.3
        c11.2-9.9,4.2-21.5,15.8-31c13.8-11.4,29.9,0.5,45-12.3c9-7.6,11.1-18.4,11.7-21.9c2.5-17.1-9-30.9-16.7-40.1
        C92.4,7.4,57-3,32.2,0.2C25,1.1,19.7,3.1,15.3,7C3.2,17.7,6,36.7,6.5,39.4z;

        M6.5,39.4C4.9,52.6,3.2,71.6,3.8,94.8c1,39.1,7.2,45.3,10.4,47.7c9.5,7.1,18.1-0.1,46-1.5
        c38.4-1.9,56.7,10.1,63.5,0.8c6.6-9.2-9.5-22.7-2.8-44c3.6-11.4,9.7-11.7,11.7-21.9c3.5-17.9-11.9-34.9-16.7-40.1
        C91.8,9,56.5,9.9,47.7,10.2c-11.3,0.3-25.1,0.9-34,11.3C8.4,27.6,7,34.8,6.5,39.4z;

        M6.5,39.4C7.9,62.9,6,81.5,3.8,94.8c-2.9,17.7-7.2,30.9,0.4,41.9c5.9,8.5,15.7,11,17.6,11.5
        c17.9,4.5,26.2-9.4,64-27c25.6-11.9,39.7-13.9,45.3-28c3.1-7.9,1.9-15.3,1.5-17.3c-2.7-12.7-14.2-21.9-28.5-30.4
        c-20-12-39.7-48.3-72-45.2C29.1,0.5,21.6,1.3,15.3,7C3.2,17.7,6,36.7,6.5,39.4z  "
                data-stylerecorder="true"
                style="
                    text-align: inherit;
                    line-height: 22px;
                    letter-spacing: 0px;
                    font-weight: 400;
                    font-size: 16px;
                "
            ></animate>
        </path>
    </svg>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'KBubble1',
        props: {
            color: {
                type: String,
                default: '#f7f9fd'
            }
        },
        setup() {
            return {}
        }
    })
</script>

<style scoped></style>
