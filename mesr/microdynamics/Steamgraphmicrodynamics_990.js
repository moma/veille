var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"loi européenne": {
men: [0, 0.21014, 0.25117, 0.25101, 0.25099, 0.251, 0.25102, 0.25112, 0.22887, 0.2288, 0.22874, 0.22872, 0.22879, 0.22861, 0.25033, 0.16011, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.097919, 0.098006, 0.098133, 0.1063, 0.12919, 0.22211, 0.29855, 0.29839, 0.29832, 0.31266, 0.31136, 0.39371, 0.20147, 0.19706, 0.17948, 0.17946, 0.18507, 0.18505, 0.19363, 0.14699, 0.13757, 0.13763, 0.13771, 0.13784, 0.16416, 0.18684, 0.35027, 0.35159, 0.35166, 0.35189, 0.35431, 0.35452, 0.36612, 0.53195, 0.5309, 0.52332, 0.52334, 0.49864, 0.43001, 0.19241, 0.16491, 0.51159, 0.51165, 0.5117, 0.51211, 0.54599, 0.51205, 0.51235, 0.51406, 0.51953, 0.51942, 0.53788, 0.55508, 0.5554, 0.6943, 0.44646, 0.44644, 0.44641, 0.44669, 0.26868, 0.48179, 0.48318, 0.35967, 0.32168, 0.32175, 0.29141, 0.13298, 0.13321, 0.08685, 0.072068, 0.072098, 0.071357], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"violents incidents": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063559, 0.063429, 0.063418, 0.076319, 0.93485, 0.93455, 0.93418, 0.95009, 0.95013, 0.95029, 0.95028, 0.94968, 0.95052, 0.95175, 0.95092, 0.95268, 0.95139, 0.95194, 0.95144, 0.9512, 0.95063, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.246, 0.24614, 0.24638, 0.63937, 0.64078, 0.64125, 0.64176, 0.64189, 0.64231, 0.64303, 0.64341, 0.64444, 0.94424, 0.94239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communauté catholique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65071, 0.63417, 0.63287, 0.70632, 0.70593, 0.70589, 0.70566, 0.70538, 0.54528, 0.5453, 0.54539, 0.56458, 0.56422, 0.56473, 0.53127, 0.3713, 0.37199, 0, 0, 0.12295, 0.12292, 0.11152, 0.63009, 0.62903, 0.62863, 0.62842, 0.29925, 0.29921, 0.29902, 0.32761, 0.38221, 0.3827, 0.38278, 0.32463, 0.32482, 0.35293, 0.13363, 0.13392, 0.13402, 0.13413, 0.93907, 0.9397, 0.94074, 0.94129, 0, 0.9457, 0.13484, 0.13479, 0.1348, 0.13483, 0.1349, 0.13508, 0.13088, 0.13096, 0.13097, 0.13099, 0.12482, 0.12471, 0.12469, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"commission sénatoriale": {
men: [0.035349, 0.035244, 0.030988, 0.030969, 0, 0, 0, 0.10187, 0.49848, 0.50711, 0.62647, 0.62643, 0.62662, 0.62612, 0.70522, 0.70501, 0.76234, 0.76274, 0.7625, 0.76197, 0.76114, 0.74427, 0.28596, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92898, 0.92973, 0.9299, 0.93052, 0.93156, 0.93211, 0.93361, 0.93268, 0.93085, 0.93057, 0.93062, 0.93084, 0.93128, 0.93255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"législation européenne": {
men: [0.060675, 0.090547, 0.14829, 0.36114, 0.36112, 0.36113, 0.45556, 0.40908, 0.42925, 0.49321, 0.49308, 0.49305, 0.49938, 0.45811, 0.5319, 0.53262, 0.53523, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12302, 0.087682, 0.134, 0.1669, 0.16602, 0.16597, 0.17011, 0.16797, 0.15966, 0.15054, 0.14327, 0.14318, 0.14293, 0.1346, 0.13406, 0.13896, 0.12955, 0.051664, 0.067397, 0.066562, 0.10283, 0.16672, 0.31113, 0.25414, 0.24633, 0.24648, 0.24452, 0.25952, 0.25877, 0.26223, 0.26412, 0.25962, 0.25894, 0.26038, 0.24475, 0.22515, 0.19856, 0.20699, 0.23417, 0.23422, 0.24193, 0.23959, 0.24103, 0.24252, 0.24495, 0.25521, 0.2644, 0.26441, 0.26656, 0.26409, 0.19827, 0.35085, 0.1984, 0.14973, 0.12592, 0.12606, 0.11873, 0.11474, 0.1223, 0.1227, 0.11374, 0.11372, 0.11028, 0.10996, 0.11213, 0.11455, 0.082127, 0.098697, 0.10752, 0.10966, 0.11092, 0.15376, 0.15684, 0.15226, 0.13698, 0.13701, 0.13967, 0.14525, 0.14549, 0.14034, 0.13275, 0.13281, 0.13243], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"abattage rituel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4226, 0.59465, 0.6565, 0.6561, 0.60464, 0.60362, 0.60323, 0.77486, 0.77531, 0.73006, 0.72958, 0.72952, 0.80869, 0.80973, 0.75187, 0.61207, 0.356, 0.35636, 0.57715, 0.57843, 0.57885, 0.57932, 0.57943, 0.9397, 0.94074, 0.94129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"conditions sanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1147, 0.12191, 0.12189, 0.12158, 0.12453, 0.14566, 0.18324, 0.45053, 0.45028, 0.45025, 0.45011, 0.84997, 0.93701, 0.92223, 0.91091, 0.9109, 0.91031, 0.91113, 0.93879, 0.93979, 0.94154, 0.94025, 0.9408, 0.9403, 0.94007, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098405, 0.098561, 0.059054, 0.059097, 0.059144, 0.059155, 0.059195, 0.062841, 0.089636, 0.089781, 0.089692, 0.089516, 0.092643, 0.092648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits agrochimiques": {
men: [0, 0, 0, 0, 0, 0.95576, 0.95833, 0.95871, 0.96051, 0.96021, 0.95996, 0.95991, 0.9602, 0.95944, 0.95942, 0.95913, 0.96069, 0.96119, 0.96089, 0.95155, 0.94503, 0.9436, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"responsabilité des laboratoires": {
men: [0, 0, 0, 0, 0, 0, 0, 0.94553, 0.84903, 0.8579, 0.85768, 0.85762, 0.85788, 0.8572, 0.85719, 0.85693, 0.85832, 0.85877, 0.8585, 0.85791, 0.85697, 0.84785, 0.94231, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété publique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49312, 0.49248, 0.65453, 0.75137, 0.75096, 0.75092, 0.75068, 0.93797, 0.93758, 0.61431, 0.61441, 0.31736, 0.31716, 0.31744, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.59033, 0.58975, 0.52544, 0.52528, 0.5253, 0.52543, 0.39767, 0.39821, 0.3988, 0.39904, 0.53442, 0.53448, 0.53491, 0.53446, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"directive européenne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075056, 0.078203, 0.072135, 0.068491, 0.10829, 0.24396, 0.25872, 0.12018, 0.12622, 0.11813, 0.15353, 0.13482, 0.13446, 0.1969, 0.19215, 0.19107, 0.19544, 0.19367, 0.16911, 0.13198, 0.12525, 0.18288, 0.18392, 0.19431, 0.1525, 0.5351, 0.5975, 0.58258, 0.5593, 0.55888, 0.53155, 0.51233, 0.494, 0.50065, 0.50985, 0.50414, 0.50095, 0.48964, 0.43626, 0.18886, 0.097811, 0.08648, 0.1132, 0.11063, 0.11964, 0.12287, 0.13004, 0.12585, 0.13115, 0.13205, 0.14175, 0.14507, 0.15653, 0.14637, 0.12683, 0.089405, 0.02934, 0.044947, 0.035027, 0.033463, 0.071873, 0.10962, 0.1145, 0.1134, 0.1027, 0.10242, 0.10398, 0.15122, 0.1454, 0.14675, 0.1539, 0.14857, 0.14856, 0.16398, 0.13051, 0.045142, 0.011361, 0.0058077, 0.0057645, 0.0057225, 0.012966, 0.012942, 0.014005, 0.014797, 0.014566, 0.015028, 0.014821], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etats membres": {
men: [0.033167, 0.042418, 0.050133, 0.050837, 0.050425, 0.050747, 0.05239, 0.044748, 0.043383, 0.050525, 0.050093, 0.062086, 0.052119, 0.054791, 0.037755, 0.044834, 0.037602, 0.037446, 0.037163, 0.038519, 0.039614, 0.03788, 0.056932, 0.037037, 0.030607, 0.03953, 0.048379, 0.10162, 0.16908, 0.13639, 0.15584, 0.15123, 0.15227, 0.14904, 0.14542, 0.16266, 0.16474, 0.17989, 0.20643, 0.20795, 0.20806, 0.20261, 0.2004, 0.32509, 0.34318, 0.35575, 0.3578, 0.36106, 0.39916, 0.38966, 0.39077, 0.37412, 0.3599, 0.34948, 0.33138, 0.31978, 0.31179, 0.26554, 0.25781, 0.25144, 0.24945, 0.24134, 0.22103, 0.13804, 0.11003, 0.1011, 0.10433, 0.1142, 0.11821, 0.12635, 0.10843, 0.12269, 0.11601, 0.11906, 0.12, 0.12226, 0.10827, 0.11434, 0.091665, 0.067605, 0.067996, 0.06208, 0.057635, 0.054538, 0.042214, 0.0055023, 0.03449, 0.036066, 0.035957, 0.031659, 0.035974, 0.041357, 0.037469, 0.036088, 0.035279, 0.034994, 0.038913, 0.039027, 0.042767, 0.041591, 0.0062411, 0.0039484, 0.0039154, 0.0040615, 0, 0, 0.0056909, 0.006194, 0.0063455, 0.0063134], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"droits fondamentaux": {
men: [0.03475, 0.063431, 0.06447, 0.05539, 0.053332, 0.041188, 0.041937, 0.043565, 0.04099, 0.040277, 0.02804, 0.029564, 0.026722, 0.025928, 0.028514, 0.011187, 0, 0, 0.025357, 0.040773, 0.032718, 0.020461, 0.083031, 0.077254, 0.076464, 0.075788, 0.073752, 0.071987, 0.08482, 0.084202, 0.095061, 0.095407, 0.090113, 0.099326, 0.11659, 0.1411, 0.11667, 0.14296, 0.15102, 0.15185, 0.15734, 0.15447, 0.184, 0.21364, 0.21282, 0.20947, 0.24388, 0.27217, 0.30034, 0.31896, 0.31206, 0.31584, 0.31114, 0.32054, 0.32199, 0.32602, 0.31418, 0.3104, 0.30656, 0.30766, 0.29546, 0.28252, 0.26619, 0.23218, 0.20764, 0.20053, 0.21422, 0.17239, 0.16295, 0.15805, 0.17034, 0.18457, 0.15395, 0.14755, 0.15877, 0.13951, 0.12023, 0.043478, 0.0014989, 0.012888, 0.024427, 0.02443, 0.024159, 0.048528, 0.081448, 0.072401, 0.077829, 0.080272, 0.079985, 0.079898, 0.074613, 0.081767, 0.080932, 0.086094, 0.086702, 0.086696, 0.090162, 0.063699, 0.0043795, 0.0051896, 0.0050167, 0.0048322, 0.0047396, 0.0051315, 0.0060581, 0.0066917, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etats européens": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.011922, 0.015451, 0.015921, 0.021508, 0.023351, 0.02453, 0.03636, 0.031682, 0.04026, 0.18401, 0.13486, 0.083471, 0.25263, 0.33169, 0.31647, 0.31642, 0.31058, 0.31764, 0.30026, 0.33076, 0.29334, 0.33477, 0.34176, 0.31534, 0.30728, 0.23024, 0.20363, 0.15644, 0.15853, 0.14832, 0.14984, 0.15003, 0.16014, 0.1513, 0.25958, 0.18979, 0.18837, 0.18557, 0.24139, 0.31353, 0.26855, 0.29121, 0.32259, 0.33131, 0.30646, 0.30626, 0.29509, 0.29438, 0.21766, 0.25989, 0.26203, 0.23955, 0.1857, 0.1693, 0.20455, 0.1507, 0.061273, 0.061507, 0.057205, 0.057269, 0.063917, 0.097473, 0.12769, 0.12702, 0.12649, 0.17494, 0.16957, 0.19044, 0.10321, 0.12213, 0.20275, 0.20277, 0.17633, 0.16619, 0.16605, 0.060372, 0.065036, 0.082459, 0.083696, 0.083679, 0.084329, 0.056831, 0.05729, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.040313], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution radioactive": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0091961, 0.0090094, 0.0090241, 0.0089936, 0.0088653, 0.0088591, 0.0088495, 0.0088361, 0.010667, 0.015617, 0.018789, 0.019529, 0.019025, 0.019, 0, 0, 0, 0, 0.23044, 0.23035, 0.23025, 0.23026, 0.2303, 0.2303, 0.23015, 0.23036, 0.21783, 0.21807, 0.21847, 0.21817, 0.2183, 0.21819, 0, 0, 0, 0, 0, 0.22164, 0.22177, 0.22174, 0.74597, 0.74591, 0.74576, 0.74672, 0.74687, 0.74719, 0.74762, 0.74836, 0.74955, 0.94173, 0.94242, 0.93744, 0.43275, 0.28147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gel microbicide": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.84906, 0.88129, 0.88122, 0.88104, 0.88218, 0.88236, 0.88273, 0.88324, 0.88412, 0.88552, 0.88748, 0.90095, 0.87864, 0.87881, 0.87455, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"incendies russes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92445, 0.92435, 0.92374, 0.92367, 0.92349, 0.92467, 0.92486, 0.92525, 0.92579, 0.92671, 0.92818, 0.93023, 0.93091, 0.93166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.73241, 0.72914, 0.6753, 0.55512, 0.49706, 0.497, 0.49667, 0.44716, 0.42438, 0.42493, 0.42502, 0.4252, 0.42544, 0.42587, 0.27315, 0, 0, 0, 0, 0.31543, 0.31578, 0.47307, 0.9424, 0.94147, 0.47243, 0.38206, 0.38207, 0.38216, 0.38234, 0.38287, 0.38343, 0.38366, 0.3837, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fiscalité écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9436, 0.95557, 0.79253, 0.67739, 0.67566, 0.58879, 0.58802, 0.52792, 0.52784, 0.52755, 0.52752, 0.52735, 0.52714, 0.52692, 0.29927, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28277, 0.29166, 0.2919, 0.28816, 0.28441, 0.28445, 0.34107, 0.36131, 0.3991, 0.44486, 0.46536, 0.50192, 0.26923, 0.19049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"explosions nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24243, 0.24242, 0.24235, 0.2643, 0.26444, 0.26978, 0.2696, 0.2693, 0.26889, 0.26856, 0.26829, 0.30539, 0.30461, 0.93728, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43415, 0.4333, 0.43317, 0.43319, 0.43329, 0.43349, 0.9264, 0.92777, 0.92832, 0.92842, 0.92853, 0.92927, 0.92849, 0.17759, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équipements militaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93501, 0.93814, 0.93893, 0.93874, 0.9383, 0.93841, 0.93895, 0.33835, 0.54666, 0.54663, 0.54659, 0.54694, 0.54833, 0.54845, 0.42066, 0.42106, 0.42099, 0.42108, 0.4216, 0.42186, 0.42258, 0.34219, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêts russes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9401, 0.93917, 0.93733, 0.93705, 0.93709, 0.93731, 0.93776, 0.93903, 0.94042, 0.94098, 0.94109, 0.94119, 0.94194, 0.94115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92653, 0.92472, 0.92444, 0.92449, 0.9247, 0.92514, 0.9264, 0.92777, 0.92832, 0.92842, 0.92853, 0.92927, 0.92849, 0.9283, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.023917, 0.023856, 0.023806, 0.023775, 0.025125, 0.025121, 0.025107, 0.028863, 0.036583, 0.13077, 0.13072, 0.13073, 0.91524, 0.91523, 0, 0, 0, 0, 0, 0, 0, 0, 0.92366, 0.92311, 0.92223, 0.92068, 0.92009, 0.91979, 0.92032, 0.92022, 0.91962, 0.91954, 0.91936, 0.17184, 0.17187, 0.17194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"danger imminent": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94367, 0.94443, 0.9446, 0.94523, 0.94629, 0.94684, 0.94837, 0.94743, 0.94557, 0.94529, 0.94533, 0.94555, 0.67572, 0.67664, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouvelle pandémie": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51254, 0.93468, 0.93522, 0.93473, 0.9345, 0.93394, 0.93305, 0.93148, 0.93088, 0.93058, 0.93112, 0.93102, 0.93041, 0.93033, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"loi française": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.080489, 0.13235, 0.12919, 0.16511, 0.18099, 0.17115, 0.16913, 0.16711, 0.16712, 0.19196, 0.18986, 0.19268, 0.19268, 0.20212, 0.31934, 0.27916, 0.2929, 0.22201, 0.17135, 0.19745, 0.20545, 0.2142, 0.20879, 0.26789, 0.19556, 0.18269, 0.18516, 0.18336, 0.16095, 0.1647, 0.1597, 0.15846, 0.1458, 0.14679, 0.1528, 0.15289, 0.15493, 0.11771, 0.079171, 0.051288, 0.06596, 0.068306, 0.12587, 0.08606, 0.11324, 0.10755, 0.14272, 0.12973, 0.10158, 0.10158, 0.10161, 0.096124, 0.10801, 0.14338, 0.25975, 0.22597, 0.21141, 0.29279, 0.26832, 0.29086, 0.31156, 0.35064, 0.33607, 0.336, 0.28306, 0.29888, 0.28272, 0.24648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellule familiale": {
men: [0.94685, 0.94402, 0.94088, 0.1376, 0.13759, 0.1376, 0.13761, 0.13767, 0.096418, 0.096388, 0.087841, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22923, 0.25376, 0.27601, 0.27592, 0.27581, 0.2757, 0.33441, 0.41474, 0.5457, 0.79706, 0.79777, 0.94404, 0.68132, 0.68258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15075, 0.2624, 0.26285, 0.29619, 0.29541, 0.29554, 0.29469], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"plan de lutte": {
men: [0.045275, 0.04894, 0.045593, 0.045565, 0.045561, 0.041399, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2624, 0.44801, 0.44824, 0.4481, 0.49688, 0.49634, 0.23642, 0.25912, 0.30562, 0.30557, 0.29767, 0.26497, 0.26463, 0.26777, 0.20154, 0.1314, 0.1314, 0.13135, 0.15765, 0.15758, 0.16846, 0.1243, 0.043773, 0.039835, 0.04121, 0.0359, 0.035939, 0.036005, 0.035956, 0.035977, 0.035958, 0.032082, 0.032063, 0.031077, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41398, 0.41395, 0.41421, 0.46538, 0.46548, 0.38177, 0.38213, 0.349, 0.34908, 0.34951, 0.42665, 0.41861, 0.33255, 0.36764, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 