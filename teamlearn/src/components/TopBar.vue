<template>
    <header>
        <div class="topbar-logo">
            <Logo />
            <br/>
        </div>

        <div class="navbar">
                <h2 v-on:click=render_about()><a href="" id="about-link">About </a><a href="" id="contact-link"> Contact</a></h2>
        </div>


        <hr/>


        

    </header>

    <footer>
        <div class="bottom-logo"></div>
    </footer>
</template>


<script>

import Logo from './Logo';


function render_about(){
    console.log("About");
}

function render_contact(){
    console.log("Contact");
}

export default {
    name: 'TopBar',
    components: {
        Logo,
    },
}
</script>


<style scoped>
.topbar-logo{
    position: absolute;
    top: 0%;
    left: 0%;
}

#about-link{
    text-decoration: none;
    color: black;
}

#contact-link{
    text-decoration: none;
    color: black;
}


.navbar{
    margin-left: 50%;
    margin-top: 4%
}


hr{
    width: 100%;
}


h2{
    word-spacing: 80px;
}
</style>