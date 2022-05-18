<template>
  <div>
    <div class="container" style="margin-top: 40px">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <strong> Sign in to continue</strong>
            </div>
            <div class="panel-body">
              <form          
                @submit.prevent="handleSubmit"
                class="mt-8 space-y-6"
                action="#"
                method="POST"
                    
              >
                <fieldset>
                  <div class="row">
                    <div class="center-block">
                      <img
                        class="profile-img"
                        src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-10 col-md-offset-1">
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="glyphicon glyphicon-user"></i>
                          </span>
                          <input
                            class="form-control"
                            placeholder="Username"
                            v-model="username"
                            id="email-address"
                            name="email"
                            type="text"
                            autocomplete="email"
                            required
                            autofocus
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="glyphicon glyphicon-lock"></i>
                          </span>
                          <input
                            class="form-control"
                            placeholder="Password"
                            v-model="password"
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          type="submit"
                          class="btn btn-lg btn-primary btn-block"
                          value="Sign in"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
              <p v-for="error in errors" :key="error.id">{{ error }}</p>

            </div>
            <div class="panel-footer">
              Don't have an account! <a href="#" onClick=""> Sign Up Here </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: "",

      errors: [],
    };
  },

  methods: {
    handleSubmit() {
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      const data = {
        username: this.username,
        password: this.password,
      };
      console.log("data", data);
      axios
        .post("/auth/token/login/", data)
        .then((res) => {
          const token = res.data.auth_token;
          this.$store.commit("setToken", token);

          axios.defaults.headers.common["Authorization"] = "Token " + token;
          localStorage.setItem("token", token);
          console.log(token);

          this.$router.push("/Dashboard");
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else if (error.message) {
            this.errors.push("Something went wrong. Please try again!");
          }
        });
    },
  },
};
</script>

<style>
.panel-heading {
  padding: 5px 15px;
}

.panel-footer {
  padding: 1px 15px;
  color: #a0a0a0;
}
.form-group{

  background-color: rgb(0, 0, 80);
}
.profile-img {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
