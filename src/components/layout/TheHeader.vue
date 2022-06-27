<template>
<header>
    <nav class="navbar navbar-expand-lg" style="z-index: 1;">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="spinner"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/dovesiamo" class="fw-bold">Dove siamo</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/chisiamo" class="fw-bold">Chi siamo</router-link>
                    </li>
                </ul>
                <div class="mx-auto p-3 nav-img">
                   <img :src="`${logo}logo.svg`" class="img-fluid" alt="logo pasticceria" style="height:100px">
                    <!-- sintassi di vue cli? -->
                </div>
                <ul class="navbar-nav ms-auto mb-lg-0">
                    <li class="nav-item">
                        <a class="fw-bold hvr-underline-from-center" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="fw-bold hvr-underline-from-center" href="#">Link</a>
                    </li>
                     <!-- <li v-if="" class="nav-item">
                        <a class="fw-bold hvr-underline-from-center" href="#">Link</a>
                    </li> -->
                    <!-- prova commit -->
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    data(){
        return {
            logo: "./images/",
        };
    },
}
</script>

<style scoped>
nav {
    background-color: #FEFEFE;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);  
}

nav a {
    color: black;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: 0.3s ease-in-out;
}

nav a:hover {
    color:#026E6E;
}


nav button:focus{
  box-shadow: none;
}

@media only screen and (max-width: 992px) {
  .nav-img {
    display:none;
  }
}

.divider{
    overflow: hidden;
    border-top: 1px solid lightgray;
    opacity: 1; 
}
</style>