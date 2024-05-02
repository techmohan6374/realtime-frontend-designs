var vm = new Vue({
    el: "#spotify",
    data: {
        type: "password",
        eye: "mdi:eye-off",
    },
    methods: {
        showPassword() {
            if (this.eye == "mdi:eye-off") {
                this.eye = "bi:eye-fill";
                this.type = "text";
            } else {
                this.eye = "mdi:eye-off";
                this.type = "password";
            }
        },
        login() {
            alert("Designed & Developed By Tech Mohan");
        },
    },
});