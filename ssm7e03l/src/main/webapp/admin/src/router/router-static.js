import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import news from '@/views/modules/news/list'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import discusscankaowenxian from '@/views/modules/discusscankaowenxian/list'
    import discussfuxiziliao from '@/views/modules/discussfuxiziliao/list'
    import examquestion from '@/views/modules/examquestion/list'
    import exampaper from '@/views/modules/exampaper/list'
    import storeup from '@/views/modules/storeup/list'
    import kemu from '@/views/modules/kemu/list'
    import forum from '@/views/modules/forum/list'
    import fuxiziliao from '@/views/modules/fuxiziliao/list'
    import yonghu from '@/views/modules/yonghu/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import messages from '@/views/modules/messages/list'
    import cankaowenxian from '@/views/modules/cankaowenxian/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/news',
        name: '考试资讯',
        component: news
      }
          ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
          ,{
	path: '/discusscankaowenxian',
        name: '参考文献评论',
        component: discusscankaowenxian
      }
          ,{
	path: '/discussfuxiziliao',
        name: '复习资料评论',
        component: discussfuxiziliao
      }
          ,{
	path: '/examquestion',
        name: '试题管理',
        component: examquestion
      }
          ,{
	path: '/exampaper',
        name: '试卷管理',
        component: exampaper
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/kemu',
        name: '科目',
        component: kemu
      }
          ,{
	path: '/forum',
        name: '论坛管理',
        component: forum
      }
          ,{
	path: '/fuxiziliao',
        name: '复习资料',
        component: fuxiziliao
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/exampaperlist',
        name: '试卷列表',
        component: exampaperlist
      }
          ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
          ,{
	path: '/cankaowenxian',
        name: '参考文献',
        component: cankaowenxian
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/examrecord',
        name: '考试记录',
        component: examrecord
      }
        ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
