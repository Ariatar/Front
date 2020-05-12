<template>
    <div class="blog-menu">
        <ul class="blog-menu_list">
            <li class="blog-menu_item">
                <n-link>
                    <div class="blog-menu_icon">
                        <div class="icon-circle">
                            <img />
                        </div>
                        <div class="icon-circle icon-circle--bg">
                            <img />
                        </div>
                    </div>
                </n-link>
            </li>
        </ul>
    </div>
</template>

<script></script>

<style lang="scss">
.blog-menu {
    &_list {
        @include reset-list();
    }

    &_item {
        margin: 28px 0;
        position: relative;
    }

    &_icon {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);

        .icon {
            margin: 0 5px;
        }
    }

    &_link {
        color: $dark-grey;
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        padding: 0 0 0 36px;
        cursor: pointer;

        &:hover {
            text-decoration: none;
            color: $dark-grey;
        }

        & .icon-circle--bg {
            display: none;
        }

        &.nuxt-link-exact-active {
            font-weight: 500;
            color: $black;

            .icon-circle {
                display: none;
            }

            .icon-circle--bg {
                display: flex;
            }
        }
    }
}
</style>
