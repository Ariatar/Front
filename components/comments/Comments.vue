<template>
    <div class="overflow-hidden comments">
        <div class="comments-info">
            <div class="d-flex align-items-center">
                <div class="subtitle-medium mr">
                    9.6
                </div>
                <div class="subtitle">
                    12 отзывов
                </div>
            </div>
            <div class="subtitle-medium dropdown">
                Вначале новые
                <svg class="icon">
                    <use xlink:href="/img/sprite.svg#dropdown"/>
                </svg>
            </div>
        </div>
        <div class="comment-block">
            <comment-field/>
        </div>
        <comment
            v-for="(comment, index) in comments"
            :key="index"
            :item="comment"/>
    </div>
</template>

<script>
    import CommentField from "./CommentField";
    import Comment from "./Comment";

    export default {
        name: "Comments",
        components: {
            CommentField,
            Comment
        },
        data: () => ({
            comments: [
                {
                    id: 0,
                    author: 'Александр Никитин',
                    text: 'Я нашел платформу случайно в Интернете. '
                },
                {
                    id: 1,
                    author: 'Александр Никитин',
                    text: 'Я нашел платформу случайно в Интернете. ',
                    is_my: 1
                },
                {
                    id: 2,
                    author: 'Александр Никитин',
                    text: 'Я нашел платформу случайно в Интернете. ',
                    children: [
                        {
                            id: 3,
                            author: 'Александр Никитин',
                            text: 'Я нашел платформу случайно в Интернете. '
                        },
                        {
                            id: 4,
                            author: 'Александр Никитин',
                            text: 'Я нашел платформу случайно в Интернете. ',
                            children: [
                                {
                                    id: 3,
                                    author: 'Александр Никитин',
                                    text: 'Я нашел платформу случайно в Интернете. '
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    }
</script>

<style lang="scss">
      .comments-info {
        display: flex;
        justify-content: space-between;
        margin: 0 0 5px 0;
    }

    .comment-block {
        border-top: 1px solid $light-grey;
        border-bottom: 1px solid $light-grey;
        padding: 20px 0;
    }
</style>
