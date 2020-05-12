<template>
    <a>
        <template>
            <div class="post_icon-top">
                <div class="icon-marker">
                    <img alt="" />
                </div>
            </div>
            <div class="post_img">
                <img alt="" />
            </div>
        </template>
        <div class="post_content">
            <div class="post_title header-6"></div>
            <div class="post_text general-text"></div>
            <div class="post_info d-flex">
                <div class="icon-circle icon-circle--bg mr">
                    <img alt="" />
                </div>
                <base-info-panel />
            </div>
            <div class="post_button">
                <div>
                    <img class="avatar_img" alt="" />
                    <span class="avatar_name"> </span>
                </div>
            </div>
        </div>
    </a>
</template>

<script></script>

<style lang="scss">
.post {
    margin: 0 0 20px 0;
    position: relative;
    display: block;

    &:hover {
        text-decoration: none;
        & a {
            text-decoration: none;
        }
    }

    @include media-breakpoint-up(sm) {
        display: flex;
    }

    &:hover {
        .post_img img {
            box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.1);
        }
    }

    &_icon-top {
        position: absolute;
        left: 0;
        top: 15px;
        z-index: 1;
    }

    &_img {
        margin: 0 0 10px 0;

        @include media-breakpoint-up(sm) {
            width: 100px;
            height: 80px;
            margin: 0 20px 0 0;
        }

        @include media-breakpoint-up(lg) {
            width: 225px;
            height: 150px;
        }

        img {
            object-fit: contain;
            max-width: 100%;
            width: 100%;

            @media (min-width: 480px) {
                width: auto;
            }
        }
    }

    &_content {
        @include media-breakpoint-up(sm) {
            width: calc(100% - 120px);
        }

        @include media-breakpoint-up(lg) {
            width: calc(100% - 245px);
        }

        &--full {
            width: 100%;
        }
    }

    &_title {
        max-height: 76px;
        overflow: hidden;
        display: block;
        padding-bottom: 10px;
        font-size: 17px;
        color: #5e647e;

        &:hover {
            color: $black;
        }
    }

    &_text {
        max-height: 54px;
        overflow: hidden;

        & > p {
            margin: 0;
        }
    }

    &_info {
        padding: 6px 0 10px;
    }

    &_button {
        border-top: 1px solid $light-grey;
        padding: 10px 0 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
