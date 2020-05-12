<template>
    <div>
        <course-category-page :top="top" :item="item" :filt="filt" />
    </div>
</template>

<script>
import CourseCategoryPage from "~/components/course/CourseCategoryPage";
// import TheFooter from "../../../components/common/TheFooter";
export default {
    name: "CourseCategory",

    layout: "page",
    components: {
        CourseCategoryPage
    }
};
</script>
