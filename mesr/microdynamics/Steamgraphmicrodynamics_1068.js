var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"désastre social": {
men: [0.22223, 0.44717, 0.38065, 0.3806, 0.38055, 0.38077, 0.3808, 0.38067, 0.38052, 0.28742, 0.28728, 0.28725, 0.40329, 0.60236, 0.6026, 0, 0, 0, 0, 0.93847, 0.9387, 0.93951, 0.94054, 0.94016, 0.94038, 0.94053, 0.94041, 0.94025, 0.94002, 0.9395, 0.93889, 0.93974, 0.93968, 0, 0, 0.93682, 0.93628, 0.93613, 0.93615, 0.93592, 0.93559, 0.46785, 0.30597, 0.30604, 0.30606, 0.30603, 0.30584, 0.20397, 0.20395, 0, 0, 0, 0, 0.15418, 0.15424, 0.19096, 0.25529, 0.25531, 0.25532, 0.25537, 0.25559, 0.49898, 0.49925, 0.591, 0.59121, 0.42531, 0.48933, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24485, 0.24502, 0.32272, 0.32271, 0.4562, 0.45653, 0.45686, 0.45684, 0.45727, 0.45744, 0.93717, 0.93716, 0.93752, 0.93717, 0, 0, 0.93695, 0.93677], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"arsenal nucléaire": {
men: [0.85613, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13578, 0.13577, 0.13574, 0.16268, 0.1013, 0.10123, 0.10132, 0.10132, 0.21637, 0.25818, 0.3623, 0.36209, 0.36203, 0.36204, 0.30056, 0.30045, 0.30048, 0.43788, 0.94075, 0.81841, 0.85241, 0.85189, 0.84426, 0.84418, 0.83352, 0.67693, 0.67714, 0.6771, 0.67698, 0.67724, 0.67717, 0.677, 0.50663, 0.36895, 0.26927, 0.2695, 0.26932, 0.26947, 0.26938, 0.25091, 0.25087, 0.2509, 0.25089, 0.25077, 0.25074, 0.25084, 0, 0, 0, 0, 0, 0, 0, 0, 0.93239, 0.93226, 0.93246, 0.93231, 0.93181, 0.93128, 0.93142, 0.93076, 0.93065, 0.93042, 0.28797, 0.28786, 0.28793, 0.28798, 0, 0, 0, 0, 0.32816, 0.4894, 0.59963, 0.60018, 0.6855, 0.71472, 0.95253, 0.95289, 0.95254, 0.95314, 0.95369, 0.95353, 0.95335], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"têtes nucléaires": {
men: [0.68917, 0.68779, 0.36878, 0.36873, 0, 0, 0, 0.44029, 0.44011, 0.31746, 0.3173, 0.31727, 0.31733, 0.31741, 0.31753, 0.31808, 0.44977, 0.44933, 0.44924, 0.44918, 0.30889, 0, 0, 0, 0, 0.34022, 0.34018, 0.34012, 0.34004, 0.33985, 0.33963, 0.33994, 0.33992, 0.33949, 0.92276, 0.92228, 0.92175, 0.9216, 0.92162, 0, 0, 0, 0, 0.93611, 0.9427, 0.94643, 0.94585, 0.94687, 0.94678, 0.94719, 0.94835, 0.94864, 0.94858, 0.94843, 0.94879, 0.94868, 0.94846, 0.94536, 0.94063, 0.9307, 0.93149, 0.93088, 0.2378, 0.23772, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11607, 0.11605, 0.11599, 0.11592, 0.11594, 0.11586, 0.11584, 0.11581, 0.12873, 0.12868, 0.24127, 0.24131, 0.92878, 0.92905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sous-marins nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1916, 0.41205, 0.48103, 0.45242, 0.45253, 0.40231, 0.40301, 0.42025, 0.41984, 0.41975, 0.4197, 0.68454, 0.68513, 0.68588, 0.62541, 0.368, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15459, 0.1545, 0.10071, 0.18295, 0.60507, 0.6601, 0.6603, 0.81326, 0.81312, 0.81343, 0.81334, 0.81315, 0.81321, 0.81325, 0.75127, 0.75191, 0.87945, 0.87516, 0.68919, 0, 0, 0, 0, 0, 0, 0, 0, 0.61963, 0.36879, 0.36882, 0.36899, 0.36907, 0.36911, 0.36917, 0.24497, 0.24494, 0.24499, 0.24495, 0.24482, 0.24468, 0.24472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93398, 0.94116, 0.94113, 0.94201, 0.94235, 0.94287, 0.94286, 0.94322, 0.94287, 0.94346, 0.94401, 0.94385, 0.94367], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pertes humaines": {
men: [0.95205, 0.95013, 0.94987, 0.94975, 0.94962, 0.73294, 0.13666, 0.13662, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.06853, 0.12759, 0.12757, 0.14331, 0.15845, 0.15839, 0.16134, 0.16287, 0.16291, 0.16292, 0.1629, 0.1628, 0.19675, 0.50964, 0.42869, 0.41294, 0.41307, 0.42652, 0.28489, 0.285, 0.28497, 0.93067, 0.93074, 0.9308, 0.93097, 0.93176, 0.93114, 0.93166, 0.93133, 0.93165, 0.9315, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24966, 0.36902, 0.3691, 0.36904, 0.36884, 0.36863, 0.36869, 0.95662, 0.95651, 0.95627, 0.95622, 0.95585, 0.95607, 0.95625, 0.95628, 0.95656, 0.95651, 0.9568, 0.95748, 0.95817, 0.95815, 0, 0, 0, 0, 0.09633, 0.096293, 0.096354, 0.09641, 0.096394, 0.034527], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nucléaire iranien": {
men: [0.052252, 0.081497, 0.081475, 0.081464, 0.061481, 0.061516, 0.061521, 0.088501, 0.088464, 0.088447, 0.088404, 0.19979, 0.19983, 0.41073, 0.36771, 0.31528, 0.31546, 0.31515, 0.17192, 0.1719, 0.17194, 0.1273, 0.11304, 0.10261, 0.10264, 0.11953, 0.11952, 0.030264, 0.030257, 0.03024, 0.03022, 0.030248, 0.073189, 0.16252, 0.051398, 0.053848, 0.061093, 0.06949, 0.069492, 0.042276, 0.042261, 0.042266, 0.16558, 0.16562, 0.16563, 0.16561, 0.16551, 0.13357, 0.93697, 0.93737, 0.93704, 0.93733, 0.93727, 0.93712, 0.93748, 0.38788, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93641, 0.94225, 0.94214, 0.9419, 0.94186, 0.94149, 0.94171, 0.94188, 0.94254, 0.94282, 0.94277, 0.94306, 0.94373, 0.94441, 0.94001, 0.92608, 0.92642, 0.92693, 0.92692, 0.92728, 0.92693, 0.92751, 0.92805, 0.93524, 0.93507], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété collective": {
men: [0, 0, 0.12051, 0.12049, 0.12048, 0.12055, 0.21884, 0.3066, 0.39455, 0.58115, 0.58086, 0.93466, 0.93483, 0.93787, 0.93824, 0.93986, 0.93779, 0.93687, 0.93667, 0.93655, 0.93294, 0.93374, 0.93856, 0.65275, 0.6529, 0.65301, 0.65292, 0.56059, 0.56045, 0.56014, 0.55978, 0.56029, 0.56026, 0.55956, 0.35736, 0.24834, 0, 0, 0, 0, 0.23128, 0.23131, 0.23136, 0.23141, 0.23143, 0.2314, 0.23126, 0.18727, 0.23982, 0.364, 0.52668, 0.63522, 0.63518, 0.63507, 0.34967, 0.34963, 0.27578, 0.2758, 0.27582, 0.27587, 0.27611, 0.063048, 0.063083, 0.06306, 0, 0.036774, 0.11076, 0.11075, 0.11599, 0.11598, 0.12185, 0.17491, 0.19841, 0.19833, 0.19834, 0.94161, 0.94182, 0.6789, 0.67899, 0.63981, 0.49622, 0.49633, 0.40208, 0.40187, 0.40164, 0.03759, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières nucléaires": {
men: [0.28949, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.078412, 0.078431, 0.078499, 0.078585, 0.12816, 0.93959, 0.93974, 0.93961, 0.94327, 0.94304, 0.94252, 0.94191, 0.94277, 0.9427, 0.93772, 0.93705, 0.93656, 0.93602, 0.93587, 0.92943, 0.9292, 0.92887, 0, 0.93083, 0.93104, 0.93111, 0.93101, 0.93044, 0.93145, 0.93136, 0.93176, 0.93143, 0.93171, 0.93166, 0.9315, 0.93186, 0.93176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5122, 0.93895, 0.93876, 0.93838, 0.93844, 0.23472, 0.23477, 0.2348, 0.23483, 0.095458, 0.061755, 0.061769, 0.061759, 0.061725, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"firmes pharmaceutiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0.13887, 0.063424, 0.24999, 0.24987, 0.23322, 0.23326, 0.23332, 0.3018, 0.366, 0.4159, 0.43634, 0.43625, 0.43619, 0.47879, 0.46056, 0.62142, 0.54826, 0.54839, 0.63359, 0.63351, 0.63341, 0.57628, 0.51251, 0.19214, 0.19231, 0.1923, 0.19206, 0, 0, 0, 0, 0.13701, 0.13698, 0.13693, 0.11553, 0.11555, 0.11558, 0.14502, 0.145, 0.14491, 0.14507, 0.14506, 0.14512, 0.14507, 0.14511, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48365, 0.48382, 0.48374, 0.4838, 0.48378, 0.74611, 0.74603, 0.74633, 0.74627, 0.74611, 0.74581, 0.74586, 0.74622, 0.65505, 0, 0, 0, 0, 0, 0, 0.79409, 0.79364, 0.79376, 0.7932, 0.79311, 0.79291, 0.82321, 0.69696, 0.69712, 0.71516, 0.71566, 0.71587, 0.71583, 0.73216, 0.55553, 0.29028, 0.2568, 0.25704, 0.25713, 0.25728, 0.14062, 0.081273, 0.070157, 0.036807, 0.033529, 0.033523, 0.033517], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équipements militaires": {
men: [0, 0.22669, 0.22663, 0.2266, 0.1423, 0.17729, 0.17731, 0.22293, 0.22284, 0.2228, 0.22269, 0.22267, 0.22271, 0.33087, 0.331, 0.11118, 0.11125, 0.11114, 0.92595, 0.93207, 0.93229, 0.92644, 0.92746, 0.92708, 0.9273, 0.92745, 0.92733, 0.92717, 0.92694, 0.92643, 0.92583, 0.92667, 0.37544, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92674, 0.92608, 0.92597, 0.92574, 0.92569, 0.92533, 0.92555, 0.93523, 0.62051, 0.62069, 0.62066, 0.62085, 0.62129, 0.62174, 0.52033, 0.52081, 0.521, 0.52129, 0.52128, 0.52148, 0.52129, 0, 0, 0.19807, 0.19803], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"prolifération nucléaire": {
men: [0.64002, 0.63873, 0.23797, 0.23794, 0.082148, 0.082195, 0.063585, 0.063564, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94122, 0.94204, 0.94307, 0.94268, 0.94291, 0.94306, 0.94293, 0.94278, 0.71563, 0.71524, 0.75455, 0.75523, 0.81705, 0.81603, 0.70832, 0.66518, 0.66479, 0.66469, 0.66471, 0.66454, 0.66431, 0.66438, 0.8348, 0.87814, 0.6732, 0.51314, 0.44832, 0.4488, 0.44876, 0.44809, 0.44793, 0.44807, 0.44804, 0.44797, 0.44814, 0.44809, 0.28576, 0.13728, 0.080407, 0.12468, 0.12479, 0.1247, 0.12477, 0.12473, 0.12477, 0.12475, 0.12477, 0.12476, 0.1247, 0.12469, 0.19852, 0.9396, 0.9394, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16666, 0.10557, 0.1258, 0.12587, 0.27313, 0.27308], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophes climatiques": {
men: [0, 0, 0, 0, 0.17346, 0.17356, 0.057717, 0.011926, 0.011271, 0.0098603, 0.0098554, 0.0098546, 0.0098563, 0.0085728, 0.0054965, 0.005506, 0.0055092, 0.0055038, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060733, 0.060788, 0.060784, 0.038744, 0.038716, 0.0678, 0.06776, 0.064728, 0.06473, 0.064714, 0.051716, 0.058417, 0.064069, 0.063391, 0.035005, 0.030334, 0.025282, 0.035979, 0.035976, 0, 0, 0, 0, 0, 0, 0.50875, 0.50863, 0.58268, 0.58271, 0.62487, 0.7009, 0.70044, 0.70083, 0.71624, 0.73085, 0.92162, 0.96032, 0.96051, 0.96002, 0.94469, 0.66734, 0.46376, 0.46366, 0.46347, 0.2707, 0.13395, 0.13398, 0.033738, 0.028474, 0.0231, 0.023096, 0, 0.030771, 0.030755, 0.033875, 0.034602, 0.034577, 0.034573, 0.041989, 0.14422, 0.14416, 0.14419, 0.21858, 0.93051, 0.93078, 0.93074, 0.92299, 0.92365, 0.92432, 0.92429, 0.92515, 0.92549, 0.93687, 0.9379, 0.93826, 0.9379, 0.71219, 0.7126, 0.71248, 0.71235], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pc. des ressources": {
men: [0, 0, 0, 0, 0, 0, 0, 0.064055, 0.071417, 0.071403, 0.068094, 0.15221, 0.15224, 0.15228, 0.21422, 0.26511, 0.50029, 0.53381, 0.81739, 0.81728, 0.81748, 0.78212, 0.78298, 0.62455, 0.72192, 0.59374, 0.59366, 0.59356, 0.49966, 0.49939, 0.33861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23316, 0.47242, 0.47252, 0.42553, 0.42556, 0.42551, 0.42525, 0.52574, 0.77659, 0.77692, 0.77665, 0.77688, 0.77684, 0.77671, 0.70937, 0, 0, 0, 0, 0, 0, 0, 0.18227, 0.1822, 0.18227, 0.18224, 0.18226, 0.18225, 0.18216, 0.18214, 0.18221, 0.39762, 0.39753, 0.39737, 0.3974, 0.93411, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1682, 0.16816, 0.16815, 0.16809, 0.14323, 0.31485, 0.34627, 0.34638, 0.34636, 0.39838, 0.43195, 0.33655, 0.49262, 0.49308, 0.40515, 0.40537, 0.40537, 0.40553, 0.49687, 0.26583, 0.1619, 0.28824, 0.22691], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phosphore blanc": {
men: [0.41709, 0.41625, 0.32783, 0.32779, 0.32774, 0.26233, 0.26235, 0.26226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39901, 0.3988, 0.39857, 0.39851, 0.39852, 0.39842, 0.92233, 0.92244, 0.92264, 0.23757, 0.23758, 0.23756, 0.23741, 0.23767, 0, 0, 0, 0, 0, 0, 0, 0.31724, 0.31716, 0.92716, 0.052484, 0.052494, 0.052538, 0.10007, 0.14313, 0.13878, 0.13883, 0.13881, 0.13882, 0.13882, 0.13875, 0.096893, 0.096932, 0.096924, 0.71576, 0.71547, 0.71552, 0.57627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.91987, 0.91964, 0.93071, 0.93034, 0.93056, 0.93073, 0.93138, 0.93165, 0.93161, 0.93189, 0.93255, 0.93323, 0.9332, 0.93407, 0.93107, 0.93158, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0, 0, 0, 0.17833, 0.17844, 0.17845, 0.17839, 0.1438, 0.30301, 0.25666, 0.32657, 0.32663, 0.30023, 0.30035, 0.44133, 0.44159, 0.44115, 0.22721, 0.22718, 0.22723, 0.22743, 0.20604, 0.097232, 0.081239, 0.029518, 0.023161, 0.024408, 0.024402, 0.024388, 0.024373, 0.024395, 0.033276, 0.033234, 0.026824, 0.060483, 0.07042, 0.065411, 0.068382, 0.039984, 0.055613, 0.048091, 0.048101, 0.048112, 0.048116, 0.048111, 0.048081, 0.048133, 0.065065, 0, 0, 0, 0, 0, 0, 0.93539, 0.94167, 0.94174, 0.9418, 0.85559, 0.85632, 0.85575, 0.85622, 0.76674, 0.76701, 0.76688, 0.76697, 0.76694, 0.76656, 0.64163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94108, 0.94094, 0.94115, 0.94099, 0.68634, 0.68595, 0.68605, 0.68556, 0.68548, 0.68531, 0.68528, 0.68501, 0.68517, 0.6853, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations militaires": {
men: [0.92496, 0.9231, 0.92285, 0.92273, 0.92261, 0.92314, 0.053391, 0.053373, 0.053352, 0.04486, 0, 0, 0.21842, 0.21847, 0.34895, 0.34956, 0.34976, 0.34942, 0.34934, 0.40866, 0.66476, 0.66534, 0.66607, 0.77447, 0.77465, 0.77477, 0.80637, 0.80624, 0.6419, 0.64155, 0.64114, 0.64172, 0.64168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30017, 0.33833, 0.33839, 0.33868, 0.33845, 0.45052, 0.60353, 0.41044, 0.41038, 0.41043, 0.41041, 0.41021, 0.54314, 0.54336, 0.23296, 0.23291, 0.23282, 0.23283, 0.23294, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93624, 0.93675, 0.93674, 0.9371, 0.21858, 0.21871, 0.21884, 0.2188, 0.21876], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières fissiles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93083, 0.93104, 0.93111, 0.93101, 0.93044, 0.93145, 0.93136, 0.93176, 0.93143, 0.93171, 0.93166, 0.9315, 0.93186, 0.93176, 0, 0, 0, 0, 0, 0, 0.93087, 0.93054, 0.93086, 0.93071, 0.93082, 0.93078, 0.93032, 0.93022, 0.9306, 0.93051, 0.93032, 0.92994, 0.93001, 0.93046, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92834, 0.30288, 0.30282], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaccins pandémiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15572, 0.15564, 0.15563, 0.15566, 0.1557, 0.93376, 0.93538, 0.93592, 0.935, 0.93481, 0.93468, 0.9349, 0.93571, 0.93674, 0.93007, 0.93029, 0.93044, 0.93032, 0.93016, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43933, 0.43906, 0.43954, 0.4395, 0.43969, 0.43953, 0.43967, 0.43964, 0.43957, 0.43973, 0.92962, 0.9294, 0.075772, 0.075776, 0, 0, 0, 0, 0.19773, 0.1978, 0.19777, 0.19779, 0.19778, 0.19768, 0.19766, 0.19774, 0.9403, 0.9401, 0.93972, 0.93979, 0.94024, 0.94044, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champs pétroliers": {
men: [0.19255, 0.4542, 0.65839, 0.23208, 0.23205, 0.21981, 0.21982, 0.21975, 0.23926, 0.23921, 0.23909, 0.23907, 0.23911, 0.18294, 0.10743, 0.078117, 0.01374, 0.020555, 0.10457, 0.10884, 0.10886, 0.10896, 0.090971, 0.090934, 0.090955, 0.09097, 0.090958, 0.1209, 0.94502, 0.9445, 0.94389, 0.94474, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053324, 0.053382, 0.053377, 0.0534, 0.053381, 0.053397, 0.053394, 0.053385, 0.92926, 0.92915, 0.082572, 0.052911, 0.052915, 0.052924, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93066, 0.9308, 0.93014, 0.93635, 0.93612, 0.93607, 0.9357, 0.93592, 0.9361, 0.93675, 0.93702, 0.93697, 0.93726, 0.93793, 0.93197, 0.93195, 0.93281, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communauté catholique": {
men: [0.49498, 0.49399, 0.39727, 0.39722, 0.39716, 0.39739, 0.39742, 0.3973, 0.17501, 0.17497, 0.17489, 0.17487, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052898, 0.052885, 0.041237, 0.04121, 0.041248, 0.041245, 0.041193, 0.031834, 0.031817, 0.031799, 0.032913, 0.032914, 0.032905, 0.035685, 0, 0, 0, 0, 0, 0, 0.086145, 0.14034, 0.1404, 0.14035, 0.14039, 0.066811, 0.0668, 0.066826, 0.073213, 0.066802, 0.066807, 0.066811, 0.073634, 0.073696, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.030176, 0.030151, 0.030147, 0.030153, 0.073755, 0.073715, 0.073673, 0.084851, 0.93421, 0.9341, 0.93386, 0.93382, 0.93345, 0.93367, 0.92919, 0.92984, 0.94544, 0.94539, 0.94363, 0.9443, 0.94498, 0.94495, 0.94583, 0.94618, 0.9467, 0.94669, 0.94705, 0.9467, 0.9473, 0.94784, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes civiles": {
men: [0.2218, 0.091068, 0.093069, 0.093057, 0.093045, 0.085383, 0.08539, 0.085362, 0.085327, 0.10627, 0.10407, 0.099625, 0.071534, 0.070264, 0.070291, 0.097755, 0.075585, 0.075511, 0.16221, 0.17467, 0.17418, 0.17433, 0.17452, 0.16319, 0.16896, 0.17442, 0.1744, 0.18786, 0.1802, 0.296, 0.65785, 0.65845, 0.17859, 0.12641, 0.13295, 0.022863, 0.022849, 0.022287, 0.0112, 0.011197, 0.011193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.07065, 0.15497, 0.15498, 0.92721, 0.92739, 0.92817, 0.37805, 0.47381, 0.47364, 0.4738, 0.47372, 0.47378, 0.47376, 0.47353, 0.378, 0.37815, 0.37812, 0.37804, 0.37788, 0.37791, 0.92766, 0, 0, 0, 0, 0, 0, 0.37731, 0.37711, 0.3769, 0.37695, 0.17122, 0.1712, 0.3393, 0.33928, 0.35566, 0.37023, 0.3703, 0.37056, 0.46541, 0.46539, 0.36393, 0.36419, 0.36446, 0.36445, 0.95064, 0.95099, 0.93618, 0.93617, 0.92967, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe pandémique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23031, 0.23019, 0.23018, 0.23022, 0.23027, 0.4068, 0.40751, 0.40774, 0.40734, 0.40726, 0.50074, 0.50086, 0.5013, 0.94444, 0.93007, 0.93029, 0.93044, 0.93032, 0.93953, 0.22093, 0.024802, 0.023015, 0.023036, 0.023034, 0.022127, 0.022111, 0.0221, 0.022087, 0.022083, 0.022084, 0.022078, 0.022071, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17175, 0.14267, 0.1252, 0.12514, 0.12513, 0.12518, 0.30877, 0.30871, 0.30859, 0.30861, 0.30876, 0.30882, 0.30886, 0.3089, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36882, 0.36891, 0.5328, 0.53317, 0.53333, 0.5333, 0.92717, 0.92783, 0.9285, 0.92847, 0.92933, 0.92967, 0.93018, 0.93017, 0.9242, 0.92385, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0.59294, 0.59175, 0.59159, 0.37826, 0.37821, 0.37842, 0.37845, 0.37833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37991, 0.38, 0.38006, 0.38001, 0.37995, 0.37985, 0.37964, 0.3794, 0.37974, 0.37972, 0.37924, 0.37897, 0.41731, 0.73209, 0.92128, 0.92131, 0.92108, 0.92075, 0.92086, 0.93175, 0.93196, 0.93203, 0.93194, 0.93136, 0.93238, 0.20678, 0.069861, 0.064721, 0.053236, 0.047638, 0.04763, 0.047648, 0.042896, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17753, 0.17754, 0.17763, 0.17767, 0.17769, 0.17771, 0.17757, 0.17754, 0.29932, 0.29927, 0.29911, 0.29894, 0.29899, 0.92777, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10401, 0.18849, 0.18862, 0.13159, 0.13171, 0.13176, 0.13183, 0.13183, 0.13188, 0.14717, 0.18375, 0.18386, 0.18383, 0.18379], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"révolution industrielle": {
men: [0.10962, 0.098248, 0.12166, 0.12164, 0.12163, 0.22523, 0.22525, 0.21318, 0.32533, 0.38069, 0.59909, 0.59904, 0.59914, 0.5993, 0.62301, 0.61841, 0.61252, 0.63347, 0.63334, 0.2247, 0.19457, 0.21343, 0.1416, 0.14154, 0.14157, 0.17162, 0.076458, 0.076446, 0.048578, 0.051922, 0.031152, 0.012449, 0.012448, 0.010628, 0.01108, 0.024353, 0.024708, 0.020874, 0.020058, 0.010566, 0.038731, 0.073772, 0.071635, 0.071651, 0.08996, 0.096172, 0.096113, 0.12653, 0.12652, 0.10333, 0.1056, 0.12037, 0.12783, 0.18078, 0.1808, 0.14256, 0.19411, 0.19412, 0.24382, 0.24387, 0.24408, 0.24392, 0.24405, 0.40736, 0.4075, 0.48358, 0.63594, 0.37028, 0.26911, 0.26908, 0.33288, 0.52201, 0.4444, 0.44422, 0.43454, 0.52159, 0.47184, 0.53588, 0.53596, 0.56278, 0.51508, 0.54157, 0.51266, 0.47148, 0.36671, 0.26176, 0.29123, 0.2912, 0.29618, 0.16819, 0.18057, 0, 0, 0, 0.06442, 0.067864, 0.063355, 0.071492, 0.20218, 0.20217, 0.19308, 0.19315, 0.15475, 0.16131, 0.13794, 0.11893, 0.11546, 0.12005, 0.073351, 0.073337], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"harcèlement moral": {
men: [0.2405, 0.38485, 0.6509, 0.65082, 0.75477, 0.75521, 0.79503, 0.75771, 0.7574, 0.75725, 0.75688, 0.75681, 0.75695, 0.94861, 0.95146, 0.95079, 0.95134, 0.95041, 0.94513, 0.945, 0.94472, 0.94554, 0.94657, 0.29176, 0.20916, 0.20919, 0.16762, 0.16759, 0.12472, 0.12465, 0.12457, 0.12468, 0.12467, 0.12452, 0.034441, 0.02584, 0.023563, 0.031035, 0.03791, 0.037901, 0.096517, 0.10912, 0.16431, 0.15002, 0.15587, 0.15586, 0.15576, 0.15016, 0.16234, 0.18042, 0.19199, 0.19205, 0.19204, 0.19201, 0.10198, 0.12275, 0.066893, 0.069792, 0.043006, 0.04217, 0.042206, 0.083268, 0.085371, 0.088148, 0.088179, 0.098605, 0.084882, 0.084879, 0.15743, 0.10513, 0.098725, 0.093918, 0.093898, 0.095576, 0.077234, 0.04388, 0.036465, 0.033373, 0.033377, 0.0094802, 0.011112, 0.011114, 0, 0, 0.054786, 0.060535, 0.060492, 0.032905, 0.038793, 0.042692, 0.054922, 0.06698, 0.066992, 0.067039, 0.056555, 0.053088, 0.053104, 0.053142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Asie centrale": {
men: [0.077303, 0.078945, 0.095038, 0.1014, 0.096094, 0.13807, 0.18274, 0.22466, 0.22457, 0.22453, 0.18894, 0.13325, 0.13328, 0.24705, 0.82731, 0.82874, 0.79948, 0.7987, 0.79853, 0.81412, 0.13663, 0.17712, 0.22576, 0.22567, 0.22909, 0.23424, 0.23421, 0.22366, 0.20078, 0.17723, 0.17712, 0.17728, 0.17552, 0.17359, 0.24938, 0.1195, 0.062086, 0.062076, 0.043456, 0.035592, 0.03558, 0.092301, 0.097059, 0.11971, 0.11723, 0.14007, 0.13242, 0.2408, 0.24978, 0.43751, 0.41569, 0.41582, 0.41579, 0.41572, 0.41588, 0.28981, 0.31548, 0.28725, 0.32012, 0.32191, 0.34121, 0.14611, 0.13038, 0.11881, 0.13038, 0.13036, 0.13037, 0.13037, 0.13031, 0.17862, 0.21297, 0.30082, 0.16184, 0.16178, 0.031913, 0, 0, 0, 0, 0, 0, 0, 0.028208, 0.028193, 0.028177, 0.02383, 0.023813, 0.02381, 0.051794, 0.18961, 0.23054, 0.20582, 0.24716, 0.40959, 0.40971, 0.38167, 0.36378, 0.33517, 0.35168, 0.3647, 0.34659, 0.37768, 0.37789, 0.32687, 0.30897, 0.33673, 0.28817, 0.22344, 0.26592, 0.2778], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellule fiscale": {
men: [0.25001, 0.24951, 0.93541, 0, 0, 0, 0, 0.94116, 0.95117, 0.95098, 0.95051, 0.95043, 0.9506, 0.95084, 0.95122, 0.95286, 0.95342, 0.95248, 0.95228, 0.95215, 0.95238, 0.94935, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10572, 0.28503, 0.46492, 0.47876, 0.47847, 0.45904, 0.45899, 0.45919, 0.45903, 0.45917, 0.45914, 0.65555, 0.6558, 0.65572, 0.67339, 0.73932, 0.41335, 0.31309, 0.31335, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enrichissement d' uranium": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.014781, 0.018004, 0.017995, 0.019725, 0.021751, 0.9251, 0.92487, 0.92455, 0.074137, 0.061031, 0.061044, 0.051501, 0.051495, 0.051464, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.63827, 0.94226, 0.94243, 0.94323, 0.94261, 0.94313, 0.94279, 0.94312, 0.94297, 0.94307, 0.94304, 0.94257, 0.94247, 0.61773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45402, 0.61535, 0.61528, 0.61512, 0.47011, 0.46993, 0.47004, 0.63977, 0.64022, 0.6404, 0.64037, 0.64057, 0.64102, 0.64149, 0.48233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pression psychologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94072, 0.94848, 0.51472, 0.51408, 0.51371, 0.51344, 0.51315, 0.51306, 0.51804, 0.55134, 0.55115, 0.55121, 0.52675, 0.52687, 0.42136, 0.23078, 0.55688, 0.55749, 0.55743, 0.34951, 0.41447, 0.4146, 0.066473, 0.027236, 0.027246, 0.027243, 0.028007, 0.028009, 0.028011, 0.028016, 0.02804, 0.028022, 0.028037, 0.030879, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.64155, 0.6411, 0.64102, 0.64086, 0.93338, 0.93301, 0.93323, 0.9334, 0.93406, 0.93433, 0.93428, 0.93456, 0.93523, 0.93591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 