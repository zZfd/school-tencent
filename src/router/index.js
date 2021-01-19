/*
 * @Author: zfd
 * @Date: 2020-11-11 09:22:16
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-20 09:32:50
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '选课中心'
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/my/login.vue'),
        meta: {
          title: '登录/注册'
        }
      },
      {
        path: 'my-info',
        name: 'myInfo',
        component: () => import('@/views/my/my.vue'),
        meta: {
          title: '我的信息'
        }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/order'),
        meta: {
          title: '我的订单'
        }
      },
      {
        path: 'my-subject',
        name: 'mySubject',
        component: () => import('@/views/subject'),
        meta: {
          title: '我的课程'
        }
      }
    ]
  },

  {
    path: '/change',
    name: 'change',
    redirect: '/change/phone',
    component: () => import('@/layout/index-nav.vue'),
    children: [
      {
        path: 'basic',
        name: 'changeBasic',
        component: () => import('@/views/my/components/basic.vue'),
        meta: {
          title: '修改基础信息'
        }
      },
      {
        path: 'education',
        name: 'changeEducation',
        component: () => import('@/views/my/components/education.vue'),
        meta: {
          title: '修改文化程度'
        }
      },
      {
        path: 'phone',
        name: 'changePhone',
        component: () => import('@/views/my/components/phone.vue'),
        meta: {
          title: '修改手机号'
        }
      },
      {
        path: 'password',
        name: 'changePassword',
        component: () => import('@/views/my/components/password.vue'),
        meta: {
          title: '修改密码'
        }
      },
      {
        path: 'idcard',
        name: 'changeIdcard',
        component: () => import('@/views/my/components/idcard.vue'),
        meta: {
          title: '修改身份信息'
        }
      },
      {
        path: 'address',
        name: 'changeAddress',
        component: () => import('@/views/my/components/address.vue'),
        meta: {
          title: '修改地址'
        }
      }
    ]
  },
  {
    path: '/order-sub',
    name: 'orderSub',
    redirect: '/order',
    component: () => import('@/layout/index-nav.vue'),
    children: [
      {
        path: 'detail',
        name: 'orderDetail',
        component: () => import('@/views/order/order-detail'),
        meta: {
          title: '订单详情'
        }
      },
      {
        path: 'create',
        name: 'orderCreate',
        component: () => import('@/views/order/order-create'),
        meta: {
          title: '生成订单'
        }
      }
    ]
  },
  {
    path: '/subject',
    name: 'Subject',
    redirect: '/home',
    component: () => import('@/layout/index-nav.vue'),
    children: [
      {
        path: 'detail',
        name: 'subjectDetail',
        component: () => import('@/views/home/detail'),
        meta: {
          title: '课程详情'
        }
      },
      {
        path: 'report',
        name: 'subjectReport',
        component: () => import('@/views/report'),
        meta: {
          title: '报名表确认'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
