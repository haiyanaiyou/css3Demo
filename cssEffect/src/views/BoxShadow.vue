<template>
    <div>
        <h1>单侧投影</h1>
        <div class="unilateralProjection">
            <div class="left">左</div>
            <div class="right">右</div>
            <div class="top">上</div>
            <div class="bottom">下</div>
        </div>
        <span>外 box-shadow 前四个参数：x 偏移值、y 偏移值 、模糊半径、扩张半径。</span>
        <h1>立体投影</h1>
        <div class="stereographicProjection">
            <div class="g-left"></div>
            <div class="g-both"></div>
            <div class="g-slide"></div>
        </div>
        <h1>文字立体阴影</h1>
    </div>
</template>
<style lang="scss" scoped>
.unilateralProjection{
    display: flex;
    flex-direction: row;
    width: 420px;
    margin: 36px auto;
    div{
        padding: 20px 30px;
        margin-right: 40px;
        border: 1px solid #333;
    }
    .left{
        box-shadow: -7px 0 5px -5px #333;
    }
    .right{
        box-shadow: 7px 0 5px -5px #333;
    }
    .top{
        box-shadow: 0 -7px 5px -5px #333;
    }
    .bottom{
        box-shadow: 0 7px 5px -5px #333;
    }
}
.stereographicProjection{
    display: flex;
    flex-direction: row;
    width: 420px;
    margin: 36px auto;
    div{
       padding: 20px 60px;
       margin-right: 40px;
       position: relative;
       background: hsl(48, 100%, 50%);
       box-shadow: 0 0 5px 2px hsl(48, 100%, 45%);
       border-radius: 10px;
    }
    .g-left::before{
        position: absolute;
        content: "";
        top: 82%;
        left: 14%;
        right: 14%;
        bottom: 0;
        border-radius: 5px;
        background: hsl(48, 100%, 20%);
        transform: translate(-4%, -31%) rotate(-8deg);
        transform-origin: center center;
        box-shadow: 0 0 10px 7px hsl(48, 100%, 20%);
        z-index: -1;
    }
    .g-both{
        background: hsl(199, 98%, 48%);
        box-shadow: 0 0 5px 2px hsl(199, 98%, 40%);
    }
    .g-both::before{
        content: '';
        position: absolute;
        top: 71%;
        left: 17%;
        right: 24%;
        bottom: 0;
        border-radius: 5px;
        background: hsl(199, 98%, 20%);
        z-index: -1;
        box-shadow: 0 0 16px 12px hsl(199, 98%, 20%);
        transform: translate(0, -36%) rotate(-13deg);

    }
    .g-both::after{
        content: '';
        position: absolute;
        top: 71%;
        left: 17%;
        right: 24%;
        bottom: 0;
        border-radius: 5px;
        background: hsl(199, 98%, 20%);
        z-index: -1;
        box-shadow: 0 0 16px 12px hsl(199, 98%, 20%);
        transform: translate(0, -36%) rotate(13deg)
    }
    .g-slide {
    background: hsl(150, 62%, 52%);
    box-shadow: 0 0 5px 2px hsl(150, 62%, 40%);
}

.g-slide::before {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 20%;
    left: 90%;
    right: 5%;
    border-radius: 10px;
    background: hsl(150, 62%, 20%);
    transform: translate(105%, 10%) rotate(15deg);
    transform-origin: center center;
    box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
    z-index: -1;
}

.g-slide::after {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 20%;
    left: 5%;
    right: 90%;
    border-radius: 10px;
    background: hsl(150, 62%, 20%);
    transform: translate(-105%, 10%) rotate(-15deg);
    transform-origin: center center;
    box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
    z-index: -1;
}
}
</style>
