const getYGOData = async function(){
	//const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?staple=yes")
	const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
	if (response.status == 200){
		const data = await response.json();
		return data.data;
	}else{
		new Error(response.statusText);
	}
}

const getYGOMonster= async function(){

	const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
	if (response.status == 200){
		const data = await response.json();
		return data["data"].filter(card => (card.type).toLowerCase().includes(("monster").toLowerCase()));
	}else{
		new Error(response.statusText);
	}
	

}

export {getYGOData, getYGOMonster}
//export {getYGOTypeCount}