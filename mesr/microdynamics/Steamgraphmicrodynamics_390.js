var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"vaccination contre la fièvre jaune": {
men: [0.97349, 0.97454, 0.97216, 0.9725, 0.9727, 0.97311, 0.96957, 0.97354, 0.96826, 0.97227, 0.97347, 0.9731, 0.97101, 0.97147, 0.97076, 0.96966, 0.96981, 0.96936, 0.96964, 0.96857, 0.96846, 0.96369, 0.96422, 0.96378, 0.96411, 0.96413, 0.97494, 0.97786, 0.97784, 0.97532, 0.97601, 0.97643, 0.97586, 0.9775, 0.97729, 0.9797, 0.98034, 0.98001, 0.98001, 0.97993, 0.97887, 0.97672, 0.97719, 0.97899, 0.98011, 0.98011, 0.98053, 0.97885, 0.98126, 0.97687, 0.97831, 0.97696, 0.97641, 0.97667, 0.97652, 0.97717, 0.97676, 0.97809, 0.97782, 0.97782, 0.9779, 0.98083, 0.98046, 0.98445, 0.97936, 0.98181, 0.98313, 0.98281, 0.98378, 0.98263, 0.98214, 0.97667, 0.97302, 0.97302, 0.97313, 0.97393, 0.97371, 0.97361, 0.97503, 0.97476, 0.97407, 0.97418, 0.97401, 0.97223, 0.97287, 0.97468, 0.97779, 0.97749, 0.97749, 0.97535, 0.97155, 0.97171, 0.96844, 0.96508, 0.96556, 0.96556, 0.96117, 0.96821, 0.9684, 0.97083, 0.96739, 0.96637, 0.96541, 0.96858, 0.96949, 0.97132, 0.97061, 0.96826, 0.96852, 0.96824], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espoir thérapeutique": {
men: [0.97349, 0.97454, 0.97216, 0.9725, 0.9727, 0.97311, 0.96957, 0.97354, 0.96826, 0.97227, 0.97347, 0.9731, 0.97101, 0.97147, 0.97076, 0.96966, 0.52094, 0.52069, 0.52084, 0.52027, 0.52021, 0.39239, 0.39261, 0.38159, 0.38172, 0.38173, 0.58945, 0.66504, 0.66503, 0.66332, 0.97601, 0.97643, 0.97586, 0.9775, 0.97729, 0.9797, 0.98034, 0.98001, 0.77408, 0.77402, 0.73603, 0.71167, 0.71201, 0.71333, 0.71779, 0.71779, 0.7181, 0.73565, 0.73933, 0.70333, 0.73025, 0.70321, 0.97641, 0.97667, 0.97652, 0.97717, 0.97676, 0.97809, 0.97782, 0.97782, 0.9779, 0.98083, 0.98046, 0.98445, 0.97936, 0.98181, 0.98313, 0.98281, 0.98378, 0.98263, 0.98214, 0.97667, 0.97302, 0.97302, 0.97313, 0.97393, 0.97371, 0.97361, 0.97503, 0.97476, 0.97407, 0.97418, 0.97401, 0.97223, 0.97287, 0.97468, 0.97779, 0.97749, 0.97749, 0.97535, 0.97155, 0.97171, 0.96844, 0.96508, 0.96556, 0.96556, 0.96117, 0.96821, 0.9684, 0.97083, 0.96739, 0.96637, 0.96541, 0.96858, 0.96949, 0.97132, 0.97061, 0.96826, 0.96852, 0.96824], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"efficacité virologique": {
men: [0.97349, 0.97454, 0.97216, 0.9725, 0.9727, 0.44324, 0.32874, 0.43342, 0.32497, 0.4261, 0.42663, 0.42647, 0.42555, 0.4031, 0.4028, 0.40235, 0.40241, 0.40222, 0.40234, 0.96857, 0.96846, 0.96369, 0.96422, 0.96378, 0.96411, 0.96413, 0.97494, 0.97786, 0.97784, 0.97532, 0.97601, 0.97643, 0.97586, 0.9775, 0.97729, 0.9797, 0.98034, 0.98001, 0.98001, 0.97993, 0.97887, 0.97672, 0.97719, 0.97899, 0.98011, 0.98011, 0.98053, 0.97885, 0.98126, 0.97687, 0.97831, 0.97696, 0.97641, 0.97667, 0.97652, 0.97717, 0.97676, 0.97809, 0.97782, 0.97782, 0.9779, 0.98083, 0.98046, 0.98445, 0.97936, 0.98181, 0.98313, 0.98281, 0.98378, 0.98263, 0.98214, 0.97667, 0.97302, 0.97302, 0.97313, 0.88707, 0.88621, 0.88611, 0.88987, 0.88484, 0.88421, 0.74099, 0.73378, 0.69872, 0.69918, 0.70048, 0.70272, 0.7025, 0.7025, 0.74594, 0.69209, 0.6922, 0.61479, 0.52898, 0.52925, 0.96556, 0.96117, 0.96821, 0.9684, 0.97083, 0.96739, 0.96637, 0.96541, 0.96858, 0.96949, 0.97132, 0.97061, 0.96826, 0.96852, 0.96824], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Préservatif masculin": {
men: [0.97349, 0.97454, 0.97216, 0.9725, 0.9727, 0.97311, 0.96957, 0.97354, 0.96826, 0.97227, 0.97347, 0.9731, 0.97101, 0.97147, 0.44264, 0.44214, 0.44221, 0.44201, 0.44214, 0.44165, 0.4416, 0.31954, 0.31971, 0.30965, 0.21811, 0.21812, 0.32486, 0.40087, 0.54688, 0.54547, 0.49467, 0.49488, 0.49459, 0.49542, 0.5442, 0.61135, 0.633, 0.63435, 0.72332, 0.72326, 0.66926, 0.64165, 0.64195, 0.64314, 0.76926, 0.76926, 0.76959, 0.78437, 0.78789, 0.75627, 0.77967, 0.75618, 0.75575, 0.75596, 0.97652, 0.97717, 0.97676, 0.97809, 0.97782, 0.97782, 0.9779, 0.98083, 0.98046, 0.98445, 0.97936, 0.98181, 0.98313, 0.98281, 0.98378, 0.84484, 0.84442, 0.83972, 0.82131, 0.82131, 0.82139, 0.6635, 0.66157, 0.48146, 0.48977, 0.47501, 0.47467, 0.47473, 0.46503, 0.46284, 0.46314, 0.464, 0.46548, 0.46534, 0.46534, 0.53661, 0.46856, 0.97171, 0.96844, 0.96508, 0.96556, 0.96556, 0.96117, 0.96821, 0.9684, 0.97083, 0.96739, 0.96637, 0.96541, 0.96858, 0.96949, 0.97132, 0.97061, 0.96826, 0.96852, 0.96824], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Hépatite virale": {
men: [0.24686, 0.24713, 0.20238, 0.20245, 0.20249, 0.24459, 0.11278, 0.1834, 0.12345, 0.19372, 0.19395, 0.19388, 0.19347, 0.1792, 0.17907, 0.16535, 0.16538, 0.1653, 0.16535, 0.18896, 0.52312, 0.39521, 0.39543, 0.21272, 0.21279, 0.21279, 0.38789, 0.37805, 0.37804, 0.41597, 0.45784, 0.45804, 0.45777, 0.45854, 0.50751, 0.57603, 0.59842, 0.7937, 0.7937, 0.79364, 0.75816, 0.97672, 0.97719, 0.97899, 0.98011, 0.98011, 0.98053, 0.97885, 0.98126, 0.97687, 0.97831, 0.97696, 0.97641, 0.97667, 0.97652, 0.97717, 0.97676, 0.97809, 0.97782, 0.97782, 0.9779, 0.77388, 0.76629, 0.74169, 0.69188, 0.7371, 0.73809, 0.73785, 0.61022, 0.49013, 0.48989, 0.48716, 0.45508, 0.45508, 0.45513, 0.5194, 0.37374, 0.35252, 0.3601, 0.34648, 0.25081, 0.25084, 0.26639, 0.26546, 0.26563, 0.26612, 0.26698, 0.26689, 0.26689, 0.25326, 0.25995, 0.28312, 0.21691, 0.16178, 0.52925, 0.52925, 0.40265, 0.57171, 0.57182, 0.22107, 0.1975, 0.19729, 0.17074, 0.17732, 0.19012, 0.23441, 0.23424, 0.23367, 0.21433, 0.21427], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"col de l' utérus": {
men: [0.1175, 0.11763, 0.068604, 0.068627, 0.068641, 0.068671, 0.043136, 0.066094, 0.042449, 0.093289, 0.093404, 0.11605, 0.10791, 0.15911, 0.15899, 0.15881, 0.57922, 0.57895, 0.57911, 0.57847, 0.57841, 0.45044, 0.45069, 0.43928, 0.19515, 0.19516, 0.31887, 0.39432, 0.39431, 0.32752, 0.36628, 0.36643, 0.31644, 0.26913, 0.30999, 0.37255, 0.39463, 0.39614, 0.44295, 0.44292, 0.45879, 0.42846, 0.42867, 0.50179, 0.507, 0.507, 0.60876, 0.83591, 0.68051, 0.64045, 0.67064, 0.64031, 0.73724, 0.67294, 0.59554, 0.59324, 0.59299, 0.59379, 0.58307, 0.58307, 0.52116, 0.52388, 0.56733, 0.53134, 0.47026, 0.52643, 0.52714, 0.57846, 0.70865, 0.71106, 0.71071, 0.70675, 0.67921, 0.67921, 0.81283, 0.76692, 0.3602, 0.36016, 0.3232, 0.31028, 0.31006, 0.31009, 0.30175, 0.23861, 0.23877, 0.23921, 0.23997, 0.2399, 0.2399, 0.22062, 0.41129, 0.41136, 0.51197, 0.21729, 0.2174, 0.2174, 0.14155, 0.34332, 0.34339, 0.34425, 0.42423, 0.42378, 0.42336, 0.22247, 0.22268, 0.19389, 0.19375, 0.22627, 0.22633, 0.13456], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"acides aminés": {
men: [0.06005, 0.060115, 0.060122, 0.060143, 0.058677, 0.21927, 0.21954, 0.19615, 0.19599, 0.19595, 0.19619, 0.21694, 0.37571, 0.5071, 0.5639, 0.56326, 0.56335, 0.56308, 0.57191, 0.42727, 0.42722, 0.67587, 0.73638, 0.73639, 0.73663, 0.77883, 0.6031, 0.60292, 0.38944, 0.38844, 0.37874, 0.35034, 0.35014, 0.37119, 0.37037, 0.32527, 0.23133, 0.23124, 0.20838, 0.090174, 0.29938, 0.26445, 0.30584, 0.30641, 0.29341, 0.32353, 0.42603, 0.35721, 0.35805, 0.40871, 0.32897, 0.28929, 0.27811, 0.27818, 0.12003, 0.13801, 0.12715, 0.12732, 0.12734, 0.12734, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.070179, 0.070225, 0.12648, 0.73554, 0.73532, 0.59374, 0.59332, 0.59262, 0.59271, 0.44487, 0.44492, 0.35623, 0.35623, 0.3705, 0.1862, 0.18624, 0.022433, 0.022275, 0.018835, 0.094817, 0.094847, 0.094936, 0.094864, 0.11543, 0.11516, 0.14725, 0.14721], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cd4": {
men: [0.01097, 0.010981, 0.015512, 0.015518, 0.017882, 0.033256, 0.045274, 0.068902, 0.084253, 0.2734, 0.27373, 0.5923, 0.59102, 0.49623, 0.29719, 0.29685, 0.2969, 0.29676, 0.41709, 0.41663, 0.41658, 0.41671, 0.29674, 0.29674, 0.29684, 0.29685, 0.29765, 0.45708, 0.21873, 0.21817, 0.10485, 0.1049, 0.10484, 0.10501, 0.10478, 0.10475, 0.06234, 0.059278, 0.059278, 0.059274, 0.051225, 0.042854, 0.046385, 0.04647, 0.049507, 0.047452, 0.047472, 0.044665, 0.04477, 0.06571, 0.12887, 0.12335, 0.12327, 0.12331, 0.14866, 0.12916, 0.12911, 0.12928, 0.16116, 0.1873, 0.18732, 0.3183, 0.39516, 0.3318, 0.34121, 0.5106, 0.46665, 0.42863, 0.33894, 0.35758, 0.3574, 0.35458, 0.35369, 0.35369, 0.35373, 0.25618, 0.15781, 0.12947, 0.13476, 0.13334, 0.12744, 0.12492, 0.14845, 0.13574, 0.12623, 0.10549, 0.10583, 0.1058, 0.1058, 0.1217, 0.13775, 0.18588, 0.1379, 0.14527, 0.18455, 0.17912, 0.1146, 0.11464, 0.17421, 0.15064, 0.2451, 0.24484, 0.32189, 0.3239, 0.32421, 0.30476, 0.30454, 0.3038, 0.30388, 0.35007], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"charge virale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12564, 0.12579, 0.15591, 0.15557, 0.15579, 0.15568, 0.1555, 0.15553, 0.15546, 0.16883, 0.46742, 0.46737, 0.46751, 0.37795, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22115, 0.95745, 0.95922, 0.33459, 0.33459, 0.33473, 0.33383, 0.23816, 0.2375, 0.23753, 0.23753, 0.23739, 0.23746, 0.17665, 0, 0, 0, 0, 0, 0, 0.24229, 0.36762, 0.3697, 0.52991, 0.53005, 0.45466, 0.39692, 0.6004, 0.5996, 0.5993, 0.14245, 0.1251, 0.1251, 0.12511, 0.094199, 0.061025, 0.054907, 0.061231, 0.070946, 0.068848, 0.067316, 0.083031, 0.083028, 0.083082, 0.10638, 0.11229, 0.11226, 0.11226, 0.1011, 0.17394, 0.22547, 0.14409, 0.17747, 0.31557, 0.95689, 0, 0.96152, 0.96171, 0.34536, 0.34293, 0.21197, 0.21176, 0.21182, 0.21202, 0.19027, 0.19013, 0.18967, 0.18972, 0.17213], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risques d' infection": {
men: [0.024305, 0.024331, 0.024334, 0.024342, 0.040857, 0.057931, 0.34914, 0.22055, 0, 0, 0, 0, 0, 0.041424, 0.11974, 0.1196, 0.11962, 0.11957, 0.1196, 0.096424, 0.084925, 0.093155, 0.093206, 0.14649, 0.14654, 0.11124, 0.083782, 0.072023, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48373, 0.40271, 0.2608, 0.35778, 0.35812, 0.35812, 0.35827, 0.42069, 0.42168, 0.42052, 0.42057, 0.42056, 0.42032, 0.42044, 0.14586, 0.31922, 0.96289, 0.9642, 0.96437, 0.96437, 0.96445, 0.96108, 0.96114, 0.96658, 0.96388, 0.96413, 0.96543, 0.96511, 0.96458, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte contre le vih": {
men: [0.10824, 0.11522, 0.094735, 0.094768, 0.10304, 0.094523, 0.068618, 0.11535, 0.084506, 0.12511, 0.12526, 0.12521, 0.12494, 0.11498, 0.15708, 0.13441, 0.12484, 0.12083, 0.12087, 0.10626, 0.11573, 0.07701, 0.077052, 0.073766, 0.07201, 0.072012, 0.13634, 0.16512, 0.18551, 0.1621, 0.19646, 0.20128, 0.20116, 0.27843, 0.25067, 0.30667, 0.32693, 0.32834, 0.33359, 0.33356, 0.29688, 0.27322, 0.27335, 0.32259, 0.32707, 0.32707, 0.32721, 0.28686, 0.33663, 0.29819, 0.27962, 0.25287, 0.25273, 0.25279, 0.19086, 0.19186, 0.19178, 0.16863, 0.16239, 0.16239, 0.1624, 0.17553, 0.19133, 0.15694, 0.1454, 0.17585, 0.17609, 0.17603, 0.2483, 0.18735, 0.17109, 0.24322, 0.18709, 0.18709, 0.17287, 0.17593, 0.14109, 0.11362, 0.11646, 0.11136, 0.11128, 0.11129, 0.10289, 0.10277, 0.10867, 0.089435, 0.10055, 0.10052, 0.10698, 0.1061, 0.11218, 0.23983, 0.18111, 0.13347, 0.13354, 0.13354, 0.31539, 0.96821, 0.9684, 0.070638, 0.049945, 0.049893, 0.04797, 0.053337, 0.051783, 0.066573, 0.066524, 0.066363, 0.066381, 0.066362], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déficit immunitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96195, 0.96166, 0.96164, 0.95916, 0.95819, 0.9586, 0.95804, 0.33379, 0.33305, 0.33294, 0.33285, 0.33271, 0.33271, 0.33269, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17869, 0.17871, 0.13452, 0.13444, 0.13448, 0.13446, 0.13456, 0.13451, 0.15756, 0.25217, 0.25217, 0.25219, 0.25293, 0.25295, 0.22443, 0.22381, 0.45839, 0.45901, 0.45886, 0.4586, 0.45799, 0.45776, 0.95595, 0, 0, 0, 0, 0, 0, 0.26235, 0.17966, 0.17953, 0.17955, 0.17959, 0.17959, 0.1797, 0.18004, 0.18061, 0.18056, 0.18056, 0.20534, 0.2051, 0.35822, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sérotonine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.83746, 0.90159, 0.90117, 0.9682, 0.96713, 0.96702, 0.96732, 0.96785, 0.96786, 0.96819, 0.96822, 0.97081, 0.97051, 0.97049, 0.96131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9655, 0.23159, 0.23165, 0.13217, 0.13227, 0.13222, 0.1324, 0.13242, 0.13242, 0.13243, 0.13282, 0.13283, 0.13358, 0.13321, 0.012161, 0.022414, 0.022407, 0.13354, 0.13337, 0.049904, 0.049626, 0.049502, 0.049502, 0.049507, 0.04948, 0.049474, 0.032201, 0.032238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053017, 0.031723, 0.031729, 0.040132, 0.072548, 0.072471, 0.072399, 0.038754, 0.03879, 0.029725, 0.029703, 0.029631, 0.029639, 0.029631], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"antigène": {
men: [0.9694, 0.97045, 0.96648, 0.96681, 0.96701, 0.95122, 0.9524, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092295, 0.15187, 0.12677, 0.12677, 0.12677, 0.1478, 0.13792, 0.13799, 0.12881, 0.066858, 0.066858, 0.066886, 0.070477, 0.081877, 0.065835, 0.032337, 0.029085, 0.022937, 0.022943, 0.02294, 0.021737, 0.021728, 0.023878, 0.040685, 0.040685, 0.040688, 0.040808, 0.04081, 0, 0.041672, 0.13622, 0.35964, 0.35952, 0.35932, 0.97057, 0.97009, 0.60963, 0.60811, 0.60811, 0.60818, 0.49137, 0.4913, 0.49124, 0.36215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.47215, 0.31381, 0.21746, 0.13311, 0.13301, 0.13269, 0.13273, 0.13269], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"données épidémiologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13764, 0.1375, 0.13757, 0.13782, 0.15311, 0.15311, 0.15317, 0.19101, 0.19146, 0.97205, 0.97216, 0.70296, 0.70256, 0.70275, 0.49294, 0.49333, 0.49312, 0.49379, 0.49388, 0.49388, 0.49392, 0.34845, 0.34847, 0, 0.30857, 0.96298, 0.96427, 0.96396, 0.097975, 0.097844, 0.097796, 0.097251, 0.097009, 0.097009, 0.097019, 0.074675, 0.074664, 0.06233, 0, 0.056388, 0.056348, 0.056355, 0.13467, 0.13466, 0.13475, 0.135, 0.13543, 0.13539, 0.13539, 0.2513, 0.251, 0.95676, 0.95692, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"génome humain": {
men: [0.092169, 0.12059, 0.1206, 0.12064, 0.12067, 0.12072, 0.12087, 0.29986, 0.29962, 0.29955, 0.61209, 0.61186, 0.61054, 0.51892, 0.96026, 0.95918, 0.95933, 0.31963, 0.31972, 0.19162, 0.1916, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.014605, 0.014624, 0.016239, 0.01623, 0.017409, 0.017401, 0.94305, 0.9407, 0.9407, 0.9408, 0.94029, 0.94015, 0.94006, 0.94113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092483, 0.092512, 0.14164, 0.14153, 0.14143, 0.14109, 0.21287, 0.21281], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"glucose": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071064, 0.071166, 0.068001, 0.10489, 0.090267, 0.093666, 0.094255, 0.15398, 0.13382, 0.19286, 0.20909, 0.23443, 0.20619, 0.20619, 0.083222, 0.083197, 0.089603, 0.080607, 0.12169, 0.12174, 0.12167, 0.04401, 0.05736, 0.053624, 0.053609, 0.10219, 0.12205, 0.12204, 0.20936, 0.19257, 0.19266, 0.2646, 0.15764, 0.15764, 0.32663, 0.27692, 0.27757, 0.28027, 0.28031, 0.28766, 0.28749, 0.24904, 0.249, 0.2131, 0.069166, 0.062831, 0.066194, 0.066194, 0.026674, 0.021649, 0.020625, 0.021627, 0.021566, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.062089, 0.062089, 0.062045, 0.061972, 0.059178, 0.059188, 0.10965, 0.1097, 0.1097, 0.19912, 0.19919, 0.19923, 0.47493, 0.80942, 0.78774, 0.78695, 0.78721, 0.78794, 0.72588, 0.72534, 0.68229, 0.59489, 0.52013], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"muqueuses": {
men: [0.56333, 0.56394, 0.48966, 0.48983, 0.37844, 0.29418, 0.29455, 0.3121, 0.31185, 0.26511, 0.26544, 0.26534, 0.24846, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098291, 0.098038, 0.17748, 0.16184, 0.16174, 0.13642, 0.13612, 0.17178, 0.17173, 0.17166, 0.17166, 0.17165, 0.22219, 0.17497, 0.084829, 0.084985, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.011986, 0.011441, 0.013807, 0.065284, 0.28133, 0.33283, 0.48603, 0.64215, 0.68207, 0.68215, 0.47314, 0.50118, 0.50113, 0.5017, 0.49776, 0.51422, 0.51427, 0.54459, 0.39243, 0.31627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22968, 0.22974, 0.29848], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réactions chimiques": {
men: [0, 0.069815, 0.069824, 0.060352, 0.087355, 0.22005, 0.17465, 0.15947, 0.17941, 0.17937, 0.1796, 0.17953, 0.17914, 0.21064, 0.21048, 0.14812, 0.14814, 0.17885, 0.17891, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21407, 0.36014, 0.71054, 0.71084, 0.71043, 0.53236, 0.35321, 0.20715, 0.20709, 0.20701, 0.19028, 0.19026, 0.19046, 0.19386, 0.15791, 0.1582, 0, 0, 0.10578, 0.11638, 0.147, 0.22416, 0.17646, 0.17645, 0.20508, 0.20513, 0.2051, 0.19354, 0.19346, 0.19372, 0.16856, 0.16856, 0, 0, 0, 0, 0, 0.029206, 0.029245, 0.15687, 0.13636, 0.15721, 0.15713, 0.15625, 0.21819, 0.21819, 0.21822, 0.2181, 0.17335, 0.14125, 0.18035, 0.19292, 0.19278, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.036869, 0.16215, 0.13805, 0.13839, 0.13742, 0.13727, 0.13714, 0.13718, 0.11602, 0.18932, 0.28821, 0.28751, 0.28759, 0.2875], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"globules blancs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14888, 0.43441, 0.43421, 0.43433, 0.37742, 0.48351, 0.48366, 0.48393, 0.7259, 0.72614, 0.72616, 0.7281, 0.72788, 0.72787, 0.57678, 0.5511, 0.55133, 0.55101, 0.96078, 0.47325, 0.4731, 0.47297, 0.47278, 0.47278, 0.47274, 0.47325, 0.34619, 0.2284, 0.22883, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque infectieux": {
men: [0.090337, 0.11574, 0.11575, 0.11579, 0.27988, 0.28, 0.28035, 0.19666, 0.1965, 0.19646, 0.1967, 0.19663, 0.19621, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10921, 0.10921, 0.10926, 0.10896, 0.10922, 0.95849, 0.9586, 0.95859, 0.95804, 0.9583, 0.95815, 0.95891, 0.9585, 0.9598, 0, 0, 0, 0, 0, 0, 0.18963, 0.18968, 0.18993, 0.18987, 0.18977, 0.11154, 0.11148, 0.11086, 0.11059, 0.11059, 0.1106, 0.11054, 0.11052, 0.12126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.042894, 0.047598, 0.13213, 0.13203, 0.086733, 0.086756, 0.086731], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaisseaux sanguins": {
men: [0.12868, 0.12882, 0.12883, 0.12888, 0.12703, 0.073199, 0.068907, 0.05512, 0.055076, 0.048354, 0.048414, 0.041343, 0.053628, 0.043397, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045746, 0.045629, 0.12779, 0.11592, 0.11586, 0.11605, 0.24511, 0.28377, 0.28369, 0.31947, 0.31947, 0.33352, 0.33388, 0.33355, 0.58251, 0.58358, 0.50526, 0.66535, 0.66563, 0.66383, 0.52772, 0.56883, 0.5689, 0.37746, 0.37724, 0.37734, 0.35766, 0.35794, 0.19144, 0.1917, 0.05902, 0.05902, 0.049905, 0.050052, 0.044159, 0.044409, 0.044285, 0.010214, 0.010228, 0.010224, 0.010407, 0.0095904, 0.0095857, 0.008679, 0.016323, 0.016323, 0.022138, 0.022126, 0.029987, 0.029984, 0.030019, 0, 0, 0, 0, 0, 0, 0, 0, 0.030019, 0.029346, 0.028321, 0.029034, 0.028408, 0.027019, 0.02643, 0.026443, 0.026443, 0.0308, 0.047774, 0.051396, 0.06873, 0.15514, 0.085891, 0.09436, 0.11208, 0.10003, 0.095307, 0.12515, 0.14578, 0.14582, 0.14578], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cas d' infection": {
men: [0.080359, 0.080446, 0.080456, 0.080484, 0.0805, 0.09894, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3428, 0.38564, 0.08655, 0.086633, 0.086633, 0.086669, 0.072391, 0.044374, 0.044252, 0.044257, 0.033245, 0.033227, 0.033236, 0.03323, 0, 0, 0, 0, 0, 0, 0, 0.079948, 0.080401, 0.080176, 0.16908, 0.16931, 0.16925, 0.27152, 0.27115, 0.27102, 0.26951, 0.45956, 0.45956, 0.96298, 0.96246, 0.95472, 0.46122, 0.2598, 0.2101, 0.20995, 0.20997, 0.188, 0.18799, 0.18811, 0.18846, 0.18907, 0.18901, 0.18901, 0.18887, 0.18865, 0.2131, 0.27167, 0.95641, 0.95689, 0.95689, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"organismes eucaryotes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2296, 0.2296, 0.35098, 0.35099, 0.35193, 0.28244, 0.24284, 0.24221, 0.24196, 0.24207, 0.24193, 0.2245, 0.224, 0.22393, 0, 0.15365, 0.15365, 0.15364, 0.15381, 0.14066, 0.23933, 0.23977, 0.24, 0.24, 0.2401, 0.36193, 0.36278, 0.23176, 0.23179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95394, 0.95424, 0.95514, 0.9544, 0.9537, 0.95139, 0.95165, 0.36411], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pelotes microscopiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2296, 0.2296, 0.35098, 0.35099, 0.35193, 0.28244, 0.24284, 0.24221, 0.24196, 0.24207, 0.24193, 0.2245, 0.224, 0.22393, 0, 0.15365, 0.15365, 0.15364, 0.15381, 0.14066, 0.23933, 0.23977, 0.24, 0.24, 0.2401, 0.36193, 0.36278, 0.23176, 0.23179, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95394, 0.95424, 0.95514, 0.9544, 0.9537, 0.95139, 0.95165, 0.36411], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"accidents corporels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96706, 0.97015, 0.96986, 0.96986, 0.96917, 0.96802, 0.96819, 0.96835, 0.96847, 0.96895, 0.96895, 0.96958, 0.96993, 0.97012, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"élevage bio": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95643, 0.9563, 0.9562, 0.95729, 0.9576, 0.95693, 0.95704, 0.95725, 0.95721, 0.95783, 0.95961, 0.96268, 0.96239, 0.96239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"origine porcine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95267, 0.95263, 0.95325, 0.95502, 0.95808, 0.95778, 0.95778, 0.9571, 0.95597, 0.95613, 0.9563, 0.95641, 0.95689, 0.95689, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"accidents domestiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97351, 0.97362, 0.97383, 0.97379, 0.97443, 0.97624, 0.97936, 0.97906, 0.97906, 0.97837, 0.88951, 0.88966, 0.88981, 0.88992, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 