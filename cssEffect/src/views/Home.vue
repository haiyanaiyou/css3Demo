<template>
    <div>
        <div class="g-container">
            <h2>登录</h2>
            <div class="g-username">
                <input name="loginPhoneOrEmail" maxlength="64" placeholder="请输入手机号或邮箱" class="input" v-model="phone">
                <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="g-username">
            </div>

            <div class="g-password">
                <input name="loginPassword" type="password" maxlength="64" placeholder="请输入密码" class="input" v-model="password">
                <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="g-password">
            </div>

            <img src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" class="g-normal">
            <Button size="large" type="primary" class="btn" @click="login">登錄</Button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            phone: '',
            password: ''
        }
    },
    methods: {
        login(){
            if(this.phone == '18912345678' && this.password == '123456'){
                this.$router.push('/list');
            }else{
                this.$Message.error('请输入账号和密码！');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
$bg-normal: 'https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png';
$bg-username: 'https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png';
$bg-password: 'https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png';

.g-container{
    position: relative;
    width: 318px;
    margin: 100px auto;
    height: 370px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    z-index: 10;
    h2{
        font-size: 20px;
        margin-bottom: 30px;
    }
    input {
        outline: none;
        padding: 10px;
        width: 100%;
        border: 1px solid #e9e9e9;
        border-radius: 2px;
        outline: none;
        box-sizing: border-box;
        font-size: 16px;
    }
    .btn{
        margin-top: 30px;
    }
}
img {
    position: absolute;
    top: -20%;
    left: 50%;
    width: 120px;
    height: 95px;
    transform: translate(-50%, 0);
}
.g-username {
    margin-bottom: 10px;

    img {
        display: none;
        width: 120px;
        height: 113px;
    }
}
.g-username:focus-within ~ img {
    display: none;
}
.g-username:focus-within {   
    input {
        border-color: #007fff;
    }
    img {
        display: block;
    }
}
.g-password {
    margin-bottom: 10px;

    img {
        display: none;
        width: 103px;
        height: 84px;
        top: -15%;
    }
}
.g-password:focus-within ~ img {
    display: none;
}

.g-password:focus-within {   
    input {
        border-color: #007fff;
    }
    img {
        display: block;
    }
}
</style>


