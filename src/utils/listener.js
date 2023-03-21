function handleClick(button) {
    const buttons = document.querySelectorAll('.button_black');
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      button.classList.add("disabled");
    } else {
      buttons.forEach(btn => {
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
          btn.classList.add('disabled');
        }
      });
      button.classList.add("active");
      button.classList.remove("disabled");
    }
}

function setListeners() {
    // Projection
    // TODO: Add listener for projection buttons


    // Transformation
    document.getElementById("rotation-x").addEventListener("input", function(e) {
        optionState.transformation.rotate[0] = e.target.value * Math.PI / 180;   
        console.log("rotation-x: " + optionState.transformation.rotate[0]);
    });
    document.getElementById("rotation-y").addEventListener("input", function(e) {
        optionState.transformation.rotate[1] = e.target.value * Math.PI / 180;
        console.log("rotation-y: " + optionState.transformation.rotate[1]);
    });
    document.getElementById("rotation-z").addEventListener("input", function(e) {
        optionState.transformation.rotate[2] = e.target.value * Math.PI / 180;
        console.log("rotation-z: " + optionState.transformation.rotate[2]);
    });
    document.getElementById("translate-x").addEventListener("input", function(e) {
        optionState.transformation.translate[0] = e.target.value;
        console.log("translate-x: " + optionState.transformation.translate[0]);
    });
    document.getElementById("translate-y").addEventListener("input", function(e) {
        optionState.transformation.translate[1] = e.target.value;
        console.log("translate-y: " + optionState.transformation.translate[1]);
    });
    document.getElementById("translate-z").addEventListener("input", function(e) {
        optionState.transformation.translate[2] = e.target.value;
        console.log("translate-z: " + optionState.transformation.translate[2]);
    });
    document.getElementById("scale-x").addEventListener("input", function(e) {
        optionState.transformation.scale[0] = e.target.value;
        console.log("scale-x: " + optionState.transformation.scale[0]);
    });
    document.getElementById("scale-y").addEventListener("input", function(e) {
        optionState.transformation.scale[1] = e.target.value;
        console.log("scale-y: " + optionState.transformation.scale[1]);
    });
    document.getElementById("scale-z").addEventListener("input", function(e) {
        optionState.transformation.scale[2] = e.target.value;
        console.log("scale-z: " + optionState.transformation.scale[2]);
    });

    // Camera View and Position
    // TODO: Add listener for camera view and position sliders


    // Color
    // TODO: Add listener for color buttons


    // Shading
    // TODO: Add listener for shading buttons


    // Object Selection
    // TODO: Add listener for object selection buttons

}

function resetButtonClicked() {
    resetOptions();
    console.log(optionState);
}