import React from 'react'

function PricingNightC() {
  return (
    <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-4 mt-1">
                <div class="part1 text-center p-3 py-3">
                    <h6 class="free mt-4">FREE</h6> <span class=" amount mt-4 d-block">$0</span> <span class="user d-block mt-2">per user,per month</span> <span class="information d-block mt-4">1-10</span> <span class="information d-block mt-4">Available</span> <span class="information d-block mt-5">----</span> <span class="information d-block mt-4">Community</span>
                </div>
            </div>
            <div class="col-md-4 mt-1">
                <div class="part2 text-center p-3 py-3 text-white">
                    <h6 class="free mt-4">POPULAR</h6> <span class=" amount mt-4 d-block">$8.50</span> <span class="user d-block mt-2">per user,per month</span> <span class="information d-block mt-4">11+</span> <span class="information d-block mt-4">Available</span> <span class="information d-block mt-5">Observers</span> <span class="information d-block mt-4">Priority</span>
                </div>
            </div>
            <div class="col-md-4 mt-1">
                <div class="part3 p-3 text-dark text-center py-3">
                    <h6 class="free mt-4">ENTERPRISE</h6> <span class=" amount mt-4 d-block">CUSTOM</span> <span class="user d-block mt-2">include volume discounts</span> <span class="information d-block mt-4">50+</span> <span class="information d-block mt-4">Available</span> <span class="information d-block mt-5">Observers,SSO</span> <span class="information d-block mt-4">Dedicated,CSM</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingNightC
