<template>
    <base-error :error="error">
        <template v-slot:error>
            {{ error.statusCode }}
        </template>
    </base-error>
</template>

<script>
    export default {
        props: {
            error: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        }
    }
</script>


