<template>
    <div class="comment-field">
        <div class="comment-field_left">
            <div class="ava">
                <img
                    src="https://pickaface.net/gallery/avatar/unr_test_180612_1021_b05p.png"
                    alt="">
                <svg class="ava_status">
                    <use xlink:href="/img/sprite.svg#status"/>
                </svg>
            </div>
        </div>
        <div class="comment-field_right">
            <div
                v-if="isReview"
                class="reviews">
                <template
                    v-for="(n, index) in rating.slice().reverse()">
                    <input
                        :id="`rating${n}`"
                        :key="index + 100"
                        v-model="form.rating"
                        :value="n"
                        name="rating"
                        type="radio">
                    <label
                        :key="index + 1"
                        :for="`rating${n}`"
                        :class="{'active': n === form.rating}">
                        {{ n }}
                    </label>
                </template>
            </div>
            <div class="comment-field_form">
                <div class="comment-field_field field-card">
                    <client-only>
                        <textarea
                            :id="fieldId"
                            rows="1"
                            class="form-control overflow-hidden"
                            required
                            maxlength="2500"
                            @input="mixin_autoResize_resize"/>
                        <label :for="fieldId">Оставьте свой комментарий...</label>
                    </client-only>
                </div>
                <button class="comment-field_btn btn btn--primary">
                    Комментировать
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import autoResize from "~/mixins/autoResize";

    export default {
        name: "CommentsField",
        mixins: [autoResize],
        props: {
            type: {
                type: String,
                default: 'simple',
                validator: (value) => {
                    return ['simple', 'review'].includes(value)
                }
            }
        },
        data: () => ({
            form: {
                rating: 0
            },
            rating: [1,2,3,4,5,6,7,8,9,10],
            fieldId: '_' + Math.random().toString(36).substr(2, 9)
        }),
        computed: {
            isReview() {
                return this.type === 'review'
            }
        }
    }
</script>

<style lang="scss">
    .reviews {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        margin: 0 0 20px 0;

        & > input {
            position: absolute;
            top: -9999px;
            clip: rect(0, 0, 0, 0);
            display: none;
        }

        & > label {
            width: 52px;
            height: 50px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid $light-grey;
            margin: 0;
            cursor: pointer;

            @include media-breakpoint-up(md) {
                font-size: 20px;
            }
        }

        & > label:hover,
        & > input:checked + .active {
            background: $purple-dark;
            color: #fff;
            border: 1px solid $purple-dark;
        }

        & > label:hover ~ label,
        & > input:checked ~ label {
            background: $purple;
            color: #fff;
            border: 1px solid $purple;
        }
    }

    .comment-field {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        &_right {
            display: flex;
            flex-direction: column;
            width: calc(100% - 40px);

            @include media-breakpoint-up(md) {
                width: calc(100% - 70px);
            }
        }

        &_form {
            display: flex;
            flex-direction: column;

            @include media-breakpoint-up(md) {
                flex-direction: row;
            }
        }

        &_field {
            flex: 1 1 1%;
        }

        &_btn {
            margin: 20px 0 0 0;

            @include media-breakpoint-up(md) {
                padding-left: 20px;
                padding-right: 20px;
                margin: 0 0 0 20px;
            }
        }
    }
</style>
