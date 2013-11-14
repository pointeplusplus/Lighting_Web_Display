var objFileContents = new function(){
	this.rawData = "Null",
	this.vectors = Array(),

	this.parse = function (){
		this.vectors = this.rawData.split(/\n/);
		for(i=0;i<this.vectors.length;i++)
			this.vectors[i] = this.vectors[i].split(" ");  
	},

	this.fetch = function() {
		$.ajax({
			url: "./foo.obj",
			async: false,
			success: function (data){
				objFileContents.rawData = data;
				console.log("success");
			 }
		});
	},
	
	this.print = function($el){
	  var html = "<table>";
	  for(y=0;y<this.vectors.length;y++){
		html += "<tr>";
		for(x=0;x<this.vectors[y].length;x++){
		  html += "<td>" + this.vectors[y][x] + "</td>";
		}
		html += "</tr>"
	  }
	  html += "</table>";
	  $("body").html(html);
	}
	this.foo = function(){
	  console.log("hello world");
	}
}