<template>
    <div>
        <Timeline class="timeList">
            <TimelineItem>
                <p class="time" @click="inItem">阴影</p>
                <p class="content">box-shadow 、 drop-shadow</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time" @click="toBg">背景渐变动画</p>
                <p class="content">Pure CSS3 Animated Gradient Background</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time" @click="toAnimation">动画效果</p>
                <p class="content">css3 处理一些动画小效果</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2010年</p>
                <p class="content">发布 iPad</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2011年10月5日</p>
                <p class="content">史蒂夫·乔布斯去世</p>
            </TimelineItem>
        </Timeline>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        inItem(){
            this.$router.push('/boxshadow');
        },
        toBg(){
            this.$router.push('/bg');
        },
        toAnimation(){
            this.$router.push('/animation');
        }
    }
}
</script>

<style lang="scss" scoped>
.timeList{
    width: 1300px;
    margin: 0 auto;
    margin-top: 100px;
    .time{
        cursor: pointer;
    }
}
</style>


