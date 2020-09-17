import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import EditUser from '../views/EditUser.vue'
import axios from 'axios';
Vue.use(VueRouter)


function AdminAuth(to, from, next){

  if(localStorage.getItem('token') != undefined)
  {
    let req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }

    // console.log(req);

    axios.post("http://localhost:3535/validate",{},req).then(res => {
      
      res;
      next();

    }).catch(error => {
      
      // console.log(error.response.data);
      // console.log('%c' + error.response.data, 'background: #222; color: #bada55');
      console.log('%c' + error.response.data, 'background: #effaf3; color: #f00');
      next("/login");
    });
  
  }else{
    
    next("/login");

  }

}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
    beforeEnter: AdminAuth
  },

  {
    path: '/admin/user/edit/:userId',
    name: "EditUser",
    component: EditUser,
    beforeEnter: AdminAuth
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
