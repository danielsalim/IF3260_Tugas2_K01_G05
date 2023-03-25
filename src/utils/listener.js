function handleClick(e) {
    document.querySelectorAll('.button_black');
}

function updateLabelOutput(id) {
    document.getElementById(id+"-out").innerHTML = "(" + document.getElementById(id).value + ")";
}

function setListeners() {

    // Transformation
    document.getElementById("rotation-x").addEventListener("input", function(e) {
        optionState.transformation.rotate[0] = parseInt(e.target.value);   
        console.log("rotation-x: " + optionState.transformation.rotate[0]);
    });
    document.getElementById("rotation-y").addEventListener("input", function(e) {
        optionState.transformation.rotate[1] = parseInt(e.target.value);
        console.log("rotation-y: " + optionState.transformation.rotate[1]);
    });
    document.getElementById("rotation-z").addEventListener("input", function(e) {
        optionState.transformation.rotate[2] = parseInt(e.target.value);
        console.log("rotation-z: " + optionState.transformation.rotate[2]);
    });
    document.getElementById("translate-x").addEventListener("input", function(e) {
        optionState.transformation.translate[0] = parseFloat(e.target.value);
        optionState.center[0] = e.target.value;
        console.log("translate-x: " + optionState.transformation.translate[0]);
        console.log("center: " + optionState.center);
    });
    document.getElementById("translate-y").addEventListener("input", function(e) {
        optionState.transformation.translate[1] = parseFloat(e.target.value);
        optionState.center[1] = e.target.value;
        console.log("translate-y: " + optionState.transformation.translate[1]);
        console.log("center: " + optionState.center);
    });
    document.getElementById("translate-z").addEventListener("input", function(e) {
        optionState.transformation.translate[2] = parseFloat(e.target.value);
        optionState.center[2] = e.target.value;
        console.log("translate-z: " + optionState.transformation.translate[2]);
        console.log("center: " + optionState.center);
    });
    document.getElementById("scale-x").addEventListener("input", function(e) {
        optionState.transformation.scale[0] = parseFloat(e.target.value);
        console.log("scale-x: " + optionState.transformation.scale[0]);
    });
    document.getElementById("scale-y").addEventListener("input", function(e) {
        optionState.transformation.scale[1] = parseFloat(e.target.value);
        console.log("scale-y: " + optionState.transformation.scale[1]);
    });
    document.getElementById("scale-z").addEventListener("input", function(e) {
        optionState.transformation.scale[2] = parseFloat(e.target.value);
        console.log("scale-z: " + optionState.transformation.scale[2]);
    });

    // Camera View and Position
    // TODO: Add listener for camera view and position sliders
    document.getElementById("camera-x").addEventListener("input", function(e){
       optionState.cameraView.rotate[0] = parseInt(e.target.value);
       console.log("camera-x: " + optionState.cameraView.rotate[0]);
    });
    document.getElementById("camera-y").addEventListener("input", function(e){
        optionState.cameraView.rotate[1] = parseInt(e.target.value);
        console.log("camera-y: " + optionState.cameraView.rotate[1]);
    });
    document.getElementById("camera-z").addEventListener("input", function(e){
        optionState.cameraView.rotate[2] = parseInt(e.target.value);
        console.log("camera-z: " + optionState.cameraView.rotate[2]);
    });

    document.getElementById("radius").addEventListener("input", function(e){
        optionState.cameraView.radius = parseFloat(e.target.value);
        console.log("camera radius: " + optionState.cameraView.radius);
    });

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

    document.getElementById("animation").addEventListener("click", function(e) {
        optionState.animation = !optionState.animation;
        console.log("animation: " + optionState.animation);
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
    optionState.cameraView.radius = 0.1;
    optionState.shader = true;
    optionState.model.color = [1, 1, 1];
    optionState.animation = false;
    optionState.center = [0, 0, 0];
    uiReset();
    console.log(optionState);
}

function uiReset() {
    document.getElementById("orthogonal").checked = true;
    document.getElementById("rotation-x").value = 0;
    updateLabelOutput("rotation-x", 0);
    document.getElementById("rotation-y").value = 0;
    updateLabelOutput("rotation-y", 0);
    document.getElementById("rotation-z").value = 0;
    updateLabelOutput("rotation-z", 0);
    document.getElementById("translate-x").value = 0;
    updateLabelOutput("translate-x", 0);
    document.getElementById("translate-y").value = 0;
    updateLabelOutput("translate-y", 0);
    document.getElementById("translate-z").value = 0;
    updateLabelOutput("translate-z", 0);
    document.getElementById("scale-x").value = 1;
    updateLabelOutput("scale-x", 1);
    document.getElementById("scale-y").value = 1;
    updateLabelOutput("scale-y", 1);
    document.getElementById("scale-z").value = 1;
    updateLabelOutput("scale-z", 1);
    document.getElementById("camera-x").value = 0;
    updateLabelOutput("camera-x", 0);
    document.getElementById("camera-y").value = 0;
    updateLabelOutput("camera-y", 0);
    document.getElementById("camera-z").value = 0;
    updateLabelOutput("camera-z", 0);
    document.getElementById("radius").value = 0.1;
    updateLabelOutput("radius", 0.1);
    document.getElementById("color").value = "#ffffff";
    document.getElementById("shading").checked = true;
    document.getElementById("animation").checked = false;
}

// Add an event listener to the "save" button
const save = () => {
    var elementFile = document.createElement('a');
    var text = JSON.stringify(optionState);
    var time = new Date().toLocaleString();
    var fileName = 'model-' + time + '.json';

    elementFile.setAttribute('href', 'data:text/json, ' + encodeURIComponent(text));
    elementFile.setAttribute('download', fileName);

    document.body.appendChild(elementFile);
    elementFile.click();
    document.body.removeChild(elementFile);
    console.log("Save file berhasil");

};


// Add an event listener to the "load" button
const loadModel = () => {
    var fileInput = document.getElementById("fileinput");
    var file = fileInput.files[0];
  
    if (!file) {
      alert("Load file gagal!");
      return;
    }
  
    var reader = new FileReader();
    reader.onload = (e) => {
      try {
        var object = JSON.parse(e.target.result);
      } catch (e) {
        alert("Load file gagal!");
        return;
      }
      // Load the object into the scene
      optionState.model = {
        vertices: object.model.vertices,
        indices: object.model.indices,
        color: object.model.color,
      };

      optionState.projection = object.projection;
      
      optionState.transformation = {
        rotate: object.transformation.rotate,
        translate: object.transformation.translate,
        scale: object.transformation.scale,
      };
      
      optionState.cameraView = {
        rotate: object.cameraView.rotate,
        radius: object.cameraView.radius,
        };

      optionState.shader = object.shader;
      document.getElementById("shading").checked = object.shader;
      uiReset();      
      console.log("Load berhasil");
    };
    reader.readAsText(file);
  };