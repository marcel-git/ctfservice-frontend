<template>
  <div id="app">
    <nav id='menu'>
      <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
      <ul>
        <li><router-link to="/"><img src="/assets/logo.png" width="50" height="50" alt="Home"></router-link></li>
        <li><router-link to="/rules">Rules</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
        <li><router-link to="/scoreboard">Scoreboard</router-link></li>
        <li><router-link to="/challenges">Challenges</router-link></li>
        <li><a class='dropdown-arrow'>Admin</a>
          <ul class='sub-menus'>
            <li><router-link to="/admin">Users</router-link></li>
            <li><router-link to="/admin">Teams</router-link></li>
            <li><router-link to="/admin">Challenges</router-link></li>
            <li><router-link to="/admin">Files</router-link></li>
            <li><router-link to="/admin/pages">Pages</router-link></li>
            <li><router-link to="/admin">Options</router-link></li>
          </ul>
        </li>
          <div class="topnav-right">
              <li><router-link to="/profile">Profile</router-link></li>
              <li><router-link to="/login">Logout</router-link></li>
          </div>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '20px';
    }
  }

</script>

<style>

body { background-color: #373d48}

.topnav-right {
    float: right;
    padding-right: 1%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: azure;
}

#menu {
  background: #2F343D;
  color: #FFF;
  height: 45px;
  padding-left: 18px;
  border-radius: 20px;
}
#menu ul, #menu li {
  margin: 0 auto;
  padding: 0;
  list-style: none
}
#menu ul {
  width: 100%;
}
#menu li {
  float: left;
  display: inline;
  position: relative;
}
#menu a {
  display: block;
  line-height: 45px;
  padding: 0 14px;
  text-decoration: none;
  color: #F0FFFF;
  font-size: 16px;
}
#menu a.dropdown-arrow:after {
  content: "\25BE";
  margin-left: 5px;
}
#menu li a:hover {
  color: #2F343D;
  background: #F0FFFFFF;
}

#menu input {
  display: none;
  margin: 0;
  padding: 0;
  height: 45px;
  width: 100%;
  opacity: 0;
  cursor: pointer
}
#menu label {
  display: none;
  line-height: 45px;
  text-align: center;
  position: absolute;
  left: 35px
}
#menu label:before {
  font-size: 1.6em;
  content: "\2261";
  margin-left: 20px;
}
#menu ul.sub-menus{
  height: auto;
  overflow: hidden;
  width: 170px;
  background: #444444;
  position: absolute;
  z-index: 99;
  display: none;
}
#menu ul.sub-menus li {
  display: block;
  width: 100%;
}
#menu ul.sub-menus a {
  color: #FFFFFF;
  font-size: 16px;
}
#menu li:hover ul.sub-menus {
  display: block
}
#menu ul.sub-menus a:hover{
  background: #F2F2F2;
  color: #444444;
}
@media screen and (max-width: 800px){
  #menu {position:relative}
  #menu ul {background:#111;position:absolute;top:100%;right:0;left:0;z-index:3;height:auto;display:none}
  #menu ul.sub-menus {width:100%;position:static;}
  #menu ul.sub-menus a {padding-left:30px;}
  #menu li {display:block;float:none;width:auto;}
  #menu input, #menu label {position:absolute;top:0;left:0;display:block}
  #menu input {z-index:4}
  #menu input:checked + label {color:white}
  #menu input:checked + label:before {content:"\00d7"}
  #menu input:checked ~ ul {display:block}
}


#menu a.router-link-exact-active {
  color: #42b983;
}
</style>
