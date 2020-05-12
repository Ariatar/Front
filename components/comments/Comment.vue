<template>
    <div
        :ref="`commentId-${item.id}`"
        class="comment">
        <div class="comment_item">
            <div
                class="comment_count pointer"
                @click="toggleComments(item.id)">
                <svg class="icon">
                    <use xlink:href="/img/sprite.svg#dropdown"/>
                </svg>
                <div>
                    3
                </div>
            </div>
            <div class="ava">
                <img
                    src="https://pickaface.net/gallery/avatar/unr_test_180612_1021_b05p.png"
                    alt="">
                <svg class="ava_status">
                    <use xlink:href="/img/sprite.svg#status"/>
                </svg>
            </div>
            <div class="comment_body">
                <div class="comment_header">
                    <div class="comment_user">
                        <div class="comment_author">
                            {{ item.author }}
                        </div>
                        <div class="comment_reply">
                            <svg class="icon">
                                <use xlink:href="/img/sprite.svg#reply"/>
                            </svg>
                            Александр Никитин
                        </div>
                    </div>
                    <div class="comment_links comment_hover">
                        <a href="#">
                            <svg class="icon">
                                <use xlink:href="/img/sprite.svg#link"/>
                            </svg>
                        </a>
                        <span class="pointer">
                            <svg class="icon">
                                <use xlink:href="/img/sprite.svg#share-full"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="comment_review">
                    Оценка 9
                </div>
                <div class="comment_text">
                    {{ item.text }}
                </div>
                <div class="comment_actions">
                    <span
                        v-if="!replyItems.includes(item.id)"
                        class="pointer text-primary-dark"
                        @click="reply(item.id)">
                        Ответить
                    </span>
                    <span
                        v-else
                        class="pointer text-danger"
                        @click="cancel(item.id)">
                        Отмена
                    </span>
                    <span>13 ноября 2019</span>
                    <template v-if="item.is_my">
                        <span
                            class="pointer"
                            @click="edit">
                            Редактировать
                        </span>
                        <span
                            class="pointer"
                            @click="remove">
                            Удалить
                        </span>
                    </template>
                    <span
                        class="pointer text-black comment_hover"
                        @click="like">
                        <svg class="icon">
                            <use xlink:href="/img/sprite.svg#like"/>
                        </svg>
                        (1)
                    </span>
                    <span
                        class="pointer text-black comment_hover"
                        @click="disLike">
                        <svg class="icon">
                            <use xlink:href="/img/sprite.svg#dislike"/>
                        </svg>
                        (1)
                    </span>
                </div>
                <comment-field
                    v-if="replyItems.includes(item.id)"
                    class="comment_form"/>
            </div>
        </div>
        <div
            v-if="item.children"
            :ref="`commentParentId-${item.id}`"
            class="comment-child">
            <comment
                v-for="(childItem, index) in item.children"
                :key="index"
                :item="childItem"/>
        </div>
    </div>
</template>

<script>
    import CommentField from "./CommentField";

    export default {
        name: "Comment",
        props: {
            type: {
                type: String,
                default: 'general'
            },
            item: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        components: {
            CommentField
        },
        computed: {
            isPersonal() {
                return this.type === 'personal'
            }
        },
        data: () => ({
            editItems: [],
            replyItems: []
        }),
        methods: {
            toggleComments(id) {
                const parent = this.$refs[`commentId-${id}`]
                const child = this.$refs[`commentParentId-${id}`]
                parent.classList.toggle('comment-show')
                if (child) {
                    child.classList.toggle('d-block')
                }
            },
            reply(id) {
                this.replyItems.push(id)
            },
            cancel(id) {
                this.replyItems = this.replyItems.filter((item) => item !== id)
            },
            edit(id) {
                this.editItems.push(id)
            },
            remove() {

            },
            like() {

            },
            disLike() {

            }
        }
    }
</script>

<style lang="scss">
    .comment {
        position: relative;

        &::before {
            content: '';
            width: 1px;
            height: calc(100% - 68px);
            background: $light-grey;
            display: block;
            position: absolute;
            left: 14px;
            top: 64px;
            opacity: 1;
            transition: opacity .25s ease;

            @include media-breakpoint-up(md) {
                top: 86px;
                left: 26px;
                height: calc(100% - 88px);
            }

            @include media-breakpoint-up(lg) {
                opacity: 0;
            }
        }

        &_item {
            margin: 25px 0;
            display: flex;
            align-items: flex-start;
            position: relative;

            &:hover {
                .comment_hover{
                    display: block;
                }
            }
        }

        &_count {
            .icon {
                fill: transparent;
                stroke: $primary-dark;
                height: 12px;
                width: 12px;
            }

            text-align: center;
            font-size: 12px;
            position: absolute;
            top: 30px;
            left: 8px;
            color: $primary-dark;
            line-height: 15px;
            transition: opacity .25s ease;

            @include media-breakpoint-up(md) {
                top: 53px;
                left: 20px;
            }
        }

        &_hover {
            @include media-breakpoint-up(lg) {
                display: none;
            }
        }

        &_header {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: flex-start;
        }

        &_user {
            display: flex;
            flex-wrap: wrap;
            width: calc(100% - 76px);
        }

        &_author {
            font-weight: 500;
            font-size: 16px;
            line-height: 25px;
            color: $black;
            margin: 0 20px 0 0;
        }

        &_reply {
            .icon {
                fill: $grey;
                margin: 0 20px 0 0;
            }

            font-size: 16px;
            line-height: 25px;
            color: $grey;
        }

        &_links {
            width: 76px;
            & > * {
                margin: 0 0 0 20px;
            }
        }

        &_body {
            width: calc(100% - 40px);

            @include media-breakpoint-up(md) {
                width: calc(100% - 70px);
            }
        }

        &_review {
            font-weight: 500;
            font-size: 16px;
            line-height: 25px;
            color: $purple-dark;
            margin: 0 0 15px 0;
        }

        &_text {
            font-size: 16px;
            line-height: 25px;
            color: $dark-grey;
            margin: 0 0 16px 0;
        }

        &_actions {
            display: flex;
            flex-wrap: wrap;
            color: $grey;

            span {
                margin: 0 20px 0 0;
                font-size: 12px;
            }

            .icon {
                height: 14px;
                margin: 0 5px 0 0;
            }
        }

        &_form {
            margin: 20px 0 0 0;
        }

        &-child {
            margin: 0 0 0 20px;
            display: none;

            @include media-breakpoint-up(md) {
                margin: 0 0 0 70px;
            }
        }

        &-show {
            & > .comment_item > .comment_count {
                opacity: 1;
                color: $light-grey;

                @include media-breakpoint-up(lg) {
                    opacity: 0;
                }

                .icon {
                    stroke: $light-grey;
                    transform: rotate(180deg);
                }
            }

            &:hover {
                &::before {
                    opacity: 1;
                }

                & > .comment_item > .comment_count {
                    opacity: 1;
                }
            }
        }
    }
</style>
