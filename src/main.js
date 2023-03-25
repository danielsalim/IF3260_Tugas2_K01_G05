
var optionState;
var cube, pyramid, interlockingcube = {
    vertices : [],
    indices : [],
    color: [],
};

/* 
 * TESTING MODEL 
 */

// TO DO: cara nge fetch data model dari file json ke dalam variable model biar gak kopas kayak gini wkwk
cube =                     // model/cube-EXAMPLE.json
{
    "vertices" : [
        //cube 1
        //front cube outer
        -0.5, -0.5, 0.3, //0
        0.5, -0.5, 0.3, // 1
        0.5, 0.5, 0.3, //2
        -0.5, 0.5, 0.3, // 3

        //front cube small outer
        -0.35, -0.35, 0.3, //4
        0.35, -0.35, 0.3, // 5
        0.35, 0.35, 0.3, //6
        -0.35, 0.35, 0.3, // 7

        //front cube inner
        -0.5, -0.5, 0.2, //8
        0.5, -0.5, 0.2, // 9
        0.5, 0.5, 0.2, // 10
        -0.5, 0.5, 0.2, // 11

        //front cube small inner
        -0.35, -0.35, 0.2, //12
        0.35, -0.35, 0.2, // 13
        0.35, 0.35, 0.2, // 14
        -0.35, 0.35, 0.2, // 15

        //cube 2
        //right cube outer
        0.5, -0.5, 0.3, //16
        0.5, -0.5, -0.7, // 17
        0.5, 0.5, -0.7, //18
        0.5, 0.5, 0.3, // 19

        //right cube small outer
        0.5, -0.35, 0.15, //20
        0.5, -0.35, -0.55, //21
        0.5, 0.35, -0.55, //22
        0.5, 0.35, 0.15, //23

        //right cube inner
        0.35, -0.5, 0.3, //24
        0.35, -0.5, -0.7, // 25
        0.35, 0.5, -0.7, // 26
        0.35, 0.5, 0.3, // 27

        //right cube small inner
        0.35, -0.35, 0.15, //28
        0.35, -0.35, -0.55, // 29
        0.35, 0.35, -0.55, // 30
        0.35, 0.35, 0.15, // 31

        //cube 3
        //back cube outer
        -0.5, -0.5, -0.7, //32
        0.5, -0.5, -0.7, // 33
        0.5, 0.5, -0.7, //34
        -0.5, 0.5, -0.7, // 35

        //back cube small outer
        -0.35, -0.35, -0.7, // 36
        0.35, -0.35, -0.7, // 37
        0.35, 0.35, -0.7, // 38
        -0.35, 0.35, -0.7, // 39

        //back cube inner
        -0.5, -0.5, -0.55, //40
        0.5, -0.5, -0.55, // 41
        0.5, 0.5, -0.55, // 42
        -0.5, 0.5, -0.55, // 43

        //back cube small inner
        -0.35, -0.35, -0.55, //44
        0.35, -0.35, -0.55, // 45
        0.35, 0.35, -0.55, // 46
        -0.35, 0.35, -0.55, // 47

        //cube 4
        //left cube outer
        -0.5, -0.5, 0.3, //48
        -0.5, -0.5, -0.7, // 49
        -0.5, 0.5, -0.7, //50
        -0.5, 0.5, 0.3, // 51

        //left cube small outer
        -0.5, -0.35, 0.15, //52
        -0.5, -0.35, -0.55, //53
        -0.5, 0.35, -0.55, //54
        -0.5, 0.35, 0.15, //55

        //left cube inner
        -0.35, -0.5, 0.3, //56
        -0.35, -0.5, -0.7, //57
        -0.35, 0.5, -0.7, //58
        -0.35, 0.5, 0.3, //59

        //left cube small inner
        -0.35, -0.35, 0.15, //60
        -0.35, -0.35, -0.55, //61
        -0.35, 0.35, -0.55, //62
        -0.35, 0.35, 0.15, //63
    ],

    
    "indices" : [

        //front cube outer
        0, 1, 4,    1, 5, 4,
        1, 2, 5,    2, 6, 5,
        2, 3, 6,    3, 7, 6,
        3, 0, 7,    0, 4, 7,   

        //front cube inner
        8, 9, 12,   9, 13, 12,
        9, 10, 13,  10, 14, 13,
        10, 11, 14, 11, 15, 14,
        11, 8, 15,  8, 12, 15,

        //wrapper of front cube (outer)
        0, 8, 1,    8, 9, 1,
        1, 9, 2,    9, 10, 2,
        2, 10, 3,   10, 11, 3,
        0, 3, 8,    3, 11, 8,

        //wrapper of front cube (inner)
        4, 5, 13,   13, 12, 4,
        5, 6, 14,   14, 13, 5,
        6, 7, 15,   15, 14, 6,
        4, 12, 7,   12, 15, 7,
    
        //right cube outer
        16, 17, 21, 21, 20, 16,
        17, 18, 22, 22, 21, 17,
        18, 19, 23, 23, 22, 18,
        19, 16, 23, 16, 20, 23,

        //right cube inner
        24, 25, 29, 29, 28, 24,
        25, 26, 30, 30, 29, 25,
        26, 27, 31, 31, 30, 26,
        27, 24, 31, 24, 28, 31,

        //wrapper of right cube (outer)
        16, 24, 25, 25, 17, 16,
        17, 25, 26, 26, 18, 17,
        18, 26, 27, 27, 19, 18,

        //wrapper of right cube (inner)
        20, 21, 29, 29, 28, 20,
        21, 22, 30, 30, 29, 21,
        22, 23, 31, 31, 30, 22,
        20, 28, 31, 31, 23, 20,

        //back cube outer
        32, 33, 37, 37, 36, 32,
        33, 34, 38, 38, 37, 33,
        34, 35, 39, 39, 38, 34,
        35, 32, 36, 36, 39, 35,

        //back cube inner
        40, 41, 45, 45, 44, 40,
        41, 42, 46, 46, 45, 41,
        42, 43, 47, 47, 46, 42,
        43, 40, 44, 44, 47, 43, 
        
        //wrapper of back cube (outer)
        32, 40, 41, 41, 33, 32,
        34, 35, 42, 35, 43, 42,
        43, 35, 32, 32, 40, 43, 
        40, 32, 33, 33, 41, 40,

        //wrapper of back cube (inner)
        44, 45, 37, 37, 36, 44,
        45, 46, 38, 38, 37, 45,
        46, 47, 39, 39, 38, 46,
        39, 47, 44, 44, 36, 39,

        //right cube outer
        48, 49, 53, 53, 52, 48,
        49, 50, 54, 54, 53, 49,
        50, 51, 55, 55, 54, 50,
        55, 51, 48, 48, 52, 55, 

        //right cube inner
        56, 57, 61, 61, 60, 56,
        57, 58, 62, 62, 61, 57,
        58, 59, 63, 63, 62, 58,
        63, 59, 56, 56, 60, 63,

        //wrapper of right cube (outer)
        48, 56, 57, 57, 49, 48,
        50, 51, 59, 59, 58, 50, 

        //wrapper of right cube (inner)
        52, 60, 61, 61, 53, 52,
        54, 62, 63, 63, 55, 54,
        55, 63, 60, 60, 52, 55,

    ],

    "color" : [
        1.0, 1.0, 1.0, 1.0,
    ]
}

pyramid =                  // model/pyramid.json
{
    "vertices" : [
        -0.5, -0.5,  0.5,
         0.5, -0.5,  0.5,
         0.0,  0.5,  0.0,
        -0.5, -0.5, -0.5,
         0.5, -0.5, -0.5,
         0.0,  0.5,  0.0
    ],
    
    "indices" : [
        0, 1, 2,
        1, 4, 2,
        4, 3, 2,
        3, 0, 2,
        0, 1, 5,
        1, 4, 5,
        4, 3, 5,
        3, 0, 5
    ],

    "color" : [
        1.0, 1.0, 1.0, 1.0,
    ]
}

interlockingcube =         // model/interlocking_cube.json
{
    "vertices" : [
        -0.75, -0.45, 0.1,
        0.75, -0.45, 0.1,
        0.75, -0.3, 0.1,
        -0.75, -0.3, 0.1,
		
		0.6, -0.45, 0.1,
        0.75, -0.45, 0.1,
        0.75, 0.45, 0.1,
        0.6, 0.45, 0.1,
		
        -0.75, 0.3, 0.1,
        0.75, 0.3, 0.1,
        0.75, 0.45, 0.1,
		-0.75, 0.45, 0.1,

		-0.75, -0.45, 0.1,
        -0.6, -0.45, 0.1,
        -0.6, 0.45, 0.1,
        -0.75, 0.45, 0.1,


        0.75, -0.45, -0.1,
        -0.75, -0.45, -0.1,
        -0.75, -0.3, -0.1,
        0.75, -0.3, -0.1,
		
        0.75, -0.45, -0.1,
		0.6, -0.45, -0.1,
        0.6, 0.45, -0.1,
        0.75, 0.45, -0.1,
		
        0.75, 0.3, -0.1,
        -0.75, 0.3, -0.1,
		-0.75, 0.45, -0.1,
        0.75, 0.45, -0.1,

        -0.6, -0.45, -0.1,
		-0.75, -0.45, -0.1,
        -0.75, 0.45, -0.1,
        -0.6, 0.45, -0.1,


        -0.75, 0.45, 0.1,
        0.75, 0.45, 0.1,
        0.75, 0.45, -0.1,
        -0.75, 0.45, -0.1,

        -0.6, 0.3, -0.1,
        0.6, 0.3, -0.1,
        0.6, 0.3, 0.1,
        -0.6, 0.3, 0.1,


        -0.75, -0.45, -0.1,
        0.75, -0.45, -0.1,
        0.75, -0.45, 0.1,
        -0.75, -0.45, 0.1,

        -0.6, -0.3, 0.1,
        0.6, -0.3, 0.1,
        0.6, -0.3, -0.1,
        -0.6, -0.3, -0.1,


        -0.75, -0.45, -0.1, 
        -0.75, -0.45, 0.1,
        -0.75, 0.45, 0.1,
        -0.75, 0.45, -0.1,

        -0.6, -0.3, 0.1,
        -0.6, -0.3, -0.1,
        -0.6, 0.3, -0.1,
        -0.6, 0.3, 0.1,


        0.75, -0.45, 0.1,
        0.75, -0.45, -0.1,
        0.75, 0.45, -0.1,
        0.75, 0.45, 0.1,

        0.6, -0.3, -0.1,
        0.6, -0.3, 0.1,
        0.6, 0.3, 0.1,
        0.6, 0.3, -0.1,


        -0.5, -0.1, 0.75,
        0.5, -0.1, 0.75,
        0.5, 0.1, 0.75,
        -0.5, 0.1, 0.75,

        0.3, -0.1, 0.55,
        -0.3, -0.1, 0.55,
        -0.3, 0.1, 0.55,
        0.3, 0.1, 0.55,


        0.5, -0.1, -0.75,
        -0.5, -0.1, -0.75,
        -0.5, 0.1, -0.75,
        0.5, 0.1, -0.75,

        -0.3, -0.1, -0.55,
        0.3, -0.1, -0.55,
        0.3, 0.1, -0.55,
        -0.3, 0.1, -0.55,


        -0.5, 0.1, 0.75,
        0.5, 0.1, 0.75,
        0.5, 0.1, 0.55,
        -0.5, 0.1, 0.55,

        -0.5, 0.1, -0.55,
        0.5, 0.1, -0.55,
        0.5, 0.1, -0.75,
        -0.5, 0.1, -0.75,

        -0.5, 0.1, 0.75,
        -0.3, 0.1, 0.75,
        -0.3, 0.1, -0.75,
        -0.5, 0.1, -0.75,

        0.3, 0.1, 0.75,
        0.5, 0.1, 0.75,
        0.5, 0.1, -0.75,
        0.3, 0.1, -0.75,


        -0.5, -0.1, 0.55,
        0.5, -0.1, 0.55,
        0.5, -0.1, 0.75,
        -0.5, -0.1, 0.75,

        -0.5, -0.1, -0.75,
        0.5, -0.1, -0.75,
        0.5, -0.1, -0.55,
        -0.5, -0.1, -0.55,
        
        -0.5, -0.1, -0.75,
        -0.3, -0.1, -0.75,
        -0.3, -0.1, 0.75,
        -0.5, -0.1, 0.75,

        0.3, -0.1, -0.75,
        0.5, -0.1, -0.75,
        0.5, -0.1, 0.75,
        0.3, -0.1, 0.75,


        -0.5, -0.1, -0.75,
        -0.5, -0.1, 0.75,
        -0.5, 0.1, 0.75,
        -0.5, 0.1, -0.75,

        -0.3, -0.1, 0.75,
        -0.3, -0.1, -0.75,
        -0.3, 0.1, -0.75,
        -0.3, 0.1, 0.75,


        0.5, -0.1, 0.75,
        0.5, -0.1, -0.75,
        0.5, 0.1, -0.75,
        0.5, 0.1, 0.75,

        0.3, -0.1, -0.75,
        0.3, -0.1, 0.75,
        0.3, 0.1, 0.75,
        0.3, 0.1, -0.75,


        -0.1, -0.75, 0.5,
        0.1, -0.75, 0.5,
        0.1, 0.75, 0.5,
        -0.1, 0.75, 0.5,

        -0.1, 0.55, 0.3,
        0.1, 0.55, 0.3,
        0.1, -0.55, 0.3,
        -0.1, -0.55, 0.3,


        0.1, -0.75, -0.5,
        -0.1, -0.75, -0.5,
        -0.1, 0.75, -0.5,
        0.1, 0.75, -0.5,

        -0.1, -0.55, -0.3,
        0.1, -0.55, -0.3,
        0.1, 0.55, -0.3,
        -0.1, 0.55, -0.3,


        -0.1, 0.75, 0.5,
        0.1, 0.75, 0.5,
        0.1, 0.75, -0.5,
        -0.1, 0.75, -0.5,

        -0.1, 0.55, -0.3,
        0.1, 0.55, -0.3,
        0.1, 0.55, 0.3,
        -0.1, 0.55, 0.3,


        -0.1, -0.75, -0.5,
        0.1, -0.75, -0.5,
        0.1, -0.75, 0.5,
        -0.1, -0.75, 0.5,

        -0.1, -0.55, 0.3,
        0.1, -0.55, 0.3,
        0.1, -0.55, -0.3,
        -0.1, -0.55, -0.3,


        -0.1, -0.75, -0.5,
        -0.1, -0.75, 0.5,
        -0.1, -0.55, 0.5,
        -0.1, -0.55, -0.5,

        -0.1, 0.55, -0.5,
        -0.1, 0.55, 0.5,
        -0.1, 0.75, 0.5,
        -0.1, 0.75, -0.5,

        -0.1, -0.75, -0.5,
        -0.1, -0.75, -0.3,
        -0.1, 0.75, -0.3,
        -0.1, 0.75, -0.5,

        -0.1, -0.75, 0.3,
        -0.1, -0.75, 0.5,
        -0.1, 0.75, 0.5,
        -0.1, 0.75, 0.3,


        0.1, -0.75, 0.5,
        0.1, -0.75, -0.5,
        0.1, -0.55, -0.5,
        0.1, -0.55, 0.5,

        0.1, 0.55, 0.5,
        0.1, 0.55, -0.5,
        0.1, 0.75, -0.5,
        0.1, 0.75, 0.5,

        0.1, -0.75, 0.5,
        0.1, -0.75, 0.3,
        0.1, 0.75, 0.3,
        0.1, 0.75, 0.5,

        0.1, -0.75, -0.3,
        0.1, -0.75, -0.5,
        0.1, 0.75, -0.5,
        0.1, 0.75, -0.3
    ],

    
    "indices" : [
        0,  1,  2,      0,  2,  3,    
        4,  5,  6,      4,  6,  7,    
        8,  9,  10,     8,  10, 11,   
        12, 13, 14,     12, 14, 15,   

        16, 17, 18,     16, 18, 19,   
        20, 21, 22,     20, 22, 23,
        24, 25, 26,     24, 26, 27,
        28, 29, 30,     28, 30, 31,

        32, 33, 34,     32, 34, 35,   
        36, 37, 38,     36, 38, 39,
        
        40, 41, 42,     40, 42, 43,   
        44, 45, 46,     44, 46, 47,

        48, 49, 50,     48, 50, 51,   
        52, 53, 54,     52, 54, 55,

        56, 57, 58,     56, 58, 59,   
        60, 61, 62,     60, 62, 63,

        64, 65, 66,     64, 66, 67,   
        68, 69, 70,     68, 70, 71,   

        72, 73, 74,     72, 74, 75,   
        76, 77, 78,     76, 78, 79,

        80, 81, 82,     80, 82, 83,   
        84, 85, 86,     84, 86, 87,
        88, 89, 90,     88, 90, 91,   
        92, 93, 94,     92, 94, 95,

        96, 97, 98,     96, 98, 99,   
        100, 101, 102,  100, 102, 103,
        104, 105, 106,  104, 106, 107,
        108, 109, 110,  108, 110, 111,

        112, 113, 114,  112, 114, 115,   
        116, 117, 118,  116, 118, 119,

        120, 121, 122,  120, 122, 123,   
        124, 125, 126,  124, 126, 127,

        128, 129, 130,  128, 130, 131,   
        132, 133, 134,  132, 134, 135,

        136, 137, 138,  136, 138, 139,   
        140, 141, 142,  140, 142, 143,

        144, 145, 146,  144, 146, 147,   
        148, 149, 150,  148, 150, 151,

        152, 153, 154,  152, 154, 155,   
        156, 157, 158,  156, 158, 159,

        160, 161, 162,  160, 162, 163,   
        164, 165, 166,  164, 166, 167,
        168, 169, 170,  168, 170, 171,   
        172, 173, 174,  172, 174, 175,

        176, 177, 178,  176, 178, 179,   
        180, 181, 182,  180, 182, 183,
        184, 185, 186,  184, 186, 187,   
        188, 189, 190,  188, 190, 191
    ],
    
    "color" : [
        1.0, 1.0, 1.0, 1.0,
    ]
}

function initOptionState() {
    optionState = {
        model : cube,            // cube, pyramid, interlocking_cube
        projection : "orthogonal",  // orthogonal, oblique, perspective
        transformation : {
            translate   : [0, 0, 0],
            rotate      : [0, 0, 0],
            scale       : [1, 1, 1]
        },
        cameraView : {
            rotate : [0, 0, 0],
            radius : 0.1,
        },
        shader : true,
        center : [0.0, 0.0, 0.0],
        animation : false,
    };
}

//constant needed for projections
const setOrthogonal = () => {
    optionState.projection = "orthogonal";
}

const setOblique = () => {
    optionState.projection = "oblique";
}

const setPerspective = () => {
    optionState.projection = "perspective";
}

function main() {
    var transform_matrix;   // Transformation matrix
    setListeners();         // Set listeners for UI
    initOptionState();         // Initialize option state

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

    var incrX = 0.5;
    var incrY = 0.5;
    var incrZ = 0.5;

    function render() {
        if (optionState.animation) {
            if (optionState.transformation.rotate[0] >= 180 || optionState.transformation.rotate[0] <= -180) {
                incrX = -incrX;
            }
            if (optionState.transformation.rotate[1] >= 180 || optionState.transformation.rotate[1] <= -180) {
                incrY = -incrY;
            }
            if (optionState.transformation.rotate[2] >= 180 || optionState.transformation.rotate[2] <= -180) {
                incrZ = -incrZ;
            }
            optionState.transformation.rotate[0] += incrX;
            document.getElementById("rotation-x").value = optionState.transformation.rotate[0];
            updateLabelOutput("rotation-x", optionState.transformation.rotate[0]);
            optionState.transformation.rotate[1] += incrY;
            document.getElementById("rotation-y").value = optionState.transformation.rotate[1];
            updateLabelOutput("rotation-y", optionState.transformation.rotate[1]);
            optionState.transformation.rotate[2] += incrZ;
            document.getElementById("rotation-z").value = optionState.transformation.rotate[2];
            updateLabelOutput("rotation-z", optionState.transformation.rotate[2]);
            console.log(optionState.transformation.rotate);
        }

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
        gl.uniform3f(colorLocation, optionState.model.color[0], optionState.model.color[1], optionState.model.color[2]);
        if (optionState.projection == "perspective") {
            gl.uniform1f(fudgeFactorLocation, 1.25);
        } else {
            gl.uniform1f(fudgeFactorLocation, 0.0);
        }
        var projection_matrix = multiplyMatrix(getProjectionMatrix(optionState.projection), getCameraViewMatrix(optionState.cameraView.rotate, optionState.cameraView.radius));
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