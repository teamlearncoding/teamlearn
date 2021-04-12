<template>
    <div class="topbar-comp">
        <TopBar />
    </div>

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
    <div class="learn-comp">
        <Learn />
    </div>

    <div class="footer-comp">
        <Footer />
    </div>
</template>

<script>

import TopBar from './TopBar';
import Footer from './Footer';
import Learn from './Learn';

export default {
    name: 'main-page',
    components: {
        TopBar,
        Footer,
    }
}
</script>


<style scoped>
</style>