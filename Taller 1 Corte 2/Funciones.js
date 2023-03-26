const result = document.querySelector("#result");
		
		const append = (value) => {
			result.value += value;
		};
		
		const calculate = () => {
            result.value = eval(`${result.value}`);
        };        
		
		const clearResult = () => {
			result.value = "";
		};
		const deleteLastValue = () => {
			result.value = result.value.slice(0, -1);
		};