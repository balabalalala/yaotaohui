import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import HomeSearch from '@/pages/homeSearch'
import DailyPunch from '@/pages/dailyPunch'
import SchoolHouse from '@/pages/schoolHouse'
import SignUp from '@/pages/signUp'
import ConfirmSign from '@/pages/confirmSign'
import ReceiptInformation from '@/pages/receiptInformation'
import LiveShow from '@/pages/liveShow'
import HotDetail from '@/pages/hotDetail'
import Inquiry from '@/pages/inquiry'
import Organization from '@/pages/organization'
import Handdraw from '@/pages/handdraw'
import Study from '@/pages/study'
import Aboutwe from '@/pages/aboutwe'
import Goodteacher from '@/pages/goodteacher'
import Smallclass from '@/pages/smallclass'
import Onlineapply from '@/pages/onlineapply'
import Onlineconsult from '@/pages/onlineconsult'
import School from "@/school"
import Stalkgroup from "@/school/talkgroup"
import moreimg from "@/assets/school-img/more.png"
import talkgroupSet from "@/school/talkgroup/talkgroupSet"
import gradeline from "@/school/gradeline" 
import teaching from "@/school/teaching"
import teacherMSg from "@/school/teaching/teacherMsg"
import form from "@/school/form"

// import BottomNav from '@/components/bottomNav'
import My from '@/pages/my'
import Friend from '@/pages/friend'
import Chat from '@/pages/chat'
import Follow from '@/pages/follow'
import Collect from '@/pages/collect'
import Loda from '@/pages/loda'
import MySchool from '@/pages/mySchool'
import Course from '@/pages/course'
import Setup from '@/pages/setup'
import AboutYan from '@/pages/aboutYan'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/bottomNav',
    //   name: 'BottomNav',
    //   component: BottomNav
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{setNavShow:true}
    },
    {
      path: '/homeSearch',
      name: 'HomeSearch',
      component: HomeSearch,
      meta:
        {
          setNavShow:false,
          title:'搜索'
        }
    },
    {
      path: '/dailyPunch',
      name: 'DailyPunch',
      component: DailyPunch,
      meta:
        {
          setNavShow:false,
          title:'每日打卡'
        }
    },
    {
      path: '/schoolHouse',
      name: 'SchoolHouse',
      component: SchoolHouse,
      meta:
        {
          setNavShow:false,
          title:'学堂'
        }
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp,
      meta:
        {
          setNavShow:false,
          title:'2019最新...'
        }
    },
    {
      path: '/confirmSign',
      name: 'ConfirmSign',
      component: ConfirmSign,
      meta:
        {
          setNavShow:false,
          title:'报名'
        }
    },
    {
      path: '/receiptInformation',
      name: 'ReceiptInformation',
      component: ReceiptInformation,
      meta:
        {
          setNavShow:false,
          title:'收货信息'
        }
    },
    {
      path: '/liveShow',
      name: 'LiveShow',
      component: LiveShow,
      meta:
        {
          setNavShow:false,
          title:'直播'
        }
    },
    {
      path: '/inquiry',
      name: 'Inqquiry',
      component: Inquiry,
      meta:
        {
          setNavShow:false,
          title:'研讯'
        }
    },
    {
      path: '/hotDetail',
      name: 'HotDetail',
      component: HotDetail,
      meta:
        {
          setNavShow:false,
          title:'直播'
        }
    },
    {
      path: '/organization',
      name: 'organization',
      component: Organization,
      meta:{setNavShow:true}
    } ,
    {
      path: '/handdraw',
      name: 'handdraw',
      component: Handdraw,
      meta:{
        Title:'不凡手绘',
      }
    } ,
    {
      path: '/study',
      name: 'study',
      component: Study,
      meta:{
        Title:'学习环境',
      }
    } ,
    {
      path: '/aboutwe',
      name: 'aboutwe',
      component: Aboutwe,
      meta:{
        Title:'关于我们',
      }
    } ,
    {
      path: '/goodteacher',
      name: 'goodteacher',
      component: Goodteacher,
      meta:{
        Title:'好的讲师',
      }
    } ,
    {
      path: '/smallclass',
      name: 'smallclass',
      component: Smallclass,
      meta:{
        Title:'高品质口碑小班',
      }
    } ,
    {
      path: '/onlineapply',
      name: 'onlineapply',
      component: Onlineapply,
      meta:{
        Title:'不凡手绘-在线报名',
      }
    } ,
    {
      path: '/onlineconsult',
      name: 'onlineconsult',
      component: Onlineconsult,
      meta:{
        Title:'在线咨询',
      }
    } ,
    {
      path: '/schoolhome',
      name: 'school',
      component: School,
      meta:{
        setNavShow:true,
      	show:false,
      	text:"院校"
      },
      children:[
         {
          path:"1",
          name:"gradeline",
          component:gradeline,
          meta:{
            setNavShow:false,
            show:true,
            text:"分数线",
            moreshow:false,
          }
        },
        {
          path:"2",
          name:"talkgroup",
          component:Stalkgroup,
          meta:{
            setNavShow:false,
            show:true,
            text:"讨论组",
            moreshow:true,
            imgmore:moreimg
          },
          children:[
            {
              path :"groupSet",
              name : "talkgroupSet",
              component:talkgroupSet,
               meta:{
                setNavShow:false,
                show:true,
                text:"群组设置",
                moreshow:false,
                imgmore:moreimg
              },
            }
          ]
        },
         {
          path:"3",
          name:"form",
          component:form,
          meta:{

            show:true,
            text:"报录比",
            setNavShow:false,
          }
        },
         {
          path:"4",
          name:"teaching",
          component:teaching,
          meta:{
            show:true,
            text:"知名导师",
            moreshow:false,
          },
           children:[
            {
              path :"teacherMSg",
              name : "teacherMSg",
              component:teacherMSg,
               meta:{
                //  navshow:false,
                show:true,
                text:"知名导师",
                moreshow:false,
              },
            }
          ]
        },
      ] 
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta:{
        setNavShow:true,
      }
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend,
      meta:{
        title:"好友",
        setNavShow:false,
      }
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      meta: {
        title: "Springhug",
        setNavShow:false,
      }
    },
    {
      path: '/follow',
      name: 'Follow',
      component: Follow,
      meta: {
        title: "关注",
        setNavShow:false,
      }
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect,
      meta: {
        title: "我的收藏",
        setNavShow:false,
      }
    },
    {
      path: '/loda',
      name: 'Loda',
      component: Loda,
      meta: {
        title: " ",
        setNavShow:false,
      }
    },
    {
      path: '/mySchool',
      name: 'MySchool',
      component: MySchool,
      meta: {
        title: "我的院校 ",
        setNavShow:false,
      }
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
      meta: {
        title: "我的课程 ",
        setNavShow:false,
      }
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup,
      meta: {
        title: "个人设置 ",
        setNavShow:false,
      }
    },
    {
      path: '/aboutYan',
      name: 'AboutYan',
      component: AboutYan,
      meta: {
        title: "关于我们 ",
        setNavShow:false,
      }
    },
  ]
})
