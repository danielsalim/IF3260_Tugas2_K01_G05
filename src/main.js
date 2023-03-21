var optionState;
var model = {
    vertices : [
        // Front face
        -0.5, -0.5,  0.5,
        0.5, -0.5,  0.5,
        0.5,  0.5,  0.5,
        -0.5,  0.5,  0.5,

        // Back face
        -0.5, -0.5, -0.5,
        -0.5,  0.5, -0.5,
        0.5,  0.5, -0.5,
        0.5, -0.5, -0.5,

        // Top face
        -0.5,  0.5, -0.5,
        -0.5,  0.5,  0.5,
        0.5,  0.5,  0.5,
        0.5,  0.5, -0.5,

        // Bottom face
        -0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, -0.5,  0.5,
        -0.5, -0.5,  0.5,

        // Right face
        0.5, -0.5, -0.5,
        0.5,  0.5, -0.5,
        0.5,  0.5,  0.5,
        0.5, -0.5,  0.5,

        // Left face
        -0.5, -0.5, -0.5,
        -0.5, -0.5,  0.5,
        -0.5,  0.5,  0.5,
        -0.5,  0.5, -0.5,
    ],
    indices : [
        0,  1,  2,      0,  2,  3,    // front
        4,  5,  6,      4,  6,  7,    // back
        8,  9,  10,     8,  10, 11,   // top
        12, 13, 14,     12, 14, 15,   // bottom
        16, 17, 18,     16, 18, 19,   // right
        20, 21, 22,     20, 22, 23,   // left
    ],
}
// model = {
//     vertices : [],
//     indices : [],
// };

function resetOptions() {
    optionState = {
        model : model,              // cube, pyramid, object3
        projection : "orthogonal",  // orthogonal, oblique, perspective
        transformation : {
            translate   : [0, 0, 0],
            rotate      : [0, 0, 0],
            scale       : [1, 1, 1]
        },
        cameraView : {
            rotate : [0, 0, 0],
            radius : 2,
        },
        shader : true,
        color : [1.0, 1.0, 1.0, 1.0],
    };
}

function main() {
    var transform_matrix;   // Transformation matrix
    setListeners();         // Set listeners for UI
    resetOptions();         // Initialize option state

    // Get A WebGL context
    var canvas = document.querySelector("#gl-canvas");
    var gl = canvas.getContext("webgl");
    if (!gl) {
        alert("WebGL isn't available");
    }

    // setup GLSL program
    var flatProgram = initShaderProgram(gl, vertexShaderSource, fragmentShaderSourceFlat);
    var lightingProgram = initShaderProgram(gl, vertexShaderSource, fragmentShaderSourceLighting);
    gl.useProgram(lightingProgram);

    // Create a buffer and put three 2d clip space points in it
    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Create a buffer for the indices (the order the vertices should be drawn in)
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    // look up where the vertex data needs to go.
    var lightingPositionLocation            = gl.getAttribLocation(lightingProgram, "position");
    var lightingColorLocation               = gl.getUniformLocation(lightingProgram, "color");
    var lightingTransformMatrixLocation     = gl.getUniformLocation(lightingProgram, "transform_matrix");
    var lightingProjectionMatrixLocation    = gl.getUniformLocation(lightingProgram, "projection_matrix");
    var lightingFudgeFactorLocation         = gl.getUniformLocation(lightingProgram, "fudge_factor");
    var flatPositionLocation                = gl.getAttribLocation(flatProgram, "position");
    var flatColorLocation                   = gl.getUniformLocation(flatProgram, "color");
    var flatTransformMatrixLocation         = gl.getUniformLocation(flatProgram, "transform_matrix");
    var flatProjectionMatrixLocation        = gl.getUniformLocation(flatProgram, "projection_matrix");
    var flatFudgeFactorLocation             = gl.getUniformLocation(flatProgram, "fudge_factor");

    window.requestAnimationFrame(render);

    function render() {
        // Set the transformation matrix variable
        transform_matrix = getTransformMatrix(
            optionState.transformation.translate, 
            optionState.transformation.scale, 
            optionState.transformation.rotate
        );

        // Set varibles based on shader switch state
        var program                     = optionState.shader ? lightingProgram                  : flatProgram;
        var positionLocation            = optionState.shader ? lightingPositionLocation         : flatPositionLocation;
        var colorLocation               = optionState.shader ? lightingColorLocation            : flatColorLocation;
        var transformMatrixLocation     = optionState.shader ? lightingTransformMatrixLocation  : flatTransformMatrixLocation;
        var projectionMatrixLocation    = optionState.shader ? lightingProjectionMatrixLocation : flatProjectionMatrixLocation;
        var fudgeFactorLocation         = optionState.shader ? lightingFudgeFactorLocation      : flatFudgeFactorLocation;

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);    // Clear the canvas
        gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Set clear color to black, fully opaque
        gl.enable(gl.DEPTH_TEST);                               // Enable depth buffering
        gl.enable(gl.CULL_FACE);                                // Enable backface culling

        // Use the program (pair of shaders)
        gl.useProgram(program);

        // Turn on the attribute
        gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(positionLocation);
        gl.uniformMatrix4fv(transformMatrixLocation, false, new Float32Array(transform_matrix));
        gl.uniform3f(colorLocation, optionState.color[0], optionState.color[1], optionState.color[2]);
        if (optionState.projection == "perspective") {
            gl.uniform1f(fudgeFactorLocation, 1.0);
        } else {
            gl.uniform1f(fudgeFactorLocation, 0.0);
        }
        var projection_matrix = getProjectionMatrix(optionState.projection, optionState.cameraView.radius);
        gl.uniformMatrix4fv(projectionMatrixLocation, false, new Float32Array(projection_matrix));

        // Bind the position buffer
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(optionState.model.vertices), gl.STATIC_DRAW);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(optionState.model.indices), gl.STATIC_DRAW);

        // Draw the geometry
        gl.drawElements(gl.TRIANGLES, optionState.model.indices.length, gl.UNSIGNED_SHORT, 0);
        
        // Render again
        window.requestAnimationFrame(render);
    }
}

main();