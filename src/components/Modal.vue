<script setup>

</script>

<template>

    <div class=" w-3/12 h-dvh px-20 py-14 bg-white  ">

        <div class="flex  items-center gap-3 text-4xl ">
            <div>
                <svg width="37" height="37"  viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.5003 34.8876C17.4674 34.8876 16.419 34.6564 15.602 34.1784L7.12284 29.2914C3.66951 26.9634 3.45367 26.6089 3.45367 22.9551V14.0443C3.45367 10.3905 3.65409 10.0359 7.04576 7.73887L15.5865 2.80553C17.2053 1.86512 19.749 1.86512 21.3678 2.80553L29.8778 7.70803C33.3311 10.0359 33.547 10.3905 33.547 14.0443V22.9397C33.547 26.5934 33.3465 26.948 29.9549 29.2451L21.414 34.1784C20.5815 34.6564 19.5332 34.8876 18.5003 34.8876ZM18.5003 4.42428C17.8528 4.42428 17.2207 4.54762 16.7736 4.8097L8.29451 9.7122C5.78159 11.408 5.78159 11.408 5.78159 14.0443V22.9397C5.78159 25.5759 5.78159 25.5759 8.35617 27.318L16.7736 32.1743C17.6832 32.6984 19.3328 32.6984 20.2424 32.1743L28.7215 27.2718C31.219 25.5759 31.219 25.5759 31.219 22.9397V14.0443C31.219 11.408 31.219 11.408 28.6445 9.66595L20.227 4.8097C19.7799 4.54762 19.1478 4.42428 18.5003 4.42428Z"
                        fill="black" />
                    <path
                        d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z"
                        fill="black" />
                </svg>

            </div>
            Dashboard

        </div>
        <div class=" pt-10 "  >
            <router-link to="/dashboard">
            <div class=" rounded-xl active:bg-purple-900 active:text-white   flex  items-center gap-3  p-2  ">
                <div>
                    <div class="icon-dashboard text-3xl "></div>
                </div>
               
                
                Dashboard
                
            </div></router-link>
            
            
            <router-link to="/product">
            <div class=" rounded-xl active:bg-purple-900 active:text-white flex  items-center gap-3 p-2  ">
                <div>
                    <span class="icon-product text-3xl"></span>
                </div>
                
                Product
                <div class="flex justify-end w-full" >
                    <span class="icon-right"></span>

                </div>
            </div></router-link>
            <router-link to="/">
            <div class=" rounded-xl active:bg-purple-900 active:text-white flex  items-center gap-3  p-2 ">
                <div>
                    <span class="icon-customers text-3xl"></span>

                </div>
                
                Customers
                <div  class="flex justify-end w-full">
                    <span class="icon-right"></span>

                </div>
            </div></router-link>
            <router-link to="/income">
            <div class=" rounded-xl active:bg-purple-900 active:text-white flex  items-center gap-3  p-2  ">
                <div>
                    <span class="icon-income text-3xl  " ></span>


                </div>
                
                Income
                <div  class="flex justify-end w-full">
                    <span class="icon-right"></span>

                </div>
            </div></router-link>
            <router-link to="/na">
            <div class=" rounded-xl  flex  active:bg-purple-900 active:text-white items-center gap-3  p-2  ">
                <div>
                    <span class="icon-navigation text-3xl"></span>

                </div>
                
                Navigation
                <div  class="flex justify-end w-full">
                    <span class="icon-right"></span>

                </div>
            </div></router-link>
            <router-link to="/help">
            <div class=" rounded-xl active:bg-purple-900 active:text-white flex  items-center gap-3  p-2 ">
                <div>
                    <span class="icon-help text-3xl"></span>

                </div>
                Help
                <div  class="flex justify-end w-full">
                    <span class="icon-right"></span>

                </div>
            </div></router-link>
        </div>

    </div>

</template>

<style scoped></style>
