<template>
    <div>
        <ul>
            <li class="btn">
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="btn">
                <router-link :to="{ name: 'about' }">About</router-link>
            </li>

            <li class="btn">
                <router-link :to="{ name: 'sidenav' }">Sidenav</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

    import Links from "./Links";

    export default {
        mounted() {
            //console.log('Component mounted.')
        }
    }
</script>
