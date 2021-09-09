<template>
    <div>
        <Navbar/>
        <div class="d-flex">
            <div class="col-4">
                <EntryList/>
            </div>
            <div class="col">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Navbar: defineAsyncComponent( ()=> import('./../components/Navbar')), //lazy load component
        EntryList: defineAsyncComponent( ()=> import('./../components/EntryList')) //lazy load component

    }
}
</script>
