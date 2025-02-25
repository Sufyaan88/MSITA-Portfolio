 const sections = document.querySelectorAll('.HAnim')
 const blocks = document.querySelectorAll('.HAnim1')
 const blocks2 = document.querySelectorAll('.HAnim2')
 const blocks3 = document.querySelectorAll('.HAnim3')
 const blocks4 = document.querySelectorAll('.HAnim4')
 const blocks5 = document.querySelectorAll('.HAnim5')
 const blocks6 = document.querySelectorAll('.HAnim6')
 const blocks7 = document.querySelectorAll('.HAnim7')
 const blocks8 = document.querySelectorAll('.HAnim8')
 const sectionsW = document.querySelectorAll('.WDetails')
    const options = {
       //threshold: 1,
	   rootMargin: "0px 0px -150px 0px"
    };
	
	const options1 = {
       //threshold: 1,
	   rootMargin: "0px 0px -100px 0px"
    };
	//-----------------------Intersection Observer for my work---------------
	const observerW = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            //entry.target.style.animation = 'SlideRight .4s forwards';
			entry.target.classList.add('Appear');
        }
        else {
            //entry.target.style.animation = 'none';
			entry.target.classList.remove('Appear');
        }
      })
    }, options1)
	//-----------------------Intersection Observers for home---------------
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim 5s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)
	
	const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim1 5s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)
	
	const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim2 3s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)
	
	const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim3 3s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)
	
	const observer4 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim4 3s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)
	
	const observer5 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim5 3s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)
	
	const observer6 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim6 3s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)
	
		const observer7 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim7 3s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)
	
		const observer8 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.intersectionRatio  > 0) {
            entry.target.style.animation = 'anim8 3s forwards';
			//entry.target.classList.add('View');
        }
        else {
            entry.target.style.animation = 'none';
			//entry.target.classList.remove('View');
        }
      })
    }, options)

	sectionsW.forEach(section => observerW.observe(section))
    sections.forEach(section => observer.observe(section))
	blocks.forEach(block => observer1.observe(block))
	blocks2.forEach(block => observer2.observe(block))
	blocks3.forEach(block => observer3.observe(block))
	blocks4.forEach(block => observer4.observe(block))
	blocks5.forEach(block => observer5.observe(block))
	blocks6.forEach(block => observer6.observe(block))
	blocks7.forEach(block => observer7.observe(block))
	blocks8.forEach(block => observer8.observe(block))
	
	
	//-------------------------------------------------------------------My Work----------------------------------------------------------------------//
	
		//-------------------------------------------------Urban Tonic Tab Toggle-------------------------------------------------
		 function ToggleHTML() {
        var HTML = document.getElementById('HTML');
        var CSS = document.getElementById('CSS');
        var Tab1 = document.getElementById('Tab1');
        var Tab2 = document.getElementById('Tab2');
        var DisplayHTML = HTML.style.display;

        if (DisplayHTML == 'block') {
            HTML.style.display = 'none';
        }
        else
        {
            HTML.style.display = 'block';
            CSS.style.display = 'none';
            Tab1.style.backgroundColor = '#ccc';
            Tab2.style.backgroundColor = '#f1f1f1';
        }
    }

    function ToggleCSS() {
        var HTML = document.getElementById('HTML');
        var CSS = document.getElementById('CSS');
        var Tab1 = document.getElementById('Tab1');
        var Tab2 = document.getElementById('Tab2');
        var DisplayCSS = CSS.style.display;

        if (DisplayCSS == 'block') {
            CSS.style.display = 'none';
        }
        else
        {
            CSS.style.display = 'block';
            HTML.style.display = 'none';
            Tab2.style.backgroundColor = '#ccc';
            Tab1.style.backgroundColor = '#f1f1f1';
        }
    }
	
	function Close() {
		var HTML = document.getElementById('HTML');
        var CSS = document.getElementById('CSS');
		var Tab1 = document.getElementById('Tab1');
        var Tab2 = document.getElementById('Tab2');
		HTML.style.display = 'none';
		CSS.style.display = 'none';
		Tab1.style.backgroundColor = '#f1f1f1';
		Tab2.style.backgroundColor = '#f1f1f1';
	} 

//-----------------------------------------Only Tab Toggle----------------------------

	 function ToggleHTML1() {
        var HTML = document.getElementById('HTML1');
        var CSS = document.getElementById('CSS1');
        var Tab1 = document.getElementById('Tab1.1');
        var Tab2 = document.getElementById('Tab2.1');
        var DisplayHTML = HTML.style.display;

        if (DisplayHTML == 'block') {
            HTML.style.display = 'none';
        }
        else
        {
            HTML.style.display = 'block';
            CSS.style.display = 'none';
            Tab1.style.backgroundColor = '#ccc';
            Tab2.style.backgroundColor = '#f1f1f1';
        }
    }

    function ToggleCSS1() {
        var HTML = document.getElementById('HTML1');
        var CSS = document.getElementById('CSS1');
        var Tab1 = document.getElementById('Tab1.1');
        var Tab2 = document.getElementById('Tab2.1');
        var DisplayCSS = CSS.style.display;

        if (DisplayCSS == 'block') {
            CSS.style.display = 'none';
        }
        else
        {
            CSS.style.display = 'block';
            HTML.style.display = 'none';
            Tab2.style.backgroundColor = '#ccc';
            Tab1.style.backgroundColor = '#f1f1f1';
        }
    }
	
		function Close1() {
		var HTML = document.getElementById('HTML1');
        var CSS = document.getElementById('CSS1');
		var Tab1 = document.getElementById('Tab1.1');
        var Tab2 = document.getElementById('Tab2.1');
		HTML.style.display = 'none';
		CSS.style.display = 'none';
		Tab1.style.backgroundColor = '#f1f1f1';
		Tab2.style.backgroundColor = '#f1f1f1';
	} 
	
	//-----------------------------------------Airline Tab Toggle----------------------------

	 function ToggleHTML2() {
        var HTML = document.getElementById('HTML2');
        var CSS = document.getElementById('CSS2');
        var Tab1 = document.getElementById('Tab1.2');
        var Tab2 = document.getElementById('Tab2.2');
        var DisplayHTML = HTML.style.display;

        if (DisplayHTML == 'block') {
            HTML.style.display = 'none';
        }
        else
        {
            HTML.style.display = 'block';
            CSS.style.display = 'none';
            Tab1.style.backgroundColor = '#ccc';
            Tab2.style.backgroundColor = '#f1f1f1';
        }
    }

    function ToggleCSS2() {
        var HTML = document.getElementById('HTML2');
        var CSS = document.getElementById('CSS2');
        var Tab1 = document.getElementById('Tab1.2');
        var Tab2 = document.getElementById('Tab2.2');
        var DisplayCSS = CSS.style.display;

        if (DisplayCSS == 'block') {
            CSS.style.display = 'none';
        }
        else
        {
            CSS.style.display = 'block';
            HTML.style.display = 'none';
            Tab2.style.backgroundColor = '#ccc';
            Tab1.style.backgroundColor = '#f1f1f1';
        }
    }
	
		function Close2() {
		var HTML = document.getElementById('HTML2');
        var CSS = document.getElementById('CSS2');
		var Tab1 = document.getElementById('Tab1.2');
        var Tab2 = document.getElementById('Tab2.2');
		HTML.style.display = 'none';
		CSS.style.display = 'none';
		Tab1.style.backgroundColor = '#f1f1f1';
		Tab2.style.backgroundColor = '#f1f1f1';
	} 
	
	//-----------------------------------------Online Business Tab Toggle----------------------------

	 function ToggleHTML3() {
        var HTML = document.getElementById('HTML3');
        var CSS = document.getElementById('CSS3');
		var JS = document.getElementById('JS3');
        var Tab1 = document.getElementById('Tab1.3');
        var Tab2 = document.getElementById('Tab2.3');
		var Tab3 = document.getElementById('Tab3.3');
        var DisplayHTML = HTML.style.display;

        if (DisplayHTML == 'block') {
            HTML.style.display = 'none';
        }
        else
        {
            HTML.style.display = 'block';
            CSS.style.display = 'none';
			JS.style.display = 'none';
            Tab1.style.backgroundColor = '#ccc';
            Tab2.style.backgroundColor = '#f1f1f1';
			Tab3.style.backgroundColor = '#f1f1f1';
        }
    }

    function ToggleCSS3() {
        var HTML = document.getElementById('HTML3');
        var CSS = document.getElementById('CSS3');
		var JS = document.getElementById('JS3');
        var Tab1 = document.getElementById('Tab1.3');
        var Tab2 = document.getElementById('Tab2.3');
		var Tab3 = document.getElementById('Tab3.3');
        var DisplayCSS = CSS.style.display;

        if (DisplayCSS == 'block') {
            CSS.style.display = 'none';
        }
        else
        {
            CSS.style.display = 'block';
            HTML.style.display = 'none';
			JS.style.display = 'none';
            Tab2.style.backgroundColor = '#ccc';
            Tab1.style.backgroundColor = '#f1f1f1';
			Tab3.style.backgroundColor = '#f1f1f1';
        }
    }
	
	    function ToggleJS3() {
        var HTML = document.getElementById('HTML3');
        var CSS = document.getElementById('CSS3');
		var JS = document.getElementById('JS3');
        var Tab1 = document.getElementById('Tab1.3');
        var Tab2 = document.getElementById('Tab2.3');
		var Tab3 = document.getElementById('Tab3.3');
        var DisplayJS = JS.style.display;

        if (DisplayJS == 'block') {
            JS.style.display = 'none';
        }
        else
        {
            JS.style.display = 'block';
            HTML.style.display = 'none';
			CSS.style.display = 'none';
            Tab3.style.backgroundColor = '#ccc';
            Tab1.style.backgroundColor = '#f1f1f1';
			Tab2.style.backgroundColor = '#f1f1f1';
        }
    }
	
		function Close3() {
		var HTML = document.getElementById('HTML3');
        var CSS = document.getElementById('CSS3');
		var JS = document.getElementById('JS3');
		var Tab1 = document.getElementById('Tab1.3');
        var Tab2 = document.getElementById('Tab2.3');
		var Tab3 = document.getElementById('Tab3.3');
		HTML.style.display = 'none';
		CSS.style.display = 'none';
		JS.style.display = 'none';
		Tab1.style.backgroundColor = '#f1f1f1';
		Tab2.style.backgroundColor = '#f1f1f1';
		Tab3.style.backgroundColor = '#f1f1f1';
	} 
	
	//-----------------------------------------Cinema Tab Toggle----------------------------
	
	function ToggleHTML4() {
        var HTML = document.getElementById('HTML4');
        var CSS = document.getElementById('CSS4');
		var JS = document.getElementById('JS4');
        var Tab1 = document.getElementById('Tab1.4');
        var Tab2 = document.getElementById('Tab2.4');
		var Tab3 = document.getElementById('Tab3.4');
        var DisplayHTML = HTML.style.display;

        if (DisplayHTML == 'block') {
            HTML.style.display = 'none';
        }
        else
        {
            HTML.style.display = 'block';
            CSS.style.display = 'none';
			JS.style.display = 'none';
            Tab1.style.backgroundColor = '#ccc';
            Tab2.style.backgroundColor = '#f1f1f1';
			Tab3.style.backgroundColor = '#f1f1f1';
        }
    }

    function ToggleCSS4() {
        var HTML = document.getElementById('HTML4');
        var CSS = document.getElementById('CSS4');
		var JS = document.getElementById('JS4');
        var Tab1 = document.getElementById('Tab1.4');
        var Tab2 = document.getElementById('Tab2.4');
		var Tab3 = document.getElementById('Tab3.4');
        var DisplayCSS = CSS.style.display;

        if (DisplayCSS == 'block') {
            CSS.style.display = 'none';
        }
        else
        {
            CSS.style.display = 'block';
            HTML.style.display = 'none';
			JS.style.display = 'none';
            Tab2.style.backgroundColor = '#ccc';
            Tab1.style.backgroundColor = '#f1f1f1';
			Tab3.style.backgroundColor = '#f1f1f1';
        }
    }
	
	    function ToggleJS4() {
        var HTML = document.getElementById('HTML4');
        var CSS = document.getElementById('CSS4');
		var JS = document.getElementById('JS4');
        var Tab1 = document.getElementById('Tab1.4');
        var Tab2 = document.getElementById('Tab2.4');
		var Tab3 = document.getElementById('Tab3.4');
        var DisplayJS = JS.style.display;

        if (DisplayJS == 'block') {
            JS.style.display = 'none';
        }
        else
        {
            JS.style.display = 'block';
            HTML.style.display = 'none';
			CSS.style.display = 'none';
            Tab3.style.backgroundColor = '#ccc';
            Tab1.style.backgroundColor = '#f1f1f1';
			Tab2.style.backgroundColor = '#f1f1f1';
        }
    }
	
		function Close4() {
        var HTML = document.getElementById('HTML4');
        var CSS = document.getElementById('CSS4');
		var JS = document.getElementById('JS4');
        var Tab1 = document.getElementById('Tab1.4');
        var Tab2 = document.getElementById('Tab2.4');
		var Tab3 = document.getElementById('Tab3.4');
		HTML.style.display = 'none';
		CSS.style.display = 'none';
		JS.style.display = 'none';
		Tab1.style.backgroundColor = '#f1f1f1';
		Tab2.style.backgroundColor = '#f1f1f1';
		Tab3.style.backgroundColor = '#f1f1f1';
	} 
	
	//-------------------------------------------------------------------Footer----------------------------------------------------------------------//
	
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}