var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"risque nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.023985, 0.023997, 0.023993, 0.02397, 0.025356, 0.025341, 0.025339, 0.029119, 0.036932, 0.13204, 0.13207, 0.13208, 0.92534, 0.92467, 0, 0, 0, 0, 0, 0, 0, 0, 0.93095, 0.93125, 0.92972, 0.929, 0.92817, 0.92808, 0.92807, 0.9285, 0.92867, 0.92876, 0.92824, 0.17322, 0.17325, 0.17332, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94201, 0.94179, 0.9417, 0.94145, 0.9408, 0.94847, 0.94879, 0.94861, 0.94874, 0.9496, 0.95023, 0.94997, 0.94917, 0.94916, 0.94433, 0.94455, 0.94447, 0.9454], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0.94786, 0.94691, 0.9473, 0.76553, 0.76449, 0.76412, 0.76427, 0.61661, 0.49372, 0.41843, 0.32803, 0.32801, 0.30138, 0.30147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12707, 0.12719, 0.12729, 0.12716, 0.12718, 0.12714, 0.12718, 0.17165, 0.1845, 0.18434, 0.3037, 0.93639, 0.93682, 0.93699, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.57071, 0.57111, 0.57084, 0.57125, 0.41753, 0.41764, 0.41839, 0.41811, 0.41758, 0.41735, 0.4171, 0.41706, 0.41699, 0.4168, 0, 0, 0, 0, 0, 0, 0.93921, 0.93934, 0.94018, 0.94081, 0.94055, 0.93976, 0.93975, 0.94036, 0.94058, 0.9405, 0.94079], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes potentielles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13722, 0.23669, 0.23647, 0.92572, 0.92516, 0.92511, 0.92471, 0.92504, 0.92479, 0.92496, 0.92508, 0.92584, 0.92517, 0.92492, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14588, 0.20394, 0.20388, 0.20392, 0.20401, 0.29478, 0.29482, 0.29528, 0.26254, 0.26284, 0.52855, 0.52846, 0.52826, 0.52799, 0.42626, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94961, 0.94952, 0.94937, 0.94892, 0.94869, 0.9486, 0.94835, 0.9477, 0.94757, 0.94788, 0.4549, 0.45496, 0.45537, 0.45568, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pertes humaines": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.066192, 0.074558, 0.13996, 0.25222, 0.3301, 0.36367, 0.75303, 0.50042, 0.50012, 0.5001, 0.51562, 0.51581, 0.2545, 0.10178, 0.068895, 0.057928, 0.057886, 0.056774, 0.055688, 0.055702, 0.056761, 0.057342, 0.057388, 0.05733, 0.057338, 0.057318, 0.069216, 0.17902, 0, 0, 0, 0.22433, 0.2859, 0.28595, 0.28598, 0.93368, 0.93338, 0.93358, 0.93396, 0.93426, 0.93438, 0.93585, 0.93669, 0.93774, 0.9381, 0.94121, 0.94085, 0.94038, 0.93987, 0.94049, 0.93994, 0.41571, 0.41571, 0.41559, 0.4157, 0.41591, 0.41599, 0.41617, 0.30492, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités irakiennes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95221, 0.95204, 0.95115, 0.95013, 0.94955, 0.9495, 0.94909, 0.94943, 0.94917, 0.94935, 0.94947, 0.95025, 0.94956, 0.94931, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15446, 0.15446, 0.15453, 0.34034, 0.34037, 0.93549, 0.93519, 0.9354, 0.93578, 0.93608, 0.9362, 0.93767, 0.93851, 0.93957, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.91988], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"femmes seules": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25629, 0.92829, 0.92804, 0.92821, 0.92834, 0.9291, 0.92843, 0.92818, 0.92769, 0.92793, 0.92843, 0.9293, 0.93004, 0.9291, 0, 0, 0.94295, 0.35303, 0.35275, 0.35244, 0.3524, 0.41415, 0.41434, 0.41441, 0.41446, 0.41422, 0.41409, 0.41418, 0.41435, 0.20925, 0.058358, 0.088669, 0.088749, 0.071264, 0.052779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18193, 0.18197, 0.22812, 0.41392, 0.94348, 0.94303, 0.24354, 0.24392, 0.24398, 0.24442, 0.24425, 0.24395, 0.24381, 0.24367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vache folle": {
men: [0, 0, 0, 0, 0.018658, 0.0367, 0.037931, 0.039961, 0.038922, 0.06449, 0.064494, 0.069175, 0.084055, 0.10615, 0.22217, 0.22231, 0.22259, 0.22256, 0.19391, 0.14261, 0.16073, 0.30006, 0.44499, 0.48456, 0.48469, 0.48493, 0.94246, 0.7623, 0.76147, 0.63808, 0.59229, 0.59203, 0.59224, 0.59208, 0.59219, 0.52711, 0.52754, 0.47169, 0.47156, 0.47131, 0.5124, 0.13716, 0.11379, 0.12933, 0.069677, 0.069688, 0.069663, 0.069685, 0.069571, 0.0619, 0.061845, 0.066952, 0.066951, 0.066982, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.43574, 0.53388, 0.45064, 0.50346, 0.50326, 0.59905, 0.59873, 0.51449, 0.55515, 0.55567, 0.55567, 0.55551, 0.55566, 0.55593, 0.44145, 0.35681, 0.27537, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.041232, 0.057875, 0.026918], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"abus sexuels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.026837, 0.026854, 0.026852, 0.026849, 0.026857, 0.026873, 0.077921, 0.2117, 0.21166, 0.93229, 0.95487, 0.95483, 0.95352, 0.95368, 0.953, 0.95408, 0.71793, 0.31786, 0.31752, 0.31732, 0.31731, 0.31717, 0.31728, 0.3172, 0.027342, 0.01258, 0.012591, 0.012581, 0.012578, 0, 0, 0, 0, 0, 0.14989, 0.13403, 0.10662, 0.10266, 0.10249, 0.14709, 0.14696, 0.12509, 0.096405, 0.096449, 0.10323, 0.10324, 0.10318, 0.12143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9758, 0.93988, 0.91333, 0.91364, 0.91347, 0.9136, 0.74091, 0.7414, 0.62298, 0.62246, 0.62245, 0.62286, 0.623, 0.62295, 0.0039948], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"jean-vincent placé": {
men: [0, 0.95259, 0.95164, 0.95203, 0.95224, 0.95096, 0.95645, 0.95663, 0.67112, 0.33143, 0.27599, 0.24152, 0.20543, 0.2054, 0.20546, 0.10702, 0.09797, 0.09284, 0.092823, 0.08831, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.75533, 0.95088, 0.95032, 0.95121, 0.95122, 0.95094, 0.9512, 0.95166, 0.95186, 0.95226, 0.95283, 0.95349, 0.95304, 0.95373, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Guyane française": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19904, 0.94581, 0.94564, 0.94528, 0.51535, 0.51507, 0.51541, 0.51511, 0.51559, 0.67188, 0.67168, 0.67187, 0.6722, 0.67233, 0.51616, 0.67302, 0.67349, 0.67317, 0.95435, 0.95583, 0.95608, 0.95781, 0.95715, 0.94934, 0.53023, 0.52991, 0.54964, 0.54956, 0.54929, 0.091482, 0.091474, 0.09145, 0.091387, 0.091374, 0.091404, 0.091387, 0.042455, 0.042494, 0.073129, 0.073108, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sous-marins nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15569, 0.15563, 0.10137, 0.18387, 0.60738, 0.66225, 0.66219, 0.81563, 0.816, 0.81615, 0.81624, 0.81577, 0.81551, 0.81569, 0.75369, 0.75393, 0.88251, 0.8791, 0.69316, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31873, 0.31895, 0.31881, 0.31904, 0.31953, 0.31961, 0.32019, 0.43303, 0.95146, 0.95094, 0.95037, 0.95028, 0.95013, 0.94968, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urgence sociale": {
men: [0.45797, 0.45762, 0.45716, 0.45735, 0.55146, 0.69729, 0.69696, 0.94565, 0.94611, 0.94613, 0.94619, 0.94679, 0.94672, 0.94662, 0.94296, 0.94354, 0.94474, 0.9446, 0.94172, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.064624, 0.11748, 0.12739, 0.21276, 0.29251, 0.29248, 0.2924, 0.44369, 0.44362, 0.34794, 0.34788, 0.34792, 0.34824, 0.34847, 0.4836, 0.17833, 0.1364, 0.13648, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété publique": {
men: [0.27517, 0.23987, 0.53484, 0.53505, 0.53517, 0.53445, 0.56387, 0.56398, 0.51991, 0.51992, 0.51995, 0.52028, 0.52024, 0.61471, 0.48251, 0.62968, 0.32385, 0.32381, 0.32375, 0.2625, 0.15268, 0.15268, 0.18964, 0.18968, 0.18973, 0.18982, 0.090495, 0.09041, 0.12028, 0, 0, 0, 0, 0, 0, 0.32459, 0.32485, 0.16768, 0.16763, 0.16754, 0.060973, 0.061007, 0.061064, 0.061112, 0.06105, 0.06106, 0.061038, 0.061058, 0.060957, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.59058, 0.59023, 0.52739, 0.5274, 0.52724, 0.52739, 0.39916, 0.39924, 0.39941, 0.39965, 0.53555, 0.5353, 0.53569, 0.53652, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cataclysme": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2651, 0.21732, 0.18328, 0.18325, 0.18322, 0.18341, 0.17033, 0.16257, 0.19138, 0.17235, 0.2125, 0.21261, 0.21257, 0.21237, 0, 0, 0.03731, 0.037294, 0.036133, 0.03502, 0.031831, 0.054645, 0.05469, 0.074588, 0.058729, 0.058698, 0.027757, 0.026371, 0.029578, 0.027031, 0.012812, 0.012814, 0.012152, 0.01229, 0.012704, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23349, 0.23364, 0.22689, 0.48004, 0.45957, 0.45944, 0.45956, 0.45979, 0.45988, 0.37645, 0.37668, 0.53152, 0.57071, 0.48652, 0.66941, 0.66958, 0.69693, 0.69645, 0.71634, 0.55194, 0.5516, 0.55155, 0.48955, 0.5289, 0.43494, 0.40878, 0.40868, 0.42519, 0.17969, 0.17975, 0.17971, 0.17974, 0.15752, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollution des sols": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10053, 0.10062, 0.097445, 0.11486, 0.11488, 0.11484, 0.11487, 0.11468, 0.094007, 0.093922, 0.093914, 0.093913, 0.093956, 0.093973, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19312, 0.32606, 0.21548, 0.2923, 0.29257, 0.29258, 0.29249, 0.29257, 0.37874, 0.31703, 0.31716, 0.31735, 0.31757, 0.38412, 0.29724, 0.1753, 0.38499, 0, 0.28052, 0.28017, 0.28002, 0.27985, 0.27982, 0.48775, 0.48752, 0.4874, 0.48736, 0.48723, 0.48689, 0.48682, 0.48699, 0.48689, 0, 0, 0, 0, 0.78133, 0.94984, 0.95045, 0.95068, 0.9506, 0.95286], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industries électriques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44034, 0.44044, 0.60075, 0.59993, 0.60003, 0.60019, 0.60049, 0.60039, 0.59983, 0.59918, 0.93457, 0.93452, 0.93412, 0.93445, 0.92768, 0.92785, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21453, 0.32481, 0.529, 0.43411, 0.616, 0.42479, 0.42485, 0.42551, 0.42589, 0.45608, 0.45625, 0.45617, 0.456, 0.45577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets industriels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1186, 0.11862, 0.13202, 0.13206, 0.14934, 0.14922, 0.14909, 0.11608, 0.11608, 0.26439, 0.26444, 0.26447, 0.26432, 0.33609, 0, 0, 0, 0, 0, 0, 0, 0, 0.93344, 0.93308, 0.93261, 0.93211, 0.93273, 0.93217, 0.094611, 0.094612, 0.094584, 0.09461, 0.094656, 0.082559, 0.082594, 0.082644, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2677, 0.26765, 0.46583, 0.46625, 0.46656, 0.83042, 0.87847, 0.87847, 0.87903, 0.87924, 0.72317, 0.7234], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nucléaire iranien": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.019249, 0.019271, 0.1668, 0.16677, 0.16671, 0.16663, 0.19698, 0.19711, 0.26048, 0.94858, 0.94859, 0.94831, 0.94857, 0.94903, 0.94823, 0.94863, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19098, 0.93256, 0.9334, 0.93402, 0.93376, 0.93298, 0.93297, 0.93358, 0.9338, 0.42442, 0.42455], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"contrôle de la qualité": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13047, 0.13058, 0.93513, 0.93489, 0.93439, 0.941, 0.94152, 0.94239, 0.94315, 0.94219, 0.94234, 0.942, 0.9423, 0.94075, 0.93341, 0.93257, 0.93249, 0.93248, 0.93291, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophe sanitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94545, 0.94581, 0.94564, 0.94528, 0.94481, 0.9443, 0.94492, 0.50169, 0.50216, 0.40015, 0.40003, 0.40014, 0.4233, 0.42339, 0.28793, 0.39098, 0.39125, 0.39107, 0.35904, 0.3596, 0.2725, 0.24039, 0.24022, 0.19355, 0.12661, 0.10993, 0.072632, 0.07262, 0.072586, 0, 0, 0, 0.020294, 0.017615, 0.01992, 0.023008, 0.023011, 0.023032, 0.030759, 0.069852, 0.10679, 0.3937, 0.47675, 0.47686, 0.5857, 0.66139], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"médias dominants": {
men: [0, 0, 0, 0, 0, 0, 0.94258, 0.94276, 0.94323, 0.94324, 0.9433, 0.9439, 0.94384, 0.94373, 0.944, 0.94458, 0.94578, 0.94565, 0.94548, 0.94649, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.088964, 0.088932, 0.088961, 0.11567, 0.11558, 0.11547, 0.11546, 0.11546, 0.11552, 0.16695, 0.16696, 0.13903, 0.13899, 0.11372, 0.084769, 0.084797, 0.044398, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"polluants organiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11781, 0.11776, 0.1178, 0.12726, 0.12728, 0.11929, 0.10044, 0.10036, 0.10034, 0.10029, 0.10031, 0.10037, 0.10046, 0.11587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93828, 0.94446, 0.94509, 0.94842, 0.9493, 0.94931, 0.94903, 0.94929, 0.94976, 0.7706, 0.77092, 0.77139, 0.77192, 0.77156, 0.70476, 0.24048, 0.24054, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités mexicaines": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93102, 0.93121, 0.93759, 0.93631, 0.93646, 0.93671, 0.93718, 0.93702, 0.93615, 0.93514, 0.93457, 0.93452, 0.93412, 0.93445, 0.92768, 0.92785, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellule familiale": {
men: [0.9374, 0.93669, 0.93576, 0.137, 0.13703, 0.13684, 0.13677, 0.1368, 0.095925, 0.095927, 0.087448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29065, 0.54508, 0.63531, 0.73281, 0.73318, 0.69031, 0.68966, 0.68892, 0.52132, 0.57737, 0.62777, 0.62799, 0.62782, 0.62794, 0.55563, 0.45783, 0.29891, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092784, 0.092775, 0.092761, 0.0752, 0.075182, 0.075175, 0.075155, 0.057786, 0.057777, 0.10872, 0.057786, 0.057794, 0.057846, 0.057885, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"modèle européen": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1559, 0.15588, 0.15585, 0.15602, 0.15605, 0.14902, 0.13302, 0.13304, 0.13308, 0.13314, 0.13312, 0.063101, 0.063033, 0.085015, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94713, 0.94712, 0.94756, 0.94773, 0.94782, 0.94729, 0.94698, 0.94719, 0.94757, 0.94788, 0.948, 0.71931, 0.40963, 0.28657, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16244, 0.1623, 0.14516, 0.14526, 0.155, 0.15499, 0.15504], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cancers professionnels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.084246, 0.084131, 0.084145, 0.13705, 0.13711, 0.93026, 0.20554, 0.20532, 0.20519, 0.20518, 0.20509, 0.20517, 0.093477, 0.093494, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94621, 0.94653, 0.94635, 0.94648, 0.94733, 0.94797, 0.9477, 0.94691, 0.9469, 0.94751, 0.94774, 0.57358, 0.57376], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enjeux écologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3917, 0.39172, 0.39197, 0.94721, 0.9471, 0.94737, 0.94796, 0.94916, 0.94903, 0.94886, 0.94987, 0.95007, 0.95003, 0.94873, 0.18813, 0.18818, 0.18827, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.042198, 0.042221, 0.04226, 0.062021, 0.061958, 0.061968, 0.061946, 0.043515, 0.043443, 0.04341, 0.053851, 0.066779, 0.066778, 0.052186, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17582, 0.17579, 0.17581, 0.17597, 0.14407, 0.14403, 0.078358, 0.073713, 0.073761, 0.073778, 0.073772, 0.073795], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communauté catholique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.5334, 0.53341, 0.53344, 0.53378, 0.95426, 0.95415, 0.95443, 0.95502, 0.95623, 0.95609, 0.95592, 0.95695, 0.95715, 0.95711, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.030399, 0.030418, 0.030439, 0.030424, 0.028989, 0.029035, 0.029042, 0.033503, 0.36889, 0.36842, 0.36822, 0.368, 0.36796, 0.3679, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sras": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38951, 0.065176, 0.065195, 0.065235, 0.065318, 0.065309, 0.065297, 0.065367, 0.058848, 0.058845, 0.058764, 0.064458, 0.063252, 0.063283, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.88021, 0.94152, 0.94067, 0.94059, 0.94058, 0.94101, 0.94118, 0.94128, 0.94074, 0.94044, 0.94065, 0.94103, 0.94133, 0.94145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 