import React, {Component} from "react"

class Discussion extends Component{

    openChat(e){
        this.props.openChat()
    }
    render(){
        return(
            <>
            		<div class="col-lg-3 pd-right-none no-pd">
								<div class="right-sidebar">	
									<div class="widget suggestions full-width mCustomScrollbar " data-mcs-theme="dark">
										<div class="sd-title">
											<h3>Discussion Instantanée</h3>
											<i class="la la-ellipsis-v"></i>
										</div>
										<div class="suggestions-list">
											<div onClick = {this.openChat.bind(this)} class="suggestion-usd">
												<img src="images/moi.jpg" alt="" />
												<div class="sgt-text">
													<h4>Jessica William</h4>
													<span>Graphic Designer</span>
												</div>
												<span><i class="fa fa-circle"></i></span>
											</div>
											<div class="suggestion-usd">
												<img src="images/resources/s2.png" alt="" />
												<div class="sgt-text">
													<h4>John Doe</h4>
													<span>PHP Developer</span>
												</div>
												<span><i class="fa fa-circle"></i></span>
											</div>
											<div class="suggestion-usd">
												<img src="images/resources/s3.png" alt="" />
												<div class="sgt-text">
													<h4>Poonam</h4>
													<span>Wordpress Developer</span>
												</div>
												<span><i class="fa fa-circle"></i></span>
											</div>
											<div class="suggestion-usd">
												<img src="images/resources/s3.png" alt="" />
												<div class="sgt-text">
													<h4>Poonam</h4>
													<span>Wordpress Developer</span>
												</div>
												<span><i class="fa fa-circle"></i></span>
											</div>
											<div class="suggestion-usd">
												<img src="images/resources/s3.png" alt="" />
												<div class="sgt-text">
													<h4>Poonam</h4>
													<span>Wordpress Developer</span>
												</div>
												<span><i class="fa fa-circle"></i></span>
											</div>
											<div class="suggestion-usd">
												<img src="images/resources/s4.png" alt="" />
												<div class="sgt-text">
													<h4>Bill Gates</h4>
													<span>C &amp; C++ Developer</span>
												</div>
												<span><i class="fa fa-circle"></i></span>
											</div>
											<div class="suggestion-usd">
												<img src="images/resources/s5.png" alt="" />
												<div class="sgt-text">
													<h4>Jessica William</h4>
													<span>Graphic Designer</span>
												</div>
												<span><i class="fa fa-circle"></i></span>
											</div>
											<div class="suggestion-usd">
												<img src="images/resources/s6.png" alt="" />
												<div class="sgt-text">
													<h4>John Doe</h4>
													<span>PHP Developer</span>
												</div>
												<span><i class="fa fa-circle"></i></span>
											</div>
										
										</div>
									</div>
								</div>
							</div>
            </>
        )
    }
}


export default Discussion