var counter = 1;
var newRow = "";

function addRow(num) {
	//Create a new row.
	newRow += "<div id = 'row" + counter + "'>"; 
	newRow += "<div><span>";
	
	newRow += '<div class="row">';
	newRow += '<div class="col-lg-2"></div>';
	newRow += '<div class="col-lg-1" v-if="editMode==true"> <input class="form-control" type="text" v-model="id" placeholder=""> </div>';
				
	newRow += '<div class="col-lg-1" v-if="editMode==true"> <input class="form-control" type="text" v-model="item" placeholder=""> </div>';
				
	newRow += '<div class="col-lg-1" v-if="editMode==true"> <input class="form-control" type="text" v-model="size" placeholder=""> </div>';
				
	newRow += '<div class="col-lg-1" v-if="editMode==true"> <input class="form-control" type="text" v-model="color" placeholder=""> </div>';
				
	newRow += '<div class="col-lg-1" v-if="editMode==true"> <input class="form-control" type="text" v-model="design" placeholder=""> </div>';
				
	newRow += '<div class="col-lg-1" v-if="editMode==true"> <input class="form-control" type="text" v-model="quantity" placeholder=""></div>';
				
	newRow += '<div class="col-lg-1" v-if="editMode==true"> <input class="form-control" type="text" v-model="totalPrice" placeholder=""> </div>';

	newRow += '<div class="col-lg-1">'; 
	newRow += "<button onclick = 'save(" + counter + ")' id='saveOrEdit" + counter + "'>Save</button>";
	newRow += "<button onclick = 'deleteRow(" + counter + ")'>Delete Row</button>";
	newRow += '</div></div>';
	
	newRow += "<div id = 'newRow" + counter + "'>";
	newRow += "<button onclick ='addRow(" + counter + ")'>New Row</button></div>";
	
	//Insert the new row.
	$("#newRow" + num).replaceWith(newRow); 
	
	//Update the appropriate variables.
	counter ++;
	newRow = "";
}

function deleteRow(num){
	//Delete the row and its Add Row button.
	$("#row" + num).remove();
	$("#newRow" + num).remove();
}