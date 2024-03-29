var vm = new Vue({
    el: "#googlesignup",
    data: {
      type: 'password',
      checked:false,
    },
    methods: {      
      signIn() {
        alert("Designed & Developed By Tech Mohan");
      },
    },
    computed:{
      showPassword() {
        return this.checked ? 'text' : 'password';
      },
    },
  });