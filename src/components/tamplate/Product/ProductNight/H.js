import React from 'react'

function ProductNightH() {
  return (
<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-md-5">
            <div class="carousel slide" data-ride="carousel" id="carousel-1">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active"><img class="img-thumbnail w-100 d-block" src="https://i.imgur.com/U46TQz6.jpg" alt="Slide Image" loading="lazy"/></div>
                    <div class="carousel-item"><img class="img-thumbnail w-100 d-block" src="https://i.imgur.com/YOWv57X.jpg" alt="Slide Image"/></div>
                    <div class="carousel-item"><img class="img-thumbnail w-100 d-block" src="https://i.imgur.com/gLYZpMo.jpg" alt="Slide Image"/></div>
                </div>
                <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                <ol class="carousel-indicators">
                    <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-1" data-slide-to="1"></li>
                    <li data-target="#carousel-1" data-slide-to="2"></li>
                </ol>
            </div>
        </div>
        <div class="col-md-7">
            <h4>Macbook air 8GB RAM/ 256GB SSD</h4>
            <div class="price"><span class="mr-2"><i class="fa fa-rupee text-success"></i>&nbsp;59,999</span><span class="mr-2 cut">65,000</span><span class="text-success">25% OFF</span></div>
            <div class="d-flex flex-row">
                <div class="icons mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i></div><span>1200 ratings &amp; 564 reviews</span>
            </div>
            <div class="d-flex align-items-center mt-4 offers mb-1"><i class="fa fa-check-square-o mt-1"></i><span class="ml-1 font-weight-bold">Bank Offers</span><span class="ml-1">20% Instant Discount on SBI Credit Cards<br/></span></div>
            <div class="d-flex align-items-center offers mb-1"><i class="fa fa-check-square-o mt-1"></i><span class="ml-1 font-weight-bold">Bank Offers</span><span class="ml-1">5% Unlimited Cashback on Axis Bank Credit Card<br/></span></div>
            <div class="d-flex align-items-center offers mb-1"><i class="fa fa-check-square-o mt-1"></i><span class="ml-1 font-weight-bold">Bank Offers</span><span class="ml-1">Extra 5% off* with Axis Bank Buzz Credit Card<br/></span></div>
            <div class="d-flex align-items-center offers"><i class="fa fa-check-square-o mt-1"></i><span class="ml-1 font-weight-bold">Bank Offers</span><span class="ml-1">20% Instant Discount on pay with&nbsp;&nbsp;google wallet<br/></span></div>
            <div class="d-flex align-items-center mt-5 delivery"><i class="fa fa-map-marker"></i><span class="ml-2">Delivery by 23 Jul, Tuesday<br/></span><span class="ml-2 mr-2">|<br/></span><span class="ml-2 mr-2 text-success">FREE<br/></span></div>
            <hr/>
            <div class="d-flex align-items-center mt-2"> <label class="radio"> <input type="radio" name="ram" value="128GB" checked/> <span>128GB</span> </label> <label class="radio"> <input type="radio" name="ram" value="256GB"/> <span>256GB</span> </label> <label class="radio"> <input type="radio" name="ram" value="256GB"/> <span>512GB</span> </label> </div>
            <div><span class="font-weight-bold">Seller:</span><span class="ml-2">Sargam Electronics</span></div>
            <div class="mt-3"><button class="btn btn-dark mr-2" type="button">ADD TO CART</button><button class="btn btn-success" type="button">BUY NOW</button></div>
        </div>
    </div>
</div>
  )
}

export default ProductNightH
