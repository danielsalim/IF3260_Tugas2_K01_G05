var vertexShaderSource = 
`
attribute vec3 position;
uniform float fudge_factor;
uniform mat4 transform_matrix;
uniform mat4 projection_matrix;
varying float color_factor;
void main() {
    vec4 transform_pos = transform_matrix * vec4(position.xy, position.z*-1.0, 1.0);
    vec4 projection_pos = projection_matrix * transform_pos;
    if (fudge_factor < 0.01) {
        gl_Position = projection_pos;
    } else {
        float z_divider = 2.0 + projection_pos.z * fudge_factor;
        gl_Position = vec4(projection_pos.xy / z_divider, projection_pos.zw);
    }
    color_factor = min(max((1.0 - transform_pos.z)/2.0, 0.0), 1.0);
}
`

var fragmentShaderSourceFlat =
`
precision mediump float;
uniform vec3 color;
varying float color_factor;
void main() {
    gl_FragColor = vec4(color, 1.0);
}
`

var fragmentShaderSourceLighting =
`
precision mediump float;
uniform vec3 color;
varying float color_factor;
void main() {
    gl_FragColor = vec4(color * color_factor, 1.0);
}
`

function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function initShaderProgram(gl, vsSource, fsSource) {
    var vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    var shaderProgram = createProgram(gl, vertexShader, fragmentShader);
    var success = gl.getProgramParameter(shaderProgram, gl.LINK_STATUS);
    if (success) {
        return shaderProgram;
    }
    console.log(gl.getProgramInfoLog(shaderProgram));
    gl.deleteProgram(shaderProgram);
}