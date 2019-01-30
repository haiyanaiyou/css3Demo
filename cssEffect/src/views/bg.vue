<template>
    <div class="bg">
        <h1>css3 实现背景渐变效果</h1>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.bg{
	width: 100wh;
	height: 100vh;
	color: #fff;
	background: linear-gradient(45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
	animation: Gradient 15s ease infinite;
}
@keyframes Gradient {
    0%{
        background-position: 0 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0 50%;
    }
}
h1{
    position: absolute;
    top: 45%;
    // text-align: center;
    left: 0;
    right: 0;
}
</style>



