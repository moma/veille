var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"maladie endémique": {
men: [0, 0, 0.93338, 0.93277, 0.93263, 0.93249, 0.93243, 0.93194, 0.93193, 0.93158, 0.93151, 0.93162, 0.93142, 0.93134, 0.93177, 0.93215, 0, 0.93232, 0.9319, 0.94054, 0.94024, 0.94008, 0.9398, 0.93997, 0.94009, 0.94004, 0.94323, 0.94242, 0.94109, 0.94082, 0.94067, 0.59097, 0.5909, 0.41625, 0.41608, 0.416, 0.34418, 0.2649, 0.26473, 0.2646, 0, 0, 0.20778, 0.20785, 0.20782, 0.51051, 0.51056, 0.57533, 0.62173, 0.62137, 0.7093, 0.93948, 0.93967, 0.94006, 0.93957, 0.93923, 0.93582, 0.93563, 0.93563, 0.93001, 0.92996, 0.93036, 0.9253, 0.9261, 0.92662, 0.92688, 0.92729, 0.92728, 0.92751, 0.92772, 0.92793, 0.92841, 0.92702, 0.92688, 0.92701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9315, 0.93138, 0.34934, 0.22579, 0.22582, 0.22577, 0.22572, 0.22575, 0.22577, 0.22585, 0.22581, 0.2258, 0.22591, 0.2259, 0, 0, 0, 0, 0.92857, 0.92802, 0.9282], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"impérialisme": {
men: [0.58899, 0.60588, 0.58708, 0.69499, 0.64034, 0.6623, 0.74128, 0.81213, 0.7633, 0.73392, 0.7291, 0.6207, 0.6965, 0.77705, 0.62315, 0.63425, 0.67669, 0.68847, 0.69802, 0.67633, 0.65006, 0.65914, 0.67491, 0.67503, 0.69296, 0.73446, 0.72517, 0.58487, 0.66137, 0.6887, 0.67329, 0.63371, 0.6298, 0.59218, 0.52984, 0.48056, 0.48668, 0.50107, 0.44926, 0.43677, 0.4039, 0.44595, 0.44424, 0.44824, 0.47441, 0.52559, 0.55175, 0.56141, 0.57937, 0.60594, 0.64739, 0.59313, 0.64328, 0.67308, 0.7351, 0.65404, 0.69136, 0.63631, 0.61644, 0.54467, 0.49446, 0.54421, 0.5554, 0.52418, 0.50754, 0.60518, 0.58603, 0.50498, 0.49079, 0.51272, 0.59966, 0.57197, 0.55874, 0.49943, 0.44732, 0.43896, 0.42342, 0.44084, 0.33386, 0.29231, 0.29956, 0.36595, 0.37583, 0.31825, 0.22386, 0.22602, 0.22646, 0.21756, 0.21872, 0.2316, 0.27313, 0.26459, 0.3428, 0.3589, 0.39148, 0.3445, 0.27715, 0.41417, 0.46153, 0.48874, 0.50259, 0.52935, 0.55879, 0.48057, 0.49136, 0.58332, 0.59217, 0.598, 0.62991, 0.63003], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété collective": {
men: [0.65507, 0.9442, 0.94557, 0.94495, 0.94481, 0.94468, 0.94582, 0.94214, 0.94353, 0.93953, 0.93946, 0.93511, 0.93491, 0.93764, 0.93807, 0.93845, 0.9358, 0.93601, 0.93559, 0.93517, 0.93104, 0.93089, 0.93439, 0.93795, 0.93807, 0.93803, 0.93703, 0.93366, 0.93234, 0.93208, 0.93192, 0.9316, 0.9315, 0.93128, 0.59494, 0.70082, 0.61281, 0.40615, 0.40587, 0.40568, 0.53861, 0.53895, 0.53954, 0.53973, 0.53966, 0.53975, 0.5398, 0.61746, 0.79088, 0.71092, 0.77627, 0.93577, 0.93595, 0.93635, 0.93489, 0.93456, 0.73719, 0.73704, 0.73705, 0.73712, 0.73708, 0.10783, 0.10787, 0.10796, 0.047753, 0.083049, 0.15335, 0.15335, 0.11561, 0.11563, 0.12146, 0.11372, 0.13872, 0.1387, 0.13872, 0.65854, 0.6585, 0.47466, 0.47471, 0.40814, 0.16035, 0.16041, 0.13002, 0.13005, 0.13005, 0.037552, 0.095618, 0.095642, 0.095662, 0.095718, 0.095706, 0.10667, 0.10664, 0.10666, 0.10664, 0.10661, 0.11309, 0.1131, 0.11314, 0.93322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"néolibérale": {
men: [0.37718, 0.38392, 0.35265, 0.32516, 0.33269, 0.36553, 0.39434, 0.39533, 0.44655, 0.4263, 0.41954, 0.3712, 0.42454, 0.38005, 0.46456, 0.39822, 0.40713, 0.40647, 0.37433, 0.40831, 0.39911, 0.40179, 0.41924, 0.39127, 0.40482, 0.44475, 0.3694, 0.45621, 0.47353, 0.46919, 0.50335, 0.47637, 0.55226, 0.5857, 0.50178, 0.44782, 0.48774, 0.44232, 0.41582, 0.40782, 0.40392, 0.42637, 0.46763, 0.46069, 0.45859, 0.44395, 0.43789, 0.41112, 0.43027, 0.45243, 0.39498, 0.42013, 0.43838, 0.43004, 0.38077, 0.3673, 0.33116, 0.30327, 0.29205, 0.35539, 0.35131, 0.34583, 0.32247, 0.31467, 0.33613, 0.26705, 0.26375, 0.26011, 0.28509, 0.24483, 0.23061, 0.24561, 0.23781, 0.18966, 0.18255, 0.18225, 0.18622, 0.19067, 0.21336, 0.30348, 0.32041, 0.34602, 0.31153, 0.36493, 0.3714, 0.38028, 0.36472, 0.34244, 0.29438, 0.32157, 0.32012, 0.29649, 0.21229, 0.20252, 0.23672, 0.24583, 0.27536, 0.26967, 0.2846, 0.27243, 0.26082, 0.27187, 0.28464, 0.29027, 0.32366, 0.32591, 0.44466, 0.44498, 0.38994, 0.34196], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés nomades": {
men: [0.95696, 0.65745, 0.65749, 0.65706, 0.65696, 0.65686, 0.65682, 0.65648, 0.65647, 0.58552, 0.58547, 0.75072, 0.75056, 0.72399, 0.63586, 0.96072, 0.96067, 0.96089, 0.96046, 0.87028, 0.87, 0.88497, 0.90227, 0.90243, 0.90255, 0.87538, 0.87445, 0.87369, 0.87246, 0.81555, 0.81541, 0.81513, 0.81504, 0.95, 0.94961, 0.94497, 0, 0, 0, 0, 0, 0, 0.93465, 0.93498, 0.93485, 0.93501, 0.9351, 0.93547, 0.93558, 0.51277, 0.5127, 0.5126, 0.5127, 0.51292, 0.51265, 0.51247, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0.69722, 0.69673, 0.69677, 0.54612, 0.54604, 0.54596, 0.54592, 0.54564, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93818, 0.94563, 0.94575, 0.94571, 0.9447, 0.94388, 0.94255, 0.94228, 0.94213, 0.94181, 0.9417, 0.94148, 0.94109, 0.87722, 0.82406, 0, 0, 0, 0, 0, 0.63303, 0.63326, 0.63317, 0.63328, 0.63334, 0.63359, 0.14054, 0.21451, 0.26808, 0.38925, 0.44869, 0.44888, 0.44864, 0.4038, 0.34142, 0.34135, 0.34136, 0.34139, 0.34137, 0.3412, 0.44021, 0.55545, 0.51187, 0.30025, 0, 0.31342, 0.3135, 0.46948, 0.93399, 0.93446, 0.93951, 0.94135, 0.94148, 0.94189, 0.94184, 0.94193, 0.94201, 0.94226, 0.94243, 0.93786, 0.93818, 0.9384, 0.9384, 0.93805, 0.92928, 0, 0, 0, 0, 0.93333, 0.34485, 0.3449, 0.34483, 0.34475, 0.67828, 0.70644, 0.70669, 0.49292, 0.49289, 0.49314, 0.49311, 0.49288, 0.49294, 0.43889, 0.54776, 0.54781, 0.54749, 0.54759], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"droit international": {
men: [0.098866, 0.087331, 0.070765, 0.076238, 0.074582, 0.074356, 0.076255, 0.074743, 0.063438, 0.069962, 0.063908, 0.079782, 0.12902, 0.13178, 0.20661, 0.28273, 0.29297, 0.36375, 0.20379, 0.20583, 0.23511, 0.24391, 0.28239, 0.29963, 0.30547, 0.30142, 0.27621, 0.29925, 0.27943, 0.26013, 0.26707, 0.26045, 0.43827, 0.48907, 0.45242, 0.44298, 0.38597, 0.29025, 0.30107, 0.29565, 0.3124, 0.25987, 0.33014, 0.31351, 0.234, 0.19817, 0.18279, 0.13838, 0.24031, 0.29962, 0.32675, 0.35727, 0.32529, 0.28679, 0.30889, 0.3006, 0.28337, 0.27285, 0.31896, 0.3142, 0.35224, 0.36469, 0.31727, 0.28567, 0.30351, 0.29949, 0.36319, 0.38465, 0.36213, 0.37413, 0.41929, 0.52053, 0.50641, 0.53531, 0.48261, 0.71286, 0.71282, 0.73328, 0.72093, 0.72777, 0.74679, 0.86115, 0.54172, 0.45369, 0.3727, 0.40901, 0.31709, 0.32759, 0.33903, 0.26075, 0.25802, 0.20252, 0.20172, 0.19596, 0.21079, 0.22022, 0.28888, 0.33949, 0.35559, 0.32555, 0.38732, 0.34816, 0.32145, 0.32997, 0.42791, 0.48283, 0.41251, 0.39179, 0.36371, 0.31961], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations autochtones": {
men: [0.11599, 0.11591, 0.11592, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40271, 0.52593, 0.57204, 0.57226, 0.57224, 0.57237, 0.65704, 0.73352, 0.73328, 0.95375, 0.95347, 0.95364, 0.95376, 0.95395, 0.94731, 0.94648, 0.94684, 0.68425, 0.60602, 0.60582, 0.51765, 0.24621, 0.24611, 0.20107, 0.20109, 0.20104, 0.2009, 0.16961, 0.4636, 0.5576, 0.51802, 0.74304, 0.83543, 0.83557, 0.83565, 0.83598, 0.83608, 0.75898, 0.75888, 0.61365, 0.61377, 0.61403, 0.48044, 0.33247, 0.3324, 0.13493, 0.5039, 0.50395, 0.50392, 0.50366, 0.51719, 0.60533, 0.60567, 0.75748, 0.75782, 0.75781, 0.758, 0.94829, 0.94851, 0.94899, 0.93539, 0.93525, 0.93538, 0.93578, 0.76601, 0.85835, 0.85843, 0.89053, 0.8907, 0.76928, 0.45248, 0.45259, 0.45259, 0.45242, 0.33173, 0.33181, 0.33189, 0.49613, 0.50741, 0.43823, 0.43813, 0.3445, 0.26702, 0.28569, 0.44627, 0.33045, 0.29259, 0.28407, 0.30413, 0.30428, 0.28757, 0.1136, 0.11361, 0.1136, 0.11362, 0.11364, 0.14329, 0.14332], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fondation Copernic": {
men: [0.93429, 0.93363, 0.93368, 0.93307, 0.93293, 0.9328, 0.93274, 0.92275, 0.9138, 0.91956, 0.91949, 0.92144, 0.92293, 0.92449, 0.92648, 0.9286, 0.92856, 0.92877, 0.92835, 0.92941, 0.93021, 0.92834, 0.95769, 0.95592, 0.95604, 0.95483, 0.95302, 0.95207, 0.50484, 0.48962, 0.48954, 0.52886, 0.5288, 0.61025, 0.64234, 0.55736, 0.60023, 0.63053, 0.67685, 0.68801, 0.65741, 0.53276, 0.63401, 0.60529, 0.60521, 0.59179, 0.56948, 0.50663, 0.31912, 0.34142, 0.27173, 0.18228, 0.048185, 0, 0, 0.17599, 0.17595, 0.18504, 0.18504, 0.18505, 0.19801, 0.19791, 0.53587, 0.53634, 0.73374, 0.94363, 0.94406, 0.94404, 0.94428, 0, 0, 0, 0.041062, 0.041055, 0.041061, 0.041079, 0.041077, 0.04108, 0.041084, 0.041095, 0.041102, 0.041117, 0.041131, 0.031888, 0.031888, 0.097987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92585, 0.92619, 0.92601, 0.92595, 0.92641, 0.1377, 0.13764, 0.13765, 0.13764, 0.13767, 0.13768, 0.1376, 0.13763], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre social": {
men: [0.22214, 0.44758, 0.38113, 0.38088, 0.38082, 0.38077, 0.38074, 0.38054, 0.38053, 0.28738, 0.28736, 0.28739, 0.40333, 0.60221, 0.60249, 0, 0, 0, 0, 0.9371, 0.93679, 0.93664, 0.93636, 0.93653, 0.93665, 0.9366, 0.93561, 0.93479, 0.93348, 0.93321, 0.93306, 0.93274, 0.93263, 0, 0, 0.93132, 0.93139, 0.93115, 0.93053, 0.93008, 0.93069, 0.58336, 0.38184, 0.38198, 0.38192, 0.38199, 0.38203, 0.25461, 0.25464, 0.12056, 0.12055, 0.17109, 0.21483, 0.33538, 0.3352, 0.35852, 0.47933, 0.47923, 0.47923, 0.47928, 0.47926, 0.93577, 0.93617, 0.9354, 0.93592, 0.54664, 0.48734, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20737, 0.2075, 0.20747, 0.20751, 0.50643, 0.50651, 0.66682, 0.66666, 0.94227, 0.94237, 0.94271, 0.94254, 0.94248, 0.94295, 0.93616, 0.93573, 0.93583, 0.93572, 0, 0, 0.93428, 0.93446], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"progrès social": {
men: [0.11393, 0.092513, 0.1006, 0.066602, 0, 0.06209, 0.062085, 0.058928, 0.056553, 0.0606, 0.10996, 0.10997, 0.10995, 0.23774, 0.25297, 0.30705, 0.34892, 0.52958, 0.52935, 0.60478, 0.6428, 0.5637, 0.59207, 0.56063, 0.54016, 0.57573, 0.46728, 0.39255, 0.50798, 0.49051, 0.49577, 0.4956, 0.49555, 0.4818, 0.46019, 0.51676, 0.46353, 0.46716, 0.46123, 0.42999, 0.51906, 0.51076, 0.43142, 0.4034, 0.30413, 0.30418, 0.30421, 0.1692, 0.072115, 0.34372, 0.36007, 0.40967, 0.39835, 0.36894, 0.4254, 0.40623, 0.43279, 0.44438, 0.49235, 0.4924, 0.49238, 0.48713, 0.52997, 0.42285, 0.43267, 0.40049, 0.42388, 0.46763, 0.30611, 0.32769, 0.26203, 0.22627, 0.28026, 0.26085, 0.26088, 0.25716, 0.16663, 0.11863, 0.12146, 0.10328, 0.086858, 0.0838, 0.057862, 0.057875, 0.049164, 0.047471, 0, 0.041591, 0.14868, 0.14993, 0.13311, 0.18111, 0.22231, 0.38366, 0.37303, 0.4324, 0.46763, 0.43799, 0.43549, 0.44141, 0.44138, 0.44195, 0.43271, 0.45815, 0.50488, 0.56994, 0.57617, 0.53356, 0.61016, 0.5441], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés rurales": {
men: [0.075957, 0.063166, 0.06317, 0.063129, 0.063119, 0.06311, 0.063106, 0.22061, 0.20232, 0.20225, 0.20223, 0.52888, 0.52877, 0.52872, 0.52897, 0.93624, 0.9362, 0.93641, 0.93599, 0.93557, 0.93527, 0, 0.6463, 0.64642, 0.6465, 0.64647, 0.64578, 0.64522, 0.64431, 0.64413, 0.64402, 0.6438, 0.64373, 0.64358, 0.64332, 0.51201, 0, 0.25299, 0.25282, 0.2527, 0.25286, 0.25302, 0.2533, 0.25339, 0.25335, 0.2534, 0.25342, 0.25352, 0.19802, 0.4569, 0.63138, 0.74756, 0.74771, 0.74803, 0.74763, 0.74736, 0.74722, 0.74706, 0.74706, 0.74714, 0.77142, 0.77102, 0.93772, 0.3723, 0.31111, 0.08187, 0.081907, 0.081905, 0.081926, 0.081944, 0.081963, 0.082005, 0.069848, 0.069837, 0, 0, 0, 0.35874, 0.35878, 0.35887, 0.35894, 0.35907, 0.35919, 0.35927, 0.35927, 0.35914, 0.92685, 0.92708, 0.92728, 0.92782, 0.9277, 0, 0, 0.63438, 0.63426, 0.63411, 0.63418, 0.63425, 0.63448, 0.63436, 0.63432, 0.63464, 0.6346, 0.63431, 0.20569, 0.068978, 0.11985, 0.067267, 0.067227, 0.06724], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise du capitalisme": {
men: [0.18143, 0.7608, 0.82695, 0.65468, 0.63101, 0.63092, 0.63088, 0.63055, 0.63054, 0.58426, 0.60193, 0.44048, 0.44039, 0.44035, 0.48193, 0.23391, 0.17147, 0.17343, 0.17894, 0.23478, 0.19492, 0.19489, 0.19483, 0.19486, 0.17144, 0.22565, 0.19287, 0.19271, 0.13775, 0.17688, 0.068022, 0.080147, 0.10515, 0.034999, 0.23349, 0.24966, 0.26997, 0.39286, 0.3926, 0.41873, 0.41684, 0.41908, 0.50425, 0.56074, 0.57777, 0.57787, 0.59697, 0.63825, 0.57005, 0.57999, 0.57443, 0.52734, 0.52745, 0.54862, 0.66378, 0.70954, 0.29694, 0.12853, 0.054924, 0.06881, 0.048545, 0.048519, 0.055729, 0.055778, 0.25082, 0.25089, 0.251, 0.251, 0.2401, 0.22974, 0.56206, 0.69477, 0.69374, 0.69079, 0.68161, 0.68191, 0.68187, 0.68193, 0.43169, 0.32233, 0.55593, 0.55613, 0.76095, 0.83617, 0.82402, 0.81462, 0.8162, 0.81282, 0.813, 0.81347, 0.81337, 0.81354, 0.81336, 0.95293, 0.94788, 0.94766, 0, 0.92585, 0.14819, 0.080523, 0.18603, 0.2578, 0.25779, 0.30617, 0.30621, 0.30617, 0.30624, 0.30628, 0.3373, 0.33736], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"capitalistes": {
men: [0.30564, 0.34882, 0.36845, 0.35801, 0.39274, 0.39971, 0.48668, 0.31578, 0.375, 0.37486, 0.40429, 0.43632, 0.45797, 0.51288, 0.55672, 0.49843, 0.4905, 0.49062, 0.48578, 0.44241, 0.3418, 0.32154, 0.23288, 0.23292, 0.24367, 0.2369, 0.1793, 0.061654, 0.077566, 0.053494, 0.053485, 0.081071, 0.077681, 0.072053, 0.089699, 0.25738, 0.21451, 0.20753, 0.22743, 0.22987, 0.24127, 0.27831, 0.2824, 0.34972, 0.33329, 0.32098, 0.30996, 0.30036, 0.28442, 0.21572, 0.24697, 0.33707, 0.28889, 0.28901, 0.26942, 0.23426, 0.21803, 0.22163, 0.23605, 0.23828, 0.26789, 0.36484, 0.42058, 0.43505, 0.54908, 0.5389, 0.53537, 0.53537, 0.51612, 0.56186, 0.59974, 0.57637, 0.49007, 0.47804, 0.47149, 0.45859, 0.44699, 0.46813, 0.32868, 0.33041, 0.40495, 0.4051, 0.44898, 0.43609, 0.42271, 0.42256, 0.55994, 0.51621, 0.4764, 0.46398, 0.46883, 0.38863, 0.38854, 0.41378, 0.38239, 0.39342, 0.4107, 0.55488, 0.53449, 0.53439, 0.55423, 0.56838, 0.54686, 0.4694, 0.49709, 0.52615, 0.56202, 0.54423, 0.53413, 0.53582], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Jacques Delors": {
men: [0.26307, 0.72527, 0.72531, 0.72483, 0.72472, 0.72462, 0.94597, 0.94548, 0.94546, 0.94128, 0.94121, 0.94132, 0, 0, 0, 0.93075, 0.93071, 0.93093, 0.93051, 0.93009, 0.92979, 0.92964, 0.92936, 0.92953, 0.92965, 0.9296, 0.92861, 0.92781, 0.9265, 0, 0, 0, 0.33104, 0.12436, 0.10073, 0.11331, 0.11331, 0.11329, 0.11321, 0.11316, 0.11323, 0.1133, 0.11342, 0.12316, 0.1407, 0.12427, 0.016987, 0.044435, 0.11266, 0, 0, 0.16334, 0.16337, 0.28504, 0.29499, 0.28178, 0.33953, 0.36916, 0.36916, 0.39194, 0.39192, 0.39172, 0.36561, 0.40185, 0.54168, 0.48505, 0.48526, 0.42151, 0.5173, 0.59072, 0.29201, 0.10367, 0.10351, 0.1035, 0.10351, 0.10356, 0.3933, 0.39334, 0.39337, 0.39348, 0.39355, 0.39369, 0.39383, 0.37353, 0.93382, 0.93348, 0.94562, 0.78437, 0.66718, 0.66757, 0.73677, 0.73692, 0.4988, 0.26377, 0.30567, 0.30559, 0.30563, 0.30566, 0.30578, 0.30572, 0.2162, 0.22586, 0.23661, 0.2365, 0.084951, 0.12949, 0.16807, 0.61029, 0.4388, 0.43888], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet minier": {
men: [0.95587, 0.95519, 0.95269, 0.95091, 0.95076, 0.93994, 0.93987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94118, 0.94088, 0.95155, 0.95126, 0.95143, 0.95156, 0.95151, 0.9505, 0.73935, 0.62404, 0.62386, 0.7362, 0.73595, 0.73586, 0.70929, 0.709, 0.6261, 0.62615, 0.62599, 0.62557, 0.62527, 0.62568, 0.7214, 0.94786, 0.94821, 0.93711, 0.93727, 0.93736, 0.93773, 0.93784, 0.9373, 0.93718, 0.937, 0.93719, 0.93758, 0.93709, 0.93876, 0.93858, 0.93838, 0.92307, 0.92317, 0.92312, 0.92264, 0.41147, 0.41183, 0.41206, 0.12572, 0.12578, 0.070588, 0.070606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"troubles sociaux": {
men: [0.94462, 0.94396, 0.94138, 0.94077, 0.94062, 0.94049, 0.94043, 0.93994, 0.93992, 0.93887, 0.94349, 0.9436, 0.93977, 0.93454, 0.93497, 0.93535, 0.93531, 0.13933, 0.4417, 0.36323, 0.36312, 0.36306, 0.36295, 0.36301, 0.33294, 0.33292, 0.33257, 0.33228, 0.33181, 0.33172, 0.33166, 0.46503, 0.18486, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92521, 0.92983, 0.92964, 0.92964, 0.92974, 0.92969, 0.92921, 0.9296, 0.93041, 0.93093, 0.35582, 0.54029, 0.54028, 0.54041, 0.4651, 0.39619, 0.39639, 0.3958, 0.39574, 0.3958, 0.67981, 0.67978, 0.67984, 0.6799, 0.94542, 0.9424, 0.94274, 0.55573, 0.55586, 0.55586, 0.55566, 0.55673, 0.55687, 0.55699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nucléaire iranien": {
men: [0.030225, 0.06018, 0.060184, 0.060144, 0.061525, 0.061516, 0.061512, 0.059604, 0.059603, 0.059581, 0.059576, 0.13467, 0.13464, 0.34188, 0.29354, 0.23417, 0.23416, 0.23421, 0.12773, 0.12768, 0.12764, 0.17583, 0.15591, 0.14161, 0.14163, 0.15771, 0.15754, 0.092726, 0.092595, 0.092569, 0.092554, 0.092522, 0.22386, 0.29778, 0.094206, 0.053531, 0.060774, 0.069121, 0.069074, 0.042013, 0.04204, 0.042067, 0.16494, 0.165, 0.16498, 0.16501, 0.16502, 0.13309, 0.93377, 0.93323, 0.93311, 0.93293, 0.93312, 0.93351, 0.93301, 0.38594, 0, 0, 0, 0, 0, 0, 0, 0.019043, 0.019053, 0.1649, 0.16498, 0.16497, 0.16501, 0.19522, 0.19527, 0.25833, 0.93847, 0.93832, 0.93845, 0.93886, 0.93881, 0.93791, 0.93799, 0, 0, 0, 0, 0, 0, 0.93546, 0.94379, 0.94402, 0.94423, 0.94477, 0.94466, 0.94485, 0.94464, 0.94478, 0.94459, 0.94436, 0.94448, 0.94458, 0.94492, 0.94038, 0.92552, 0.92598, 0.92593, 0.9255, 0.92561, 0.92549, 0.92572, 0.92581, 0.93258, 0.93276], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urgence sociale": {
men: [0.94026, 0.93959, 0.93965, 0.93904, 0.94089, 0.94504, 0.94498, 0.94161, 0.94159, 0.94123, 0.94116, 0.94127, 0.94107, 0.94099, 0.93753, 0.9379, 0.93786, 0.93808, 0.93496, 0, 0, 0, 0, 0.16281, 0.16283, 0.16282, 0.16265, 0.16251, 0.16228, 0.24956, 0.24952, 0.24943, 0.2494, 0.24934, 0.24924, 0.24919, 0.37382, 0.26913, 0.26895, 0.26882, 0.269, 0.26917, 0.26946, 0.27816, 0.27812, 0.27817, 0.27819, 0.2783, 0.27833, 0.27818, 0.29533, 0.29528, 0.0257, 0.025711, 0.025698, 0.025689, 0.025683, 0.01755, 0.016429, 0.016431, 0.016082, 0.016074, 0.016081, 0.016095, 0.017036, 0.01704, 0.15923, 0.15923, 0.15927, 0.1593, 0.15934, 0, 0, 0.30351, 0.91554, 0.91594, 0.91589, 0.12086, 0.023592, 0.11469, 0.11471, 0.11476, 0.33746, 0.33754, 0.33754, 0.33741, 0.33807, 0.32746, 0.32753, 0.43391, 0.46522, 0.50465, 0.84304, 0.8415, 0.84133, 0.84113, 0.7789, 0.77898, 0.61099, 0.61087, 0.61084, 0.61114, 0.61111, 0.47933, 0.17692, 0.1353, 0.13533, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés indigènes": {
men: [0.60824, 0.81127, 0.81132, 0.81079, 0.8099, 0.82368, 0.83098, 0.82044, 0.80598, 0.60696, 0.53568, 0.42883, 0.42874, 0.47107, 0.52563, 0.52584, 0.29476, 0.29483, 0.23731, 0.14698, 0.0798, 0.066355, 0.066335, 0.37662, 0.37667, 0.37665, 0.37625, 0.33563, 0.40414, 0.40402, 0.65916, 0.65893, 0.65886, 0.6587, 0.65843, 0.84256, 0.84262, 0.68641, 0.68595, 0.68562, 0.68607, 0.68651, 0, 0, 0, 0, 0, 0, 0, 0, 0.063923, 0.19315, 0.16215, 0.16222, 0.16213, 0.16207, 0.16204, 0.16201, 0.13342, 0.13344, 0.13343, 0.20294, 0.20302, 0.26033, 0.36428, 0.2169, 0.42842, 0.53622, 0.53635, 0.53647, 0.5366, 0.53687, 0.94257, 0.94242, 0.94255, 0.9453, 0.94525, 0.94533, 0.94542, 0.94566, 0.94392, 0.94024, 0.94056, 0.94078, 0.72697, 0.24787, 0.24835, 0.24841, 0.24846, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"système capitaliste": {
men: [0.133, 0.1329, 0.13857, 0.14299, 0.13243, 0.11585, 0.15601, 0.18622, 0.38531, 0.36796, 0.37891, 0.46342, 0.40054, 0.33951, 0.51044, 0.58142, 0.57465, 0.57479, 0.54511, 0.49348, 0.55264, 0.5138, 0.48579, 0.49583, 0.53172, 0.51979, 0.48075, 0.47714, 0.4003, 0.32782, 0.31757, 0.2847, 0.29458, 0.40451, 0.4354, 0.376, 0.41875, 0.43305, 0.39691, 0.39316, 0.39708, 0.38662, 0.39058, 0.37435, 0.403, 0.43063, 0.42138, 0.3866, 0.33007, 0.35754, 0.30774, 0.24427, 0.30595, 0.31021, 0.35274, 0.37417, 0.34962, 0.28163, 0.22477, 0.23801, 0.25971, 0.29499, 0.28454, 0.2791, 0.26459, 0.25751, 0.22095, 0.24987, 0.21591, 0.20684, 0.16445, 0.22038, 0.23582, 0.23521, 0.22064, 0.2112, 0.27927, 0.35671, 0.34624, 0.38861, 0.38868, 0.25599, 0.31622, 0.33021, 0.42948, 0.42371, 0.34916, 0.33961, 0.31193, 0.33494, 0.28522, 0.31879, 0.31544, 0.32037, 0.33959, 0.43763, 0.42413, 0.43136, 0.48299, 0.49662, 0.64133, 0.6268, 0.71293, 0.60751, 0.65712, 0.69999, 0.70672, 0.6936, 0.68115, 0.52301], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion calamiteuse": {
men: [0, 0.087837, 0.087842, 0.19409, 0.19406, 0.17718, 0.17717, 0.17707, 0.15042, 0.15036, 0.17638, 0.15679, 0.16882, 0.30629, 0.30643, 0.21041, 0.32343, 0.22549, 0.50625, 0.54638, 0.5462, 0.54611, 0.652, 0.65212, 0.6522, 0.75618, 0.75537, 0.75472, 0.75365, 0.75344, 0.94455, 0.84377, 0.46652, 0.33819, 0.33805, 0.34958, 0.32506, 0.29875, 0.29855, 0.29841, 0.24549, 0.24564, 0.24591, 0.246, 0.23266, 0.23917, 0.055967, 0.078153, 0.078162, 0.053707, 0.06061, 0.072212, 0.072226, 0.072256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93857, 0.93878, 0.939, 0.93948, 0.93808, 0.93793, 0.93806, 0.93847, 0.93842, 0.9385, 0.94191, 0.94215, 0.94232, 0.94267, 0.93162, 0.93183, 0.93183, 0.93149, 0.93329, 0.93352, 0.93373, 0.93427, 0.93416, 0.93435, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phosphore blanc": {
men: [0.94572, 0.94505, 0.94737, 0.94675, 0.9466, 0.75712, 0.75707, 0.75667, 0.6801, 0.67984, 0.5933, 0.19738, 0.19734, 0.19732, 0.14625, 0.14631, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39654, 0.39646, 0.39649, 0.39639, 0.39613, 0.39594, 0.91751, 0.91809, 0.91909, 0.23668, 0.23665, 0.23669, 0.23671, 0.23681, 0, 0, 0, 0, 0, 0, 0, 0.31565, 0.31559, 0.9223, 0.052206, 0.052211, 0.052209, 0.099459, 0.14224, 0.16645, 0.16655, 0.16659, 0.16667, 0.16667, 0.16671, 0.12639, 0.12642, 0.12649, 0.93289, 0.93274, 0.93287, 0.92878, 0.91976, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9217, 0.9219, 0.93359, 0.93347, 0.93366, 0.93345, 0.93359, 0.9334, 0.93318, 0.9333, 0.9334, 0.93374, 0.93356, 0.9335, 0.93063, 0.93058, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"arsenal nucléaire": {
men: [0.08135, 0.9168, 0.91685, 0.91625, 0.91611, 0.91599, 0.91592, 0.91544, 0.91543, 0, 0.60522, 0.6053, 0.60517, 0.60511, 0.39755, 0.39771, 0.39769, 0.39778, 0.3976, 0.39743, 0.34723, 0.34717, 0.34707, 0.34713, 0, 0.13522, 0.13507, 0.13496, 0.16154, 0.10062, 0.1006, 0.10057, 0.10056, 0.21497, 0.25658, 0.21746, 0.21747, 0.21742, 0.21727, 0.14168, 0.14178, 0.14187, 0.20691, 0.17161, 0.092251, 0.069471, 0.069478, 0, 0, 0, 0.09677, 0.096751, 0.09677, 0.096811, 0.09676, 0.096725, 0.096706, 0.47628, 0.47798, 0.5596, 0.55958, 0.55929, 0.55952, 0.56001, 0.64273, 0.64291, 0.6432, 0.64319, 0.64335, 0.64349, 0.64364, 0, 0, 0, 0, 0, 0, 0, 0, 0.92977, 0.92995, 0.93028, 0.9306, 0.93082, 0.93082, 0.93047, 0.93228, 0.93251, 0.93271, 0.28886, 0.28883, 0.28889, 0.28882, 0, 0, 0, 0, 0, 0, 0.22275, 0.22274, 0.16986, 0.15207, 0.20257, 0.20259, 0.20257, 0.20262, 0.20264, 0.20252, 0.20256], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alternative sociale et écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0.45137, 0.50378, 0.5302, 0.53016, 0.5386, 0.55132, 0.55888, 0.5665, 0.57515, 0.57512, 0.57525, 0.62599, 0.63256, 0.97001, 0.96165, 0.95769, 0.95592, 0.95604, 0.95483, 0.95302, 0.95207, 0.79185, 0.78277, 0.78264, 0.80492, 0.80483, 0.84541, 0.85946, 0.85929, 0.87357, 0.88458, 0.89975, 0.76341, 0.75527, 0.60299, 0.63027, 0.61979, 0.61971, 0.60593, 0.60599, 0.54143, 0.49006, 0.48978, 0.43715, 0.13989, 0.065533, 0.03667, 0.036651, 0.046582, 0.046573, 0.046563, 0.046564, 0.046568, 0.046566, 0.023868, 0.023878, 0.023899, 0.023912, 0.046641, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.82733, 0.30266, 0.30269, 0.30272, 0.3028, 0.30285, 0.30296, 0.31861, 0.31868, 0.31868, 0.31856, 0.31918, 0.31926, 0.31933, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise profonde": {
men: [0.096938, 0.096869, 0.096875, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17855, 0.17854, 0.17835, 0.56868, 0.55977, 0.55961, 0.55951, 0.20952, 0.17816, 0.11942, 0.11937, 0.11935, 0.089774, 0.089752, 0, 0, 0, 0, 0, 0, 0, 0, 0.088902, 0.16231, 0.16233, 0.066388, 0.22756, 0.22752, 0.18458, 0.23902, 0.23889, 0.23881, 0.39696, 0.39688, 0.39688, 0.39692, 0.40793, 0.40772, 0.40789, 0.72244, 0.68051, 0.6807, 0.94568, 0.94404, 0.94428, 0.94449, 0.9317, 0.93218, 0.93329, 0.93314, 0.91987, 0.92027, 0.27935, 0.27938, 0.51588, 0.51601, 0.51611, 0.51629, 0.38856, 0.13408, 0.13408, 0.13403, 0.08397, 0.083991, 0.084009, 0.084058, 0.23845, 0.41312, 0.33579, 0.33584, 0.33577, 0.33569, 0.35554, 0.64905, 0.64929, 0.64916, 0.75663, 0.75701, 0.75697, 0.75661, 0.697, 0.36024, 0.93084, 0.93094, 0.936, 0.945], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"germes pathogènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36612, 0.31212, 0.27191, 0.27197, 0.27185, 0.49217, 0.49201, 0.49193, 0.49179, 0.49187, 0.63604, 0.63601, 0.70464, 0.70403, 0.55378, 0.58795, 0.45388, 0.39583, 0.39578, 0.23967, 0.23958, 0.23953, 0.23955, 0.20576, 0.20562, 0.1733, 0, 0, 0, 0, 0, 0.16323, 0.16325, 0.23802, 0.29747, 0.25532, 0.25529, 0.26254, 0.26259, 0.30322, 0.30306, 0.29333, 0.25645, 0.25639, 0.36589, 0.36206, 0.36204, 0.37395, 0.30934, 0.39815, 0.39838, 0.46497, 0.46517, 0.46517, 0.46528, 0.58718, 0.93583, 0.61832, 0.61739, 0.42131, 0.42137, 0, 0.44925, 0.44929, 0.44933, 0.44945, 0.44953, 0.44969, 0.44985, 0.44995, 0.44995, 0.92956, 0.93136, 0.93159, 0.93179, 0.93233, 0, 0, 0, 0, 0, 0, 0, 0.93104, 0.22055, 0.22051, 0.2205, 0.22061, 0.34927, 0.34911, 0.34915, 0.34911, 0.34919, 0.34923, 0.34902, 0.34908], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"eaux internationales": {
men: [0.10151, 0.10143, 0.10144, 0.10137, 0.10136, 0.10135, 0.1598, 0.15972, 0.15971, 0.20638, 0.29326, 0.29329, 0.34452, 0.34449, 0.34465, 0.34478, 0.34477, 0.34485, 0.34469, 0.34454, 0.31178, 0.28359, 0.28351, 0.28356, 0.10593, 0.10592, 0, 0, 0, 0, 0, 0, 0, 0.056235, 0.098547, 0.11286, 0.11287, 0.11284, 0.13283, 0.13277, 0.10789, 0.10796, 0.033533, 0.037972, 0.037966, 0.037973, 0.039073, 0.019769, 0, 0, 0, 0, 0.027349, 0.02736, 0.02911, 0.0291, 0.2187, 0.21865, 0.21865, 0.21868, 0.21867, 0.21855, 0.21864, 0.93133, 0.93186, 0.94144, 0.93995, 0.93993, 0.94017, 0.66132, 0.60706, 0.60737, 0.60646, 0.60637, 0.60645, 0.65603, 0.65599, 0.65605, 0.65611, 0.29942, 0.29948, 0.29959, 0.29969, 0.92653, 0.33458, 0.086481, 0.086649, 0.08667, 0.086689, 0, 0, 0, 0, 0.059443, 0.21974, 0.21969, 0.21971, 0.26071, 0.30037, 0.94283, 0.94277, 0.94324, 0.94319, 0.94275, 0.94286, 0.94274, 0.94297, 0.94152, 0.93207, 0.93225], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mobilisation sociale": {
men: [0.12636, 0.12627, 0.12628, 0.12619, 0.12618, 0.1559, 0.13868, 0.22569, 0.22568, 0.41903, 0.419, 0.62524, 0.52429, 0.36125, 0.36142, 0.36156, 0.36155, 0.36163, 0.36147, 0.36131, 0.93149, 0, 0, 0, 0, 0, 0, 0.22693, 0.22661, 0.22654, 0.22651, 0.13812, 0.13811, 0.13808, 0.088286, 0.088269, 0.063195, 0.063179, 0.063137, 0.063106, 0.043124, 0, 0, 0.024368, 0.023821, 0.024151, 0.35321, 0.34613, 0.38123, 0.40455, 0.45759, 0.46632, 0.46903, 0.42304, 0.47945, 0.52828, 0.53996, 0.50792, 0.51282, 0.53609, 0.41635, 0.46855, 0.45303, 0.45343, 0.53334, 0.62694, 0.64057, 0.75557, 0.71408, 0.67006, 0.76035, 0.85929, 0.858, 0.75727, 0.75443, 0.75557, 0.68337, 0.68343, 0.57697, 0.42638, 0.38133, 0.35849, 0.29883, 0.2989, 0.24501, 0.24492, 0.30058, 0.36943, 0.27348, 0.26088, 0.31652, 0.22517, 0.2081, 0.20813, 0.20155, 0.2015, 0.21227, 0.20201, 0.21077, 0.21594, 0.18467, 0.16689, 0.1614, 0.17286, 0.1461, 0.2081, 0.23927, 0.23067, 0.2404, 0.24044], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 