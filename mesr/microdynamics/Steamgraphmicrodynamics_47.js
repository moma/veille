var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"Dominique bussereau": {
men: [0.63846, 0.71265, 0.82126, 0.82436, 0.8239, 0.82037, 0.91147, 0.93613, 0.93444, 0.97184, 0.97093, 0.9709, 0.97116, 0.97167, 0.97237, 0.97035, 0.96937, 0.97001, 0.9708, 0.97164, 0.9587, 0.95971, 0.95782, 0.95782, 0.95843, 0.95858, 0.95852, 0.95914, 0.9574, 0.95899, 0.90352, 0.90348, 0.89863, 0.39869, 0.37557, 0.28042, 0.31171, 0.32947, 0.39349, 0.37899, 0.379, 0.33126, 0.33199, 0.31233, 0.29683, 0.29685, 0.34441, 0.48251, 0.55699, 0.74667, 0.72546, 0.69935, 0.66613, 0.79711, 0.79696, 0.78674, 0.78703, 0.79887, 0.79891, 0.7987, 0.75228, 0.77456, 0.75535, 0.75019, 0.87969, 0.9592, 0.95903, 0.95818, 0.96802, 0.95841, 0.9475, 0.95045, 0.94082, 0.94256, 0.94387, 0.94354, 0.94394, 0.93018, 0.9399, 0.93209, 0.94062, 0.94134, 0.90808, 0.89192, 0.90202, 0.89851, 0.90242, 0.83623, 0.82258, 0.82208, 0.8218, 0.83034, 0.76903, 0.67871, 0.51968, 0.4981, 0.47212, 0.61303, 0.54443, 0.49457, 0.5769, 0.64132, 0.66398, 0.63744, 0.65613, 0.67708, 0.72332, 0.72334, 0.74021, 0.71412], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Chantal jouanno": {
men: [0.81861, 0.82361, 0.8243, 0.83841, 0.83636, 0.84237, 0.83113, 0.81786, 0.77947, 0.79744, 0.79203, 0.82662, 0.82405, 0.79214, 0.69615, 0.65888, 0.62054, 0.60799, 0.58627, 0.52543, 0.55579, 0.51914, 0.63761, 0.60579, 0.64073, 0.60198, 0.57942, 0.55701, 0.58273, 0.70345, 0.69673, 0.70916, 0.6469, 0.64882, 0.54137, 0.57493, 0.58747, 0.65169, 0.68029, 0.66542, 0.65934, 0.69708, 0.69539, 0.62496, 0.64257, 0.6318, 0.6852, 0.7154, 0.83403, 0.84016, 0.80404, 0.77872, 0.71877, 0.7094, 0.73252, 0.73163, 0.7319, 0.74155, 0.70411, 0.7104, 0.70538, 0.64426, 0.55758, 0.47796, 0.51417, 0.50196, 0.6678, 0.72033, 0.72337, 0.64479, 0.6067, 0.60321, 0.68848, 0.68057, 0.68038, 0.69954, 0.73911, 0.68157, 0.72105, 0.75911, 0.71184, 0.72628, 0.68601, 0.69849, 0.67463, 0.68108, 0.66193, 0.66816, 0.65199, 0.65159, 0.6768, 0.70564, 0.72665, 0.68384, 0.70229, 0.67514, 0.72043, 0.76095, 0.82547, 0.81472, 0.79685, 0.77236, 0.79052, 0.79414, 0.78552, 0.79425, 0.68162, 0.6632, 0.64567, 0.76372], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Nathalie kosciusko-morizet": {
men: [0.94001, 0.85959, 0.76296, 0.76954, 0.76911, 0.75287, 0.74389, 0.69333, 0.65914, 0.62012, 0.60531, 0.56159, 0.46764, 0.43284, 0.44126, 0.45063, 0.39317, 0.39449, 0.39589, 0.42526, 0.36, 0.32491, 0.25582, 0.22577, 0.22591, 0.22595, 0.22958, 0.24757, 0.24755, 0.23951, 0.27824, 0.19514, 0.16184, 0.10113, 0.18687, 0.26848, 0.35215, 0.38577, 0.38582, 0.38584, 0.37217, 0.48304, 0.55476, 0.61441, 0.64088, 0.65289, 0.67072, 0.6645, 0.74032, 0.73831, 0.7782, 0.75462, 0.75465, 0.75446, 0.76484, 0.76596, 0.75803, 0.73748, 0.61365, 0.59725, 0.59582, 0.65266, 0.64623, 0.62353, 0.51233, 0.53147, 0.53137, 0.53147, 0.52311, 0.55345, 0.55356, 0.50522, 0.62841, 0.62858, 0.63952, 0.65511, 0.63473, 0.67832, 0.64965, 0.69582, 0.67584, 0.67269, 0.67818, 0.65674, 0.63014, 0.68232, 0.70082, 0.70061, 0.69651, 0.68302, 0.68605, 0.59135, 0.58937, 0.50843, 0.52779, 0.5058, 0.46714, 0.45671, 0.49934, 0.4717, 0.47127, 0.5054, 0.51956, 0.5526, 0.54137, 0.49184, 0.4845, 0.57751, 0.59668, 0.62807], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"jean-noël escudié": {
men: [0.11683, 0.13295, 0.21042, 0.21024, 0.21012, 0.18309, 0.22958, 0.26924, 0.25142, 0.27203, 0.27178, 0.27177, 0.30018, 0.25446, 0.26148, 0.26108, 0.22858, 0.22877, 0.22888, 0.29324, 0.2845, 0.26381, 0.65581, 0, 0, 0, 0, 0, 0.34888, 0.23898, 0.2389, 0.23889, 0.23891, 0.11831, 0.096683, 0.079711, 0.1079, 0.092426, 0.092438, 0.092442, 0.085253, 0.085426, 0.036297, 0.039295, 0.052056, 0.05206, 0.05206, 0.060881, 0.068573, 0.064716, 0.028523, 0.028093, 0.028094, 0.028087, 0.03139, 0.10951, 0.11756, 0.21194, 0.23266, 0.2326, 0.2326, 0.25339, 0.25358, 0.27747, 0.26744, 0.33315, 0.33309, 0.33315, 0.2809, 0.25219, 0.26194, 0.18586, 0.18262, 0.18267, 0.18262, 0.14297, 0.15356, 0.23356, 0.24392, 0.20671, 0.20673, 0.20673, 0.21597, 0.22018, 0.24862, 0.22557, 0.23776, 0.23769, 0.23783, 0.27457, 0.28123, 0.23395, 0.25394, 0.29815, 0.29827, 0.29832, 0.2949, 0.28425, 0.2361, 0.18281, 0.15474, 0.15481, 0.15482, 0.10092, 0.065039, 0.061241, 0.030881, 0.030881, 0.030883, 0.030807], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"politique de la ville": {
men: [0.41204, 0.32133, 0.344, 0.28455, 0.23413, 0.32305, 0.2948, 0.29202, 0.30716, 0.21033, 0.19445, 0.19444, 0.19449, 0.20547, 0.20487, 0.21308, 0.16846, 0.18339, 0.22959, 0.16265, 0.16494, 0.12728, 0.12712, 0.12712, 0.15046, 0.11508, 0.11508, 0.13684, 0.14387, 0.14396, 0.13188, 0.13187, 0.10127, 0.097495, 0.75085, 0.79941, 0.79985, 0.78789, 0.74976, 0.77615, 0.78152, 0.75377, 0.73096, 0.73122, 0.73777, 0.7317, 0.76757, 0.76964, 0.44185, 0.31819, 0.32733, 0.29972, 0.43304, 0.43293, 0.37613, 0.43133, 0.50089, 0.46694, 0.36878, 0.3799, 0.31515, 0.32194, 0.34962, 0.3761, 0.37321, 0.38692, 0.29273, 0.23588, 0.21022, 0.19533, 0.17808, 0.16404, 0.18892, 0.29193, 0.36679, 0.37233, 0.38083, 0.35934, 0.3738, 0.33286, 0.33288, 0.40047, 0.40242, 0.33282, 0.33216, 0.30981, 0.32212, 0.26586, 0.20409, 0.19946, 0.20225, 0.196, 0.12296, 0.14472, 0.14478, 0.1448, 0.15415, 0.19698, 0.20045, 0.1896, 0.29656, 0.29125, 0.27606, 0.28997, 0.30329, 0.23603, 0.23867, 0.22087, 0.20086, 0.23862], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etats européens": {
men: [0, 0.12746, 0.129, 0.1304, 0.13319, 0.16052, 0.18868, 0.1799, 0.16986, 0.19574, 0.25349, 0.26122, 0.35286, 0.38361, 0.40327, 0.15355, 0.13366, 0.11581, 0.097678, 0.071654, 0, 0, 0.041555, 0.041133, 0.041158, 0.040508, 0.041512, 0.039183, 0.037285, 0.070495, 0.069344, 0.070792, 0.072907, 0.071072, 0.26418, 0.26418, 0.27007, 0.27373, 0.31776, 0.32073, 0.32074, 0.30769, 0.3112, 0.41165, 0.37043, 0.36788, 0.36249, 0.34943, 0.29168, 0.31753, 0.29658, 0.279, 0.25847, 0.23271, 0.23267, 0.22936, 0.23325, 0.11675, 0.12362, 0.12454, 0.11379, 0.12257, 0.12332, 0.090181, 0.05196, 0.17725, 0.17786, 0.21853, 0.2185, 0.24373, 0.22057, 0.31354, 0.26762, 0.26665, 0.36866, 0.35752, 0.4015, 0.53268, 0.54749, 0.25601, 0.25603, 0.22262, 0.26581, 0.26589, 0.34949, 0.30288, 0.38344, 0.38875, 0.38897, 0.39194, 0.37987, 0.28347, 0.20594, 0.19355, 0.17854, 0.19928, 0.15306, 0.12949, 0.091466, 0.09141, 0.1099, 0.10995, 0.10996, 0.109, 0.022558, 0.16536, 0.13231, 0.13443, 0.13887, 0.16043], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"commission sénatoriale": {
men: [0.034703, 0.034683, 0.030582, 0.030554, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.67471, 0.93932, 0.93947, 0.93941, 0.93678, 0.93509, 0.93569, 0.93539, 0.93534, 0.93543, 0.93543, 0.93384, 0.9339, 0.93442, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92995, 0.93945, 0.94, 0.94038, 0.94053, 0.94048, 0.94032, 0.94105, 0.94048, 0.93963, 0.94005, 0.94008, 0.9463, 0.94582, 0.94341, 0.93928, 0.9393, 0.93934, 0.93703], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fret ferroviaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.089259, 0.089332, 0.089375, 0.091951, 0.15081, 0.15065, 0.16664, 0.18103, 0.18114, 0.18117, 0.35984, 0.35883, 0.68296, 0.6834, 0.49876, 0.49873, 0.49878, 0.49877, 0, 0, 0, 0.47099, 0.47105, 0.47108, 0.47108, 0.47204, 0.57705, 0.57725, 0.57744, 0.57748, 0.57748, 0.57748, 0.47142, 0.471, 0.47071, 0.43843, 0.43846, 0.43834, 0.43826, 0.43824, 0.4384, 0.56337, 0.5634, 0.56324, 0.56324, 0.56305, 0.65831, 0.6913, 0.6922, 0.94189, 0.94172, 0.94189, 0.94176, 0.53798, 0.538, 0.26309, 0.49369, 0.49383, 0.49369, 0.49402, 0.49423, 0.38997, 0.17327, 0.17332, 0.17334, 0.17334, 0.1735, 0.16689, 0.074243, 0.05248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074503, 0.07193, 0.071987, 0.083868, 0.083872, 0.083665], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tourisme sexuel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93507, 0.93744, 0.94076, 0.94153, 0.94409, 0.9443, 0.94504, 0.94407, 0.94286, 0.94286, 0.94345, 0.94361, 0.94355, 0.94091, 0.93442, 0.93124, 0.92451, 0.92446, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.72247, 0.72267, 0.72246, 0.94888, 0.94928, 0.94946, 0.94917, 0.94948, 0.94955, 0.94958, 0.95045, 0.95072, 0.95014, 0.95113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"précarité énergétique": {
men: [0.065857, 0.065819, 0.065787, 0.065728, 0.065691, 0.065681, 0.061358, 0, 0, 0.094672, 0.094583, 0.09458, 0.094605, 0.093376, 0.093443, 0.093301, 0.078675, 0.064528, 0.054689, 0.051292, 0.058609, 0.068784, 0.068695, 0, 0, 0, 0.0803, 0.077621, 0.077481, 0.07753, 0.089228, 0.11319, 0.15478, 0.049674, 0.29737, 0.44913, 0.5014, 0.50147, 0.50154, 0.50156, 0.50882, 0.53651, 0.41656, 0.41671, 0.41684, 0.41687, 0.41687, 0.5656, 0.53232, 0.40715, 0.28733, 0.2874, 0.28742, 0.28734, 0.2268, 0.25517, 0.41988, 0.36173, 0.36175, 0.34436, 0.34436, 0.15355, 0.081774, 0.47279, 0.49328, 0.53308, 0.53298, 0.53308, 0.50324, 0.48469, 0.64221, 0.59536, 0.59511, 0.57855, 0.57838, 0.6183, 0.61856, 0.28004, 0.23216, 0.093625, 0.093632, 0.093635, 0.1084, 0.10843, 0.10836, 0, 0, 0, 0, 0, 0.78878, 0.70545, 0.48291, 0.43249, 0.43267, 0.39704, 0.39702, 0.39695, 0.3854, 0.38516, 0.38481, 0.38499, 0.385, 0.38503, 0.11475, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18504, 0.15667, 0.24718, 0.24725, 0.22733, 0.22749, 0.33319, 0.33341, 0.33368, 0.60433, 0.60446, 0.60494, 0.60432, 0.71806, 0.72978, 0.60998, 0.59472, 0.46666, 0.4905, 0.48961, 0.48993, 0.48977, 0.48975, 0.32271, 0.32271, 0.26021, 0.25059, 0.1369, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.56604, 0.56608, 0.5661, 0.56662, 0.41362, 0.41336, 0.41379, 0.41455, 0.41443, 0.41466, 0.41441, 0.41427, 0.41408, 0.41426, 0, 0, 0, 0, 0, 0, 0.93573, 0.93488, 0.9353, 0.93533, 0.93541, 0.93493, 0.93459, 0.93533, 0.93535, 0.93539, 0.93309], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés nomades": {
men: [0.43003, 0.29548, 0.29533, 0.29507, 0.2949, 0.29486, 0.29465, 0.29474, 0.29477, 0.36263, 0.36229, 0.20477, 0.20482, 0.11417, 0, 0.46954, 0.46985, 0.47023, 0.47046, 0.38164, 0.38194, 0.46812, 0.56644, 0.56644, 0.56679, 0.78617, 0.78612, 0.78392, 0.7825, 0.67478, 0.67457, 0.67453, 0.6746, 0.94702, 0.94542, 0.94104, 0, 0, 0, 0, 0, 0, 0.93455, 0.93488, 0.93518, 0.93525, 0.93525, 0.93526, 0.9375, 0.51365, 0.51333, 0.51346, 0.51349, 0.51336, 0.51326, 0.51323, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"parc marin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.038931, 0.12938, 0.38059, 0.94463, 0.94487, 0.94491, 0.94467, 0.94449, 0.94444, 0.94479, 0.94557, 0.94562, 0.94536, 0.94535, 0.93648, 0, 0.92562, 0.22327, 0.22317, 0.17402, 0.17405, 0.16529, 0.1653, 0.16531, 0.16516, 0.16509, 0.16513, 0.16508, 0.1652, 0.16527, 0.14815, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93866, 0.93939, 0.93882, 0.93797, 0.93839, 0.93843, 0.9385, 0.93802, 0.93769, 0.93843, 0.93845, 0.93849, 0.93617], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sous-marins nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19073, 0.41, 0.47867, 0.45023, 0.45047, 0.40061, 0.4, 0.41715, 0.41749, 0.41769, 0.41778, 0.68179, 0.68109, 0.68022, 0.6205, 0.36525, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.57165, 0.57149, 0.57188, 0.57212, 0.57223, 0.57205, 0.38004, 0.38007, 0.38008, 0.38043, 0.38054, 0.3803, 0.3807, 0.51616, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93826, 0.94552, 0.94495, 0.9441, 0.94452, 0.94455, 0.94463, 0.94415, 0.94381, 0.94455, 0.94457, 0.94461, 0.94228], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"engagement national pour l' environnement": {
men: [0.027932, 0.036429, 0.036411, 0.036379, 0.036358, 0.075541, 0.08461, 0.075512, 0.21777, 0.19073, 0.19055, 0.25942, 0.25949, 0.33914, 0.48921, 0.48847, 0.48879, 0.48919, 0.48943, 0.48953, 0.48992, 0.93805, 0, 0, 0, 0, 0, 0, 0.9427, 0.70748, 0.70725, 0.70722, 0.70729, 0.70728, 0.70608, 0.70613, 0.70652, 0.70663, 0.70672, 0.70675, 0.70676, 0.7082, 0, 0, 0.71624, 0.7163, 0.7163, 0.7163, 0.71802, 0.71737, 0.76983, 0.77002, 0.22917, 0.22911, 0.22907, 0.22906, 0.22914, 0.22933, 0.082027, 0.082005, 0.082004, 0.081976, 0.082039, 0.075535, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075401, 0.075423, 0.078837, 0.07892, 0.051589, 0.051574, 0.051603, 0.057766, 0.061875, 0.067476, 0.064256, 0.075143, 0.075173, 0.075185, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"submersions marines": {
men: [0.7118, 0.80727, 0.66562, 0.66503, 0.66465, 0.59884, 0.43206, 0.38983, 0.48187, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29893, 0.29903, 0.29913, 0.29915, 0.29915, 0.38289, 0.38381, 0.38346, 0.38323, 0.38332, 0.38334, 0.38324, 0.70248, 0.70244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93595, 0.9365, 0.93687, 0.93703, 0.93698, 0.93681, 0.93755, 0.93698, 0.93613, 0.93655, 0.93658, 0.93666, 0.93618, 0.54474, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"animaux morts": {
men: [0.72108, 0.72067, 0.72032, 0.8509, 0.85042, 0.85029, 0.8497, 0.83533, 0.83541, 0.83816, 0.83737, 0.83735, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.026034, 0.026038, 0.02377, 0.02377, 0.034382, 0.034458, 0.043333, 0.16301, 0.38583, 0.38583, 0.38583, 0.38675, 0.63248, 0.63209, 0.59714, 0.59717, 0.9446, 0.94442, 0.94437, 0.94473, 0.9455, 0.943, 0.94275, 0.94274, 0.94242, 0.94313, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"drogues illicites": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13718, 0.36158, 0.36181, 0.36211, 0.36228, 0.36236, 0.5748, 0.49722, 0.67022, 0.67022, 0.67064, 0.67074, 0.6707, 0.66883, 0.58814, 0.58852, 0.58833, 0.5883, 0.58836, 0.58835, 0.33373, 0, 0.92323, 0.92338, 0.9235, 0.92354, 0.92356, 0.92543, 0.92746, 0.92779, 0.92808, 0.92815, 0.92815, 0.92816, 0.52587, 0.52539, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nucléaire iranien": {
men: [0.021576, 0.020855, 0.020845, 0.020826, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19783, 0.21373, 0.23277, 0.23292, 0.23311, 0.3707, 0.37078, 0.37107, 0.4179, 0.47816, 0.52216, 0.52249, 0.51218, 0.51215, 0.67205, 0.67084, 0.67127, 0.67105, 0.67102, 0.86308, 0.77379, 0.61149, 0.59505, 0.54708, 0.49164, 0.4917, 0.50714, 0.50715, 0.50818, 0.43957, 0.43972, 0.43986, 0.43989, 0.43989, 0.45796, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.014337, 0.014334, 0.014337, 0.014335, 0.016956, 0.016957, 0.022401, 0.081466, 0.081489, 0.081466, 0.081521, 0.081556, 0.09059, 0.090562, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fonds structurels européens": {
men: [0.10596, 0.12045, 0.14744, 0.14731, 0.14723, 0.13188, 0.13248, 0.15494, 0.15226, 0.19594, 0.19576, 0.19575, 0.20643, 0.20782, 0.22922, 0.22887, 0.21556, 0.21574, 0.21585, 0.27862, 0.29898, 0.28348, 0.51861, 0.93873, 0.93932, 0.93947, 0.93941, 0.93678, 0.14428, 0.11579, 0.11575, 0.11575, 0.11576, 0.072451, 0.10606, 0.10718, 0.10482, 0.089242, 0.089254, 0.089258, 0.083118, 0.10467, 0.11016, 0.11604, 0.12459, 0.12459, 0.1246, 0.15394, 0.13877, 0.13578, 0.16451, 0.17058, 0.17059, 0.17055, 0.18511, 0.17198, 0.18023, 0.19255, 0.20043, 0.20037, 0.20037, 0.1988, 0.20377, 0.20789, 0.19144, 0.19622, 0.19619, 0.19622, 0.18289, 0.17615, 0.17489, 0.16139, 0.16766, 0.16771, 0.16766, 0.15357, 0.13944, 0.15605, 0.18556, 0.18336, 0.18337, 0.18338, 0.19051, 0.18191, 0.1982, 0.19607, 0.18882, 0.18876, 0.18887, 0.21849, 0.21988, 0.22647, 0.18339, 0.18643, 0.18651, 0.18654, 0.17213, 0.173, 0.14941, 0.1801, 0.17086, 0.17093, 0.17094, 0.15494, 0.16787, 0.12852, 0.12864, 0.12865, 0.12865, 0.12834], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"loi de modernisation": {
men: [0.2714, 0.27125, 0.21897, 0.21877, 0.21865, 0.031932, 0, 0, 0.18563, 0.18939, 0.18921, 0.18921, 0.18926, 0.18936, 0.25597, 0.24763, 0.30408, 0.30433, 0.30448, 0.62827, 0.62877, 0.62812, 0, 0, 0, 0, 0, 0, 0.14877, 0.1701, 0.55155, 0.55152, 0.55157, 0.55157, 0.41496, 0.41498, 0.41521, 0.43125, 0.4313, 0.43132, 0.43133, 0.58083, 0.54129, 0.54148, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20899, 0.20903, 0.23616, 0.32996, 0.32998, 0.4309, 0.4313, 0.3844, 0.4747, 0.42396, 0.62781, 0.62763, 0.62799, 0.62761, 0.12138, 0.12132, 0.098574, 0, 0, 0, 0.055344, 0.15649, 0.19849, 0.2058, 0.20561, 0.20571, 0.20571, 0.20573, 0.22111, 0.20493, 0.22892, 0.20509, 0.2051, 0.19103], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Christian Jacob": {
men: [0.31682, 0.31664, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083065, 0.074045, 0.060525, 0.053869, 0.052713, 0.052717, 0.049485, 0.049486, 0.049604, 0.081324, 0.081273, 0.085953, 0.088035, 0.10619, 0.063833, 0.076299, 0.12722, 0.59112, 0.64441, 0.64424, 0.88284, 0.88254, 0.61145, 0.56095, 0.56167, 0.43383, 0.43375, 0.43383, 0.45443, 0.45445, 0.45447, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24191, 0.24205, 0.24215, 0.24219, 0.24217, 0.24213, 0.24232, 0.31556, 0.95195, 0.95584, 0.95587, 0.95595, 0.95546, 0.95512, 0.95154, 0.95156, 0.48472, 0.48352], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etienne apaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.74904, 0.80224, 0.83195, 0.83639, 0.8368, 0.83699, 0.83765, 0.8392, 0.83812, 0.83812, 0.83865, 0.83878, 0.87685, 0.96249, 0.95008, 0.933, 0.9327, 0.12646, 0.088391, 0.088391, 0.088241, 0.064563, 0.064599, 0.064609, 0.064618, 0.06462, 0.064622, 0.064753, 0.064895, 0.064918, 0.064939, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.089946, 0.08995, 0.089954, 0.089871, 0.11603, 0.11607, 0.11603, 0.11611, 0.11616, 0.11618, 0.11615, 0.92949, 0.92956, 0.92958, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"femmes seules": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11754, 0.12299, 0.15767, 0.1578, 0.18983, 0.18987, 0.22245, 0.35798, 0.35752, 0.35752, 0.35774, 0.3578, 0.43063, 0.42943, 0.31303, 0.93124, 0.92451, 0.92746, 0.91569, 0.91568, 0.91413, 0.91418, 0.91469, 0.91483, 0.91495, 0.91499, 0.91501, 0.91687, 0.91888, 0.9192, 0.9195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"téléphones usagés": {
men: [0.82192, 0.82145, 0.83999, 0.83924, 0.83877, 0.83864, 0.83806, 0.83831, 0.7786, 0.673, 0.67236, 0.67235, 0.67252, 0.941, 0.94167, 0.94025, 0.93528, 0.93604, 0.9365, 0.93671, 0.93745, 0.93648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"écologie": {
men: [0.44991, 0.48807, 0.49472, 0.48759, 0.47847, 0.47085, 0.47239, 0.45774, 0.41653, 0.39315, 0.38946, 0.39111, 0.31896, 0.29573, 0.21816, 0.16816, 0.13797, 0.12976, 0.1254, 0.1183, 0.11056, 0.10609, 0.11594, 0.097261, 0.096713, 0.083906, 0.079553, 0.071394, 0.061684, 0.091596, 0.086015, 0.092545, 0.097202, 0.0947, 0.10854, 0.10668, 0.10599, 0.13363, 0.14112, 0.14663, 0.1614, 0.16713, 0.16108, 0.13171, 0.13885, 0.12742, 0.12032, 0.12119, 0.13343, 0.13718, 0.13132, 0.11656, 0.11605, 0.11143, 0.10018, 0.10766, 0.1071, 0.11384, 0.11128, 0.11141, 0.11132, 0.10291, 0.071854, 0.059624, 0.055396, 0.060474, 0.079816, 0.089916, 0.090031, 0.071275, 0.070869, 0.070476, 0.085193, 0.087851, 0.086455, 0.080306, 0.081153, 0.086856, 0.10185, 0.11368, 0.098987, 0.11118, 0.12311, 0.13014, 0.14241, 0.13684, 0.13065, 0.13694, 0.14065, 0.14739, 0.16083, 0.16287, 0.17846, 0.15994, 0.16307, 0.14719, 0.14473, 0.157, 0.16867, 0.211, 0.21761, 0.21476, 0.21982, 0.22502, 0.23452, 0.2483, 0.22858, 0.22137, 0.18452, 0.21442], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"liaison ferroviaire": {
men: [0, 0, 0.23912, 0.23891, 0.23877, 0.17687, 0.15337, 0.10707, 0.11665, 0.1166, 0.11649, 0.11649, 0.11454, 0.11002, 0.1101, 0.10693, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.64668, 0.64551, 0.933, 0.9327, 0.93266, 0.93274, 0.51819, 0.51731, 0.51734, 0.51763, 0.51771, 0.51778, 0.5178, 0.51781, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21201, 0.21197, 0.21201, 0.21198, 0.21199, 0.19309, 0.19763, 0.26353, 0.36475, 0.59166, 0.66062, 0.6609, 0.66102, 0.47305, 0.16147, 0.16148, 0.16149, 0.16164, 0.16168, 0.25241, 0.11734, 0.11755, 0.11751, 0.11758, 0.1031, 0.060817, 0.06079, 0.073778, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ressources halieutiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92695, 0.92665, 0.92661, 0.9267, 0.92669, 0.39318, 0.3932, 0.39342, 0.39348, 0.39353, 0.39355, 0.13318, 0.13345, 0.10638, 0, 0, 0, 0, 0.072508, 0.086638, 0.31767, 0.31747, 0.31755, 0.31757, 0.31748, 0.60747, 0.41695, 0.38993, 0.39025, 0.39027, 0.39016, 0.39016, 0.33872, 0.33898, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20854, 0.225, 0.25528, 0.31175, 0.66278, 0.66283, 0.42387, 0.42372, 0.42405, 0.52325, 0.52328, 0.52199], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins humanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33985, 0.34013, 0.14248, 0.086085, 0.070601, 0.070529, 0.21743, 0.21743, 0.21757, 0.2016, 0.20159, 0.19594, 0.19558, 0.21548, 0.17026, 0.17025, 0.22227, 0.33902, 0.47819, 0.47822, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92813, 0.92795, 0.9279, 0.92825, 0.92901, 0.92906, 0.92881, 0.9288, 0.92848, 0.92919, 0.93101, 0.93222, 0.93182, 0.93165, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 