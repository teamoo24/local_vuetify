new Vue({ 
  	el: '#app',
  	data:() =>({
			items: ['Foo','Bar','Fizz','Buzz'],
    	radioGroup: 1,
    	rules:{
    		Uppercase:value => {
    			const pattern = /^([A-Z])*$/
          return pattern.test(value) || 'Just Input Uppercase'
    		}
    	}
	})
})