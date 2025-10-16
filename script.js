function volume_sphere(event) {
    event.preventDefault();

    let r = parseFloat(document.getElementById("radius").value);
    let v = document.getElementById("volume");

    if (!isNaN(r) && r >= 0) {
        let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
        v.value = volume.toFixed(4);
    } else {
        v.value = "NaN";
    }
}

window.onload = function() {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
