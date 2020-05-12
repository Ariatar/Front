<template>
    <div class="blog-filter">
        <div class="d-md-none blog-filter_close pointer">
            <svg class="icon">
                <use xlink:href="/img/sprite.svg#times" />
            </svg>
        </div>
        <div class="header-6">
            Выбор статей по категории
        </div>
        <div class="divder" />
        <blog-menu class="pb-3" />
        <slot name="tags" />
    </div>
</template>

<script></script>

<style lang="scss">
.blog-filter {
    @include media-breakpoint-down(sm) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 15px;
        height: 100vh;
        overflow: auto;
        background: #fff;
        z-index: 200;
        display: none;

        &--open {
            display: block;
        }
    }

    &_close {
        position: absolute;
        top: 12px;
        right: 15px;

        .icon {
            width: 25px;
            height: 25px;
        }
    }
}
</style>
