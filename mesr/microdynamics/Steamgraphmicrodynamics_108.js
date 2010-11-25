var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"urgence sociale": {
men: [0.47083, 0.47146, 0.47152, 0.4716, 0.56843, 0.71965, 0.72064, 0.97847, 0.97753, 0.97753, 0.97782, 0.97856, 0.97815, 0.97703, 0.9744, 0.97294, 0.9731, 0.9731, 0.97087, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28766, 0.28752, 0.28742, 0.28732, 0.28723, 0.28713, 0.28727, 0.3053, 0.30601, 0.026632, 0.026632, 0.02666, 0.026647, 0.026639, 0, 0, 0, 0.020243, 0.020237, 0.020265, 0.020278, 0.0214, 0.021439, 0.20022, 0.20022, 0.19991, 0.20004, 0.20013, 0.24214, 0.95473, 0.95772, 0.9475, 0.94835, 0.94811, 0.12509, 0.024476, 0.02203, 0.022025, 0.022025, 0.016204, 0.016198, 0.016198, 0.016198, 0.01627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"système capitaliste": {
men: [0.041357, 0.041412, 0.047849, 0.049417, 0.050045, 0.025368, 0.015998, 0.040403, 0.099485, 0.092615, 0.095405, 0.11676, 0.13143, 0.17171, 0.17481, 0.14748, 0.13282, 0.13282, 0.19249, 0.17039, 0.18568, 0.12967, 0.1193, 0.12787, 0.14421, 0.16319, 0.17127, 0.16211, 0.16084, 0.18139, 0.17575, 0.15756, 0.097301, 0.098627, 0.079811, 0.078132, 0.070507, 0.068375, 0.052699, 0.036594, 0.068863, 0.070226, 0.070886, 0.071458, 0.069971, 0.074729, 0.09426, 0.10029, 0.1239, 0.15744, 0.20343, 0.267, 0.29396, 0.29792, 0.20071, 0.21288, 0.25887, 0.20856, 0.21265, 0.22683, 0.2137, 0.27487, 0.26539, 0.26025, 0.26533, 0.2583, 0.24539, 0.24694, 0.2329, 0.2232, 0.14508, 0.1722, 0.18778, 0.18698, 0.17083, 0.089149, 0.090535, 0.11562, 0.067341, 0.040695, 0.040686, 0.029525, 0.030495, 0.031825, 0.041393, 0.044114, 0.014858, 0, 0, 0.091858, 0.11832, 0.13067, 0.13762, 0.17689, 0.20139, 0.26522, 0.29419, 0.31006, 0.37535, 0.36479, 0.57131, 0.55822, 0.58852, 0.39557, 0.38832, 0.36987, 0.36063, 0.32428, 0.29545, 0.21965], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"utilité sociale": {
men: [0.67638, 0.97515, 0.75415, 0.75428, 0.79977, 0.79967, 0.75236, 0.75304, 0.68557, 0.68557, 0.70977, 0.71031, 0.66457, 0.66381, 0.66478, 0.66378, 0.76695, 0.76695, 0.72289, 0.72351, 0.19201, 0.1919, 0.19215, 0.12409, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.032492, 0.037676, 0.027698, 0.027715, 0.027197, 0.031527, 0.04287, 0.04287, 0.029618, 0.032973, 0.035283, 0.035305, 0.032941, 0.032911, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.036181, 0.062263, 0.063688, 0.054118, 0.054093, 0.056466, 0.056397, 0.070403, 0.053607, 0.04787, 0.049523, 0.037746, 0.037773, 0.036896], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mode de production": {
men: [0.26414, 0.24965, 0.22978, 0.22982, 0.26107, 0.34109, 0.23489, 0.24005, 0.28847, 0.28847, 0.33713, 0.33739, 0.3319, 0.28618, 0.24789, 0.28356, 0.41432, 0.41432, 0.3244, 0.15105, 0.042879, 0.024846, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.013105, 0.028045, 0.033878, 0.036575, 0.034557, 0.034561, 0.035868, 0.033961, 0.03932, 0.040281, 0.02637, 0.026361, 0.058368, 0.063677, 0.044754, 0.032585, 0.032996, 0.031815, 0.033126, 0.028967, 0.027755, 0.021868, 0.022311, 0.021927, 0.028755, 0.023151, 0, 0, 0, 0, 0, 0.0071474, 0.0070366, 0.0073979, 0.0072874, 0.0086098, 0.014297, 0.014717, 0.017189, 0.022697, 0.023528, 0.023131, 0.024494, 0.029049, 0.033289, 0.029348, 0.028889, 0.028914, 0.027606, 0.028305, 0.021551, 0.022079, 0.014388, 0, 0, 0, 0.044652, 0.085962, 0.078056, 0.077884, 0.082645, 0.082527, 0.098615, 0.14716, 0.14682, 0.10762, 0.084025, 0.15619, 0.14619, 0.14139, 0.11948, 0.13107, 0.13631, 0.13439, 0.1265, 0.12556], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"manipulations génétiques": {
men: [0.33425, 0.29608, 0.27375, 0.27896, 0.36782, 0.34624, 0.34671, 0.37163, 0.37127, 0.37127, 0.37138, 0.34706, 0.39294, 0.5508, 0.28974, 0.37417, 0.47238, 0.47238, 0, 0, 0.23506, 0.20098, 0.20124, 0.20124, 0.20121, 0.23006, 0.16366, 0.14243, 0.13192, 0.12576, 0.10471, 0.10173, 0.083424, 0.077402, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture productiviste": {
men: [0.33909, 0.33954, 0.33959, 0.33965, 0.49288, 0.49282, 0.58849, 0.58902, 0.97631, 0.97631, 0.9766, 0.97734, 0.97261, 0.406, 0.40659, 0.40598, 0.40605, 0.40605, 0.32369, 0.32397, 0.11946, 0.11939, 0.214, 0.214, 0.21397, 0.21391, 0.21399, 0.96147, 0.96067, 0.34882, 0.34882, 0.34871, 0.21173, 0.21157, 0.21177, 0.21171, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"travailleurs agricoles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96162, 0.96178, 0.96178, 0.96234, 0.26032, 0.25984, 0.25968, 0.26002, 0.26002, 0.21231, 0.14182, 0.06465, 0.064549, 0.064495, 0, 0, 0, 0, 0, 0.060893, 0.060875, 0.060782, 0.06054, 0.065049, 0.081577, 0.94925, 0.096209, 0.096235, 0.096338, 0.096292, 0.09626, 0.096226, 0.096196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16064, 0.16068, 0.16048, 0.95344, 0.95337, 0.95287, 0.95207, 0.95248, 0.95315, 0.95229], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"opérations humanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41671, 0.58081, 0.58132, 0.58266, 0.67083, 0.67083, 0.67154, 0.77039, 0.90188, 0.90184, 0.90241, 0.69482, 0.73962, 0.73939, 0.69406, 0.63057, 0.62906, 0.6302, 0.53624, 0.53624, 0.53539, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"marchandisation": {
men: [0.10241, 0.093011, 0.09079, 0.070062, 0.070053, 0.060787, 0.049172, 0.049533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.048054, 0.045245, 0.038435, 0.035818, 0.049238, 0.049201, 0.0351, 0.033551, 0.0335, 0.030361, 0.14634, 0.14325, 0.12534, 0.12136, 0.091252, 0.094313, 0.10483, 0.11079, 0.11075, 0.11071, 0.19925, 0.23204, 0.21698, 0.34782, 0.26989, 0.27627, 0.32322, 0.43901, 0.40942, 0.4349, 0.40411, 0.40428, 0.37385, 0.36142, 0.33492, 0.33335, 0.34536, 0.25112, 0.23362, 0.23362, 0.23657, 0.13156, 0.13423, 0, 0, 0.0099553, 0.0089901, 0.0087562, 0.0076503, 0.0067034, 0.0063894, 0.0064321, 0.070272, 0.070272, 0.063642, 0.060137, 0.061155, 0.06126, 0.05772, 0.053353, 0.059238, 0.057068, 0.062541, 0.074626, 0.078014, 0.078667, 0, 0, 0, 0.011653, 0.011778, 0.013525, 0.01447, 0.016003, 0.0149, 0.015711, 0.014755, 0.014747, 0.015182, 0.015797, 0.015808, 0.016579], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété collective": {
men: [0, 0, 0.12492, 0.12494, 0.12492, 0.12491, 0.11005, 0.15437, 0.26762, 0.39427, 0.39438, 0.63513, 0.63487, 0.46989, 0.47058, 0.46987, 0.30829, 0.30829, 0.30847, 0.30873, 0.46457, 0.46429, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29395, 0.4002, 0.42032, 0.42021, 0.42026, 0.31524, 0.31552, 0.3156, 0.31594, 0.31579, 0.31568, 0.31557, 0.25519, 0.32671, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.038006, 0.034896, 0.034896, 0.036505, 0.036529, 0.038381, 0.035937, 0.064117, 0.06406, 0.06408, 0.30434, 0.30426, 0.21928, 0.21982, 0.11324, 0.16625, 0.16625, 0.13514, 0.13509, 0.13509, 0.039022, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"impérialisme": {
men: [0.045522, 0.043512, 0.044819, 0.03208, 0.038498, 0.076125, 0.033433, 0.036681, 0.038081, 0.043516, 0.044424, 0.037844, 0.036035, 0.026742, 0.022441, 0.021709, 0.021806, 0.02095, 0.020236, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.031078, 0.031454, 0.13533, 0.22094, 0.22893, 0.16183, 0.19887, 0.18768, 0.18257, 0.18309, 0.21047, 0.20979, 0.2378, 0.22571, 0.21609, 0.19839, 0.16872, 0.14885, 0.14221, 0.17806, 0.12654, 0.14219, 0.14426, 0.14438, 0.097358, 0.10544, 0.071805, 0.076174, 0.05403, 0.090719, 0.12461, 0.067917, 0.066881, 0.069294, 0.070379, 0.068117, 0.061969, 0.060118, 0.08927, 0.072122, 0.068622, 0.070611, 0.073057, 0.052961, 0.014761, 0.016263, 0.016929, 0.013534, 0.012509, 0.012814, 0.013511, 0.013916, 0.011777, 0.013503, 0.014885, 0.014951, 0.049656, 0.10043, 0.20904, 0.22069, 0.24521, 0.31777, 0.41961, 0.34607, 0.37441, 0.30108, 0.44466, 0.47213, 0.44662, 0.46243, 0.43427, 0.40243, 0.35112, 0.32997, 0.25488, 0.24893, 0.24524, 0.28617, 0.28591], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"productivisme": {
men: [0.53926, 0.38042, 0.38972, 0.38978, 0.37055, 0.39208, 0.3736, 0.32427, 0.23559, 0.29952, 0.2449, 0.24508, 0.18525, 0.17257, 0.16191, 0.24525, 0.24529, 0.24529, 0.20028, 0.15047, 0.10432, 0.076245, 0.068879, 0.064662, 0.086716, 0.071676, 0.065958, 0.054769, 0.052699, 0.053749, 0.051425, 0.050136, 0.035551, 0.038525, 0.037734, 0.039933, 0.037012, 0.038556, 0, 0, 0, 0, 0, 0, 0.032268, 0.029631, 0.12515, 0.097288, 0.096362, 0.097231, 0.089738, 0.15996, 0.19797, 0.13069, 0.1236, 0.12354, 0.12808, 0.17622, 0.16444, 0.17967, 0.15944, 0.16696, 0.17017, 0.1759, 0.17384, 0.1383, 0.11384, 0.16544, 0.21784, 0.15569, 0.14963, 0.058409, 0.048482, 0.040803, 0.022866, 0.0085556, 0.0085534, 0.0083062, 0.0089106, 0.0084051, 0.087673, 0.094316, 0.090193, 0.11888, 0.13227, 0.14094, 0.2028, 0.16192, 0.20742, 0.13583, 0.12913, 0.12985, 0.1108, 0.11904, 0, 0, 0, 0, 0, 0, 0.043424, 0.049499, 0.046824, 0.070309, 0.070831, 0.071639, 0.11525, 0.1153, 0.16537, 0.16522], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins alimentaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.047354, 0.047394, 0.075342, 0.3311, 0.4958, 0.4958, 0.49572, 0.49558, 0.31659, 0.3161, 0.31584, 0.31537, 0.31537, 0.31527, 0.18744, 0.1873, 0.18747, 0.18742, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.044095, 0.044109, 0.31682, 0.38566, 0.47602, 0.4772, 0.54434, 0.54422, 0.54422, 0.43826, 0.58152, 0.58152, 0.59505, 0.59768, 0.58546, 0.58499, 0.29002, 0.29006, 0.1691, 0.13841, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"femmes seules": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26369, 0.95522, 0.95451, 0.9554, 0.95512, 0.95366, 0.94987, 0.94962, 0.94972, 0.9486, 0.94942, 0.94967, 0.95069, 0.95024, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15417, 0.15424, 0.26693, 0.51943, 0.68236, 0.68132, 0.67861, 0.67843, 0.6785, 0.6777, 0.67829, 0.96386, 0.9649, 0.96444, 0.95759, 0.95726, 0.95695, 0.95661, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété publique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1022, 0.10211, 0.10214, 0.10224, 0.07732, 0.077315, 0.077506, 0.077504, 0.10376, 0.10376, 0.1041, 0.10406, 0.23935, 0.13446, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95914, 0.95937, 0.95821, 0.95821, 0.95813, 0.95763, 0.95684, 0.95724, 0.95792, 0.95706], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cercle polaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97258, 0.9714, 0.9714, 0.97132, 0.97081, 0.97001, 0.97042, 0.97111, 0.97023], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.064548, 0.11313, 0.94837, 0.94812, 0.94822, 0.9471, 0.94792, 0.29904, 0.29936, 0.29922, 0.29912, 0.29901, 0.29892, 0.066275, 0, 0.070077, 0.11632, 0.1041, 0.1041, 0.10421, 0.093783, 0.088998, 0.088994, 0.08905, 0.089087, 0.089101, 0.089073, 0.11504, 0.19363, 0.10656, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10824, 0.19557, 0.19512, 0.13612, 0.13606, 0.13609, 0.13593, 0.13593, 0.13592, 0.15166, 0.18907, 0.18915, 0.18929, 0.18912], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise du capitalisme": {
men: [0.48588, 0.079146, 0.052957, 0, 0, 0, 0, 0, 0, 0, 0.045474, 0.033298, 0.033284, 0.033246, 0.036422, 0.033042, 0.035922, 0.036323, 0.037517, 0.03483, 0.028873, 0.028855, 0.028892, 0.028892, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.016897, 0.016384, 0.013389, 0.013386, 0.0092045, 0.007847, 0.0073241, 0.007965, 0.019421, 0.018598, 0.018592, 0.018995, 0.020294, 0.020687, 0.013809, 0.014016, 0.015733, 0.015734, 0.022589, 0.033234, 0.040198, 0.020839, 0, 0, 0, 0, 0, 0, 0, 0.20086, 0.20123, 0.20121, 0.20121, 0.19212, 0.18391, 0.38732, 0.4622, 0.46108, 0.48821, 0.50537, 0.50583, 0.5057, 0.50566, 0.054228, 0.040479, 0.025427, 0.025427, 0.017794, 0.019541, 0.021436, 0.022865, 0.022966, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95978, 0.15321, 0.083266, 0.19229, 0.17431, 0.17409, 0.23378, 0.23377, 0.23364, 0.23345, 0.23355, 0.26976, 0.26952], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ouragan katrina": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18222, 0.30896, 0.30899, 0.30899, 0.30932, 0.30917, 0.64391, 0.64388, 0.96642, 0.96683, 0.96698, 0.96668, 0.96805, 0.96864, 0.95963, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0054451, 0.0058471, 0.0063298, 0.0065976, 0.0070589, 0.0070425, 0.006707, 0.0069273, 0.007362, 0.0085674, 0.0087059, 0.0087052, 0.0087007, 0.013844, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autosuffisance alimentaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96562, 0.97016, 0.65498, 0.65498, 0.65467, 0.65483, 0.65404, 0.65404, 0.65399, 0.65364, 0.6531, 0.65338, 0.65384, 0.66801], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"problèmes écologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10291, 0.10299, 0.10295, 0.13029, 0.088121, 0.087989, 0.088003, 0.10347, 0.10353, 0.10362, 0.1595, 0.15941, 0.15961, 0.072306, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0389, 0.047834, 0.12306, 0.12302, 0.12297, 0.12304, 0.13704, 0.13735, 0.13737, 0.20008, 0.20029, 0.48172, 0.65094, 0.34423, 0.31368, 0.31381, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085865, 0.13083, 0.13083, 0.17266, 0.24256, 0.27689, 0.27681, 0.27619, 0.33252, 0.33252, 0.40747, 0.29843, 0.24821, 0.24821, 0.16555, 0.074662, 0.076968, 0.077001, 0.13276, 0.13264], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"chlordécone": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.034533, 0.03544, 0.042708, 0.042694, 0.044999, 0.05375, 0.051949, 0.048193, 0.046578, 0.074233, 0.07424, 0.062979, 0.063046, 0.056655, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13395, 0.59222, 0.68314, 0.68483, 0.74204, 0.97792, 0.97792, 0.9811, 0.33819, 0.33819, 0.33819, 0.33968, 0.34026, 0.33998, 0.17385, 0.17386, 0.094748, 0.056293, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coton bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28173, 0.28176, 0.28143, 0.28168, 0.28175, 0.47019, 0.84629, 0.84601, 0.84571, 0.84545, 0.84515, 0.96797, 0.96882, 0.97105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mobilisation sociale": {
men: [0, 0, 0, 0, 0, 0, 0.10732, 0.11822, 0.11811, 0.21937, 0.21944, 0.32766, 0.42921, 0.59495, 0.59582, 0.59493, 0.59503, 0.59503, 0.59537, 0.59589, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0252, 0.024626, 0.024955, 0.013322, 0.011348, 0.01196, 0.012705, 0.012536, 0.012347, 0.012284, 0.011075, 0.012571, 0.011303, 0.011155, 0, 0, 0, 0, 0, 0, 0, 0.19006, 0.14919, 0.14334, 0.1639, 0.1448, 0.17008, 0.19035, 0.21949, 0.21896, 0.21049, 0.21351, 0.21288, 0.17784, 0.17783, 0.016344, 0.022728, 0.024649, 0.025632, 0.028013, 0.028003, 0.030306, 0.030306, 0.026543, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025235, 0.025212], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise profonde": {
men: [0.10015, 0.10028, 0.10029, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22413, 0.22393, 0.95198, 0.95283, 0.28918, 0.28916, 0.18537, 0.18536, 0.18532, 0.18532, 0.13988, 0.048239, 0.048238, 0.048238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12258, 0.12261, 0.12247, 0.12247, 0.15915, 0.37179, 0.95966, 0.96006, 0.96655, 0.40417], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.087189, 0.087203, 0.087176, 0.0873, 0.17896, 0.17853, 0.17885, 0.17884, 0.17884, 0.17856, 0.30122, 0.95934, 0.95993, 0.95761, 0.95121, 0.9515, 0.95235, 0.95211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"explosions nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38332, 0.3824, 0.3831, 0.38307, 0.38307, 0.95269, 0.95331, 0.95378, 0.50718, 0.50595, 0.5055, 0.50566, 0.50611, 0.50598, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe porcine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.067334, 0.067334, 0.067552, 0.067528, 0.25546, 0.95463, 0.95886, 0.96047, 0.9597, 0.95822, 0.95832, 0.95823, 0.07632, 0.076285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 