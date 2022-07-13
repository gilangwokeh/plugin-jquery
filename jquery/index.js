
$(document).ready(function(){
	let speed = 500;			// Fade speed
	let autoswitch = true;		// Auto slider options
	let autoswitch_speed = 6000	// Auto slider speed
	
	// Add initial active class
	$('.slide').first().addClass('active');
	
	// Hide all slides
	$('.slide').hide();
	
	// Show first slide
	$('.active').show();
	
	// Next Handler
	$('#next').on('click', nextSlide);
	
	// Prev Handler
	$('#prev').on('click', prevSlide);
	
	// Auto Slider Handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);
	}
	
	// Switch to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(1000);
		$('.active').fadeIn(1000);
	}
	
	// Switch to prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(1000);
		$('.active').fadeIn(1000);
	}
        });

$(()=>{ 
	let $from = $('#basic-form')
	if($from.length){
		$from.validate({
			rules:{
				nama: {
					required : true,
					min: 4
				},
				radio: {
					required: true
				},
				checkbox: {
					required: true
				},
				date: {
					required: true
				},
				email: {
					required: true
				},
				telp: {
					required: true,
					max :  13
				},
				address: {
					required: true
				}
			},
			messages:{
				nama: {
					required: 'tolong diisi kan nama anda dengan lengkap',
					min: 'minimal anda isi 4 huruf'
				},
				radio: {
					required: 'tolong di centang salah satu'
				},
				checkbox: {
					required: 'tolong di centang salah satu'
				},
				date: {
					required: 'tolong diisi kan tanggal lahir'
				},
				email: {
					required: 'tolong di isi kan email anda'
				},
				telp: {
					required: 'tolong di isi kan nomor telp anda',
					max: 'isi penuh nomor adalah 13'
				},
				address: {
					required: 'tolong di isi kan alamat anda'
				}
			},
			errorPlacement : ((error,element)=>{
				if(element.is(":radio")){
					error.appendTo(element.parents(".life"));
				}else if(element.is(":checkbox")){
					error.appendTo(element.parents(".gender"));
				}else{
					error.insertAfter(element);
				}
			})
		})
	}
})

$(document).ready(() => {
	$("#photo").change(function () {
			const file = this.files[0];
			if (file) {
					let reader = new FileReader();
					reader.onload = function (event) {
							$("#show")
								.attr("src", event.target.result);
					};
					reader.readAsDataURL(file);
			}
	});
	$('#show').css('width','300px').css('height','300px')
});