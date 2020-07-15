const express=require('express');
const app = express();
const port =3001;
var regist ={};

app.use( (req,res,next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/home', (req,res) => {
	const obj ={
		homeHeader:'Sample credo products',
		homeContent: '<div class="a-cardui-body"><div class="a-section a-spacing-small grid-row-1"><div class="a-section a-spacing-none quadrant-container quadrant-container-0"><a aria-label="Vivo U10" class="a-link-normal image-redirect aok-block image-window" href="/dp/B07DJD1RTM?pf_rd_p=fa25496c-7d42-4f20-a958-cce32020b23e&amp;pf_rd_r=077VNHTVX3FHZYY01SW1"><div class="a-section a-spacing-none fluid-image-container"><img alt="Vivo U10" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MSO_november/TripleCamera/2x_3._SY116_CB447184121_.jpg" class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MSO_november/TripleCamera/1x_3._SY232_CB447184126_.jpg"></div><div class="a-section a-spacing-none image-label truncate-2line"><span class="a-size-small a-color-base aok-align-center aok-inline-block">Vivo U10</span></div></a></div><div class="a-section a-spacing-none quadrant-container quadrant-container-1"><a aria-label="Galaxy M30s" class="a-link-normal image-redirect aok-block image-window" href="/dp/B07HGMQX6N?pf_rd_p=fa25496c-7d42-4f20-a958-cce32020b23e&amp;pf_rd_r=077VNHTVX3FHZYY01SW1"><div class="a-section a-spacing-none fluid-image-container"><img alt="Galaxy M30s" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MSO_november/TripleCamera/2x_1._SY116_CB447184121_.jpg" class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MSO_november/TripleCamera/1x_1._SY232_CB447184126_.jpg"></div><div class="a-section a-spacing-none image-label truncate-2line"><span class="a-size-small a-color-base aok-align-center aok-inline-block">Galaxy M30s</span></div></a></div></div><div class="a-section grid-row-2"><div class="a-section a-spacing-none quadrant-container quadrant-container-0"><a aria-label="OnePlus 7T" class="a-link-normal image-redirect aok-block image-window" href="/dp/B07DJHXTLJ?pf_rd_p=fa25496c-7d42-4f20-a958-cce32020b23e&amp;pf_rd_r=077VNHTVX3FHZYY01SW1"><div class="a-section a-spacing-none fluid-image-container"><img alt="OnePlus 7T" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MSO_november/TripleCamera/2x_2._SY116_CB447184121_.jpg" class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MSO_november/TripleCamera/1x_2._SY232_CB447184126_.jpg"></div><div class="a-section a-spacing-none image-label truncate-2line"><span class="a-size-small a-color-base aok-align-center aok-inline-block">OnePlus 7T</span></div></a></div><div class="a-section a-spacing-none quadrant-container quadrant-container-1"><a aria-label="OnePlus 7T Pro" class="a-link-normal image-redirect aok-block image-window" href="/dp/B07DJ8K2KT?pf_rd_p=fa25496c-7d42-4f20-a958-cce32020b23e&amp;pf_rd_r=077VNHTVX3FHZYY01SW1"><div class="a-section a-spacing-none fluid-image-container"><img alt="OnePlus 7T Pro" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MSO_november/TripleCamera/1x_4._SY116_CB447184121_.jpg" class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MSO_november/TripleCamera/1x_4._SY232_CB447184121_.jpg"></div><div class="a-section a-spacing-none image-label truncate-2line"><span class="a-size-small a-color-base aok-align-center aok-inline-block">OnePlus 7T Pro</span></div></a></div></div></div>'
	};
	res.send(obj);
});

app.get('/register', (req,res) => {
		regist = {userName: req.query.un,
				  passWord: req.query.pw};
		console.log(regist);
		});

app.get('/login', (req,res)=>{
	const userName = req.query.un;
	const passWord = req.query.pw;
	console.log("userName:"+userName);
	console.log("passWord:"+passWord);
	let responseObj={};	
	if((userName && userName==regist.userName) && (passWord && passWord==regist.passWord)){
		responseObj.code="1000";
		responseObj.message ="login successful";
	}else{
		responseObj.code="1001";
		responseObj.message ="Username or Password is incorrect!"
	}
	res.send(responseObj);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));