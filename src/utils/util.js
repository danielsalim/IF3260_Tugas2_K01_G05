function multiplyMatrix(matrix1, matrix2) {
  var result = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        var sum = 0;
        for (var k = 0; k < 4; k++) {
            sum += matrix1[i * 4 + k] * matrix2[k * 4 + j];
        }
        result.push(sum);
        }
    }
    return result;
}

function inverseMatrix(matrix) {
    // inverse matrix 4x4
    var det = matrix[0] * matrix[5] * matrix[10] * matrix[15] - matrix[0] * matrix[5] * matrix[11] * matrix[14] - matrix[0] * matrix[6] * matrix[9] * matrix[15] + matrix[0] * matrix[6] * matrix[11] * matrix[13] + matrix[0] * matrix[7] * matrix[9] * matrix[14] - matrix[0] * matrix[7] * matrix[10] * matrix[13] - matrix[1] * matrix[4] * matrix[10] * matrix[15] + matrix[1] * matrix[4] * matrix[11] * matrix[14] + matrix[1] * matrix[6] * matrix[8] * matrix[15] - matrix[1] * matrix[6] * matrix[11] * matrix[12] - matrix[1] * matrix[7] * matrix[8] * matrix[14] + matrix[1] * matrix[7] * matrix[10] * matrix[12] + matrix[2] * matrix[4] * matrix[9] * matrix[15] - matrix[2] * matrix[4] * matrix[11] * matrix[13] - matrix[2] * matrix[5] * matrix[8] * matrix[15] + matrix[2] * matrix[5] * matrix[11] * matrix[12] + matrix[2] * matrix[7] * matrix[8] * matrix[13] - matrix[2] * matrix[7] * matrix[9] * matrix[12] - matrix[3] * matrix[4] * matrix[9] * matrix[14] + matrix[3] * matrix[4] * matrix[10] * matrix[13] + matrix[3] * matrix[5] * matrix[8] * matrix[14] - matrix[3] * matrix[5] * matrix[10] * matrix[12] - matrix[3] * matrix[6] * matrix[8] * matrix[13] + matrix[3] * matrix[6] * matrix[9] * matrix[12];
    var invdet = 1 / det;
    var result = [
        invdet * (matrix[5] * matrix[10] * matrix[15] - matrix[5] * matrix[11] * matrix[14] - matrix[6] * matrix[9] * matrix[15] + matrix[6] * matrix[11] * matrix[13] + matrix[7] * matrix[9] * matrix[14] - matrix[7] * matrix[10] * matrix[13]),
        invdet * (-matrix[1] * matrix[10] * matrix[15] + matrix[1] * matrix[11] * matrix[14] + matrix[2] * matrix[9] * matrix[15] - matrix[2] * matrix[11] * matrix[13] - matrix[3] * matrix[9] * matrix[14] + matrix[3] * matrix[10] * matrix[13]),
        invdet * (matrix[1] * matrix[6] * matrix[15] - matrix[1] * matrix[7] * matrix[14] - matrix[2] * matrix[5] * matrix[15] + matrix[2] * matrix[7] * matrix[13] + matrix[3] * matrix[5] * matrix[14] - matrix[3] * matrix[6] * matrix[13]),
        invdet * (-matrix[1] * matrix[6] * matrix[11] + matrix[1] * matrix[7] * matrix[10] + matrix[2] * matrix[5] * matrix[11] - matrix[2] * matrix[7] * matrix[9] - matrix[3] * matrix[5] * matrix[10] + matrix[3] * matrix[6] * matrix[9]),
        invdet * (-matrix[4] * matrix[10] * matrix[15] + matrix[4] * matrix[11] * matrix[14] + matrix[6] * matrix[8] * matrix[15] - matrix[6] * matrix[11] * matrix[12] - matrix[7] * matrix[8] * matrix[14] + matrix[7] * matrix[10] * matrix[12]),
        invdet * (matrix[0] * matrix[10] * matrix[15] - matrix[0] * matrix[11] * matrix[14] - matrix[2] * matrix[8] * matrix[15] + matrix[2] * matrix[11] * matrix[12] + matrix[3] * matrix[8] * matrix[14] - matrix[3] * matrix[10] * matrix[12]),
        invdet * (-matrix[0] * matrix[6] * matrix[15] + matrix[0] * matrix[7] * matrix[14] + matrix[2] * matrix[4] * matrix[15] - matrix[2] * matrix[7] * matrix[12] - matrix[3] * matrix[4] * matrix[14] + matrix[3] * matrix[6] * matrix[12]),
        invdet * (matrix[0] * matrix[6] * matrix[11] - matrix[0] * matrix[7] * matrix[10] - matrix[2] * matrix[4] * matrix[11] + matrix[2] * matrix[7] * matrix[8] + matrix[3] * matrix[4] * matrix[10] - matrix[3] * matrix[6] * matrix[8]),
        invdet * (matrix[4] * matrix[9] * matrix[15] - matrix[4] * matrix[11] * matrix[13] - matrix[5] * matrix[8] * matrix[15] + matrix[5] * matrix[11] * matrix[12] + matrix[7] * matrix[8] * matrix[13] - matrix[7] * matrix[9] * matrix[12]),
        invdet * (-matrix[0] * matrix[9] * matrix[15] + matrix[0] * matrix[11] * matrix[13] + matrix[1] * matrix[8] * matrix[15] - matrix[1] * matrix[11] * matrix[12] - matrix[3] * matrix[8] * matrix[13] + matrix[3] * matrix[9] * matrix[12]),
        invdet * (matrix[0] * matrix[5] * matrix[15] - matrix[0] * matrix[7] * matrix[13] - matrix[1] * matrix[4] * matrix[15] + matrix[1] * matrix[7] * matrix[12] + matrix[3] * matrix[4] * matrix[13] - matrix[3] * matrix[5] * matrix[12]),
        invdet * (-matrix[0] * matrix[5] * matrix[11] + matrix[0] * matrix[7] * matrix[9] + matrix[1] * matrix[4] * matrix[11] - matrix[1] * matrix[7] * matrix[8] - matrix[3] * matrix[4] * matrix[9] + matrix[3] * matrix[5] * matrix[8]),
        invdet * (-matrix[4] * matrix[9] * matrix[14] + matrix[4] * matrix[10] * matrix[13] + matrix[5] * matrix[8] * matrix[14] - matrix[5] * matrix[10] * matrix[12] - matrix[6] * matrix[8] * matrix[13] + matrix[6] * matrix[9] * matrix[12]),
        invdet * (matrix[0] * matrix[9] * matrix[14] - matrix[0] * matrix[10] * matrix[13] - matrix[1] * matrix[8] * matrix[14] + matrix[1] * matrix[10] * matrix[12] + matrix[2] * matrix[8] * matrix[13] - matrix[2] * matrix[9] * matrix[12]),
        invdet * (-matrix[0] * matrix[5] * matrix[14] + matrix[0] * matrix[6] * matrix[13] + matrix[1] * matrix[4] * matrix[14] - matrix[1] * matrix[6] * matrix[12] - matrix[2] * matrix[4] * matrix[13] + matrix[2] * matrix[5] * matrix[12]),
        invdet * (matrix[0] * matrix[5] * matrix[10] - matrix[0] * matrix[6] * matrix[9] - matrix[1] * matrix[4] * matrix[10] + matrix[1] * matrix[6] * matrix[8] + matrix[2] * matrix[4] * matrix[9] - matrix[2] * matrix[5] * matrix[8])
    ];
    return result;
}


function getProjectionMatrix(mode) {
    switch (mode) {
        case "orthogonal":
            return [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ];
        case "oblique": // Cabinet oblique
            return [
                1, 0, 0, 0,
                0, 1, 0, 0,
                Math.cos(64/180*Math.PI)/2, Math.cos(64/180*Math.PI)/2, 1, 0,
                0, 0, 0, 1
            ];
        case "perspective":
            return [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ];
    }
}

function getTranslationMatrix(x, y, z) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
    ];
}

function getScaleMatrix(x, y, z) {
    return [
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    ];
}

function getRotationMatrix(x, y, z) {
    var xRotationMatrix = [
        1, 0, 0, 0,
        0, Math.cos(x), -Math.sin(x), 0,
        0, Math.sin(x), Math.cos(x), 0,
        0, 0, 0, 1
    ];
    var yRotationMatrix = [
        Math.cos(y), 0, Math.sin(y), 0,
        0, 1, 0, 0,
        -Math.sin(y), 0, Math.cos(y), 0,
        0, 0, 0, 1
    ];
    var zRotationMatrix = [
        Math.cos(z), -Math.sin(z), 0, 0,
        Math.sin(z), Math.cos(z), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
    return multiplyMatrix(multiplyMatrix(xRotationMatrix, yRotationMatrix), zRotationMatrix);
}


function getTransformMatrix(translation, scale, rotation) {
    var translationMatrix = getTranslationMatrix(translation[0], translation[1], translation[2]);
    var scaleMatrix = getScaleMatrix(scale[0], scale[1], scale[2]);
    var rotationMatrix = getRotationMatrix(rotation[0], rotation[1], rotation[2]);
    return multiplyMatrix(multiplyMatrix(translationMatrix, rotationMatrix), scaleMatrix);
}

function getCameraViewMatrix(rotation, radius) {
    var rotationMatrix = getRotationMatrix(rotation[0], rotation[1] * Math.PI / 180, rotation[2]);
    var translationMatrix = getTranslationMatrix(0, 0, radius);
    return inverseMatrix(multiplyMatrix(rotationMatrix, translationMatrix));
}
