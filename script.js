function volume_sphere() {
    //Write your code here
	let r = document.getElementById("radius").value;
	let v = document.getElementById("volume");
	r = parseFloat(r);
	if(!isNAN(r) && r >= 0){
		let volume = (4/3) * Math.PI * Math.pow(r,3);
		v.value = volume.toFixed(4);
	}
	else v.value = "NAN";
  return v.value;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
