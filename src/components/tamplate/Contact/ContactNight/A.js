import React from 'react'

function ContactNightA() {
  return (
    <div class="formthree ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="sr-only">Name</label>
                                        <input type="text" class="form-control" required="" id="nameSix" placeholder="Your Name"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="sr-only">Email</label>
                                        <input type="email" class="form-control" required="" id="emailSix" placeholder="Email Address"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="sr-only">Message</label>
                                <textarea class="form-control" required="" rows="7" placeholder="Write Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                   
                </div>
                
            </div>
    
        </div>
  )
}

export default ContactNightA
