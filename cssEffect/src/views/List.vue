<template>
    <div>
        <Timeline class="timeList">
            <TimelineItem>
                <p class="time" @click="inItem">阴影</p>
                <p class="content">box-shadow 、 drop-shadow</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">1984年</p>
                <p class="content">发布 Macintosh</p>
            </TimelineItem>
            <TimelineItem>
                <p class="time">2007年</p>
                <p class="content">发布 iPhone</p>
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
        }
    }
}
</script>

<style lang="scss" scoped>
.timeList{
    width: 1300px;
    margin: 0 auto;
    .time{
        cursor: pointer;
    }
}
</style>


