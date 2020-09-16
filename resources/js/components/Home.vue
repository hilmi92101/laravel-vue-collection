<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">List of Links</div>

                    <div class="card-body">
                        <Links></Links>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Links from "./Links";

    export default {

        components: {

            Links,

        },

        mounted() {
            //console.log('Component mounted.')
        }
    }
</script>
