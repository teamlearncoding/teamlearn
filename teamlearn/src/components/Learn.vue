<template>
    <div class="learn">
        <b>
            <h1>Learn to code for free</h1>
        </b>
        <h3>
            <p>
                All the coding knowledge<br/>
                right at your
                <br/>
                <b id="fingertips">
                    fingertips
                </b>
            </p>
        </h3>

        <br/>

        <button class="get-started-btn">
            Get Started Learning
        </button>
    </div>
</template>


<script>
export default {
    name: "learn",
    components: {},
}
</script>


<style scoped>
@font-face {
  font-family: "Cooper Black";
  src: url("/fonts/cooper-black.otf");
}

.h1 {
  font-family: "Cooper Black", serif;
}

.learn{
    position: absolute;
    margin-top: 100px;
    margin-left: 40px;
}


#fingertips{
    font-weight: 100;
}
</style>