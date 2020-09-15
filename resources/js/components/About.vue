<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">About Component</div>

                    <div class="card-body">
                        <ul>
                            <li class="btn">
                                <router-link :to="{ name: 'home' }">Home</router-link>
                            </li>
                            <li class="btn">
                                <router-link :to="{ name: 'about' }">About</router-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
