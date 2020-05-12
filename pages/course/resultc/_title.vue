<template>
    <div>
        <result-courses />
    </div>
</template>

<script>
import ResultCourses from "~/components/course/ResultCourses";
// import TheFooter from "../../../components/common/TheFooter";
export default {
    name: "CourseCategory",

    layout: "page",
    components: {
        ResultCourses
    }
};
</script>
