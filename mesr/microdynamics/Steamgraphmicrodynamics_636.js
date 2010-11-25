var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"loi de modernisation": {
men: [0, 0, 0.045845, 0.04585, 0.045796, 0.42345, 0.43842, 0.43907, 0.40593, 0.41409, 0.41405, 0.41412, 0.41394, 0.41393, 0.55959, 0.54273, 0.61061, 0.61038, 0.6111, 0.22546, 0.22565, 0.22579, 0, 0, 0, 0, 0, 0.50807, 0.53965, 0.61614, 0.3139, 0.3141, 0.31417, 0.31435, 0.2366, 0.23544, 0.23521, 0.24418, 0.24418, 0.24417, 0.24422, 0, 0, 0, 0, 0, 0, 0.3194, 0.70653, 0.65016, 0.48074, 0.49088, 0.49036, 0.47074, 0.47054, 0.47044, 0.47059, 0.35628, 0.36224, 0.36222, 0.40525, 0.30737, 0, 0, 0, 0, 0, 0.10593, 0.10594, 0.10604, 0.098378, 0.19056, 0.15671, 0.15671, 0.15661, 0.15664, 0.44094, 0.44108, 0.49787, 0.43296, 0.43322, 0.27116, 0.27116, 0.24153, 0.29834, 0.36974, 0.54621, 0.54627, 0.54659, 0.54673, 0.07806, 0.07809, 0.063457, 0.070882, 0.070864, 0.070854, 0.038458, 0.035852, 0.033981, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"politique de santé": {
men: [0.23898, 0, 0, 0, 0, 0.47468, 0.57861, 0.57947, 0.57912, 0.57878, 0.57873, 0.57881, 0.95051, 0.95048, 0.95124, 0.9522, 0.95318, 0.95282, 0.95396, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22778, 0.20298, 0.20302, 0.19743, 0.19729, 0.31049, 0.31032, 0.31019, 0.3103, 0.48787, 0.48831, 0.48187, 0.48137, 0.48135, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.069396, 0.12181, 0.10623, 0.59629, 0.74461, 0.74485, 0.74394, 0.74459, 0.74505, 0.74519, 0.74517, 0.74494, 0.60587, 0.60585, 0.58573, 0.58579, 0.72937, 0.3891, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"éleveurs laitiers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24894, 0.24772, 0.9369, 0.93658, 0.93661, 0.93655, 0.93676, 0.14261, 0.14264, 0.14266, 0.14256, 0.14255, 0.12965, 0.28892, 0.20307, 0.29628, 0.33497, 0.32856, 0.32578, 0.2968, 0.2676, 0.27815, 0.29442, 0.29421, 0.30988, 0.30986, 0.31267, 0.30353, 0.39051, 0.25525, 0.16589, 0.17288, 0.1758, 0.22439, 0.33887, 0.41047, 0.3182, 0.31827, 0.18979, 0.18979, 0.18967, 0, 0, 0, 0, 0, 0, 0, 0.95608, 0.95579, 0.95544, 0.70063, 0.44923, 0.44928, 0.44955, 0.44966, 0.44934, 0.44951, 0.44977, 0.44955, 0.38112, 0.38107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pacte écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20884, 0.20883, 0.209, 0.20921, 0.20943, 0.20935, 0.2096, 0.2097, 0.20988, 0.21002, 0.21062, 0.211, 0.95036, 0.95046, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31536, 0.67803, 0.67824, 0.56768, 0.56807, 0.56803, 0.56844, 0.67996, 0.67928, 0.67905, 0.67919, 0.82034, 0.82066, 0.82067, 0.67009, 0.67075, 0.67096, 0.94794, 0.48111, 0.4811, 0.48079, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.042587, 0.045848, 0.045852, 0.040187, 0.040197, 0.040168, 0.040184, 0.043544, 0.037662, 0.036528, 0.042011, 0.11714, 0.11712, 0.11712, 0.27289, 0.27298, 0.27286, 0.38677, 0.27874, 0.27885, 0.18493, 0.18509, 0.15624, 0.13861, 0.081851], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"submersions marines": {
men: [0.1351, 0.17054, 0.23882, 0.23884, 0.23856, 0.29113, 0.19065, 0.14999, 0.18527, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30291, 0.30295, 0.30274, 0.30273, 0.30255, 0.38708, 0.38721, 0.38852, 0.38886, 0.38913, 0.38872, 0.3887, 0.71233, 0.71217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94411, 0.94364, 0.94339, 0.94327, 0.94393, 0.94381, 0.94379, 0.94332, 0.94363, 0.94323, 0.94304, 0.94264, 0.94298, 0.5487, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Rayonnement électromagnétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.26003, 0.25988, 0.15276, 0.15278, 0.16744, 0.22541, 0.13679, 0.12772, 0.12785, 0.1278, 0.12795, 0.12017, 0.12028, 0.12035, 0, 0, 0, 0, 0, 0, 0, 0.41551, 0.41543, 0.41571, 0.4158, 0.46484, 0.46426, 0.25739, 0.2945, 0.2944, 0.33307, 0.33305, 0.33312, 0.31707, 0.31714, 0.12722, 0.097284, 0.097279, 0.097223, 0.097183, 0.23311, 0.31566, 0.29642, 0.29662, 0.29631, 0.2963, 0.29617, 0.3097, 0.30979, 0.41156, 0.65883, 0.65878, 0.65926, 0.63199, 0.36623, 0.34477, 0.32248, 0.32226, 0.24886, 0.24886, 0.24889, 0.23227, 0.18278, 0.18282, 0.25788, 0.25787, 0.25771, 0.21518, 0.23434, 0.19415, 0.13892, 0.076878, 0.066151, 0.066163, 0.037951, 0.03455, 0.035966, 0.033937, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19409, 0.17241], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"prise en charge médicale": {
men: [0.054185, 0.054175, 0.066965, 0.066972, 0.066893, 0.11254, 0.11253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3676, 0.36775, 0.36783, 0.48247, 0.48213, 0.4821, 0.48182, 0.55705, 0.38627, 0.21152, 0.16782, 0.19184, 0.18604, 0.13295, 0.034648, 0.032761, 0.032091, 0.032067, 0.032089, 0.032087, 0.03211, 0.10322, 0.12559, 0.14582, 0.16845, 0.15916, 0.16224, 0.21902, 0.19079, 0.16747, 0.18439, 0.16483, 0.14918, 0.14917, 0.14908, 0.066644, 0.043177, 0.043498, 0.043445, 0.045067, 0.043489, 0.043497, 0.043661, 0.0458, 0.011528, 0.013036, 0.014367, 0.014368, 0.014377, 0.049828, 0.056159, 0.075587, 0.06186, 0.065252, 0.079594, 0.079583, 0.085018, 0.57127, 0.72973, 0.72936, 0.83631, 0.83596, 0.79767, 0.57798, 0.57819, 0.57797, 0.62343, 0.62394, 0.62402, 0.62388], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déficit pluviométrique": {
men: [0.95818, 0.95801, 0.95786, 0.95796, 0.95682, 0.40032, 0.15468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94153, 0.94129, 0.94117, 0.94182, 0.94171, 0.94169, 0.94122, 0.94152, 0.94112, 0.94093, 0.94054, 0.94088, 0.28216, 0.28239, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières nucléaires": {
men: [0.16303, 0.39325, 0.39319, 0.39323, 0.39277, 0.39256, 0.3925, 0, 0, 0.95191, 0.96006, 0.96021, 0.9598, 0.95977, 0.96054, 0.9615, 0.9625, 0.96214, 0.96328, 0.88261, 0.88337, 0.88393, 0.88648, 0.83191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution lumineuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.91407, 0.91399, 0.91413, 0.91375, 0.91372, 0.91445, 0.49826, 0.49877, 0.49859, 0.49918, 0.49943, 0.49986, 0.50018, 0.50162, 0, 0, 0, 0, 0, 0, 0, 0.16799, 0.1681, 0.1627, 0.1577, 0.1575, 0.15673, 0.10917, 0.093965, 0.093967, 0.093961, 0.093982, 0.087279, 0.071844, 0.071856, 0, 0, 0, 0, 0, 0.027859, 0.032466, 0.037244, 0.037205, 0.037204, 0.037188, 0.040472, 0.055126, 0.055085, 0.060602, 0.060597, 0.060641, 0.060615, 0.060554, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13223, 0.17655, 0.17645, 0.17647, 0.17658, 0.13403, 0.12855, 0.12084, 0.12091, 0.092673, 0.064379, 0.064371, 0.072393, 0.072384, 0.036546, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"voie intraveineuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50129, 0.50273, 0.50363, 0.50409, 0.50414, 0.50441, 0.50286, 0.95098, 0.95026, 0.95009, 0.95071, 0.95093, 0.95147, 0.95028, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.057295, 0.05215, 0.042535, 0.044991, 0.062929, 0.050722, 0.050732, 0.05073, 0.04398, 0.043575, 0.043573, 0.043549, 0.043553, 0.043579, 0, 0, 0, 0, 0.18504, 0.23924, 0.2392, 0.23937, 0.31119, 0.50481, 0.50456, 0.50472, 0.5045, 0.5044, 0.64456, 0.35913, 0.35899, 0.35929, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"retombées radioactives": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16516, 0.30739, 0.27698, 0.23934, 0.22133, 0.22984, 0.23007, 0.2303, 0.23022, 0.2221, 0.22221, 0.2224, 0.21912, 0.24689, 0.26334, 0.086442, 0.10291, 0.14737, 0.19821, 0, 0, 0, 0, 0, 0, 0.70108, 0.94681, 0.9459, 0.94558, 0.9456, 0.94554, 0.94575, 0.94613, 0.94634, 0.94649, 0.70536, 0.70532, 0.70492, 0.70462, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Fédération hospitalière": {
men: [0.11825, 0.27211, 0.22714, 0.22716, 0.30531, 0.30515, 0.30511, 0.30556, 0.30537, 0.30519, 0.30517, 0.30521, 0.30509, 0.37748, 0.41497, 0.2638, 0.43027, 0.43011, 0, 0, 0, 0, 0, 0.36575, 0.36609, 0.36613, 0.36632, 0.3652, 0.9477, 0.94699, 0.94682, 0.94744, 0.94766, 0.94819, 0.51817, 0.51564, 0.51514, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"air intérieur": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39549, 0.47995, 0.48043, 0.95706, 0.95669, 0.95783, 0.95831, 0.95914, 0.95975, 0.96251, 0.96423, 0.96511, 0.96522, 0.96572, 0.576, 0.47194, 0.30174, 0.30168, 0.083494, 0.061736, 0.061771, 0.061693, 0.061392, 0.071995, 0.071971, 0.071973, 0.071968, 0.071984, 0.016572, 0.016984, 0.015765, 0.013994, 0.02363, 0.038203, 0.038187, 0.038201, 0.038329, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etienne apaire": {
men: [0.95216, 0.95198, 0.58527, 0.58533, 0.58464, 0.58434, 0.58424, 0.44341, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94479, 0.94476, 0.94437, 0.94416, 0.94445, 0.94375, 0.41461, 0.41458, 0.41489, 0.41471, 0.41429, 0.41415, 0.41423, 0.15429, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"raisons médicales": {
men: [0.59149, 0.59138, 0.59129, 0.59135, 0.59065, 0.59035, 0.65301, 0.74337, 0.61617, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053195, 0.064635, 0.06465, 0.066564, 0.066517, 0.066514, 0.066475, 0.066448, 0.048214, 0.048376, 0.052636, 0.066397, 0.066327, 0.066325, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.027397, 0.027708, 0.088052, 0.088071, 0.088689, 0.061887, 0.061848, 0.042379, 0.03785, 0.038347, 0.0383, 0.052316, 0.05357, 0.05358, 0.039164, 0.039532, 0, 0, 0, 0, 0, 0, 0.14837, 0.14842, 0.5688, 0.50145, 0.50132, 0.50126, 0.50161, 0.50155, 0.41357, 0.41336, 0.4135, 0.41332, 0.41324, 0.41306, 0.38071, 0.38057, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production biologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.59971, 0.53738, 0.33822, 0.31614, 0.31621, 0.31639, 0.29645, 0.2555, 0.29826, 0.29816, 0.30401, 0.30399, 0.30406, 0.30418, 0, 0.18277, 0.32296, 0.23644, 0.23631, 0.14754, 0.15818, 0.19339, 0.19356, 0.19369, 0.19349, 0.19348, 0.1934, 0.14807, 0.14811, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.042223, 0.042229, 0.042228, 0.042201, 0.04746, 0.068028, 0.068051, 0.079749, 0.94452, 0.9451, 0.94528, 0.94525, 0.94496, 0.94461, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"personnes obèses": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.967, 0.96789, 0.968, 0.97284, 0.96986, 0.82778, 0.82716, 0.827, 0.82755, 0.82773, 0.8282, 0.73225, 0.72867, 0.72796, 0.50302, 0.50304, 0.50301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellule familiale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29198, 0.54991, 0.64197, 0.74098, 0.74106, 0.69821, 0.69608, 0.69475, 0.52565, 0.58209, 0.6336, 0.63374, 0.6341, 0.63331, 0.55756, 0.45861, 0.29953, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1489, 0.25911, 0.25902, 0.29218, 0.29241, 0.29245, 0.29239], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"harcèlement sexuel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95664, 0.95695, 0.95578, 0.95662, 0.9572, 0.95739, 0.95736, 0.95706, 0.95671, 0.95668, 0.95614, 0.95624, 0.9568, 0.95705, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"éruptions volcaniques": {
men: [0.0065535, 0.0065523, 0.0065512, 0.0065519, 0.0065442, 0.0083559, 0.0083546, 0.0093658, 0.064711, 0.19766, 0.27945, 0.2853, 0.51509, 0.47912, 0.4795, 0.47998, 0.45336, 0.42066, 0.42116, 0.42137, 0.42173, 0.33908, 0.26795, 0.1848, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0849, 0.084918, 0.082856, 0.082888, 0.08289, 0.18909, 0.18928, 0.18934, 0.44224, 0.4423, 0.44229, 0.33174, 0.33181, 0.3321, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27128, 0.27122, 0.52434, 0.49954, 0.49936, 0.54415, 0.48489, 0.48495, 0.70166], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophe nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.029984, 0.060902, 0.057642, 0.053652, 0.053632, 0.051693, 0.051718, 0.050295, 0.050327, 0.053507, 0.056556, 0.056608, 0.05932, 0.078154, 0.068944, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94027, 0.9396, 0.93955, 0.93902, 0.93862, 0.93896, 0.94212, 0.94296, 0.94359, 0.9426, 0.94257, 0.6169, 0.61677, 0.61696, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"modernisation de l' agriculture": {
men: [0.07159, 0.044853, 0.03608, 0.036084, 0.036041, 0.047242, 0.093349, 0.070668, 0.075176, 0.071571, 0.071564, 0.06097, 0.052444, 0.052442, 0.036829, 0.035983, 0.04137, 0.041354, 0.041403, 0.043206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44106, 0.33658, 0.33659, 0.33657, 0.3025, 0.31013, 0.28604, 0.27442, 0.27423, 0.27421, 0.27406, 0.27394, 0.27404, 0.3079, 0.18212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29228, 0.29239, 0.2924, 0.29243, 0.18162, 0.18168, 0.18172, 0.18721, 0.1872, 0.18404, 0.18408, 0.24269, 0.22643, 0.30354, 0.11071, 0.11078, 0.1108, 0.1108, 0.26568, 0.26559, 0.26558, 0.26543, 0.26545, 0.2823, 0.28237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092285, 0.2492, 0.24911, 0.24931, 0.35544, 0.35549, 0.35541], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tentative de suicide": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.037686, 0.036882, 0.038095, 0.038177, 0.045391, 0.045344, 0.045342, 0.048874, 0.053017, 0.053033, 0.0557, 0.052833, 0.050212, 0.050249, 0.044998, 0.050844, 0.057892, 0.056268, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025206, 0.025228, 0.12255, 0.13026, 0.15652, 0.22234, 0.22239, 0.22238, 0.22231, 0.77077, 0.77075, 0.77031, 0.77039, 0.77085, 0.73714, 0.75064, 0.21413, 0.21426, 0.21415, 0.92637, 0.92625, 0.92689, 0.92678, 0.92676, 0.034371, 0.034382, 0.034367, 0.034361, 0.00763, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets solides": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92484, 0.9252, 0.92522, 0.9253, 0.92621, 0.9265, 0.9267, 0.92684, 0.92681, 0.92622, 0.92641, 0.92722, 0.92752, 0.92639, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ondes électromagnétiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.12758, 0.1275, 0.11448, 0.11449, 0.11445, 0.13885, 0.1198, 0.17243, 0.17261, 0.18513, 0.18535, 0.18544, 0.1856, 0.15708, 0, 0, 0, 0, 0, 0, 0, 0.27049, 0.27043, 0.27061, 0.27067, 0.27083, 0.27049, 0.24157, 0.30063, 0.30053, 0.3353, 0.33528, 0.33535, 0.33549, 0.34703, 0.19819, 0.14326, 0.14325, 0.12709, 0.10521, 0.23964, 0.32496, 0.28874, 0.28893, 0.28863, 0.28862, 0.27668, 0.13348, 0.10141, 0.10134, 0.081972, 0.078298, 0.080455, 0.10291, 0.049542, 0.023409, 0.054365, 0.054328, 0.051771, 0.051772, 0.052421, 0.076105, 0.10428, 0.1043, 0.21385, 0.26585, 0.26568, 0.19331, 0.19348, 0.12056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.057046, 0.06362, 0.095887, 0.11601, 0.078497, 0.084255, 0.08913, 0.089093, 0.092061, 0.058066, 0.058115, 0.061575, 0.15241, 0.14447], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cmu": {
men: [0, 0, 0, 0, 0, 0.21224, 0.17723, 0.19084, 0.19072, 0.21667, 0.21665, 0.23153, 0.25468, 0.34036, 0.49261, 0.44585, 0.44632, 0.44615, 0.44668, 0.22724, 0.36863, 0.36887, 0.36993, 0.37059, 0.29879, 0.23729, 0.23741, 0.18815, 0, 0, 0, 0, 0, 0.049895, 0.046511, 0.040883, 0.033548, 0.033537, 0.034691, 0.036356, 0.11387, 0.12305, 0.11758, 0.11759, 0.10065, 0.10064, 0.15191, 0.12617, 0.11038, 0.12321, 0.12304, 0.11389, 0.11377, 0.11377, 0, 0, 0, 0.045478, 0.059079, 0.059075, 0.059118, 0.054455, 0.11903, 0.10671, 0.14729, 0.17065, 0.16107, 0.16108, 0.10814, 0.099344, 0.099376, 0.012934, 0.012982, 0.012706, 0.012552, 0.012855, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.055995, 0.053592, 0.055177, 0.053213, 0.056656, 0.052835, 0.059105, 0.054324, 0.053232, 0.066948, 0.07443, 0.10598, 0.13496, 0.14979, 0.094138, 0.094691, 0.089711, 0.094415, 0.11036, 0.11267, 0.11055, 0.11413, 0.11628, 0.11006], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"évolution démographique": {
men: [0, 0, 0, 0, 0, 0, 0.32514, 0.32562, 0.25318, 0.29699, 0.29696, 0.40166, 0.40149, 0.42199, 0.42233, 0.38824, 0.38864, 0.3885, 0.38896, 0.38915, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075038, 0.075035, 0.074992, 0.072022, 0.087989, 0.088284, 0.073765, 0.071893, 0.071818, 0.071816, 0.080131, 0.065619, 0.11985, 0.028403, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.048084, 0.048091, 0.04809, 0.11041, 0.1677, 0.16784, 0.1679, 0.32553, 0.32581, 0.32601, 0.32608, 0.94611, 0.26965, 0.26955, 0.17791, 0.17781, 0.17783, 0.17793, 0.16056, 0.12871, 0.10163, 0.14067, 0.1406, 0.14056, 0.12642, 0.12651, 0.16494, 0.16493, 0.082791, 0.082817, 0.082782, 0.082765, 0.070359, 0.07606, 0.085319, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"barrages hydroélectriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19035, 0.20375, 0.57222, 0.66224, 0.66221, 0.66194, 0.66179, 0.662, 0.66151, 0.66196, 0.66191, 0.6624, 0.52073, 0.68628, 0.48216, 0.48226, 0.22504, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.095346, 0.14495, 0.14478, 0.18809, 0.18821, 0.18824, 0.18824, 0.18818, 0.18811, 0.17412, 0.17402, 0.17404, 0.17414, 0.17419, 0.16033, 0.16039, 0.16048, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 