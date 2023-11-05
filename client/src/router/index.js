import Vue from 'vue'
import Router from 'vue-router'

// Subjects
import HatIndex from '@/components/Hats/Index'
import HatCreate from '@/components/Hats/CreateHat'
import HatEdit from '@/components/Hats/EditHat'
import HatShow from '@/components/Hats/ShowHat'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/hats',
            name: 'hats',
            component: HatIndex
        },
        {
            path: '/hat/create',
            name: 'hats-create',
            component: HatCreate
        },
        {
            path: '/hat/edit/:hatId',
            name: 'hat-edit',
            component: HatEdit
        },
        {
            path: '/hat/:hattId',
            name: 'hat',
            component: HatShow
        },
    
    ]
})