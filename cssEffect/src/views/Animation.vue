<template>
    <div class="animation">
        <div class="demo1">
            <div class="ball ball1"></div>
            <div class="ball ball2"></div>
            <div class="ball ball3"></div>
        </div>
        <div class="frame"></div>
        <div class="pic"></div>
    </div>
</template>

<style lang="scss" scoped>
.animation{
    width: 90%;
    margin: 100px auto;
    text-align: center;
}
.demo1{
    width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #e2e2e2;
    height: 400px;
}
.ball{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: yellow;
    animation: bounce 2s ease-in infinite;
}
.ball2{
    margin-left: 200px;
    background: blueviolet;
}
.ball3{
    margin-left: 380px;
    background: greenyellow;
}
@keyframes bounce{
    60%, 80%, to {
        transform: translateY(380px); 
        animation-timing-function: ease-out;        
    }        
    70% { transform: translateY(260px); }        
    90% { transform: translateY(300px); }
}
.frame{
    width: 50px;
    height: 80px;
    
    background: url(https://s.cdpn.io/79/sprite-steps.png) no-repeat left top;
    animation: frame-animation 2s steps(10) infinite;
}
@keyframes frame-animation{
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: -500px 0;
    }
}
.pic{
    width: 150px;
    height: 150px;
    margin: 80px auto;
    background: url('http://c3.staticflickr.com/3/2671/3904743709_74bc76d5ac_b.jpg');
    background-size: auto 100%;
    animation: panoramic 10s linear infinite alternate;
    animation-play-state: paused;
    &:hover,&:focus{
        animation-play-state: running;
    }
} 
@keyframes panoramic{
    to{
        background-position: 100% 0;
    }
}

</style>

