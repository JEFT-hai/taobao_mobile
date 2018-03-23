    // scrollH
        var scrollList = document.getElementsByClassName('infoList')[0].getElementsByTagName('ul')[0];

        function scrollItem(elem){
            var count = scrollList.getElementsByTagName('li').length;
            var nowIndex = 0;
            setInterval(function(){
                nowIndex += 1;
                if(nowIndex === count){
                    nowIndex = 0;
                }
                elem.style.transform = 'translateY(-'+nowIndex+'00%)';
            },2000);
        }
        scrollItem(scrollList);

    // banner
	var i = 0;
	var add = 0;
	var j = 0;
	var nextIndex =0;
	var s;
	var n=0;
	var nowIndex=0;
	var banner = document.getElementsByClassName('banner')[0];
	var U = document.getElementById('U');
	var li = U.getElementsByTagName('li');
	var P = document.getElementsByClassName('pointList')[0];

	var index =P.getElementsByTagName('li');

	var len = li.length;
	U.style.transform = 'translate3d(0,0,0)';
	for(s=0;s<len;s++){
		li[s].style.left = s*750+'px';
	}
	li[len-1].style.left = '-750px';   
	index[nowIndex].style.backgroundPosition = '0 -0.2rem';	  	
	var timer = setInterval(function(){
		i++;
		j =i<-1?len-1+(i+2)%len:(i+1)%len;
		nowIndex = (j-1)>-1?j-1:len-1;
		for(n=0;n<len;n++){
			index[n].style.backgroundPosition = '0 0';	
		}
		index[nowIndex].style.backgroundPosition = '0 -0.2rem';
		add = (i+1)*750;
		li[j].style.left = add +'px';
		U.style.transform = 'translate3d('+i*(-750)+'px,0,0)';

	},3500);

	var X1=0,X2=0;
	banner.addEventListener('touchstart',function(e){
		e.stopPropagation();
		// clearInterval(timer);
		var touch = e.targetTouches[0];
		X1 = touch.pageX;
	},false);
	banner.addEventListener('touchmove',function(e){
		e.stopPropagation();
		var touch2 = e.changedTouches[0];
		X2 = touch2.pageX ;   		

		banner.removeEventListener('touchmove',false);
		banner.removeEventListener('touchend',false);

	},false);
	//banner.addEventListener('touchend',function(e){
	// console.log(X1);
	banner.addEventListener('touchend',function(e){
		if(X1<X2){
        	i--;
        	j =i>0?(i-1)%len:len-1+(i)%len;
        	nowIndex = (j+1)<len?j+1:0;
        	add = (i-1)*750;
        	li[j].style.left = add +'px';
        	U.style.transform = 'translate3d('+i*(-750)+'px,0,0)';
        	for(n=0;n<len;n++){
        		index[n].style.backgroundPosition = '0 0';	
        	}
        	index[nowIndex].style.backgroundPosition = '0 -0.2rem';
        }else if(X1>X2){
        	i++;
        	j =i<-1?len-1+(i+2)%len:(i+1)%len;
        	nowIndex = (j-1)>-1?j-1:len-1;
        	
        		add = (i+1)*750;
        		li[j].style.left = add +'px';
        	U.style.transform = 'translate3d('+i*(-750)+'px,0,0)';
        	for(n=0;n<len;n++){
        		index[n].style.backgroundPosition = '0 0';	
        	}
        	index[nowIndex].style.backgroundPosition = '0 -0.2rem';
        }
    	
	},false);