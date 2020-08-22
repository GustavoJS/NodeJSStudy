module.exports = { 

    executarLooping : function(a,b){
        for(let i = 0; i <= b; i++)
        {
            console.log(i);
        }
    },
    
    executarLoopingInvert : (a,b) => {

        for(let i = a; i >= b; i--)
        {
            console.log(i);
        }
    },


    sleep : milisegundos =>{
        var start = new Date().getTime();
        console.log('aguarde...');
        for(var i =0; i < 1e7; i++)
        {

            if((new Date().getTime() - start) > milisegundos)
            {
                break;
            }

        }
    },

    sleep1 : milisegundos => {
        return new Promise(resolve => setTimeout(resolve, milisegundos));
    },

   
};