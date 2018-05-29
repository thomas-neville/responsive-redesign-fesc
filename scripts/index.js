var colleges = [
	{name: "University of Florida",
	imgSource: "images/logo-ufl-90x67.jpg"
	},{name: "Florida State University",
	imgSource: "images/logo-fsu-55x67.jpg"
	},{name: "University of Central Florida",
	imgSource: "images/logo-ucf-76x67.jpg"}
]

var app = new Vue({
	el: '#app',
	data: {
		consortium: colleges
	},
	methods: {
		sortAsc: function(){
			console.log("SortAsc called")
		},
		sortDesc: function(){
			console.log("SortDesc called")
		}
	}
})