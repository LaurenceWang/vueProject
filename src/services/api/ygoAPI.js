const getYGOData = async function(){
	const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?staple=yes")
	if (response.status == 200){
		const data = await response.json();
		//console.log(data.data[0]);
		return data.data;
		//console.log(data);
		//console.log(data.data[0]);
		//return response.json();
	}else{
		new Error(response.statusText);
	}
}

export {getYGOData}