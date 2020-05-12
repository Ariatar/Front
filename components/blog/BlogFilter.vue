<template>
    <div class="fixed-filter bg-white d-md-none">
        <div class="container d-flex align-items-center">
            <div>
                <svg class="icon">
                    <use />
                </svg>
                Фильтр
            </div>
            <blog-sort> </blog-sort>
        </div>
    </div>
</template>

<script></script>

<style lang="scss">
.fixed-filter {
    border-bottom: 1px solid $light-grey;
    border-left: 1px solid $light-grey;
    border-right: 1px solid $light-grey;
    display: flex;
    align-items: center;
    height: 50px;

    &_item {
        flex: 1 1 1%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:first-child:not(:last-child) {
            border-right: 1px solid $light-grey;
        }

        .icon {
            margin: 0 10px 0 0;
        }

        .dropdown_list {
            right: -15px;
            top: calc(100% - 1px);
        }
    }
}
</style>
