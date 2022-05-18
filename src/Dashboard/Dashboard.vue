<template>

  




<div>
<div class="container-fluid">
     <router-link v-for='car in cars' :key="car.id" :to="{ name: 'CarDetails', params: { id: car.id }}">
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


</router-link>


</div>

</div>

</template>

<script>
import axios from 'axios'
export default {
    name:'Dashboard',

    data(){
        return {

        
            cars: []
        }
    }
    ,

    mounted(){
        this.getCars()
    },

    methods:{
        getCars(){
            axios.get('/cars/')
            .then(response =>{
                this.cars = response.data
            })
            .catch(error => {
                console.log('err', error);
            })
        }
    }

}
</script>
<style >
/*	Reset & General
---------------------------------------------------------------------- */
* { margin: 0px; padding: 0px; }
body {
	background: #234b6b;
	font:14px "Open Sans", sans-serif; 
	text-align:center;
    border: 5px;
}

.tile{
	width: 100%;
	background:rgb(255, 255, 255);
	border-radius:5px;
	box-shadow:0px 2px 3px -1px rgba(151, 171, 187, 0.7);
	float:left;
  	transform-style: preserve-3d;
  	margin: 10px 5px;
    height: 650px;
}

.header{
	border-bottom:1px solid #2e0a60;
	padding:19px ;
	text-align:center;
	color:#59687f;
	font-size:600;
	font-size:19px;	
	position:relative;

}

.banner-img {
	padding: 5px 5px 0;
}

.banner-img img {
	width: 100%;
	border-radius: 5px;
    height: 320px;
}



.stats strong{
	display:block;
	color:#b5adc2;
	font-size:15px;
	font-weight:1000;
    padding: 10px;
}

.stats{
	border-top:1px solid #ebeff2;
	background:#f7f8fa;
	overflow:auto;
	padding:15px ;
	font-size:15px;
	color:#59687f;
	font-weight:600;
	border-radius: 0 0 5px 5px;
    border: 50px;
}
.stats div{
	border-right:1px solid #0c7bcf;
	width: 33.33333%;
	float:left;
	text-align:center;
    padding: 0px;
    padding-left: 0px;
}

.stats div:nth-of-type(3){border:none;}

div.footer {
	text-align: right ;
	position: relative;
	margin: 20px 5px;

}

div.footer a.Cbtn{
	padding: 10px 25px;
	background-color: #DADADA;
	color: #666;
	margin: 10px 2px;
	text-transform: uppercase;
	font-weight: bold;
	text-decoration: none;
	border-radius: 3px;
    
}

div.footer a.Cbtn-primary{
	background-color: #5AADF2;
	color: #FFF;
    
}
.stats st{
    border: 10px;
}
div.footer a.Cbtn-primary:hover{
	background-color: #7dbef5;

}

div.footer a.Cbtn-danger{
	background-color: #3dd40f;
	color: #FFF;
}

div.footer a.Cbtn-danger:hover{
	background-color: #fd7676;
}
</style>