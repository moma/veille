var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"espoir thérapeutique": {
men: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.53715, 0.53715, 0.53715, 0.53715, 0.53715, 0.40718, 0.40718, 0.39593, 0.39593, 0.39593, 0.60461, 0.6801, 0.6801, 0.6801, 1, 1, 1, 1, 1, 1, 1, 1, 0.78987, 0.78987, 0.75192, 0.72863, 0.72863, 0.72863, 0.73236, 0.73236, 0.73236, 0.75154, 0.75345, 0.71998, 0.74644, 0.71979, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"efficacité virologique": {
men: [1, 1, 1, 1, 1, 0.45549, 0.33905, 0.4452, 0.33562, 0.43825, 0.43825, 0.43825, 0.43825, 0.41493, 0.41493, 0.41493, 0.41493, 0.41493, 0.41493, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.91082, 0.91013, 0.91013, 0.91266, 0.90775, 0.90775, 0.76062, 0.75336, 0.71868, 0.71868, 0.71868, 0.71868, 0.71868, 0.71868, 0.76479, 0.71236, 0.71236, 0.63483, 0.54812, 0.54812, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Préservatif masculin": {
men: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.45598, 0.45598, 0.45598, 0.45598, 0.45598, 0.45598, 0.45598, 0.33157, 0.33157, 0.32129, 0.22623, 0.22623, 0.33321, 0.40995, 0.55928, 0.55928, 0.50683, 0.50683, 0.50683, 0.50683, 0.55684, 0.62402, 0.6457, 0.64729, 0.73807, 0.73807, 0.6837, 0.65694, 0.65694, 0.65694, 0.78487, 0.78487, 0.78487, 0.80131, 0.80294, 0.77418, 0.79696, 0.77401, 0.77401, 0.77401, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.85978, 0.85978, 0.85978, 0.84408, 0.84408, 0.84408, 0.68126, 0.67943, 0.49451, 0.50232, 0.48731, 0.48731, 0.48731, 0.47744, 0.47605, 0.47605, 0.47605, 0.47605, 0.47605, 0.47605, 0.55018, 0.48229, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"col de l' utérus": {
men: [0.1207, 0.1207, 0.070568, 0.070568, 0.070568, 0.070568, 0.044489, 0.06789, 0.043841, 0.095949, 0.095949, 0.11925, 0.11113, 0.16378, 0.16378, 0.16378, 0.59724, 0.59724, 0.59724, 0.59724, 0.59724, 0.46741, 0.46741, 0.45579, 0.20242, 0.20242, 0.32707, 0.40325, 0.40325, 0.33581, 0.37528, 0.37528, 0.32427, 0.27533, 0.31719, 0.38027, 0.40254, 0.40422, 0.45199, 0.45199, 0.4687, 0.43867, 0.43867, 0.51256, 0.51729, 0.51729, 0.62085, 0.85397, 0.69351, 0.65562, 0.6855, 0.65541, 0.75506, 0.68902, 0.60986, 0.60709, 0.60709, 0.60709, 0.59629, 0.59629, 0.53294, 0.53412, 0.57864, 0.53973, 0.48018, 0.53618, 0.53618, 0.58857, 0.72033, 0.72363, 0.72363, 0.72363, 0.69804, 0.69804, 0.83528, 0.78745, 0.36993, 0.36993, 0.33148, 0.31831, 0.31831, 0.31831, 0.3098, 0.24543, 0.24543, 0.24543, 0.24543, 0.24543, 0.24543, 0.22619, 0.42333, 0.42333, 0.52865, 0.22516, 0.22516, 0.22516, 0.14727, 0.3546, 0.3546, 0.3546, 0.43853, 0.43853, 0.43853, 0.22969, 0.22969, 0.19962, 0.19962, 0.23368, 0.23368, 0.13897], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"séropositifs": {
men: [0.036696, 0.037432, 0.030871, 0.029813, 0.03059, 0.045827, 0.04178, 0.078099, 0.06168, 0.13985, 0.13985, 0.13985, 0.13985, 0.085885, 0.10645, 0.10645, 0.090452, 0.1122, 0.11463, 0.094277, 0.087194, 0.05633, 0.055334, 0.055044, 0.054083, 0.054083, 0.11769, 0.23388, 0.14393, 0.13241, 0.17387, 0.1883, 0.1883, 0.1963, 0.23957, 0.12795, 0.13422, 0.1323, 0.13312, 0.13312, 0.10726, 0.08812, 0.10537, 0.084308, 0.084061, 0.084061, 0.084061, 0.0916, 0.085159, 0.12603, 0.14108, 0.12166, 0.12166, 0.11616, 0.11443, 0.12026, 0.12026, 0.18566, 0.18798, 0.18798, 0.18798, 0.19975, 0.22468, 0.18317, 0.16928, 0.232, 0.22721, 0.25099, 0.32403, 0.32719, 0.12365, 0.11777, 0.10031, 0.098413, 0.091593, 0.090577, 0.083033, 0.081482, 0.081488, 0.075567, 0.075291, 0.075745, 0.069839, 0.058102, 0.087515, 0.083655, 0.085196, 0.086795, 0.093725, 0.10407, 0.10799, 0.12319, 0.089305, 0.068529, 0.070917, 0.066296, 0.048105, 0.10132, 0.12171, 0.069172, 0.080649, 0.076897, 0.075149, 0.091712, 0.086741, 0.10106, 0.10652, 0.10652, 0.10652, 0.10918], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"acide": {
men: [0.068099, 0.075831, 0.059414, 0.061503, 0.062772, 0.065503, 0.045485, 0.068464, 0.039746, 0.060083, 0.067965, 0.065456, 0.052791, 0.055351, 0.051434, 0.045917, 0.046647, 0.044519, 0.045838, 0.041044, 0.040585, 0.024769, 0.02617, 0.025003, 0.025849, 0.025927, 0.079012, 0.10657, 0.10633, 0.082185, 0.088214, 0.092037, 0.086858, 0.10276, 0.10052, 0.12863, 0.13732, 0.13271, 0.13271, 0.13171, 0.11817, 0.094869, 0.099525, 0.11967, 0.13414, 0.13414, 0.13994, 0.11796, 0.15074, 0.096331, 0.11164, 0.097235, 0.091854, 0.094385, 0.09293, 0.099364, 0.095265, 0.10908, 0.10615, 0.10615, 0.10697, 0.1443, 0.13894, 0.2086, 0.12421, 0.15956, 0.18251, 0.17665, 0.19494, 0.1733, 0.16491, 0.094387, 0.064904, 0.064904, 0.06561, 0.071228, 0.069655, 0.068921, 0.079752, 0.07757, 0.072279, 0.07311, 0.071858, 0.059851, 0.063885, 0.076915, 0.10584, 0.10265, 0.10265, 0.082401, 0.055765, 0.056707, 0.04049, 0.028603, 0.030051, 0.030051, 0.019062, 0.039533, 0.040312, 0.051781, 0.036337, 0.0327, 0.029593, 0.041081, 0.04512, 0.054487, 0.05062, 0.039738, 0.040815, 0.039651], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"femmes enceintes": {
men: [0.080348, 0.080348, 0.051699, 0.052281, 0.051009, 0.057593, 0.033933, 0.052084, 0.033784, 0.054082, 0.06241, 0.06241, 0.056575, 0.041401, 0.03606, 0.034506, 0.042377, 0.041925, 0.037804, 0.033497, 0.03049, 0.015453, 0.015406, 0.014947, 0.014875, 0.014545, 0.034727, 0.056172, 0.0507, 0.052516, 0.059976, 0.060399, 0.067142, 0.073233, 0.093877, 0.13445, 0.15058, 0.13304, 0.13002, 0.13388, 0.097684, 0.086306, 0.11476, 0.10775, 0.10903, 0.10739, 0.095903, 0.10618, 0.098288, 0.085599, 0.086006, 0.08461, 0.086998, 0.084321, 0.086733, 0.085323, 0.086887, 0.084561, 0.080878, 0.079999, 0.088943, 0.081474, 0.0789, 0.067469, 0.056499, 0.070717, 0.069278, 0.071647, 0.094038, 0.097856, 0.11197, 0.10755, 0.096601, 0.09883, 0.09883, 0.12167, 0.15868, 0.1909, 0.24582, 0.24723, 0.2638, 0.24522, 0.14453, 0.10965, 0.10965, 0.11353, 0.10696, 0.1051, 0.1051, 0.093617, 0.072005, 0.068571, 0.037413, 0.022797, 0.022797, 0.023389, 0.018432, 0.040167, 0.038504, 0.044988, 0.064787, 0.050159, 0.046923, 0.055237, 0.046736, 0.05866, 0.066669, 0.077061, 0.077061, 0.073312], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Hépatite virale": {
men: [0.25359, 0.25359, 0.20818, 0.20818, 0.20818, 0.25135, 0.11632, 0.18839, 0.12749, 0.19924, 0.19924, 0.19924, 0.19924, 0.18446, 0.18446, 0.17052, 0.17052, 0.17052, 0.17052, 0.1951, 0.54016, 0.4101, 0.4101, 0.22071, 0.22071, 0.22071, 0.39786, 0.38661, 0.38661, 0.42649, 0.46909, 0.46909, 0.46909, 0.46909, 0.51931, 0.58796, 0.61042, 0.80989, 0.80989, 0.80989, 0.77452, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.789, 0.78157, 0.75341, 0.70647, 0.75075, 0.75075, 0.75075, 0.62028, 0.4988, 0.4988, 0.4988, 0.4677, 0.4677, 0.4677, 0.53331, 0.38383, 0.36208, 0.36932, 0.35545, 0.25749, 0.25749, 0.2735, 0.27304, 0.27304, 0.27304, 0.27304, 0.27304, 0.27304, 0.25966, 0.26756, 0.29137, 0.22398, 0.16763, 0.54812, 0.54812, 0.41892, 0.59048, 0.59048, 0.22771, 0.20416, 0.20416, 0.17685, 0.18307, 0.1961, 0.24133, 0.24133, 0.24133, 0.2213, 0.2213], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"établissements de santé": {
men: [0.026299, 0.04129, 0.052792, 0.052792, 0.050457, 0.050879, 0.029013, 0.036854, 0.022559, 0.040499, 0.040499, 0.039014, 0.042793, 0.041571, 0.045789, 0.04473, 0.042965, 0.041805, 0.04092, 0.042261, 0.052271, 0.050637, 0.055374, 0.046102, 0.034401, 0.036713, 0.063602, 0.086284, 0.086284, 0.084783, 0.11133, 0.11513, 0.12542, 0.11858, 0.13104, 0.1661, 0.16481, 0.16976, 0.16263, 0.16263, 0.17516, 0.15834, 0.15834, 0.16181, 0.13929, 0.13294, 0.13294, 0.13501, 0.15211, 0.11656, 0.14251, 0.096193, 0.11279, 0.11279, 0.10593, 0.10484, 0.10484, 0.080207, 0.075534, 0.075221, 0.075221, 0.06458, 0.049563, 0.043476, 0.032894, 0.046377, 0.047581, 0.047581, 0.05665, 0.045779, 0.042037, 0.048677, 0.043814, 0.044838, 0.043543, 0.059625, 0.079201, 0.083974, 0.072001, 0.069166, 0.069166, 0.069166, 0.066366, 0.082459, 0.065272, 0.064227, 0.045545, 0.043111, 0.044546, 0.03262, 0.024402, 0.021453, 0.012861, 0.007835, 0.007835, 0.0077702, 0.004618, 0.0086252, 0.008941, 0.0079288, 0.01308, 0.013073, 0.012092, 0.017, 0.017219, 0.022436, 0.028036, 0.032628, 0.025462, 0.025697], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cd4": {
men: [0.011268, 0.011268, 0.015957, 0.015957, 0.018384, 0.034175, 0.046695, 0.070775, 0.087015, 0.28119, 0.28119, 0.60867, 0.60867, 0.5108, 0.30614, 0.30614, 0.30614, 0.30614, 0.43015, 0.43015, 0.43015, 0.43241, 0.30775, 0.3079, 0.3079, 0.3079, 0.3053, 0.46743, 0.22369, 0.22369, 0.10743, 0.10743, 0.10743, 0.10743, 0.10721, 0.10692, 0.06359, 0.060488, 0.060488, 0.060488, 0.052331, 0.043875, 0.047467, 0.047467, 0.050512, 0.048415, 0.048415, 0.04563, 0.045625, 0.067266, 0.13172, 0.12625, 0.12625, 0.12625, 0.15223, 0.13218, 0.13218, 0.13218, 0.16481, 0.19155, 0.19155, 0.32452, 0.40304, 0.33704, 0.34841, 0.52005, 0.47466, 0.43613, 0.34453, 0.3639, 0.3639, 0.29995, 0.30032, 0.30032, 0.30032, 0.21824, 0.13414, 0.11006, 0.11543, 0.11717, 0.11207, 0.10984, 0.13293, 0.1183, 0.10994, 0.10824, 0.10824, 0.10824, 0.10824, 0.12477, 0.14178, 0.19129, 0.1424, 0.15053, 0.19113, 0.18551, 0.11923, 0.11841, 0.17989, 0.15517, 0.25336, 0.25336, 0.22647, 0.22808, 0.22808, 0.214, 0.214, 0.214, 0.214, 0.24659], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"charge virale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12922, 0.12922, 0.16022, 0.16022, 0.16037, 0.16037, 0.16037, 0.16037, 0.16037, 0.17412, 0.48259, 0.48259, 0.48512, 0.39197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22642, 0.9798, 0.9798, 0.34138, 0.34138, 0.34138, 0.34104, 0.24271, 0.24313, 0.2428, 0.24313, 0.24313, 0.24313, 0.18089, 0, 0, 0, 0, 0, 0, 0.24702, 0.37495, 0.37554, 0.54108, 0.53987, 0.46246, 0.40386, 0.6103, 0.6102, 0.6102, 0.14585, 0.12857, 0.12857, 0.12857, 0.096721, 0.062673, 0.056396, 0.062799, 0.072783, 0.070681, 0.0691, 0.085247, 0.085399, 0.085399, 0.10914, 0.11484, 0.11484, 0.11484, 0.10365, 0.17903, 0.23204, 0.14879, 0.18389, 0.32683, 0.99102, 0, 0.99309, 0.99309, 0.35573, 0.35449, 0.21934, 0.21934, 0.2187, 0.2187, 0.19589, 0.19589, 0.19589, 0.19589, 0.17777], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte contre le vih": {
men: [0.11119, 0.11823, 0.097448, 0.097448, 0.10593, 0.097135, 0.070771, 0.11848, 0.087276, 0.12867, 0.12867, 0.12867, 0.12867, 0.11836, 0.16181, 0.13861, 0.12873, 0.12465, 0.12465, 0.10971, 0.1195, 0.079911, 0.079911, 0.076538, 0.074691, 0.074691, 0.13984, 0.16885, 0.18972, 0.1662, 0.20129, 0.20614, 0.20614, 0.28484, 0.25649, 0.31303, 0.33349, 0.33504, 0.34039, 0.34039, 0.30329, 0.27973, 0.27973, 0.32951, 0.33371, 0.33371, 0.33371, 0.29305, 0.34306, 0.30525, 0.28582, 0.25883, 0.25883, 0.25883, 0.19545, 0.19634, 0.19634, 0.17241, 0.16607, 0.16607, 0.16607, 0.17896, 0.19514, 0.15942, 0.14846, 0.17911, 0.17911, 0.17911, 0.25239, 0.19066, 0.1742, 0.209, 0.158, 0.158, 0.14598, 0.15189, 0.12168, 0.098003, 0.1008, 0.095486, 0.095486, 0.095486, 0.087712, 0.084948, 0.089768, 0.091758, 0.10283, 0.10283, 0.10944, 0.10878, 0.11547, 0.24681, 0.18701, 0.1383, 0.1383, 0.1383, 0.32813, 1, 1, 0.072761, 0.051629, 0.051629, 0.049689, 0.055067, 0.053413, 0.068539, 0.068539, 0.068539, 0.068539, 0.068539], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"anrs": {
men: [0.045429, 0.045429, 0.026075, 0.029289, 0.030263, 0.029574, 0.038874, 0.069544, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10978, 0.10978, 0.084283, 0.14562, 0.1689, 0.1689, 0.20493, 0.26807, 0.26733, 0.26708, 0.26706, 0.26706, 0.26706, 0.20915, 0.26877, 0.26877, 0.17674, 0.098371, 0.098371, 0.098371, 0.098273, 0.098263, 0.098432, 0.14465, 0.14484, 0.14484, 0.14484, 0.15444, 0.066001, 0.044689, 0.0648, 0.064829, 0.064829, 0.064829, 0.064826, 0.064854, 0.064957, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.067994, 0.054273, 0.049301, 0.080465, 0.059597, 0.053109, 0.05313, 0.063032, 0.063032, 0.065979, 0.065979, 0.065979, 0.065979, 0.076117, 0.03985, 0.050955, 0.059376, 0, 0, 0, 0, 0.99309, 0.99309, 0.11469, 0.076363, 0.076363, 0.065497, 0.065303, 0.065303, 0.13178, 0.13178, 0.13178, 0.1182, 0.1182], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déficit immunitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98668, 0.98343, 0.98343, 0.98343, 0.98174, 0.98174, 0.98174, 0.34147, 0.34079, 0.33984, 0.33952, 0.3395, 0.3395, 0.3395, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18292, 0.18267, 0.13769, 0.13769, 0.13769, 0.13769, 0.13771, 0.13771, 0.16109, 0.25789, 0.25789, 0.25789, 0.25788, 0.25799, 0.22798, 0.22852, 0.46688, 0.46688, 0.46688, 0.46616, 0.46609, 0.46609, 0.97878, 0, 0, 0, 0, 0, 0, 0.26907, 0.18431, 0.18431, 0.18431, 0.18438, 0.18471, 0.18471, 0.18471, 0.18471, 0.18471, 0.18471, 0.21053, 0.2111, 0.36864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risques d' infection": {
men: [0.024967, 0.024967, 0.025031, 0.025031, 0.042004, 0.059532, 0.3601, 0.22654, 0, 0, 0, 0, 0, 0.04264, 0.0369, 0.0369, 0.0369, 0.0369, 0.0369, 0.029782, 0.026233, 0.028918, 0.028918, 0.045469, 0.045469, 0.034515, 0.025708, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.099671, 0.099661, 0.099833, 0.099698, 0.099834, 0.099834, 0.099834, 0.14937, 0.32668, 0.9858, 0.9858, 0.98625, 0.98625, 0.98625, 0.97987, 0.9803, 0.98185, 0.9842, 0.98199, 0.98199, 0.98199, 0.98048, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque infectieux": {
men: [0.092797, 0.11876, 0.11906, 0.11906, 0.28774, 0.28774, 0.28915, 0.20201, 0.20294, 0.20206, 0.20206, 0.20206, 0.20206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11143, 0.11143, 0.11143, 0.11132, 0.11131, 0.98118, 0.97985, 0.98119, 0.98119, 0.98119, 0.98119, 0.9813, 0.9813, 0.9813, 0, 0, 0, 0, 0, 0, 0.19362, 0.19319, 0.19319, 0.19319, 0.19289, 0.11351, 0.11351, 0.11351, 0.11365, 0.11365, 0.11365, 0.1135, 0.11351, 0.12454, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.044285, 0.049096, 0.13603, 0.13603, 0.089576, 0.089576, 0.089576], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cas d' infection": {
men: [0.082548, 0.082548, 0.08276, 0.08276, 0.08276, 0.10167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35097, 0.39464, 0.088407, 0.088391, 0.088391, 0.088391, 0.073955, 0.045221, 0.045299, 0.045238, 0.034029, 0.034029, 0.034029, 0.034029, 0, 0, 0, 0, 0, 0, 0, 0.081542, 0.081671, 0.081866, 0.17221, 0.17221, 0.17221, 0.27599, 0.27595, 0.27595, 0.27595, 0.4723, 0.4723, 0.98957, 0.98822, 0.9805, 0.47372, 0.26645, 0.21554, 0.21554, 0.21554, 0.19302, 0.19336, 0.19336, 0.19336, 0.19336, 0.19336, 0.19336, 0.19365, 0.19418, 0.21931, 0.28053, 0.99102, 0.99102, 0.99102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"données épidémiologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045256, 0.045251, 0.39606, 0.39552, 0.28639, 0.28639, 0.28639, 0.5048, 0.50485, 0.50485, 0.50485, 0.50508, 0.50508, 0.50508, 0.35526, 0.35542, 0, 0.31507, 0.98081, 0.98081, 0.98081, 0.099591, 0.099574, 0.099574, 0.099574, 0.099698, 0.099698, 0.099698, 0.076674, 0.07668, 0.064019, 0, 0.057848, 0.057848, 0.057848, 0.13826, 0.13851, 0.13851, 0.13851, 0.13851, 0.13851, 0.13851, 0.25765, 0.25835, 0.98462, 0.98811, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"origine porcine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97809, 0.97984, 0.97984, 0.97984, 0.97984, 0.97984, 0.97984, 0.98129, 0.98397, 0.98397, 0.98746, 0.99102, 0.99102, 0.99102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe pandémique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97809, 0.97984, 0.97984, 0.97984, 0.97984, 0.97984, 0.97984, 0.98129, 0.58913, 0.58913, 0.4193, 0.42082, 0.42082, 0.42082, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antirétroviral": {
men: [0.028507, 0.029743, 0.02057, 0.019979, 0.021357, 0.028083, 0.053405, 0.073967, 0.039828, 0.090414, 0.090414, 0.090414, 0.10272, 0.096713, 0.079727, 0.079727, 0.065081, 0.067538, 0.067538, 0.063783, 0.052566, 0.052843, 0.052843, 0.054788, 0.053835, 0.050829, 0.11106, 0.16148, 0.1728, 0.15645, 0.20944, 0.21006, 0.21006, 0.26275, 0.39142, 0.39033, 0.35542, 0.30386, 0.31039, 0.33486, 0.23859, 0.13159, 0.1382, 0.11298, 0.10449, 0.10503, 0.10503, 0.11061, 0.078959, 0.097267, 0.076614, 0.074103, 0.074103, 0.068772, 0.069115, 0.063116, 0.060731, 0.076762, 0.05542, 0.058428, 0.058428, 0.07816, 0.11387, 0.058098, 0.060836, 0.067892, 0.067892, 0.078934, 0.075786, 0.066781, 0.057263, 0.05523, 0.053014, 0.053014, 0.053014, 0.06069, 0.052567, 0.054542, 0.076098, 0.083318, 0.078689, 0.07684, 0.091925, 0.092248, 0.10458, 0.10729, 0.11078, 0.11078, 0.11078, 0.094868, 0.097111, 0.11145, 0.066266, 0.035692, 0.042947, 0.047095, 0, 0.075552, 0.075552, 0.053953, 0.095334, 0.087515, 0.087515, 0.11073, 0.11073, 0.17427, 0.1944, 0.21828, 0.19817, 0.19817], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection au vih": {
men: [0.03158, 0.03158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14167, 0.14153, 0.14152, 0.14152, 0.14152, 0.14183, 0.142, 0.98076, 0.98076, 0.98057, 0.98057, 0.98057, 0.97959, 0.97949, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19337, 0.19338, 0.19338, 0.19332, 0.19344, 0.16104, 0.16104, 0.1611, 0.3306, 0.3306, 0.3306, 0.3306, 0.3306, 0.3306, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dépistage systématique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98143, 0.98143, 0.98143, 0.98265, 0.98265, 0.98265, 0.98131, 0.6591, 0.6591, 0.6589, 0.65929, 0.22955, 0.22955, 0.22964, 0.13199, 0.13199, 0.13199, 0.10034, 0.10034, 0.10034, 0.10049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.030836, 0.030836, 0.030754, 0.030754, 0.028268, 0.028268, 0.031391], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antigène": {
men: [0.33935, 0.33935, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.094208, 0.15491, 0.12936, 0.12936, 0.12936, 0.15099, 0.14121, 0.14121, 0.13158, 0.068215, 0.068215, 0.068215, 0.071999, 0.083441, 0.067393, 0.033054, 0.029771, 0.023491, 0.023491, 0.023491, 0.022245, 0.022245, 0.024413, 0.041607, 0.041607, 0.041607, 0.041605, 0.041624, 0, 0.04255, 0.13875, 0.36581, 0.36581, 0.36524, 0.98773, 0.98773, 0.62419, 0.62497, 0.62497, 0.62497, 0.50452, 0.50456, 0.50456, 0.37142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gel microbicide": {
men: [0.0234, 0.0234, 0.02346, 0.02346, 0.024482, 0.029236, 0.067245, 0.074388, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025134, 0.025134, 0.083091, 0.98257, 0.98241, 0.98241, 0.98241, 0.98363, 0.98363, 0.98363, 0.49752, 0.49757, 0.49757, 0.49741, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agents infectieux": {
men: [0.372, 0.14981, 0.12011, 0.12011, 0.092702, 0.075478, 0.075848, 0.075509, 0.07586, 0.075531, 0.075531, 0.086406, 0.072856, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13074, 0.13074, 0.13074, 0.13061, 0.1306, 0.13082, 0.13065, 0.37379, 0.37379, 0.37379, 0.37379, 0.9813, 0.9813, 0.9813, 0, 0, 0, 0, 0, 0, 0.29749, 0.29682, 0.29682, 0.29682, 0.29637, 0.29632, 0.21846, 0.21846, 0.21873, 0.21873, 0.21873, 0.084773, 0.08478, 0.10591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10009, 0.10009, 0.099822, 0.099822, 0.12136, 0.12136, 0.12136], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lymphocytes": {
men: [0.04106, 0.04106, 0.04625, 0.04625, 0.063949, 0.063949, 0.052073, 0.052637, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.082259, 0.12401, 0.10624, 0.10624, 0.10624, 0.10624, 0.13983, 0.13983, 0.13983, 0.15126, 0.17349, 0.17349, 0.28911, 0.28924, 0.21024, 0.18086, 0.41737, 0.33306, 0.27652, 0.2761, 0.19065, 0.19065, 0.055253, 0.055322, 0.055322, 0.055322, 0.047548, 0.06562, 0.061502, 0.090035, 0.10424, 0.10121, 0.098897, 0.1094, 0.11062, 0.11062, 0.15127, 0.15127, 0.15127, 0.15127, 0.17929, 0.24044, 0.28066, 0.215, 0.15254, 0.17829, 0.17338, 0.1415, 0.088428, 0.067185, 0.059922, 0.10537, 0.10537, 0.10041, 0.10129, 0.10129, 0.098272, 0.098272, 0.10223, 0.10223, 0.10912], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"voie intraveineuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23143, 0.23175, 0.23175, 0.23175, 0.23175, 0.23177, 0.23177, 0.98058, 0.31646, 0.31646, 0.31646, 0.31644, 0.31658, 0.31708, 0.26932, 0.11582, 0.11582, 0.11582, 0.11565, 0.11563, 0.086976, 0.086976, 0.11389, 0.11389, 0.11389, 0.073597, 0.15694, 0.12797, 0.076775, 0.10736, 0.086477, 0.086477, 0.086511, 0.075157, 0.074492, 0.074492, 0.074492, 0.074492, 0.074492, 0.086953, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3138, 0.17478, 0.17431, 0.17431, 0.28103, 0.28103, 0.28103], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"population hétérosexuelle": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.027299, 0.027336, 0.027336, 0.027336, 0.027336, 0.027339, 0.027339, 0.98058, 0.98102, 0.98102, 0.98102, 0.98097, 0.98141, 0.98296, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 