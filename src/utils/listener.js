function handleClick(button) {
    document.querySelectorAll('.button_black');
}

function selectProjection(e){
    var selectProjection = document.querySelector("input[name='projectionChoice']:checked").value;
    if(selectProjection === "orthogonal"){
        optionState.projection = "orthogonal";
    }else if(selectProjection === "oblique"){
        optionState.projection = "oblique";
    }else if(selectProjection === "perspective"){
        optionState.projection = "perspective";
    }
}

function setListeners() {
    // Projection
    // TODO: Add listener for projection buttons
    document.getElementsByName("projectionChoice").forEach((item, i) => {
        item.onclick = selectProjection;
    });


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
    document.getElementById("color").addEventListener("input", function(e) {
        // Extract the individual color components and convert to decimal
        var r = parseInt(e.target.value.substring(1, 3), 16) / 255;
        var g = parseInt(e.target.value.substring(3, 5), 16) / 255;
        var b = parseInt(e.target.value.substring(5, 7), 16) / 255;
    
        // Assign the new color values to the optionState object
        optionState.model.color[0] = r;
        optionState.model.color[1] = g;
        optionState.model.color[2] = b;
    
        console.log("color: " + optionState.color);
    });

    // Shading
    document.getElementById("shading").addEventListener("click", function(e) {
        optionState.shader = !optionState.shader;
        console.log("shading: " + optionState.shader);
    });


    // Object Selection
    document.getElementById("cube").addEventListener("click", function(e) {
        handleClick(e.target);
        optionState.model = cube;
        console.log("object: " + optionState.object);
        resetButtonClicked();
    });

    document.getElementById("pyramid").addEventListener("click", function(e) {
        handleClick(e.target);
        optionState.model = pyramid;
        console.log("object: " + optionState.object);
        resetButtonClicked();
    });

    document.getElementById("interlockingcube").addEventListener("click", function(e) {
        handleClick(e.target);
        optionState.model = interlockingcube;
        console.log("object: " + optionState.object);
        resetButtonClicked();
    });

}

function resetButtonClicked() {
    optionState.projection = "orthogonal";
    optionState.transformation.rotate = [0, 0, 0];
    optionState.transformation.translate = [0, 0, 0];
    optionState.transformation.scale = [1, 1, 1];
    optionState.cameraView.rotate = [0, 0, 0];
    optionState.cameraView.radius = 2;
    optionState.shader = true;
    optionState.model.color = [1, 1, 1];

    document.getElementById("orthographic").checked = true;
    document.getElementById("rotation-x").value = 0;
    document.getElementById("rotation-y").value = 0;
    document.getElementById("rotation-z").value = 0;
    document.getElementById("translate-x").value = 0;
    document.getElementById("translate-y").value = 0;
    document.getElementById("translate-z").value = 0;
    document.getElementById("scale-x").value = 1;
    document.getElementById("scale-y").value = 1;
    document.getElementById("scale-z").value = 1;
    document.getElementById("camera-x").value = 0;
    document.getElementById("camera-y").value = 0;
    document.getElementById("camera-z").value = 0;
    document.getElementById("radius").value = 2;
    document.getElementById("shading").checked = true;
    document.getElementById("color").value = "#ffffff";

    console.log(optionState);
}