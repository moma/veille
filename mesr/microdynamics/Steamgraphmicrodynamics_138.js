var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"services pétroliers": {
men: [0.75154, 0.75105, 0.62507, 0.62884, 0.62884, 0.4959, 0.5106, 0.51071, 0.51116, 0.57141, 0.57128, 0.57083, 0.52545, 0.083119, 0.083511, 0.083737, 0.11963, 0.1192, 0.1192, 0.23326, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.89111, 0.89946, 0.90609, 0.90626, 0.90527, 0.98557, 0.91842, 0.92552, 0.92552, 0.92533, 0.92545, 0.92476, 0.92489, 0.82955, 0.6153, 0.54422, 0.39145, 0.39145, 0.39333, 0.39315, 0.39543, 0.21828, 0.19003, 0.19024, 0.19047, 0.1923, 0.1923, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20687, 0.18841, 0.44648, 0.47852, 0.47852, 0.47869, 0.44562, 0.62435, 0.38329, 0.71846, 0.73474, 0.73474, 0.7351, 0.81634, 0.80741, 0.82637, 0.81844, 0.81844, 0.81844, 0.63006, 0.49672, 0.49604, 0.54192, 0.39253, 0.36808, 0.36808], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transocean": {
men: [0.15669, 0.15697, 0.1576, 0.1576, 0.1576, 0.16876, 0.17042, 0.16448, 0.1772, 0.18259, 0.31543, 0.37796, 0.39501, 0.4162, 0.26717, 0.32113, 0.26902, 0.37155, 0.37155, 0.39193, 0.39986, 0.33295, 0.34493, 0.37196, 0.36032, 0.3137, 0.29753, 0.30965, 0.29359, 0.29359, 0.34089, 0.26306, 0.26306, 0.29038, 0.26328, 0.27499, 0.27499, 0.11844, 0.11787, 0.11787, 0.15836, 0.058993, 0.42629, 0.46407, 0.44364, 0.43827, 0.44672, 0.4468, 0.45866, 0.46494, 0.45856, 0.46437, 0.4692, 0.49025, 0.50588, 0.57382, 0.48333, 0.41173, 0.46257, 0.46257, 0.42944, 0.42925, 0.42906, 0.63371, 0.734, 0.70285, 0.6642, 0.13563, 0.06887, 0.12342, 0.12342, 0.12342, 0.46378, 0.46378, 0.46378, 0.46372, 0.46439, 0.44187, 0.43844, 0.41586, 0.41586, 0.41586, 0.98437, 0.98348, 0.98202, 0.98202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95667, 0.95691, 0.17398, 0.17402, 0.17402, 0.17402, 0.17402, 0.65991, 0.78576, 0.78793, 0.56556, 0.56565, 0.56565], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"origine de la marée noire": {
men: [0, 0.017229, 0.016292, 0.016641, 0.016909, 0.017986, 0.017117, 0.014382, 0.014384, 0.013087, 0.018189, 0.018848, 0.018509, 0.017905, 0.030035, 0.011879, 0.012649, 0.013493, 0.013122, 0.013301, 0.014094, 0.022198, 0.023551, 0.092037, 0.11063, 0.15738, 0.17397, 0.21956, 0.14293, 0.21655, 0.31077, 0.31157, 0.97921, 0.98002, 0.98002, 0.9822, 0.26352, 0, 0, 0, 0, 0, 0.11873, 0.092023, 0.17251, 0.17254, 0.17235, 0.17238, 0.17238, 0.17234, 0.25788, 0.25783, 0.24438, 0.13954, 0.13113, 0.18616, 0.13486, 0.16003, 0.075555, 0.075555, 0.075916, 0.075883, 0.07585, 0.075947, 0.075947, 0.076032, 0.091983, 0.28014, 0.3715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96924, 0.96897, 0.96897, 0.96945, 0.77464, 0.77484, 0.77484, 0.77501, 0.77501, 0.77501, 0.77501, 0.77296, 0.77191, 0.77404, 0.73422, 0.73435, 0.73435], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"puits de pétrole": {
men: [0.00268, 0.003213, 0.011822, 0.012424, 0.015752, 0.019597, 0.017546, 0.010614, 0.0087975, 0.0075153, 0.0097557, 0.010706, 0.010948, 0.011141, 0.0091391, 0.009123, 0.00227, 0.0022273, 0.0022145, 0.0023266, 0.0026424, 0.0047343, 0.0077345, 0.015138, 0, 0, 0, 0.022803, 0.022817, 0.023986, 0.025212, 0.036845, 0.043703, 0.043739, 0.043739, 0.047475, 0.13148, 0.070792, 0.015598, 0.01027, 0.010251, 0.0079149, 0.029295, 0.035723, 0.035011, 0.035017, 0.034281, 0.034288, 0.034288, 0.033609, 0.02874, 0.03384, 0.058642, 0.098985, 0.076373, 0.070988, 0.056517, 0.051738, 0.052318, 0.052318, 0.053373, 0.052995, 0.052972, 0.053219, 0.062414, 0.061071, 0.052636, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.8026, 0.81718, 0.76631, 0.76668, 0.66865, 0.66881, 0.66881, 0.67535, 0.67535, 0.67535, 0.67535, 0.67356, 0.67264, 0.6745, 0.56324, 0.53476, 0.56746], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"marée noire dans le golfe": {
men: [0.0064753, 0.0063444, 0.0060993, 0.0064229, 0.0068088, 0.0070899, 0.008165, 0.008178, 0.0081759, 0.0083458, 0.0095014, 0.01201, 0.011632, 0.015275, 0.006637, 0.0069659, 0.010316, 0.018592, 0.018715, 0.021348, 0.021156, 0.026072, 0.028862, 0.051301, 0.049743, 0.05048, 0.083436, 0.082392, 0.07735, 0.077067, 0.069486, 0.046042, 0.04777, 0.049175, 0.048148, 0.049015, 0.050564, 0.0041643, 0.0040887, 0.0038822, 0.0034183, 0, 0.067022, 0.069385, 0.084108, 0.083956, 0.082862, 0.082265, 0.086468, 0.080783, 0.078733, 0.097639, 0.10506, 0.10557, 0.10297, 0.11334, 0.055144, 0.056176, 0.039175, 0.039273, 0.03971, 0.037541, 0.03753, 0.039535, 0.041429, 0.03575, 0.030936, 0.0082744, 0.010881, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.039927, 0.03834, 0.064088, 0.087638, 0.12592, 0.14814, 0.13837, 0.13429, 0.12605, 0.13936, 0.16043, 0.38943, 0.40951, 0.40951, 0.4355, 0.2765, 0.26815, 0.27585, 0.28236, 0.28236, 0.28724, 0.25008, 0.29402, 0.30346, 0.30591, 0.21478, 0.20449, 0.2008], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exxon valdez": {
men: [0.039138, 0.061278, 0.067264, 0.095647, 0.095647, 0.093621, 0.064681, 0.059043, 0.052504, 0.049498, 0.050632, 0.051616, 0.02061, 0.019689, 0.019782, 0.019413, 0.020435, 0.019811, 0.019811, 0.020189, 0, 0.10846, 0.11495, 0.12132, 0.12137, 0.12156, 0.11836, 0.16928, 0.15027, 0.17379, 0.17775, 0.19574, 0.19574, 0.22298, 0.18487, 0.092341, 0.12443, 0.12013, 0.11955, 0.11955, 0.13715, 0.09001, 0.18278, 0.18234, 0.17232, 0.17236, 0.17217, 0.071992, 0.08317, 0.058436, 0.058644, 0.060957, 0.060964, 0.042633, 0.041055, 0.056692, 0.017551, 0.016463, 0.014514, 0.014514, 0.014583, 0.033694, 0.053345, 0.068644, 0.068152, 0.059599, 0.059673, 0.089626, 0.095901, 0.066319, 0.066319, 0.076054, 0.13304, 0.13304, 0.13304, 0.089948, 0, 0, 0.36123, 0.52876, 0.52876, 0.55808, 0.55622, 0.43373, 0.43308, 0.43308, 0.43266, 0.43266, 0.43266, 0.43282, 0.43282, 0.65725, 0.54446, 0.37631, 0.37621, 0.37621, 0.37639, 0.43488, 0.43498, 0.43498, 0.43508, 0.43508, 0.43508, 0.43508, 0.43393, 0.33947, 0.22091, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"explosion de la plate-forme": {
men: [0.044533, 0.051711, 0.054066, 0.053241, 0.055014, 0.056751, 0.049114, 0.048382, 0.032511, 0.031429, 0.037946, 0.052274, 0.0554, 0.07705, 0.047055, 0.03619, 0.040842, 0.042948, 0.043978, 0.050718, 0.067591, 0.088356, 0.079572, 0.15137, 0.1777, 0.12711, 0.10325, 0.1032, 0.057832, 0.062928, 0.035708, 0.05715, 0.05715, 0.057198, 0.056634, 0.049056, 0.038558, 0.013634, 0.013568, 0.012859, 0.027198, 0.024054, 0.20539, 0.20299, 0.24359, 0.23513, 0.23487, 0.23492, 0.24153, 0.24622, 0.30866, 0.28747, 0.28872, 0.3174, 0.30062, 0.34227, 0.16212, 0.16054, 0.12904, 0.13114, 0.13176, 0.13014, 0.12356, 0.10744, 0.11134, 0.12924, 0.10926, 0.040981, 0.045709, 0, 0, 0, 0.062882, 0.062882, 0.062882, 0.063839, 0.068607, 0.094752, 0.10499, 0.10704, 0.10704, 0.10704, 0.10668, 0.10658, 0.24951, 0.38451, 0.22136, 0.22136, 0.22136, 0.097264, 0.097264, 0.11842, 0.2112, 0.57453, 0.59889, 0.59889, 0.59918, 0.3993, 0.37344, 0.37344, 0.36647, 0.36647, 0.35225, 0.45119, 0.52009, 0.55887, 0.55453, 0.40821, 0.37919, 0.37919], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"puits macondo": {
men: [0, 0.029992, 0.031572, 0.031572, 0.029746, 0.032781, 0.027583, 0.023267, 0.022598, 0.019159, 0.019661, 0.019746, 0.021482, 0.024067, 0.022905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27446, 0.29301, 0.29272, 0.29278, 0.29246, 0.29251, 0.29251, 0.29244, 0.35329, 0.40981, 0.40986, 0.29878, 0.2085, 0.20847, 0.028534, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.74301, 0.7957, 0.79548, 0.79548, 0.79587, 0.79405, 0.79425, 0.79425, 0.79443, 0.79443, 0.98178, 0.98178, 0.66612, 0.66521, 0.41841, 0.18363, 0.18366, 0.18366], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"deepwater": {
men: [0.020494, 0.024844, 0.027339, 0.028269, 0.029707, 0.029262, 0.027194, 0.026586, 0.019105, 0.012607, 0.016272, 0.021411, 0.017649, 0.020376, 0.018418, 0.014223, 0.01869, 0.018637, 0.018383, 0.021147, 0.021176, 0.025285, 0.027647, 0.065724, 0.064755, 0.052232, 0.057123, 0.061431, 0.051867, 0.053863, 0.038982, 0.046368, 0.04781, 0.049716, 0.052493, 0.052046, 0.036303, 0.0077122, 0.0075413, 0.0072317, 0.011245, 0.0076384, 0.089614, 0.1021, 0.111, 0.10863, 0.12873, 0.12876, 0.12937, 0.13485, 0.16896, 0.20852, 0.21203, 0.22225, 0.2198, 0.25153, 0.15885, 0.13322, 0.11541, 0.11432, 0.062856, 0.060776, 0.057394, 0.044686, 0.044603, 0.043548, 0.035066, 0.01849, 0.020181, 0.0051905, 0.0052366, 0.0050087, 0.037246, 0.037866, 0.039395, 0.041885, 0.039105, 0.041147, 0.042864, 0.039499, 0.042063, 0.042063, 0.042081, 0.040175, 0.085475, 0.097989, 0.1027, 0.1027, 0.1027, 0.081836, 0.11428, 0.13148, 0.18696, 0.38505, 0.41241, 0.41241, 0.44541, 0.438, 0.42328, 0.4082, 0.39137, 0.39137, 0.38192, 0.44224, 0.50216, 0.51824, 0.51405, 0.46061, 0.44681, 0.44681], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"provoqué la mort": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12662, 0.19324, 0.19478, 0.19639, 0.21262, 0.21266, 0.21266, 0.1548, 0.15199, 0.1594, 0.15942, 0.1593, 0.15932, 0.1656, 0.030291, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34242, 0.39448, 0.36056, 0.45454, 0.45622, 0.45634, 0.47152, 0.44342, 0.44342, 0.4822, 0.4822, 0.45758, 0.45696, 0.45822, 0.35298, 0.30803, 0.32738], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux du golfe": {
men: [0.014502, 0.014492, 0.015132, 0.015132, 0.019192, 0.023193, 0.012165, 0.011945, 0.013323, 0.016504, 0.018676, 0.026777, 0.018045, 0.02091, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.019058, 0.019246, 0.021152, 0.02117, 0.021224, 0.031046, 0.098026, 0.14988, 0.20066, 0.19482, 0.13187, 0.14162, 0.14162, 0.13215, 0.080791, 0.2711, 0.29081, 0.29053, 0.29059, 0.29027, 0.22816, 0.22816, 0.22811, 0.25484, 0.73407, 0.73416, 0.73361, 0.63139, 0.6313, 0, 0, 0, 0, 0, 0, 0, 0.011822, 0.011822, 0.022277, 0.022304, 0.022518, 0.024633, 0.024829, 0.03614, 0.03614, 0.043177, 0.043177, 0.043177, 0.048933, 0.083766, 0.97368, 0.96612, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.096755, 0.096779, 0.096779, 0.11672, 0.14955, 0.14955, 0.14955, 0.95459, 0.95329, 0.95592, 0.95959, 0.95975, 0.95975], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"colmatage de la fuite": {
men: [0.016657, 0.016646, 0.020009, 0.019324, 0.024613, 0.026247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96709, 0.96727, 0.96621, 0.96639, 0.96639, 0.96614, 0.96614, 0.96595, 0.96607, 0.96535, 0.96549, 0.96534, 0.97228, 0.97625, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16314, 0.16318, 0.16318, 0.16322, 0.16322, 0.16322, 0.16322, 0.16279, 0.16257, 0.16302, 0.16364, 0.16367, 0.16367], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pétrole": {
men: [0.09763, 0.096732, 0.11315, 0.11056, 0.11056, 0.051797, 0.033398, 0.033708, 0.032627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.078712, 0.07523, 0.076547, 0.076561, 0.28442, 0.37446, 0.36481, 0.37129, 0.37129, 0.48462, 0.48469, 0.48432, 0.48439, 0.58315, 0.52893, 0.57552, 0.45873, 0.3772, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025482, 0.025052, 0.023769, 0.020817, 0.02015, 0.022055, 0.022704, 0.1073, 0.10727, 0.10727, 0.12767, 0.13793, 0.13762, 0.14837, 0.10905, 0.10259, 0.1049, 0.1439, 0.12824, 0.17587, 0.18324, 0.053695, 0.053704, 0.039145], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fond de la mer": {
men: [0.0071779, 0.021696, 0.029592, 0.045003, 0.088568, 0.088819, 0.04744, 0.012674, 0.011282, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.033369, 0.05632, 0.13869, 0.12742, 0.132, 0.13295, 0.13349, 0.13385, 0.13385, 0.13449, 0.13443, 0.14526, 0.14545, 0.14545, 0.28294, 0.25287, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98038, 0.98038, 0.97943, 0.97943, 0.97943, 0.97979, 0.97979, 0.97979, 0.97062, 0.96568, 0.96541, 0.7911, 0.79149, 0.78969, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dôme de confinement": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1045, 0.10452, 0.1045, 0.10525, 0.10568, 0.10597, 0.10597, 0.10647, 0.10643, 0.10638, 0.10652, 0.10652, 0.10664, 0.10677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97225, 0.9673, 0.96703, 0.96703, 0.9675, 0.9653, 0.96554, 0.96554, 0.96575, 0.96575, 0.96575, 0.96575, 0.9632, 0.96189, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forage pétrolier en haute mer": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.46759, 0.50608, 0.50559, 0.50568, 0.50513, 0.50523, 0.50523, 0.5434, 0.5434, 0.54329, 0.54336, 0.54296, 0.54304, 0.54295, 0.97626, 0.97407, 0.97669, 0.97669, 0.98137, 0.98093, 0.98051, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"haute mer": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060386, 0.086362, 0.12198, 0.25525, 0.36726, 0.33157, 0.20518, 0.23364, 0.2586, 0.2534, 0.25299, 0.25299, 0.24798, 0.24808, 0.10565, 0.10565, 0.10561, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39351, 0.43977, 0.43985, 0.6117, 0.61182, 0.61182, 0.3889, 0.29185, 0.27238, 0.28341, 0.2832, 0.28324, 0.32634, 0.32868, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16728, 0.16728, 0.16728, 0.16734, 0.16734, 0.18777, 0.20682, 0.1992, 0.17765, 0.19559, 0.20429, 0.19338, 0.24579, 0.3197, 0.19915, 0.19915, 0.19915, 0.17367, 0.17321, 0.17297, 0.17345, 0.22251, 0.33067, 0.33067], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fermeture du puits": {
men: [0, 0.040105, 0.040642, 0.041221, 0.052212, 0.066836, 0.070883, 0.075513, 0.080842, 0.086082, 0.091895, 0.097878, 0.077651, 0.081726, 0.086295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96452, 0.96217, 0.96125, 0.96142, 0.96037, 0.96055, 0.96055, 0.9603, 0.9603, 0.96011, 0.96023, 0.37314, 0.3732, 0.37314, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur pétrolier": {
men: [0.1268, 0.15341, 0.15427, 0.16159, 0.1656, 0.1785, 0.18055, 0.19257, 0.13996, 0.17434, 0.1743, 0.17417, 0.19616, 0.24944, 0.11163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24769, 0.24769, 0.24723, 0.30182, 0.82509, 0.84706, 0.84625, 0.8464, 0.84548, 0.41639, 0.38262, 0.39473, 0.4142, 0.41412, 0.33791, 0.33766, 0.33771, 0.33766, 0.17222, 0.093125, 0.08811, 0.08811, 0.088532, 0.12804, 0.11823, 0, 0, 0.010281, 0.0090201, 0.0091067, 0.0081942, 0.0079284, 0.0084395, 0.0089319, 0.0078404, 0.0078404, 0.0078404, 0.0069516, 0.007509, 0.0088728, 0.0078693, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bloc obturateur": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50252, 0.50307, 0.50499, 0.9785, 0.98115, 0.98212, 0.97863, 0.97863, 0.97799, 0.98014, 0.97856, 0.97856, 0.97518, 0.97557, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.014662, 0.014442, 0.013419, 0.013386, 0.014044, 0.014046, 0.014031, 0.014034, 0.014677, 0.015404, 0.018061, 0.026665, 0.038982, 0.16526, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"océanographes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0079959, 0.007901, 0.0080293, 0.0081669, 0.0081878, 0.0081878, 0.0081946, 0.0085572, 0.01062, 0.010756, 0.029642, 0.053886, 0.051084, 0.19089, 0, 0.28715, 0.28645, 0.28618, 0.28623, 0.28592, 0.23379, 0.23379, 0.23373, 0.17124, 0.17121, 0.17123, 0.19646, 0.11448, 0.10227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.234, 0.36971, 0.95691, 0.95712, 0.95712, 0.95712, 0.95712, 0.41763, 0.41706, 0.41822, 0.41982, 0.41989, 0.41989], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes civiles": {
men: [0, 0.0099987, 0.010222, 0.010222, 0.010222, 0.0094012, 0.0093962, 0.0093982, 0.0094065, 0.0095295, 0.0093345, 0.0089295, 0.0092298, 0.009098, 0.009141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.072505, 0.16022, 0.16087, 0.965, 0.965, 0.96962, 0.39502, 0.49459, 0.49522, 0.49522, 0.49577, 0.49638, 0.50115, 0.50115, 0.40327, 0.40327, 0.40327, 0.39948, 0.39948, 0.39948, 0.98002, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alabama": {
men: [0.051566, 0.070806, 0.068098, 0.069893, 0.088621, 0.10556, 0.10319, 0.099825, 0.11662, 0.1275, 0.15197, 0.12905, 0.12919, 0.15124, 0.052361, 0, 0.0407, 0.14801, 0.13689, 0.14605, 0.13858, 0.14216, 0.14521, 0.14471, 0.14476, 0.17816, 0.17816, 0.19851, 0.2101, 0.20152, 0.23222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.050587, 0.050605, 0.15199, 0.16094, 0.17493, 0.17087, 0.17068, 0.17072, 0.44946, 0.85712, 0.85712, 0.85695, 0.85706, 0.66744, 0.58863, 0.33426, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes potentielles": {
men: [0.95992, 0.95929, 0.95935, 0.95935, 0.95935, 0.96206, 0.96154, 0.96175, 0.9626, 0.36143, 0.36135, 0.36106, 0.28993, 0.29103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0.96747, 0.96752, 0.96752, 0.7817, 0.78391, 0.78349, 0.78366, 0.6325, 0.50707, 0.42962, 0.33632, 0.33669, 0.31058, 0.31204, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"stopper la fuite": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11834, 0.19737, 0.32684, 0.32689, 0.32684, 0.32918, 0.33053, 0.33142, 0.59479, 0.99168, 0.99123, 0.99081, 0.99207, 0.99207, 0.98995, 0.61932, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"exploitation pétrolière": {
men: [0, 0.081491, 0.088201, 0.076453, 0.071785, 0.069241, 0.056624, 0.054372, 0.054934, 0.055004, 0.059493, 0.059445, 0.066803, 0.11302, 0.11355, 0, 0.082429, 0.10424, 0.083515, 0.059172, 0.072789, 0.078938, 0.075452, 0.075192, 0.075222, 0.075343, 0.071793, 0.067354, 0.067393, 0.067393, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.057909, 0.21206, 0.24419, 0.24396, 0.244, 0.24373, 0.27542, 0.39506, 0.39495, 0.54022, 0.42223, 0.41307, 0.35847, 0.35852, 0.33797, 0.065274, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15523, 0.15519, 0.15519, 0.12785, 0.14693, 0.11232, 0.18499, 0.18504, 0.18504, 0.18504, 0.18504, 0.18455, 0.1843, 0.1848, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"problèmes respiratoires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.63487, 0.63487, 0.63629, 0.63629, 0.64382, 0.64072, 0.64072, 0.63951, 0.63973, 0.62723, 0.39267, 0.39229, 0.50279, 0.50225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"opérations de dépollution": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97673, 0.97673, 0.9789, 0.46498, 0.47048, 0.46822, 0.46822, 0.46733, 0.46749, 0.45836, 0.45724, 0.45681, 0.45689, 0.45639, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 