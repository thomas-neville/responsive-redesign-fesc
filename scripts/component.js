Vue.component('app-footer', {
      props: ['consortium'],
    template: '<div><div v-for="colleges in consortium"><a v-bind:href="colleges.url"><img v-bind:src="colleges.imgSource" v-bind:alt="colleges.name"></a></div></div>'
})