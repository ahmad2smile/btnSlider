class BtnSlider {
  constructor(btnId) {
    this.btnId = btnId;
  }

  get slideBtn(){
    let marginBottom = 45;
    let btnElement = document.getElementById(this.btnId);
    let sliderHeight = window.innerHeight;
    let btnTop = window.getComputedStyle(btnElement,null).getPropertyValue("top");
    btnTop = btnTop.slice(0,-2);
    let btnTopInt = parseInt(btnTop, 10);

    if(sliderHeight - marginBottom > btnTopInt){
		 btnTopInt = 10 + btnTopInt;
		 if(document.body.scrollHeight - window.innerHeight == window.scrollY){
			btnTopInt = sliderHeight - marginBottom;
		}
	}	
    btnElement.style.top = btnTopInt + "px";
  }
}

const btnSlider = new BtnSlider("btnToSlideId");

function sliderCallBack() {
  btnSlider.slideBtn;
}

window.onscroll = sliderCallBack;
