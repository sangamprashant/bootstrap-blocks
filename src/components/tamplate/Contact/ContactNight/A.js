import React from 'react'

function ContactNightA() {
  return (
    <div class="formthree ptb-100">
            <div class="container">
                <div class="row justify-content-center text-white">
                    <div class="col-md-8 col-md-offset-2">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="sr-only">Name</label>
                                        <input type="text" class="form-control" required="" id="nameSix" placeholder="Your Name" style={{backgroundColor:"gray",color:"white"}}/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="sr-only">Email</label>
                                        <input type="email" class="form-control" required="" id="emailSix" placeholder="Email Address" style={{backgroundColor:"gray",color:"white"}}/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="sr-only">Message</label>
                                <textarea class="form-control" required="" rows="7" placeholder="Write Message" style={{backgroundColor:"gray",color:"white"}}></textarea>
                            </div>
                            <div className='d-flex'>
                                <button type="submit" class="my-3 w-100 btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                   
                </div>
                
            </div>
    
        </div>
  )
}

export default ContactNightA
