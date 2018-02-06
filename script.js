//check cell previous sibling and then next sibling then check the cell at cell pos minus total cells per row then plus total cells per row and their siblings
//then save new alive or dead data into a new array and then repopulate cells after new array has been calculated
//grid is 50 cells wide and 37 cells tall
var speed = 200;
var newCells = new Array();
var live;

function checkIfAlive () {
	
	var cells = document.getElementsByClassName("cell");
	
	newCells.forEach(function(item, index, arr){
		arr[index] = "";
	});
	
	for(var i = 0; i < cells.length; i++){
		
		var AliveNeighbors = 0;
		
		if(!(cells[i-1] == undefined)){//check left neighbor except if at farthest left cell
			if(!((i % 50) == 0)){
				if(cells[i-1].classList.contains("alive")){
					AliveNeighbors++;
				}
			}
		}
		
		if(!(cells[i+1] == undefined)){//check right neighbor except if at farthest right cell
			if(!(((i+1) % 50) == 0)){
				if(cells[i+1].classList.contains("alive")){
					AliveNeighbors++;
				}
			}
		}
		
		if(!(cells[i-50] == undefined)){//check top neighbor except if farthest up
			if(cells[i-50].classList.contains("alive")){
				AliveNeighbors++;
			}
		}
		
		if(!(cells[i+50] == undefined)){//check bottom neighbor except if farthest down
			if(cells[i+50].classList.contains("alive")){
				AliveNeighbors++;
			}
		}
		
		if(!(cells[i+51] == undefined)){//bottom right
			if(!(((i+1) % 50) == 0)){
				if(cells[i+51].classList.contains("alive")){
					AliveNeighbors++;
				}
			}
		}
		
		if(!(cells[i-51] == undefined)){//top left
			if(!((i % 50) == 0)){
				if(cells[i-51].classList.contains("alive")){
					AliveNeighbors++;
				}
			}
		}
		
		if(!(cells[i-49] == undefined)){//top right
			if(!(((i+1) % 50) == 0)){
				if(cells[i-49].classList.contains("alive")){
					AliveNeighbors++;
				}
			}
		}
		
		if(!(cells[i+49] == undefined)){//bottom left
			if(!((i % 50) == 0)){
				if(cells[i+49].classList.contains("alive")){
					AliveNeighbors++;
				}
			}
		}
		
		if(AliveNeighbors < 2){
			newCells[i] = "";
		}else if((AliveNeighbors < 4) && (cells[i].classList.contains("alive"))){
			newCells[i] = "alive";
		}else if((AliveNeighbors > 3) && (cells[i].classList.contains("alive"))){
			newCells[i] = "";
		}
		
		if((AliveNeighbors == 3) && (!(cells[i].classList.contains("alive")))){
			newCells[i] = "alive";
		}
	}
}

function PopulateAlive () {
	
	var cells = document.getElementsByClassName("cell");
	
	for(var i = 0; i < cells.length; i++){
		
		if(newCells[i] == "alive"){
			if(!(cells[i].classList.contains("alive"))){
				cells[i].classList.add("alive");
			}
		}else if(newCells[i] == ""){
			if((cells[i].classList.contains("alive"))){
				cells[i].classList.remove("alive");
			}	
		}
	}
}

function lives () {
	
	live = setInterval(function(){
		checkIfAlive();
		PopulateAlive();
	}, speed);
}

function Frankenstein (cell) {
	
	if(cell.classList.contains("alive")){
		cell.classList.remove("alive");
	}else if(!(cell.classList.contains("alive"))){
		cell.classList.add("alive");
	}
}

function stop () {
	
	clearInterval(live);
}

function clearAlive () {
	
	var cells = document.getElementsByClassName("cell");
	
	for(var i = 0; i < cells.length; i++){
		cells[i].classList.remove("alive");
	}
}
function fillAlive () {
	
	var cells = document.getElementsByClassName("cell");
	
	for(var i = 0; i < cells.length; i++){
		cells[i].classList.remove("alive");
	}
	for(var i = 0; i < cells.length; i++){
		cells[i].classList.add("alive");
	}
}
function changeSpeed (thing) {
	
	clearInterval(live);
	
	if(thing){
		speed += 15;
	}else{
		speed -= 15;
	}
	
	lives();
}
