
const middle_screen = () => import('@/pages/screen/middle.vue')
const left_screen = () => import('@/pages/screen/leftScreen.vue')
let routes = [
    {
        path: '/',
        redirect: '/middle'
    },
    {
        path: '/middle',
        name: 'middle',
        component: middle_screen,
        meta: {
            title: '中间大屏'
        }
    },
    {
        path: '/left',
        name: 'left',
        component: left_screen,
        meta: {
            title: '左侧大屏'
        }
    }
]
// let endDate = new Date('2022-01-28 00:00:00').getTime()
// let curDate = new Date().getTime()
// let newRoutes = []
// if (curDate < endDate) {
//     newRoutes = routes
// }
// export default newRoutes
export default routes
