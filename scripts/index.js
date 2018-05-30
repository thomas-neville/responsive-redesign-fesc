var colleges = [
	{name: "University of Florida",
	imgSource: "images/logo-ufl-90x67.jpg",
	url: "http://www.ufl.edu/"
	},{name: "Florida State University",
	imgSource: "images/logo-fsu-55x67.jpg",
	url: "http://www.fsu.edu/"
	},{name: "University of Central Florida",
	imgSource: "images/logo-ucf-76x67.jpg",
	url: "http://www.ucf.edu/"
	},{name: "University of South Florida",
	imgSource: "images/logo-usf-94x67.jpg",
	url: "www.usf.edu"
	},{name:"Florida A&M University",
	imgSource: "images/logo-famu-55x67.jpg",
	url: "www.famu.edu"
	},{name: "Florida Atlantic University",
	imgSource: "images/logo-fau-49x67.jpg",
	url: "www.fau.edu"
	},{name: "Florida Gulf Coast University",
	imgSource: "images/logo-fgcu-55x67.jpg",
	url: "https://www.fgcu.edu"
	},{name: "Florida International University",
	imgSource: "images/logo-fiu-94x67.jpg",
	url: "https://www.fiu.edu"
	},{name: "New College of Florida",
	imgSource: "images/logo-ncf-53x67.jpg",
	url:"https://www.ncf.edu"
	},{name: "University of North Florida",
	imgSource: "images/logo-unf-49x67.jpg",
	url: "www.unf.edu"
	},{name: "University of West Florida",
	imgSource: "images/logo-uwf-34x67.jpg",
	url: "https://uwf.edu"
	},{name: "Florida Polytechnic University",
	imgSource: "images/logo-fpu-100x67.jpg",
	url: "https://floridapoly.edu"
	}
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