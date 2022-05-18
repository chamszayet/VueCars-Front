<template>

        <div>







<div class="container-fluid">
        <div class="">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="tile">
                    <div class="wrapper">
                        <div class="header">{{car.carMake}}</div>

                        <div class="banner-img">
                            <img :src= car.img alt="Image 1">
                        </div>

                       
                        <div class="stats">

                            <div>
                                <strong> Model</strong> {{car.carModel}}
                            </div>

                            <div>
                                <strong>Engine</strong> {{car.carEngine}}
                            </div>

                            <div>
                                <strong>Cylinders</strong> 4
                            </div>

                        </div>

                        <div class="stats">

                            <div>
                                <strong>Transmission</strong> {{car.carTransmission}}
                            </div>

                            <div>
                                <strong>Mileage</strong> {{car.carMileage}}
                            </div>

                            <div>
                                <strong>Year</strong> {{car.carYear}}
                            </div>

                        </div>

                        

                        <div class="footer">
                            <a :href="car.link" class="Cbtn Cbtn-primary">Web Site</a>
                            <a href="#" class="Cbtn Cbtn-danger">View</a>
                        </div>
                    </div>
                </div> 
            </div>

</div>



</div>







           </div>
  
</template>

<script>
import axios from 'axios'
export default {
    name:'CarDetails',

    data(){
        return {

        
            car: ''
        }
    }
    ,

    mounted(){
        this.getCarDetails()
    },

    methods:{
        getCarDetails(){
         

            const id = this.$route.params.id

            // ""
            // ''
            // ``



            axios.get(`/detail/${id}/`)
            .then(response =>{
                this.car = response.data
                console.log('car deatils', response.data);
            })
            .catch(error => {
                console.log('err', error);
            })
        }
    }

}
</script>

<style>
* { margin: 0px; padding: 0px; text-align: center; }
.tile{
	width: 100%;
	background:#fff;
	border-radius:5px;
	box-shadow:0px 2px 3px -1px rgba(151, 171, 187, 0.7);
	float:left;
  	transform-style: preserve-3d;
  	margin: 10px 5px;
    vertical-align: middle;
}

</style>