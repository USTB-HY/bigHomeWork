<template>
    <div>
        <div class="type-nav">
            <div class="container">
                <div  @mouseleave="showOffNav"  @mouseenter="showNav">
                    <h2 class="all">全部商品分类</h2>
                    <transition name="sort">
                        <div class="sort" v-show="curNavShow">  <!-- v-show 绑定数据不加： -->
                            <div class="all-sort-list2" @click="goSearch">  
                                <div class="item" v-for="(itemc1,index) in categoryList" :key="itemc1.categoryId"  @mouseenter="change(index)" :class="{cur:currentIndex == index}">
                                    <h3>
                                        <a href="javascript:;" :data-categoryName='itemc1.categoryName' :data-category1Id='itemc1.categoryId'>{{itemc1.categoryName}}</a>
                                        <!-- <router-link to="/Search">{{itemc1.categoryName}}</router-link>  会渲染很多组件，卡顿 -->
                                    </h3>
                                    <div class="item-list clearfix">
                                        <div class="subitem">
                                            <dl class="fore" v-for="itemc2 in itemc1.categoryChild" :key="itemc2.categoryId">
                                                <dt>
                                                    <a href="javascript:;" :data-categoryName='itemc2.categoryName' :data-category2Id='itemc2.categoryId'>{{itemc2.categoryName}}</a>
                                                    <!-- <router-link to="/Search">{{itemc2.categoryName}}</router-link> -->
                                                </dt>
                                                <dd>
                                                    <em v-for="itemc3 in itemc2.categoryChild" :key="itemc3.categoryId">
                                                        <a href="javascript:;" :data-categoryName='itemc3.categoryName' :data-category3Id='itemc3.categoryId'>{{itemc3.categoryName}}</a>
                                                        <!-- <router-link to="/Search">{{itemc3.categoryName}}</router-link> -->
                                                    </em>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
        name:'TypeNav',
        data() {
            return {
                currentIndex:-1,
                curNavShow:true,
            }
        },
        computed:{
            ...mapState('Home',['categoryList']),
        },
        mounted(){
            this.curNavShow = this.$route.path == '/Home'? true : false
        },
        methods: {
            change(val) {
                this.currentIndex = val
            },
            goSearch(e) {
                let event = e.target
                let {categoryname,category1id,category2id,category3id} = event.dataset//通过自定义属性判断点击的元素标签
                let location = {name:'Search'}
                let query = {categoryName:categoryname}
                if(categoryname) {
                    if(category1id) {
                        console.log(category1id);
                        query.category1Id = category1id
                    }else if (category2id) {
                        console.log(category2id);
                        query.category2Id = category2id
                    }else if (category3id) {
                        console.log(category3id);
                        query.category3Id = category3id
                    }
                    location.query = query //通过整合location和query变成一个可用的push对象
                    console.log(this.$route);
                    this.$router.push(location,()=>{},()=>{})
                }
            },
            showNav() {
                this.curNavShow = true
            },
            showOffNav() {
                this.curNavShow = this.$route.path == '/Home'? true : false
                this.currentIndex = -1
            }
        }
    }
</script>

<style lang="less" scoped>
        .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                    }
                    
                    .cur {
                        background-color: skyblue;
                    }

                }
            }

            .sort-enter {
                height: 0px;
            }
            .sort-enter-to{
                height: 461px;
            }
            .sort-enter-leave{
                height: 0px;
            }
            .sort-enter-active{
                transition:0.1s linear;
            }
        }
    }
</style>