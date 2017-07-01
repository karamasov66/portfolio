var Canvas = {

    //Propiétées Canvas
    canvasId : "canvasBG",
    background : '#909090',
    zIndex : 1,

    //Propiétées Animation
    animation : true,
    animationSpeed : 1,

    //propriétées Cercle
        //couleur cercle
    randomColor : true,
    defaultColor: '#ffffff',

        //taille bordure cercle
    randomWidth : false,
    minRandomWidth : 1,
    maxRandomWidth : 8,
    defaultwidth : 1,

        //taille cercle
    randomRadius : false,
    minRadius : 0.05,
    maxRadius : 0.1, //taille rayon : 0.5 = cercle de la taille de l'écran
    defaultRadius : 0.05,

        //mouvement cercle
    circleMovment : false,
    randomMovment : false,
    movmentX : null,
    movmentY : null,
    defaultMovment : null,

    /*INITIALISATION*/

    init : function(){

        $('body').append('<canvas id="'+this.canvasId+'" width="'+ this.canvasWidth() +'" height="'+ this.canvasHeight() +'"></canvas>');
        
        $('body').css(
            {zIndex : 1000});
        
        $('#'+this.canvasId).css(
            {postion : 'absolute',
            zIndex : this.zIndex,
            backgroundColor : this.background,});

        $('#'+this.canvasId).on("click", function(event){
            var mouseX = event.pageX;
            var mouseY = event.pageY;
            Canvas.putCircle(mouseX, mouseY);
        });
    },

    /*TAILLE CANVAS*/

    canvasWidth : function(){

        return document.body.scrollWidth;
    },


    canvasHeight : function(){

        return document.body.scrollHeight;
    },

    /*PROPRIETEES CERCLE*/

    getRandomRadius : function(){


        switch(this.randomRadius){

            case true:

                var radiusMin = Math.round(this.canvasWidth() * this.minRadius);
                var radiusMax = Math.round(this.canvasWidth() * this.maxRadius);
                var radius = Math.round(Math.random() * (radiusMax - radiusMin)) + radiusMin;
                return radius;
                break;

            case false :

                return Math.round(this.canvasWidth() * this.defaultRadius);
                break;
        }
    },


    getRandomWidth : function(){

        switch(this.randomWidth){

            case true:

                var random = Math.round(Math.random() *  (this.maxRandomWidth - this.minRandomWidth) + this.minRandomWidth);

                return random;
                break;

            case false:

                return this.defaultwidth;
                break;
        }
    },


    circleStyle : function(){

        switch(this.randomColor){

            case true:

                var randomColor;
                var Convert;
                var randomRGB ='#';

                for (var i = 0; i < 3; i++){
                    randomColor = Math.round(Math.random() * 255)
                    Convert = (randomColor).toString(16);
                    randomRGB += Convert;
                }
                return randomRGB.toUpperCase();
                break;

            case false:

                return this.defaultColor;
        }
    },

    /*DESSIN CERCLE*/

    putCircle: function(X, Y){

        var canvas  = document.getElementById(this.canvasId);
        var context = canvas.getContext('2d');
        context.lineWidth = this.getRandomWidth();
        context.strokeStyle = this.circleStyle();
        context.fillStyle = this.background;

        var checkInterval = false;
        var borderWidth = context.lineWidth;
        var radiusStart = 1;
        var radius = this.getRandomRadius();
        var radiusX = X;
        var radiusY = Y;
        var vitesseX = 5;
        var vitesseY = 5;
        var speed = this.animationSpeed;

        if(this.animation == false){
            drawCircle();
        }
        if(this.animation == true && this.circleMovment == true){
            var circleAnimation = setInterval(animateDrawCircle, 1000/60);
            check(checkInterval);
        }
       if(this.circleMovment == true){
            checkInterval = false;
            var circleMovmentAnimation = setInterval(animateMovment, 1000/60);
        }

        function drawCircle(){

            context.beginPath(); 
            context.arc(radiusX, radiusY, radius, 0, Math.PI * 2); 
            context.stroke();
        };

        function animateDrawCircle(){

            context.beginPath(); 
            context.arc(radiusX, radiusY, radiusStart, 0, Math.PI * 2); 
            context.fill();
           
            context.beginPath(); 
            context.arc(radiusX, radiusY, radiusStart, 0, Math.PI * 2); 
            context.stroke();
           
            if(radiusStart < radius){
                radiusStart+= speed;
            }
            if(radiusStart == radius){
                checkInterval = true;
                console.log(checkInterval);
                radiusStart = 1;
                clearInterval(circleAnimation);
            }
        };

         function animateMovment(){

            context.beginPath(); 
            context.arc(radiusX, radiusY, radius + borderWidth, 0, Math.PI * 2); 
            context.fill();

            context.beginPath();
            context.arc(radiusX, radiusY, radius, 0, Math.PI*2);
            context.stroke();

            
            if(radiusX + radius >= canvas.width || radiusX <= radius)//Si on touche le bord gauche ou droit
            {
                vitesseX *= -1;
            }
            if(radiusY + radius >= canvas.height || radiusY <= radius)//Si on touche le bord du bas ou du haut
            {
                vitesseY *= -1;
            }
            radiusX += vitesseX;
            radiusY += vitesseY;
        };

        function check(a){
            //console.log(a);
            while(a == false){
                if(a == true){
                animateMovment();
                return ;
                }
            }
        };
    },
};

Canvas.init();