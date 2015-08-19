// console.log("it's working!")
var cat_image = document.getElementById("cat");
var feed_me_button=document.getElementById("feed_me_button")
var run_button=document.getElementById("run_button")

cat_image.addEventListener("click", meow)

function meow(){
	alert("Meow");
}

feed_me_button.addEventListener("click", feed)
run_button.addEventListener("click", run)

function feed(){
	// alert("Yum!!");
	cat_image.style.width=(cat_image.offsetWidth+30)+'px';
}

function run(){
	cat_image.style.width=(cat_image.offsetWidth-30)+'px';
}


var cat_object = {
    weight : 5,
    past_weight_values : [4.5, 5.1, 4.9],
    name : 'Princess Caroline'
};
cat_object.height=50;

var cat_list=[cat_object];
cat_list.push({weight : 6 , past_weight_values : [5.9, 5.3, 6.1], name : 'Snowball'});
cat_list.push({past_weight_values : [5.9, 5.3, 6.1]});

var cat_list2 = [cat_object, cat_object];

cat_list2[0].name='tinkerbell';
// console.log(cat_list);

var dog_list = cat_list.map(function(cat){
	return {
		name: "Mr"+cat.name
	};
});

dog_list=cat_list.map(dog_weight);

function dog_weight(temp_object){
	return{
		weight: temp_object.weight*2
	};
};

// var a={name: 'string1'};
// var b=a.name;
// a.name='string2';
// console.log(a);
// console.log(b);

var cat_json = JSON.stringify(cat_list);
new_cat_list=JSON.parse(cat_json);
console.log(new_cat_list)